$(document).ready(function(){ // This is the function that checks the doucment is ready to work with
    
     jQuery('li.hot').hide(); //To hide the element with class hot
    var $Author = $('#author');//Creating a jQurery object Author referencing to id "author"
    //Creating a jQurery object first referencing to first element of a list with id "List"
    var $first = $('ul#List li:first-child');
    //$first.hide();
    console.log($('li').html());// check the console for the result, you will see the markup as well
    console.log($('li').text()); // text brings all the elements with 'li'
    //New content added with html() method. It will update the matching set
    //Setting HTML content
//    $('li').html('<b>Updated</b>');

    //Setting TEXT content
    //$('li').text('Updated');

    //Chaining, we are calling two functions, hide() and fadeIn()
    // $('li').hide().fadeIn(2000); //try to put more functions to this line and see the effets of chaining

    //Update Elements
    //$('li#item1').remove();
    
    //Insert Elements
    //$('li#item3').before('before');
    //$('li#item2').prepend('prepentd');

    //Get & Set Attributes
    $('li#item2').addClass('button'); //Check the elements and see the class added

    //Update CSS
    //We are updating the CSS for author
   /* $Author.css({
        'background-color':"red",
        'font-family':"Arial",
        'color':'#1faadb',
        'font-size':'+=28'
    })
   */
/*
    //Each element in a selection
    //Execute a function within "each" method on every matched set
    $('li').each(function(){
        var ids = this.id;
        $(this).append(' ' + ids);
    });
    */
   
  /*  //Events
    $('li').on('click',function(){
        $(this).hide().fadeIn(2000);
    });
    */

   /* // Effects
    //$('.hot').toggle();
   // $('li').slideUp(2000);
   // $('div').slideToggle();
   $('#bookImg').hide();
   $('#book').click(function(){
    $('#bookImg').slideDown("slow",function(){
       $('#animation').toggle();
    });
   }) */

 /*  //Animating CSS properties
   $('li').on('click',function(){
      $(this).animate({
        'opacity': 0.0,
        "padding-left":'+=80' },
    2000);
          
   }); */

  /* //Traversing the DOM $ Working With Selections
   $('li').filter(':nth-child(2n)').css("background-color","red");
   $('p').add('div').addClass('Widget');
   $('li').add('p').css("background-color","red");
   */
/* 
//Box diminsions
 
 var p = $('p').first();
 $('p').last().text("Width: "+p.width() + "Innerwidth" + p.innerWidth() );
*/

//Window & Page Dimensions
var winDoc = $('#window')
 winDoc.text("Window height" + $(window).height() + "Document height" + $(document).height());
});