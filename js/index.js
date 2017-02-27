// // var h1 = document.querySelector('h1');
// var arr = document.getElementsByTagName('h1');
// for(var i = 0; i < arr.length; i ++){
//     arr[i].innerHTML ='Hello From VanillaJS';
// }
// var h1 = document.getElementsByTagName('h1')[0];
// h1.innerHTML ='Hell From VanillaJS';


$(function(){
    $('h1').html('Hello From JS');
    $('button').click(function(){
        $('h1').toggleClass('selected');
    });
});

function handleClick() {
    alert('Button Clicked');
}


