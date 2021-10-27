const navToggle=document.querySelector(".nav-toggle")
const links=document.querySelector(".links")

navToggle.addEventListener("click",function(){
    links.classList.toggle("show-links");//یک بار روی این دکمه کلیک شود این کلاس را اضافه کند و وقتی دوباره کلیک شد حذف کند

    // if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links")
    // }else{
    //     links.classList.add("show-links")
    // }
})