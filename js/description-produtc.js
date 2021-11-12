const $heart = document.querySelector('.-heart');
const $Stars = document.querySelectorAll('.star');
const $positionLast = $Stars.length -1;

$heart.addEventListener('click', handleClick);

$Stars[0].addEventListener('click', handleClick );
$Stars[$positionLast].addEventListener('click', lastStar);

// $Stars.forEach(function($Star){
//     $Star.addEventListener('click',handleClick)
// })

function handleClick(){
    $Stars.forEach(function($star){
        $star.classList.remove('-active')
    })
    this.classList.add('-active');
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

function lastStar(){
    $Stars.forEach(function($star){
        $star.classList.add('-active');
    })  
}