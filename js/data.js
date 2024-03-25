const body = document.querySelector("body")
const defaultMod = body.style.backgroundImage
const input = document.querySelector(".form-check-input")

let dark = () => {
  const btn = document.body
  btn.classList.toggle("dark")
  if (body.classList.contains("dark")) {
    body.style.cssText = `background-image : none;`
    input.style.backgroundColor = "#292929"
  } else {
    body.style.backgroundImage = defaultMod
    input.style.backgroundColor = ""
  }
}
