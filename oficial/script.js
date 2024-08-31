var swiper = new Swiper(".mySwiper", {
    slidesPerview: 1,
    centeredSlides:true,
    loop:true,
    spaceBetween:30,
    grabcursor:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints :{
        991: {
            slidesPerview: 3
        }
    }
});