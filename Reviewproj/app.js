const reviews=[
    {
        id:1,
        name:"Ali Mohamadi",
        job:"web developer",
        img:"1.jpg",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit quia aperiam iusto vitae omnis incidunt est ratione quos totam itaque odio nesciunt eligendi, aspernatur nulla deleniti, ab inventore maiores."
    },
    {
        id:2,
        name:"Sara Mohamadi",
        job:"web developer",
        img:"2.jpg",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit quia aperiam iusto vitae omnis incidunt est ratione quos totam itaque odio nesciunt eligendi, aspernatur nulla deleniti, ab inventore maiores."
    },
    {
        id:3,
        name:"Hamid Mohamadi",
        job:"web developer",
        img:"3.jpg",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit quia aperiam iusto vitae omnis incidunt est ratione quos totam itaque odio nesciunt eligendi, aspernatur nulla deleniti, ab inventore maiores."
    },
    {
        id:4,
        name:"Mona Mohamadi",
        job:"web developer",
        img:"4.jpg",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto reprehenderit quia aperiam iusto vitae omnis incidunt est ratione quos totam itaque odio nesciunt eligendi, aspernatur nulla deleniti, ab inventore maiores."
    }
]

const img=document.getElementById("person-img")
const author=document.getElementById("auther")
const job=document.getElementById("job")
const info=document.getElementById("info")
const prevBtn=document.querySelector(".prev-btn")
const nextBtn=document.querySelector(".next-btn")
const randomBtn=document.querySelector(".random-btn")

let currentItem=0; 

//show person function

function showperson(id){
    const item=reviews[id];
    img.src=item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text
}

window.addEventListener("DOMContentLoaded",function(){//در این قسمت به صورت پیش فرض با لود شدن صفحه آیتم با ایندکس 0 را قرار میدهیم
    showperson(currentItem)//ایندکس در اینجا 0 است که به فانکشن ارسال میشود
})

//show next person

nextBtn.addEventListener('click',function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0
    }
showperson(currentItem)
})

//show prev person

prevBtn.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=reviews.length-1 //اگر کوچکتر از یک شد بره از اول بیاره کارت هارو
    }
    showperson(currentItem)
})

//show random person

randomBtn.addEventListener('click',function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    showperson(currentItem)
})