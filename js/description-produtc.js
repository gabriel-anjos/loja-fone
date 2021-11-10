const $heart = document.querySelector('.-heart');
const $Stars = document.querySelectorAll('.star');

$Stars[0].addEventListener('click', handleClickStar);

$heart.addEventListener('click', handleClickHeart);



function handleClickHeart(){

    // if($heart.classList.contains('-active')){
    //     $heart.classList.remove('-active')
    // }else{

    //     $heart.classList.add('-active');
    // }

    $heart.classList.toggle('-active');
}

function handleClickStar(){
    $Stars[0].classList.toggle('-active');
}
