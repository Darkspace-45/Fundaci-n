
let currentSection = 0;
const sections = document.querySelectorAll('.hero');
const sectionImages = document.querySelectorAll('.hero .media');

function changeSection() {
    sections.forEach((section, index) => {
        if (index === currentSection) {
            section.style.opacity = 1;
            sectionImages[index].style.opacity = 1; 
        } else {
            section.style.opacity = 0;
            sectionImages[index].style.opacity = 0;
        }
    });
}

window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    if (offset > sections[1].offsetTop - window.innerHeight / 2) {
        currentSection = 1;
    } else {
        currentSection = 0;
    }

    changeSection();
});

document.addEventListener('DOMContentLoaded', changeSection);

var imageContainer = document.querySelector('.image-container');

var imageContainerImages = imageContainer.querySelectorAll('.image');

var currentIndex = 0;

var transitionTime = 5000;

function changeImage() {
    imageContainerImages[currentIndex].style.display = 'none';

    currentIndex++;

    if (currentIndex >= imageContainerImages.length) {
        currentIndex = 0;
    }

    imageContainerImages[currentIndex].style.display = 'block';
}

setInterval(changeImage, transitionTime);

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container .image');
    let currentIndex = 0;

    function changeImage() {
        images[currentIndex].classList.remove('active');
        images[currentIndex].classList.add('active');
    }

    setInterval(changeImage, 5000);
});

