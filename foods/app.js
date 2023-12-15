var panel = document.querySelectorAll('.container .panel');

panel.forEach(p => {
    p.addEventListener('click',() => {
        panel.forEach(a =>{
            a.classList.remove('active');
        })
        p.classList.add('active');
    })
})