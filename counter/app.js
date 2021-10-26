let count=0

const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");//یک نود لیست میدهد که مثل آرایه است

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles=e.currentTarget.classList;//با کلیک بر روی هر دکمه لیست کلاس های موجود در آن دکمه را میدهد
        if(styles.contains("decrease")){//شامل کلاس ذکر شده است یا نه
            count--
        }else if(styles.contains("increase")){
            count++
        }else{
            count=0
        }
        if(count>0){
            value.style.color="green"
        }
        if(count<0){
            value.style.color="red"
        }
        if(count===0){
            value.style.color="#222"
        }
        value.textContent=count;
    })
})