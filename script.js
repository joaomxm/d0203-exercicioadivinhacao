let tentativas;
let i=0;
const aleatorio = function(min, max){
    min=1;
    max=50;
    return Math.floor(Math.random()* (max - min + 1)) +min;
  }

alert('Bem Vindo a adivinhação!!');

alert('Existe um numero OCULTO que se encontra no intervalo de numeros entre 1 e 50! \nVocê tem que acertar qual é esse número em apenas 5 tentativas!');
alert('Vamos começar!\nBOA SORTE E DIVIRTA-SE' );
let num= Number(prompt('Qual é esse numero??'));

console.log(aleatorio());
  

const a= aleatorio();


    
   
    
     if(num === a){

    alert('Parabens você acertou de primeira!');
    }

    else{

     if (num >=1 && num<=50 && num !=a){
        
        alert('Errou! Tente novamente!');

        if(num < a){
        alert('O numero inserido é MENOR que o oculto!');

        }
    
        else if (num > a ){
        alert('O numero inserido é MAIOR que o oculto!');
    }
    }   

    else{

        alert('Esse numero nao esta dentro do intervalo!');
    
        }
        


    

    let t=4;
    while( num >=1 && num<=50 && num != a && i <=t ){

       
        num= Number(prompt('Qual é o numero oculto?'));
           
           
       if( num !=a && i<=5 && num >=1 && num <=50 ){

        alert(`Errado, tente novamente vc tem ${t} chances`);
        
       
    }   
    else if(num == a){

        alert('Acertou!!!');
       }
    
    

    
    
    else if(t==0 && num!=a){

        alert('Você chegou no limite de tentativas, por favor recarregue a pagina e reinicie a investigação!');
       }

       else{
        alert('Esse numero não está entre o respectivo intervalo, ou nem é um número!!');
        
    }
    t--;
    }
    }