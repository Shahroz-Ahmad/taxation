document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sideMenu = document.getElementById('sideMenu');
    const closeBtn = document.getElementById('closeBtn');

    hamburger.addEventListener('click', function() {
        sideMenu.classList.add('active');
    });

    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('active');
    });
});

function wrapLetters(text) {
    return text.split('').map(letter => {
        if (letter === ' ') {
            return `<span>&nbsp;</span>`;
        }
        return `<span>${letter}</span>`;
    }).join('');
}

const textElement = document.getElementById('animated-text');
textElement.innerHTML = wrapLetters(textElement.textContent);

gsap.fromTo("#animated-text span", 
    { 
        opacity: 0, 
        y: -10    
    },
    { 
        delay:0.5,
        opacity: 1, 
        y: 0,       // Animate to the final position
        duration: 0.2, // Speed of each letter
        stagger: 0.05,  // Delay between letters
        ease: "power1.out" // Easing function
    }
);