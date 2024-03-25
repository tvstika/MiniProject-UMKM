const body = document.querySelector("body");
const elements = document.querySelectorAll(".footer-section, .navbar, .modal-content");
const defaultMod = body.style.backgroundImage
const input = document.querySelector(".form-check-input");

let dark = () => {
  const btn = document.body
  btn.classList.toggle("dark")
  if (body.classList.contains("dark")) {
    body.style.cssText = `background-image : none;`
    body.style = `background-color : none;`
    input.style.backgroundColor = "#292929"
    elements.forEach(element => {
        element.style.backgroundColor = '#565656';
    });
  } else {
    body.style.backgroundImage = defaultMod;
    input.style.backgroundColor = "";
    elements.forEach(element => {
        element.style.backgroundColor = 'rgba(217, 217, 217, 1)';
    });
    modal.style.backgroundColor = "none;"
    
  }
}
