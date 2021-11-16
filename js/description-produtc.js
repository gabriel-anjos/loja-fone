const $heart = document.querySelector('.-heart');
const $Stars = document.querySelectorAll('.star');
const $positionLast = $Stars.length -1;

$heart.addEventListener('click', handleClick);

// $Stars[0].addEventListener('click', handleClick );
$Stars[$positionLast].addEventListener('click', lastStar);


$Stars.forEach(function($star, key){
    if(key == 0){
        $star.addEventListener('click', firstStar)
    }
    if(key == $positionLast){
        $star.addEventListener('click',lastStar)
    }
    if(key > 0 && key < $positionLast){
        $star.addEventListener('click',function(){
            middleStar(key)
        })
    }
})




// $Stars.forEach(function($Star){
//     $Star.addEventListener('click',handleClick)
// })

function handleClick(){
    $heart.classList.toggle('-active')
        
    }
    
    // if($heart.classList.contains('-active')){
    //     $heart.classList.remove('-active')
    // }else{

    //     $heart.classList.add('-active');
    // }

    // $heart.classList.toggle('-active');
// }

// function handleStar(){
//     this.classList.toggle('-active');
// }

function firstStar(){
    $Stars.forEach(function($star){
        $star.classList.remove('-active')
    });
    this.classList.add('-active');
}

function middleStar(index){
    $Stars.forEach(function($star ,key){
        $star.classList.remove('-active');

        if(key <= index){
            $star.classList.add('-active');
        }
    });
    
}

function lastStar(){
    $Stars.forEach(function($star){
        $star.classList.add('-active');
    })  
}