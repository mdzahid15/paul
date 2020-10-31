function openMenu(){
    document.getElementById('navbar').style.height="100%";
}
function closeMenu(){
    document.getElementById('navbar').style.height="0%";
}
// Smooth scroll
$(function(){
    $('.menu-item a, .arrow-icon a, .arrow-top a').on('click',function(){
          $('html,body').animate({
              scrollTop: $($.attr(this,'href')).offset().top
          }, 1000);
    } )
});
//mixit up
var mixer = mixitup('.work-grid');
//Create Animation
wow = new WOW(
    {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,          
    mobile:       false,       
    live:         true        
  }
  )
  wow.init();