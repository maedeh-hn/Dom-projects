//set date in footer

const date=document.getElementById("date");
date.innerHTML=new Date().getFullYear();

//show navigation bar

const navToggle=document.querySelector(".nav-toggle");
const linkContainer=document.querySelector(".link-container");
const links=document.querySelector(".links")

navToggle.addEventListener("click",function(){
    // linkContainer.classList.toggle("show-links")
    const containerHeight=linkContainer.getBoundingClientRect().height;// ارتفاع کادری که لینک های منو همبرگری در آن باز میشود
    const linksHeight=links.getBoundingClientRect().height;// ارتفاع لینک های موجود در لیست منو همبرگری

    if(containerHeight===0){ // اگر منو همبرگری باز نبود با کلیک بر روی منو
        linkContainer.style.height=`${linksHeight}px`;// باز شود و به اندازه ی ارتفاع هر لینک موجود در لیست منو همبرگری باز شود
    }else{ // اگر باز بود
        linkContainer.style.height=0//بسته شود و ارتفاع آن صفر شود
    }
})

const navbar=document.getElementById("nav")
const topLink=document.querySelector(".top-link")

// با عملیات زیر میخواهیم وقتی اسکرول کردیم صفحه را نوبار ما فیکس شده و با اسکرول پایین بیاید و استایل آن هم در سی اس اس تغییر کند

window.addEventListener("scroll",function(){
    const scrollHeight=window.pageYOffset;//وقتی پیج اسکرول شد مقدار آن را میدهد
    const navHeight=navbar.getBoundingClientRect().height//ارتفاع خود نو بار ما
     
    if(scrollHeight>navHeight){
        navbar.classList.add("fixed-nav")
    }else{
        navbar.classList.remove("fixed-nav")
    }

    if(scrollHeight>100){//بالای 500 پیکسل که شد دکمه ی برگشت به اول صفحه را نشان دهد
        topLink.classList.add("show-link")
    }else{
        topLink.classList.remove("show-link")
    }
})

// وقتی روی لینک های منو کلیک میکنیم دقیقا روی خود آن قسمت که کلیک شده قرار بگیرد روی همان تایتل باشد پایین و بالا نباشد

const scrollLinks=document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault() //در مرحله ی اول جلوی حالت دیفالت را میگیریم و خودمان دستی اسکرول را میخواهیم انجام دهیم


        const id =e.currentTarget.getAttribute("href").slice(1)//تارگت ایونت را گرفته و اتریبیوت مد نظر را بدون # موجود در اول آن در متغیر میریزد
        const element=document.getElementById(id)
        let position=element.offsetTop;// فاصله ی المان هایی که بر اساس آی دی آن ها پیدا کرد، فاصله ی آن ها را از بالا پیدا کند

        if(window.innerWidth<800){
            linkContainer.style.height=0; //بعد از کلیک روی هر لینک منو هبرگری، منو هبرگری بسته شود
            window.scroll({// به همان جایی که المان ها هستند اسکرول میکند
                left:0,
                top:position-50,
            })

        }else{
            window.scroll({// به همان جایی که المان ها هستند اسکرول میکند
                left:0,
                top:position-navbar.getBoundingClientRect().height,
            })
        }

    })
})