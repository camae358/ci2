document.addEventListener('DOMContentLoaded', function() {
  const matrixText = document.getElementById('matrix-text');
  const columns = Math.floor(window.innerWidth / 15); // width
  const rows = Math.floor(window.innerHeight / 20); // height
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+[{]}|;:,<.>/?'.split('');

  function generateMatrixText() {
    let text = '';

    for (let row = 0; row < rows; row++) {
      for (let i = 0; i < columns; i++) {
        text += characters[Math.floor(Math.random() * characters.length)];
      }
      text += '\n'; // lines
    }

    return text;
  }

  function updateMatrixText() {
    matrixText.innerText = generateMatrixText();
  }

  updateMatrixText();
  setInterval(updateMatrixText, 50); // speed
});
