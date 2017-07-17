 $(document).ready(function() {
 
 	$(".button-collapse").sideNav({
 		menuWidth: 550,
 	});
 	$('.modal').modal();
 	$("select[required]").css({
      display: "inline",
      height: 0,
      padding: 0,
      width: 0
    });
 	$('#myButton').click(function(){
    if( $('#name').val() == '' || $('#contact').val() =='' || $('#email').val() ==''){
      alert('Please Enter all the fields');
    }
    else {
    	$('#modal1').modal('open');
    	return false;
    }

});
	
 });
