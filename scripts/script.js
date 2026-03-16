// Deze code is gebaseerd op code van W3Schools
// Link: https://www.w3schools.com/howto/howto_js_form_steps.asp



// =========================
// INIT
// =========================

let currentTab = 0;

const warnings = document.querySelectorAll(".no-js-warning");
warnings.forEach(warning => {
  warning.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  setupValidation();
  generateBeneficiaries();
  showTab(currentTab); // pas hier tabs activeren
  document.querySelectorAll('fieldset.disabled').forEach(fieldset => {
    fieldset.disabled = true;
  });
  document.querySelectorAll(".caps").forEach(input => {
    input.addEventListener("input", () => input.value = input.value.toUpperCase());
  });
  toggleFieldset(marriedFieldset, false);
  marrageRecordedFieldsets.forEach(f => toggleFieldset(f, false));
  toggleFieldset(childrenDeceasedFieldset, false);
  toggleFieldset(childrenLastFieldset, false);
  toggleFieldset(willDetailsFieldset, false);
});






// =========================
// TAB FUNCTIES
// =========================
function showTab(n) {
  const tabs = document.getElementsByClassName("tab");

  Array.from(tabs).forEach((tab, i) => {
    tab.classList.toggle("active", i === n);
    tab.classList.toggle("inactive", i !== n);
  });

  // Vorige knop tonen/verbergen
  document.getElementById("prevBtn").style.display = n === 0 ? "none" : "inline";

  // Tekst van volgende knop
  document.getElementById("nextBtn").innerHTML =
    n === tabs.length - 1 ? "Verzenden" : "Volgende";

  // Paginator
  const paginator = document.querySelector(".paginator");
  if (paginator) paginator.textContent = `Pagina ${n + 1}/${tabs.length}`;
}

function nextPrev(n) {
  const tabs = document.getElementsByClassName("tab");
  const currentFieldset = tabs[currentTab];
  const inputs = currentFieldset.querySelectorAll("input, select, textarea");

  let isValid = true;
  for (let input of inputs) {
    if (!input.checkValidity()) {
      isValid = false;
      break;
    }
  }

  if (n === 1 && !isValid) {
    if (currentTab === tabs.length - 1) {
      currentFieldset.reportValidity();
      return false;
    } else {
      showValidationPopup();
      return;
    }
  }

  // Genereer erfgenamen als we op de juiste tab zitten
  if (n === 1 && currentFieldset.id === "step-intermediate") {
    generateBeneficiaries();
  }

  changeTab(n);
}

// Verplaats focus naar eerste focusbare element op nieuwe tab
function focusFirstElement(tabElement) {
  const focusable = tabElement.querySelector(
    'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (focusable) {
    focusable.focus();
  } else {
    // fallback: focus op de tab zelf
    tabElement.setAttribute("tabindex", "-1");
    tabElement.focus();
  }
}

function changeTab(n) {
  const tabs = document.getElementsByClassName("tab");

  currentTab += n;
  if (currentTab < 0) currentTab = 0;
  if (currentTab >= tabs.length) {
    submitForm(); // direct verzenden
    return;
}

  showTab(currentTab);

  // Focus naar eerste element van de nieuwe tab
  const currentTabElement = tabs[currentTab];
  focusFirstElement(currentTabElement);
}









// =========================
// ERFGENAAM FUNCTIES
// =========================
function generateBeneficiaries() {
  const num = parseInt(document.getElementById("num-beneficiaries").value);
  const container = document.getElementById("beneficiaries-container");
  const template = document.getElementById("beneficiary-template");

  container.innerHTML = ""; // oude inhoud verwijderen

  for (let i = 1; i <= num; i++) {
    const clone = template.content.cloneNode(true);
    const wrapper = document.createElement("fieldset");
    wrapper.classList.add("beneficiary");

    // Voeg alle tabs toe en zet ze inactive
    clone.querySelectorAll(".tab").forEach(tab => {
      tab.classList.add("inactive");
      wrapper.appendChild(tab);
    });

    container.appendChild(wrapper);

    // ⚡ ENABLE / DISABLE LOGICA toevoegen per beneficiary
    const forcedRadios = wrapper.querySelectorAll('input[name="forced-share"]');
    const forcedFieldset = wrapper.querySelector('#forced-share-fieldset');
    const partnerRadios = wrapper.querySelectorAll('input[name="partner-inheritance"]');
    const partnerFieldset = wrapper.querySelector('#partner-fieldset');

    // Functie om inputs required te maken
    function setRequired(fieldset, required) {
      fieldset.querySelectorAll('input').forEach(input => {
        input.required = required;
      });
    }

    // Legitieme portie
    if (forcedRadios.length && forcedFieldset) {
      forcedFieldset.disabled = true;
      setRequired(forcedFieldset, false);

      forcedRadios.forEach(radio => {
        radio.addEventListener('change', () => {
          if (radio.checked && radio.value === 'yes') {
            forcedFieldset.disabled = false;
            setRequired(forcedFieldset, true);
          } else if (radio.checked && radio.value === 'no') {
            forcedFieldset.disabled = true;
            setRequired(forcedFieldset, false);
            forcedFieldset.querySelectorAll('input').forEach(i => {
              i.value = '';
              if (i.type === 'radio') i.checked = false;
            });
          }
        });
      });
    }

    // Partnergegevens
    if (partnerRadios.length && partnerFieldset) {
      partnerFieldset.disabled = true;
      setRequired(partnerFieldset, false);

      partnerRadios.forEach(radio => {
        radio.addEventListener('change', () => {
          if (radio.checked && radio.value === 'yes') {
            partnerFieldset.disabled = false;
            setRequired(partnerFieldset, true);
          } else if (radio.checked && radio.value === 'no') {
            partnerFieldset.disabled = true;
            setRequired(partnerFieldset, false);
            partnerFieldset.querySelectorAll('input').forEach(i => {
              i.value = '';
              if (i.type === 'radio') i.checked = false;
            });
          }
        });
      });
    }
  }

  // Remove .active from all tabs on the page
  document.querySelectorAll(".tab.active").forEach(tab => {
    tab.classList.remove("active");
    tab.classList.add("inactive");
  });

  // Activate only the first tab of the first beneficiary
  const firstTab = container.querySelector(".beneficiary:first-child .tab");
  if (firstTab) {
    firstTab.classList.remove("inactive");
    firstTab.classList.add("active");
  }

  // Voeg touched validation toe aan nieuwe inputs
  setupValidation(container);
}








// =========================
// MODALS
// =========================
function showValidationPopup() {
  document.getElementById("validationModal").style.display = "flex";
}

function closePopup() {
  document.getElementById("validationModal").style.display = "none";
}

function proceedAnyway() {
  closePopup();
  changeTab(1);
}

window.addEventListener("click", function (event) {
  const modal = document.getElementById("validationModal");
  if (event.target === modal) closePopup();
});

function closeSummary() {
  document.getElementById("summaryModal").style.display = "none";
}

function submitForm() {
  document.getElementById("erfbelastingForm").submit();
}








// =========================
// DYNAMISCHE VELDEN / DISABLED RADIO BUTTONS
// =========================

function toggleFieldset(fieldset, enabled) {
  fieldset.disabled = !enabled;
  fieldset.querySelectorAll('input').forEach(i => {
    if (!enabled) {
      if (i.type === 'radio' || i.type === 'checkbox') i.checked = false;
      else i.value = '';
    }
  });
}

// --- ONDERDEEL 1B: huwelijk ---
const marriedRadios = document.querySelectorAll('input[name="married-radio"]');
const marriedFieldset = document.getElementById("married");
const marrageRecordedRadios = document.querySelectorAll('input[name="marrage-recorded-radio"]');
const marrageRecordedFieldsets = document.querySelectorAll('#marrage-recorded');

marriedRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    toggleFieldset(marriedFieldset, radio.checked && radio.value === "yes");
    if (!radio.checked || radio.value !== "yes") {
      // disable marriage recorded als huwelijk "nee" is
      marrageRecordedRadios.forEach(r => r.checked = false);
      marrageRecordedFieldsets.forEach(f => toggleFieldset(f, false));
    }
  });
});

marrageRecordedRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    marrageRecordedFieldsets.forEach(f => toggleFieldset(f, radio.checked && radio.value === "yes"));
  });
});

// --- ONDERDEEL 1C: kinderen ---
const childrenRadios = document.querySelectorAll('input[name="children-radio"]');
const childrenDeceasedFieldset = document.getElementById("children-deceased");
const childrenLastFieldset = document.getElementById("children-last");

childrenRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    toggleFieldset(childrenDeceasedFieldset, radio.checked && radio.value === "yes");
    if (!radio.checked || radio.value !== "yes") toggleFieldset(childrenLastFieldset, false);
  });
});

const childrenDeceasedRadios = document.querySelectorAll('input[name="children-deceased-radio"]');
childrenDeceasedRadios.forEach(radio => {
  radio.addEventListener("change", () => toggleFieldset(childrenLastFieldset, radio.checked && radio.value === "yes"));
});

// --- ONDERDEEL 1D: testament ---
const hadWillRadios = document.querySelectorAll('input[name="had-will-radio"]');
const willDetailsFieldset = document.querySelector('.will-details');

hadWillRadios.forEach(radio => {
  radio.addEventListener("change", () => toggleFieldset(willDetailsFieldset, radio.checked && radio.value === "yes"));
});






// =========================
// BUTTON TRIGGER VOOR ERFGENAAM GENERATIE
// =========================
function validateInput(input, showMessage) {
  if (!input.dataset.touched) return; // nog niet ingetikt

  if (input.type === "radio") return;

  const message = input.nextElementSibling; // span.validation-message

  if (input.checkValidity()) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    input.classList.add("touched");
    if (message && showMessage) message.style.display = "none"; // geen feedback bij geldig
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
    input.classList.add("touched");
    if (message && showMessage) {
      message.textContent = input.validationMessage || "❌ Ongeldig veld";
      message.style.display = "block";
    } else if (message) {
      message.style.display = "none"; // verberg tekst tijdens typen
    }
  }
}

// Voeg event listeners toe
function setupValidation(root = document) {
  root.querySelectorAll("input, select, textarea").forEach(input => {
    input.addEventListener("input", () => {
      input.dataset.touched = true;
      validateInput(input, false); // GEEN feedback tijdens typen
    });
    input.addEventListener("blur", () => {
      input.dataset.touched = true;
      validateInput(input, true); // feedback tonen bij blur
    });
  });
}


// Deze code is voor het gelijk genereren van de eerste erfgename voor een accuraat progressiebalk/paginering
const container = document.getElementById("beneficiaries-container");
const template = document.getElementById("beneficiary-template");
if (container && template && container.innerHTML.trim() !== "") {
  // Content plaatsen in de template
  template.innerHTML = container.innerHTML;

  // Onmiddelijk de container legen
  container.innerHTML = "";
}



