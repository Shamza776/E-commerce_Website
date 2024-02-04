const header = document.querySelector('header');

window.addEventListener('scroll', function(){ //we've selected the whole window object
    header.classList.toggle("sticky", this.window.scrollY > 0);
})