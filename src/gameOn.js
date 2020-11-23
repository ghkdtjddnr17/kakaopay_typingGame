import Axios from 'axios';

const data = [];
let gData; 
let score = 0;
let startSecond;
let iNum = 0;
Axios.get('https://my-json-server.typicode.com/kakaopay-fe/resources/words')
    .then(async function(reponse){
        console.log(reponse.data);
        data.push(reponse.data);
        gData = data[0];
        await defaultValue(gData);
       
        })
    .catch(function(error){
        console.warn(error)
        })
export default {
      startGame(){
          timer(gData, iNum );
          textPrint(gData ,iNum);
          inputText(gData ,iNum);
      }
} 


const timeremaining = document.querySelector('.timeremaining');
const scoreDefault = document.querySelector('.score');
const defaultValue = (value) =>{
    score = value.length;
    startSecond = value[0].second;
    const second = document.querySelector('.header');
    
    // second.innerHTML = `<span>남은시간 : ${ startSecond }초 </span>
    //                     <span style="float:right">점수: ${ score }점</span>`

    timeremaining.innerHTML = `<span> ${ startSecond }초 </span>`
    scoreDefault.innerHTML = `<span>${ score }점</span>`
}



let x = null;
const timer = (timeNum, iNum) =>{
    startTimer(timeNum, iNum);
}

const startTimer = (timeNum ,iNum) => {

    let time = timeNum[iNum].second;
    let sec = "";
    const second = document.querySelector('.header');
    x = setInterval(() => {
       
        sec = time % 60;
        time--;
        timeremaining.innerHTML = `<span>${ sec }초 </span>`
        scoreDefault.innerHTML = `<span>${ score }점</span>`
       
        if(time < 0){
            iNum++;
            score--;
            textPrint(timeNum ,iNum);
            stopTimer();
            timer(timeNum ,iNum)
            
        }
    },1000)
  
}

const stopTimer = () => {
    if( x !=  null){
        clearInterval(x);
    }
}


const textPrint = (text ,iNum) => {
    const textPrint = document.querySelector('.textPrint');
    textPrint.innerHTML = `<div class="textPrint" >${text[iNum].text}</div>`
    inputText(text ,iNum)
}

const  inputText = (input ,iNum) =>{
    const textInput = document.querySelector('.textInput');
    textInput.onkeypress = () => {
        if(event.keyCode === 13){
            if(input[iNum].text === textInput.value){
                if(iNum === gData.length - 1){
                    console.log('끝');
                    stopTimer();
                    return;
                }else{
                    console.log('같습니다.');
                    iNum++;
                    textInput.value = '';
                    textPrint(input ,iNum);
                    stopTimer();
                    timer(input,iNum);
                }
               
                
            }
            else{
                textInput.value = '';
                console.log('같지 않습니다.');
            }
           
        }
    }
    
}

