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
   $('#gotop').click(function(){
   		$('html,body').animate({scrollTop:$('body').offset().top}, 800);
   	});
});







