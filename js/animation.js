$(document).ready(function() {
   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  	});
   $('#hbg').click(function(){
		$(this).toggleClass('open');
	});
   $('#down').click(function(){
   		$('html,body').animate({scrollTop:$('#featureTitle').offset().top - 160}, 800);
   	});
   $('a[href="#featureTitle"]').click(function(){
         $('html,body').animate({scrollTop:$('#featureTitle').offset().top - 160}, 800);
      });
   $('a[href="#storyTitle"]').click(function(){
         $('html,body').animate({scrollTop:$('#storyTitle').offset().top - 160}, 800);
      });
   $('a[href="#soupTitle"]').click(function(){
         $('html,body').animate({scrollTop:$('#soupTitle').offset().top - 160}, 800);
      });
   $('a[href="#contactTitle"]').click(function(){
         $('html,body').animate({scrollTop:$('#contactTitle').offset().top - 160}, 800);
      });
   $("#more").click(function() {
   		$('.hidesoup').slideToggle("slow");
   });
   $("#storyIteam").click(function() {
         $('.hidestory').slideToggle("30000");
   });
   $("#feature01").click(function() {
         $('.featureP01').slideToggle("30000");
   });
   $("#feature02").click(function() {
         $('.featureP02').slideToggle("30000");
   });
   $("#feature03").click(function() {
         $('.featureP03').slideToggle("30000");
   });
    $("#soup01").click(function() {
         $('.hidesoupP01').slideToggle("30000");
   });
    $("#soup02").click(function() {
         $('.hidesoupP02').slideToggle("30000");
   });
    $("#soup03").click(function() {
         $('.hidesoupP03').slideToggle("30000");
   });
    $("#soup04").click(function() {
         $('.hidesoupP04').slideToggle("30000");
   });
    $("#soup05").click(function() {
         $('.hidesoupP05').slideToggle("30000");
   });
    $("#soup06").click(function() {
         $('.hidesoupP06').slideToggle("30000");
   });
   $('#gotop').click(function(){
   		$('html,body').animate({scrollTop:$('body').offset().top}, 800);
   	});
});







