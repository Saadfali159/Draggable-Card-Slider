const slider = document.querySelector('.carousel');
const arrowBtn = document.querySelectorAll('.wrapper i');
const cardWidth = slider.querySelector('.card').offsetWidth;

let isScrolling = false, startX, startScrollLeft;

arrowBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        slider.scrollLeft += btn.id === 'left' ? -cardWidth : cardWidth;
    })
})

function dragStart(e) {
    isScrolling = true;
    slider.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft
}

function draging(e){
    if(!isScrolling) return;
    slider.scrollLeft = startScrollLeft - (e.pageX - startX); 
}

function dragStop() {
    isScrolling = false;
    slider.classList.remove("dragging");
}

slider.addEventListener('mousemove', draging);
slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mouseup', dragStop);


