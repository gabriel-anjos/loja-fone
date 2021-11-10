const $heart = document.querySelector('.-heart');
const $Stars = document.querySelectorAll('.star');

let index = 0;

$heart.addEventListener('click', handleClick);

$Stars.forEach(function($Star){
    $Star.addEventListener('click',handleClick)
})

function handleClick(){

    this.classList.toggle('-active');
    // if($heart.classList.contains('-active')){
    //     $heart.classList.remove('-active')
    // }else{

    //     $heart.classList.add('-active');
    // }

    // $heart.classList.toggle('-active');
}

// function handleStar(){
//     this.classList.toggle('-active');
// }
