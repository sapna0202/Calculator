const iconChange =  document.getElementById('toggleToLight');
const outputScreen = document.getElementById('output_screen');

iconChange.addEventListener('click', function(){
    document.body.classList.toggle('light_mode');
        iconChange.classList.toggle('fa-sun');
   
})


function display(num){
    outputScreen.value+=num;
}

function equal(){

    try{
        outputScreen.value = eval(outputScreen.value); 
    }
    catch(err){
        alert('invalid');
    }
}

function clr(){
    outputScreen.value=" ";
}

function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}