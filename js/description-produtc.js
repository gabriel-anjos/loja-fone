const $heart = document.querySelector('.-heart');
const $Stars = document.querySelectorAll('.star');



$heart.addEventListener('click', handleClickHeart);

$Stars.forEach(function($Star){
    $Star.addEventListener('click',handleStar)
})

function handleClickHeart(){

    // if($heart.classList.contains('-active')){
    //     $heart.classList.remove('-active')
    // }else{

    //     $heart.classList.add('-active');
    // }

    $heart.classList.toggle('-active');
}

function handleStar(){
    this.classList.toggle('-active');
}
