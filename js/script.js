 $(document).ready(function(){

$('nav a').on('click',function(){
//current class assignment

$('nav li.current').removeClass('current');
$(this).parent().addClass('current');

//set heading text
$('h1#heading').text($(this).text());

//Get & filter link text

var category=$(this).text().toLowerCase().replace(' ','-');

//Remove hidden class if all projects is selected

if(category=='all-projects')
{
$('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
}
else
{
$('ul#gallery li').each(function(){
if(!$(this).hasClass(category))
{
$(this).hide().addClass('hidden');
}
else
{
$(this).fadeIn('slow').removeClass('hidden');
}


});

 }
return false;

});

//overlay effect


$('ul#gallery li').on('mouseenter',function()
{

//Get data attributes

var title=$(this).children().data('title');
var desc=$(this).children().data('desc');

//validation
if(desc==null)
{
desc="click To Enlarge";
}


if(title==null)
{
title='';
}




//create overlay div

$(this).append('<div class="overlay"></div>');
//Get the overlay div
var overlay=$(this).children('.overlay');
//ADD HTML TO OVERLAY
overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
//fade in overlay
overlay.fadeIn(800);

//Mouseleave overlay

$('ul#gallery li').on('mouseleave',function(){

$(this).append('<div class="overlay"></div>');

//Get the overlay

var overlay=$(this).children('.overlay');
//fade out overlay
overlay.fadeOut(500);

})


}) 


})