// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftEdge = parseInt(dodger.style.left, 10);
    if (leftEdge > 0) {
      dodger.style.left = `${leftEdge - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftEdge = parseInt(dodger.style.left, 10);
    const rightEdge = leftEdge + dodger.offsetWidth;
  
    if (rightEdge < window.innerWidth) {
      dodger.style.left = `${leftEdge + 1}px`;
    }
  }
  
  
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  