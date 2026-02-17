// Deze code is gebaseerd op code van W3Schools
// Link: https://www.w3schools.com/howto/howto_js_form_steps.asp


var currentTab = 0; // Current tab is set to the first tab
showTab(currentTab);

function showTab(n) {
  var tabs = document.getElementsByClassName("tab");

  // Remove "active" from all tabs
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }

  // Add "active" to the current tab
  tabs[n].classList.add("active");

  // Previous/Next buttons
  document.getElementById("prevBtn").style.display = n === 0 ? "none" : "inline";
  document.getElementById("nextBtn").innerHTML = (n === tabs.length - 1) ? "Submit" : "Next";

  // Update paginator
  var paginator = document.querySelector(".paginator");
  if (paginator) {
    paginator.textContent = `Pagina ${n + 1}/${tabs.length}`;
  }
}

function nextPrev(n) {
  var tabs = document.getElementsByClassName("tab");

  currentTab += n;
  if (currentTab < 0) currentTab = 0;

  if (currentTab >= tabs.length) {
    document.getElementById("erfbelastingForm").submit();
    return false;
  }

  showTab(currentTab);
}
