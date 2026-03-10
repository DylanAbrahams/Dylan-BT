// Deze code is gebaseerd op code van W3Schools
// Link: https://www.w3schools.com/howto/howto_js_form_steps.asp

// =========================
// INIT
// =========================
let currentTab = 0;
showTab(currentTab);

// Zet hoofdletters automatisch
document.querySelectorAll(".caps").forEach(input => {
  input.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
  });
});

// =========================
// TAB FUNCTIES
// =========================
function showTab(n) {
  const tabs = document.getElementsByClassName("tab");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active", "inactive");
    if (i !== n) tabs[i].classList.add("inactive");
  }

  tabs[n].classList.add("active");

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
    showBeneficiariesSummary();
    return;
  }

  showTab(currentTab);

  // ⚡ Focus naar eerste element van de nieuwe tab
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
  }

  // Eerste erfgenaam en eerste tab zichtbaar maken
  const firstTab = container.querySelector(".beneficiary .tab");
  if (firstTab) {
    firstTab.classList.remove("inactive");
    firstTab.classList.add("active");
  }

  // ⚡ Voeg touched validation toe aan nieuwe inputs
  container.querySelectorAll("input, select, textarea").forEach(input => {
    // Voeg span toe voor foutmelding als die nog niet bestaat
    if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("validation-message")) {
      const span = document.createElement("span");
      span.className = "validation-message";
      span.style.color = "red";
      span.style.display = "none";
      input.after(span);
    }

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

function showBeneficiariesSummary() {
  const container = document.getElementById("beneficiaries-list");
  container.innerHTML = "";

  // Overledene naam
  const firstName = document.querySelector('input[name="deceased-initals"]')?.value.trim() || "";
  const infix = document.querySelector('input[name="deceased-infix"]')?.value.trim() || "";
  const lastName = document.querySelector('input[name="deceased-last-name"]')?.value.trim() || "";
  const deceasedFullName = [firstName, infix, lastName].filter(Boolean).join(" ");
  if (deceasedFullName) container.innerHTML = `<div><strong>Overledene:</strong> ${deceasedFullName}</div>`;

  // Erfgenamen
  const beneficiaries = document.querySelectorAll(".beneficiary");
  beneficiaries.forEach((ben, index) => {
    const initials = ben.querySelector('input[name="beneficiary-initials"]')?.value.trim() || "";
    const lastName = ben.querySelector('input[name="beneficiary-last-name"]')?.value.trim() || "";
    if (initials || lastName) {
      const div = document.createElement("div");
      div.textContent = `Erfgenaam ${index + 1}: ${initials} ${lastName}`;
      container.appendChild(div);
    }
  });

  if (!container.hasChildNodes()) {
    const div = document.createElement("div");
    div.textContent = "Geen erfgenamen gevonden.";
    container.appendChild(div);
  }

  document.getElementById("summaryModal").style.display = "flex";
}

function closeSummary() {
  document.getElementById("summaryModal").style.display = "none";
}

function submitForm() {
  document.getElementById("erfbelastingForm").submit();
}

// =========================
// DYNAMISCHE VELDEN
// =========================

// ONDERDEEL 1B
const marriedRadios = document.querySelectorAll('input[name="married-radio"]');
const marriedFieldset = document.getElementById("married");
const marrageRecordedRadios = document.querySelectorAll('input[name="marrage-recorded-radio"]');
const marrageRecordedFieldsets = document.querySelectorAll('#marrage-recorded');

marriedRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "yes" && radio.checked) {
      marriedFieldset.disabled = false;
    } else {
      marriedFieldset.disabled = true;
      marrageRecordedRadios.forEach(r => r.checked = false);
      marrageRecordedFieldsets.forEach(f => {
        f.disabled = true;
        f.querySelectorAll('input').forEach(i => i.value = "");
        f.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
      });
    }
  });
});

marrageRecordedRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "yes" && radio.checked) {
      marrageRecordedFieldsets.forEach(f => f.disabled = false);
    } else {
      marrageRecordedFieldsets.forEach(f => {
        f.disabled = true;
        f.querySelectorAll('input').forEach(i => i.value = "");
        f.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
      });
    }
  });
});

// ONDERDEEL 1C
const childrenRadios = document.querySelectorAll('input[name="children-radio"]');
const childrenDeceasedFieldset = document.getElementById("children-deceased");
const childrenLastFieldset = document.getElementById("children-last");

childrenRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "yes" && radio.checked) {
      childrenDeceasedFieldset.disabled = false;
    } else {
      childrenDeceasedFieldset.disabled = true;
      childrenLastFieldset.disabled = true;
      childrenDeceasedFieldset.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
      childrenLastFieldset.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    }
  });
});

const childrenDeceasedRadios = document.querySelectorAll('input[name="children-deceased-radio"]');
childrenDeceasedRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "yes" && radio.checked) {
      childrenLastFieldset.disabled = false;
    } else {
      childrenLastFieldset.disabled = true;
      childrenLastFieldset.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    }
  });
});

// ONDERDEEL 1D
const hadWillRadios = document.querySelectorAll('input[name="had-will-radio"]');
const willDetailsFieldset = document.querySelector('.will-details');

hadWillRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "yes" && radio.checked) {
      willDetailsFieldset.disabled = false;
    } else {
      willDetailsFieldset.disabled = true;
      willDetailsFieldset.querySelectorAll('input').forEach(i => {
        if (i.type === "radio" || i.type === "checkbox") i.checked = false;
        else i.value = "";
      });
    }
  });
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

// Initialisatie
document.addEventListener("DOMContentLoaded", () => {
  setupValidation();
});

