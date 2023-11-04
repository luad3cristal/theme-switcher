function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // substituir a posição do sol e da lua

  if (html.classList.contains("light")) {
    document.getElementById("span").style.backgroundPosition = "center right"
    
  } else {
    document.getElementById("span").style.backgroundPosition = "center left"
  }
}
