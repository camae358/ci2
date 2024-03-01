document.addEventListener('DOMContentLoaded', function() {
    const matrixText = document.getElementById('matrix-text');
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+[{]}|;:,<.>/?'.split('');
    const matrixContainer = document.querySelector('.matrix-container');
  
    function generateMatrixText() {
      const columns = Math.floor(window.innerWidth / 15); // character width
      const rows = Math.floor(window.innerHeight / 10); // row height
      let text = '';
  
      for (let row = 0; row < rows; row++) {
        for (let i = 0; i < columns; i++) {
          text += characters[Math.floor(Math.random() * characters.length)];
        }
        text += '\n'; // newline characters
      }
  
      return text;
    }
  
    function updateMatrixText() {
      matrixText.innerText = generateMatrixText();
      scaleText(); // Update scale
      startAnimationLoop(); // Restart animation
    }
  
    function scaleText() {
      const matrixHeight = matrixText.clientHeight; // Get the height of the matrix text
      const windowHeight = window.innerHeight;
      const scrollPercentage = window.scrollY / (matrixHeight - windowHeight);
      const scale = 1 + scrollPercentage * 0.5; // Adjust the scaling factor as needed
      matrixText.style.transform = `scale(${scale})`;
    }
  
    function startAnimationLoop() {
      clearInterval(animationInterval); 
      animationInterval = setInterval(updateMatrixText, 50); // Restart animation loop
    }
  
    let animationInterval;
  
    window.addEventListener('resize', function() {
      updateMatrixText(); 
      scaleText(); 
    });
  
    window.addEventListener('scroll', function() {
      scaleText(); 
    });
  
    updateMatrixText();
  });
  