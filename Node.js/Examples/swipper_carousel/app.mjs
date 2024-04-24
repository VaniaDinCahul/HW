// init Swiper:
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    slidesPerView: () => {
        if ( window.innerWidth > 739){
            3
        }else {
            1
        }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function resize() {
    
}