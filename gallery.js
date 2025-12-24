document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');
    let isContent1Visible = true;

    toggleButton.addEventListener('click', () => {
        if (isContent1Visible) {
            content1.style.display = 'none';
            content2.style.display = 'block'; 
            toggleButton.textContent = 'View Design Gallery'
        } else {
            content1.style.display = 'block';
            content2.style.display = 'none';
            toggleButton.textContent = 'View Photo Gallery'
        }
        isContent1Visible = !isContent1Visible; 
    });
});

 const images = document.querySelectorAll('#content1 img, #content2 img');
  images.forEach(img => {
    img.addEventListener('click', () => {
   img.classList.toggle('enlarged');
    });
  });
