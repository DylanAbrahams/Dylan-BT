// Deze code is gebaseerd op code van W3Schools
// Link: https://www.w3schools.com/howto/howto_js_form_steps.asp

let currentTab = 0;
showTab(currentTab);

function showTab(n) {
  const tabs = document.getElementsByClassName("tab");

  for (var i = 0; i < tabs.length; i++) {
    // Verwijder alle classes die we gaan beheren
    tabs[i].classList.remove("active", "inactive");

    // Voeg inactive toe aan alle tabs behalve de huidige
    if (i !== n) {
      tabs[i].classList.add("inactive");
    }
  }

  // Voeg active toe aan de huidige tab
  tabs[n].classList.add("active");

  // Vorige knop tonen/verbergen
  document.getElementById("prevBtn").style.display =
    n === 0 ? "none" : "inline";

  // Tekst van volgende knop aanpassen
  document.getElementById("nextBtn").innerHTML =
    (n === tabs.length - 1) ? "Verzenden" : "Volgende";

  // Paginator bijwerken
  var paginator = document.querySelector(".paginator");
  if (paginator) {
    paginator.textContent = `Pagina ${n + 1}/${tabs.length}`;
  }
}

function nextPrev(n) {
  var tabs = document.getElementsByClassName("tab");
  var currentFieldset = tabs[currentTab];
  var inputs = currentFieldset.querySelectorAll("input, select, textarea");

  var isValid = true;
  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      isValid = false;
      break;
    }
  }

  if (n === 1 && !isValid) {
    if (currentTab === tabs.length - 1) {
      // Laatste tab → verplicht alles invullen
      currentFieldset.reportValidity();
      return false;
    } else {
      // Andere tabs → custom popup met optie toch doorgaan
      showValidationPopup();
      return;
    }
  }

  changeTab(n);
}

function changeTab(n) {
  var tabs = document.getElementsByClassName("tab");

  currentTab += n;

  if (currentTab < 0) currentTab = 0;

  if (currentTab >= tabs.length) {
    showBeneficiariesSummary();
    return;
  }

  showTab(currentTab);
}

/* =========================
   POPUP FUNCTIES
========================= */

function showValidationPopup() {
  document.getElementById("validationModal").style.display = "flex";
}

function closePopup() {
  document.getElementById("validationModal").style.display = "none";
}

function proceedAnyway() {
  document.getElementById("validationModal").style.display = "none";
  changeTab(1);
}

/* =========================
   CLICK OUTSIDE MODAL HANDLING
========================= */

var modal = document.getElementById("validationModal");
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closePopup(); // Sluit popup, blijft op huidige tab
  }
});






document.getElementById("generate-beneficiaries").addEventListener("click", function() {
    const num = parseInt(document.getElementById("num-beneficiaries").value);
    const container = document.getElementById("beneficiaries-container");

    // Eerst verwijderen wat er al stond
    container.innerHTML = "";

    const template = document.getElementById("beneficiary-template");

    for (let i = 1; i <= num; i++) {
        const clone = template.content.cloneNode(true);

        // Geef legend een uniek nummer
        const legend = clone.querySelector("legend");
        legend.textContent = `Erfgenaam ${i}`;

        // Alle nieuwe tabs **initieel verborgen**
        const fieldset = clone.querySelector(".tab");
        fieldset.classList.add("inactive");

        container.appendChild(clone);
    }

    // Voeg alle nieuwe erfgenaam-tabs toe aan de tab-lijst
    // De eerste tab (eerste erfgenaam) kan direct zichtbaar zijn
    const firstTab = container.querySelector(".tab");
    if(firstTab) {
        firstTab.classList.remove("inactive");
        firstTab.classList.add("active");
    }

    // Update je currentTab index zodat de paginering vanaf de eerste erfgenaam-tab start
    currentTab = Array.from(document.getElementsByClassName("tab")).indexOf(firstTab);
    showTab(currentTab);
});

document.getElementById("generate-beneficiaries").addEventListener("click", function() {
    const num = parseInt(document.getElementById("num-beneficiaries").value);
    const container = document.getElementById("beneficiaries-container");

    // Eerst verwijderen wat er al stond
    container.innerHTML = "";

    const template = document.getElementById("beneficiary-template");

    for (let i = 1; i <= num; i++) {
        const clone = template.content.cloneNode(true);

        // Wrap alle tabs van deze erfgenaam in één fieldset .beneficiary
        const wrapper = document.createElement("fieldset");
        wrapper.classList.add("beneficiary");

        // Voeg alle tabs (4a t/m 4g) toe aan wrapper
        const tabs = clone.querySelectorAll(".tab");
        tabs.forEach(tab => {
            tab.classList.add("inactive"); // start verborgen
            wrapper.appendChild(tab);
        });

        // Voeg wrapper toe aan container
        container.appendChild(wrapper);
    }

    // Eerste erfgenaam en eerste tab zichtbaar maken
    const firstTab = container.querySelector(".beneficiary .tab");
    if(firstTab) {
        firstTab.classList.remove("inactive");
        firstTab.classList.add("active");
        currentTab = Array.from(document.getElementsByClassName("tab")).indexOf(firstTab);
        showTab(currentTab);
    }
});

function showBeneficiariesSummary() {
    const container = document.getElementById("beneficiaries-list");
    container.innerHTML = ""; // eerst leegmaken

    // Naam overledene ophalen
    const firstName = document.querySelector('input[name="deceased-initals"]')?.value.trim() || "";
    const infix = document.querySelector('input[name="deceased-infix"]')?.value.trim() || "";
    const lastName = document.querySelector('input[name="deceased-last-name"]')?.value.trim() || "";
    const deceasedFullName = [firstName, infix, lastName].filter(Boolean).join(" ");

    if (deceasedFullName) {
        const div = document.createElement("div");
        div.innerHTML = `<strong>Overledene:</strong> ${deceasedFullName}`;
        container.appendChild(div);
    }

    // Erfgenamen weergeven
    const beneficiaries = document.querySelectorAll(".beneficiary");

    beneficiaries.forEach((ben, index) => {
        const initialsInput = ben.querySelector('input[name="beneficiary-initials"]');
        const lastNameInput = ben.querySelector('input[name="beneficiary-last-name"]');

        const initials = initialsInput ? initialsInput.value.trim() : "";
        const lastName = lastNameInput ? lastNameInput.value.trim() : "";

        // Alleen tonen als er iets is ingevuld
        if (initials || lastName) {
            const div = document.createElement("div");
            div.textContent = `Erfgenaam ${index + 1}: ${initials} ${lastName}`;
            container.appendChild(div);
        }
    });

    // Als er geen erfgenamen zijn ingevuld
    if (!container.hasChildNodes()) {
        const div = document.createElement("div");
        div.textContent = "Geen erfgenamen gevonden.";
        container.appendChild(div);
    }

    // Modal tonen
    document.getElementById("summaryModal").style.display = "flex";
}

// Modal sluiten
function closeSummary() {
    document.getElementById("summaryModal").style.display = "none";
}

// Echte verzendactie
function submitForm() {
    document.getElementById("erfbelastingForm").submit();
}