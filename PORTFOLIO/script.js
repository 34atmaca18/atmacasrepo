const links = document.querySelectorAll('#navbar ul li a');
const secenekler = document.getElementById('secenekler');
const list1 = document.getElementById('list1');
const navbar = document.getElementById('navbar');

document.addEventListener('DOMContentLoaded',() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = "rgb(66, 66, 122)";
        }
        else {
            navbar.style.background = "none";
        }
    })
})

links.forEach(link => {
    link.addEventListener('click',() => {
        links.forEach(lin => {
            lin.classList.remove('active');
            link.classList.add('active');
        })
    })
})

secenekler.addEventListener('click', () => {
    if(list1.style.opacity === "0") {
        list1.style.opacity = "1";
        list1.style.transform = "translateX(0)";
        list1.style.display = "flex";
    }
    else {
        list1.style.opacity = "0";
        list1.style.transform = "translateX(100%)";
        list1.style.display = "none";
    }
})

