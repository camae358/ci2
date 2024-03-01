document.addEventListener('DOMContentLoaded', function() {
  const matrixText = document.getElementById('matrix-text');
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+[{]}|;:,<.>/?'.split('');
  const matrixContainer = document.querySelector('.matrix-container');

// text setup
  function generateMatrixText() {
    const columns = Math.floor(window.innerWidth / 15);
    const rows = Math.floor(window.innerHeight / 10); 
    let text = '';

// character values
    for (let row = 0; row < rows; row++) {
      for (let i = 0; i < columns; i++) {
        text += characters[Math.floor(Math.random() * characters.length)];
      }
      text += '\n';
    }

    return text;
  }

// text generation
  function updateMatrixText() {
    matrixText.innerText = generateMatrixText();
    scaleText();
  }

  function scaleText() {
    const matrixHeight = matrixText.clientHeight;
    const windowHeight = window.innerHeight;
    const scale = 1 + scrollPercentage * 0.5; 
    matrixText.style.transform = `scale(${scale})`;
  }

  // window scaling
  window.addEventListener('resize', function() {
    updateMatrixText(); 
    scaleText(); 
  });

  updateMatrixText();
});
