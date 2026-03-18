function bubble() {
  console.log(this.innerText);
}
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", bubble, true); //without the third argument "true" the events bubble from the inside out (5, 45, 345, 2345, 12345) while the true argument changes the bubbling direction and bubbles from the outside (12345, 2345, 345, 45, 5)
}
