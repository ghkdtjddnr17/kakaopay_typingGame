
import  gameOn  from './gameOn.js';
import './app.css';



let toggle = true;
window.addEventListener('DOMContentLoaded', () => {
   const el = document.querySelector('#app');
   const second = document.querySelector('.header');
   toggleBtn();
    
})


const toggleBtn = () =>{
   
    const btnTestBox = document.querySelector('.textBox1');
  
    if(toggle){
         const startbtn = document.querySelector('.startBtn');
            startbtn.onclick = () => {
                gameOn.startGame();
                btnTestBox.innerHTML = `<button type="button" class="resetBtn">초기화</button>`
                toggle = false;
                toggleBtn();
            } 
        }else if(!toggle){
            const resetBtn = document.querySelector('.resetBtn');
            resetBtn.onclick = () =>{
              btnTestBox.innerHTML = `<button type="button" class="startBtn">시작</button>`
              location.reload();
              toggle = true;
              toggleBtn();
            }
           
            
        }
   
}