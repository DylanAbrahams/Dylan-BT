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
    document.getElementById("erfbelastingForm").submit();
    return false;
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