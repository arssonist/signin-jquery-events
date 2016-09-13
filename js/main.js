

$('.signin').click(function() {

  $('.modal').fadeIn('slow');
});
$('.close').click(function() {
   $('.modal').fadeOut('slow')
 });
$('.submit').click(function() {
  $("input[name='user']").attr("placeholder", "Error");
})
$('.submit').click(function() {
  $("input[name='pass']").attr("placeholder", "Error");
})



// ("input[type='checkbox'][name='ProductCode']")
//
// // $("input:checkbox[name='ProductCode']")
//
// $('#name').attr('placeholder', 'identify yourself');
//
// - $('#email').attr('value', 'koalathebear@gmail.com');
//
// $( "input[value='Hot Fuzz']" )
