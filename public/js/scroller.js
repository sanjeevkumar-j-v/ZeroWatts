var navItem = document.getElementById("learnMore");
var interval;
var endPoint = 0;
navItem.addEventListener("click", function (event) {
  var targetId = "timeline1-o";
  endPoint = 10;
  event.preventDefault();
  console.log("scroll");
  var targetSection = document.getElementById(targetId);
  interval = setInterval(scrollVertically, 2, targetSection);
});
function scrollVertically(targetSection) {
  var targetCoordinates = targetSection.getBoundingClientRect();
  if (targetCoordinates.top <= endPoint) {
    clearInterval(interval);
    return;
  }
  window.scrollBy(0, 10);
}
