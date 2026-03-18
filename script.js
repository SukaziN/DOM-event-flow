function bubble() {
  console.log(this.innerText);
}
let divs = document.getElementsByTagName("div");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", bubble, true); //without the third argument "true" the events bubble from the inside out (5, 45, 345, 2345, 12345) while the true argument changes the bubbling direction and bubbles from the outside (12345, 2345, 345, 45, 5)
}
/*the third argument is false by default and changing it to true changes it from event bubbling to event capturing. The event capturing and bubbling allows us to apply a principle called event 
delegation. Event delegation is the concept where instead of adding event handlers 
to every element in a certain block of HTML, we define a wrapper and add the event 
to this wrapper element, and it then applies to all the child elements as well. */
