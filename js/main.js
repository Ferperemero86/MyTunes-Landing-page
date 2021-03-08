//Nav Animation
$(function() {
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); 

    menu.slideToggle();
  });

});