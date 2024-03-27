listenClickOnMenuButton();
listenClickOnNavItem();
listenClickOnDownloadButton();
listenScrollPage();

function listenClickOnDownloadButton() {
  const downloadButton = document.querySelector("#download-button");
  downloadButton.addEventListener("click", downloadCV);
}
function downloadCV() {
  const downloadLink = document.createElement("a");
  downloadLink.href = "./docs/CV_Maurel_Jeremy.pdf";
  downloadLink.download = "CV-Maurel_Jeremy";

  // Ajouter le lien à la page et le cliquer
  document.body.appendChild(downloadLink);
  downloadLink.click();

  document.body.removeChild(downloadLink);
}

function listenClickOnMenuButton() {
  const button = document.querySelector("#button-menu");
  button.addEventListener("click", closeMenu);
}
function listenClickOnNavItem() {
  const items = document.querySelectorAll(".nav-list__item a");
  items.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });
}
function closeMenu() {
  const menu = document.querySelector("#menu");
  menu.classList.toggle("hidden");
}
function listenScrollPage() {
  document.addEventListener("scroll", setActiveLink);
}

function setActiveLink() {
  let previousActiveNavItem;
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const id = section.id;
    const navItem = document.querySelector(`.nav-list__item--${id}`);
    const isVisible = isElementVisible(section);

    if (isVisible) {
      navItem.classList.add("current-section");

      if (previousActiveNavItem && previousActiveNavItem !== navItem) {
        previousActiveNavItem.classList.remove("current-section");
      }
      previousActiveNavItem = navItem;
    } else {
      navItem.classList.remove("current-section");
    }
  });
}
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const midHeight = (rect.top + rect.bottom) / 2;
  const visible = midHeight >= 0 && midHeight < windowHeight;

  return visible;
}
