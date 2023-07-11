// Your code here
const dodger = document.getElementById("dodger");
dodger.style.background = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "0px";

function moveDodgerLeft() {
  const leftEdge = parseInt(dodger.style.left, 10);
  if (leftEdge > 0) {
    dodger.style.left = `${leftEdge - 1}px`;
  }
}

function moveDodgerRight() {
  const leftEdge = parseInt(dodger.style.left, 10);
  const rightEdge = leftEdge + dodger.offsetWidth;

  if (rightEdge < window.innerWidth) {
    dodger.style.left = `${leftEdge + 1}px`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  dodger = document.getElementById('dodger');

  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
});
