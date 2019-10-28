$(function(){
    $('.pic-imgs img').click(trocarFoto);
    $('#imgZoom').zoom({
      magnify:2
    });
    function trocarFoto(){
      $('.pic-imgs div').removeClass('select-border');
      $(this).parent().toggleClass('select-border');
      let path=($(this).attr('src'));
      $('.main-img').attr('src',path);
      $('#imgZoom').zoom({
        magnify:2
      });
  }
    $('.slider').slick({
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 4,
        autoplay:true,
        autoplaySpeed:1000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});