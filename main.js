const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

imgs.forEach( img => img.addEventListener( 'click', imgClick ));
imgs[0].style.opacity = opacity;

function imgClick(e){

    //Reset the imgs opacity
    imgs.forEach( img => {img.style.opacity = 1});
    
    // change the current img src to the clicked img src
    current.src = e.target.src

    // Add fade-in class
    current.classList.add('fade-in')

    // Remove fade-in class
    setTimeout(() => {
        current.classList.remove('fade-in')
    }, 1000);

    //change the clicked img opacity to opacityt var
    e.target.style.opacity = opacity
}