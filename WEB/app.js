window.onscroll = function() {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar a");
    
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });
            document.querySelector('.navbar a[href*=' + id + ']').classList.add("active");
        }
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll('.circle');

    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('animate-rotation');

                
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); 

    
    circles.forEach(circle => {
        circle.style.strokeDasharray = '0 100';
        observer.observe(circle);
    });
});
