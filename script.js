

const randomColor = function () {   
    const hex = '123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random() * 16)];
        // console.log(color);
    }
 return color;   
}

// console.log(randomColor());
const startChangingColor = function(){

    if(interTime !== null){
        interTime = setInterval(changeColor, 1000)
    }


    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

let interTime; 

const stopChangingColor = function(){
    clearInterval(interTime)
    interTime = null;
}


document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);