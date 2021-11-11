const btn = document.querySelector(".switch-btn")
const video=document.querySelector(".video-container")

btn.addEventListener("click",function(){
   if(btn.classList.contains("slide")) {
        btn.classList.remove("slide")
        video.play();
    }else{
        btn.classList.add("slide");
        video.pause()
    }
})

const preloader=document.querySelector(".preloader")

window.addEventListener("load",function(){ // وقتی صفحه لود شد کلاس زیر باعث هیدن شدن گیف گذاشته شده 
                                            //در پس زمینه میشود تا در مدت زمان لود شدن صفحه گیف نمایش داده شود 
    preloader.classList.add("hide-preloader")
})