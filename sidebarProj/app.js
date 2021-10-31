const toggleBtn=document.querySelector(".sidebar-toggle")
const closeBtn=document.querySelector(".close-btn")
const sidebar=document.querySelector(".sidebar")


toggleBtn.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar")// از تاگل استفاده کردیم چون در حالت اسکرین بزرگ که ساید بار نصف صفحه را میپوشاند اگر دوباره روی آیکن سه خط کلیک شد سایدبار جمع شود
})

closeBtn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar")
})