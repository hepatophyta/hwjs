
const leng = 100;


const num = Math.floor(Math.random() * leng) + 1;
let round = 0;

function myInput(){
  
    
    var sinput = document.form1.inp.value;
    var input = parseInt(sinput, 10);


    console.log("round = " + round );
    console.log("input = " + input);
    console.log("num = " + num);
    console.log("typeofnum:" + typeof(num));
    console.log("typeofinput:" + typeof(input));
 

    if(round>10){
        document.querySelector('h1').innerText = 'You are so Stupid!!!';

        setTimeout(function(){
            location.reload();
        }, 5000); 
        
    }

    else if(input === num){
        document.querySelector('h1').innerText = 'You are so Genius';
        
    }
    else if(input > num){
        round++;
        document.querySelector('h1').innerText = 'It is too much';
        

        let adding = document.getElementById("p");
        let n = input.toString();
        var text = document.createTextNode(n + "  ");
        adding.appendChild(text);

        
       
    }
    else if(input<num){
        round++;
        document.querySelector('h1').innerText = 'It is too less';
        

        let adding = document.getElementById("p");
        let n = input.toString();
        var text = document.createTextNode(n + "  ");
        adding.appendChild(text);
    }
    else {

        round+=2;
        document.querySelector('h1').innerText = 'Do not be Stupid!!';
    }
}





// console.log(input);
// console.log(num);
// console.log(typeof(num));
// console.log(typeof(input));





