let b0= document.querySelector('.btn-ham');
let b1= document.querySelector('#landing-page .navbar .nav-links');

b0.addEventListener('click', function(e){
    this.classList.toggle('rotate');
    b1.classList.toggle('rotate');
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        b0.classList.remove('rotate');
        b1.classList.remove('rotate')
    }
});