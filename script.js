document.addEventListener('DOMContentLoaded', () => {
    const starfield = document.getElementById('starfield');
    
    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        starfield.appendChild(star);
        
        setTimeout(() => {
            star.remove();
        }, 5000);
    }
    
    setInterval(createStar, 100);
});
