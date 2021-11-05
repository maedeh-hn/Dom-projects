const menu=[
    {
        id:1,
        title:"Fire And Ice Pizzeria",
        category:"breackfast",
        price:15.99,
        img:"./images/1.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:2,
        title:"Bricks Cafe Firewood Pizza",
        category:"lunch",
        price:13.99,
        img:"./images/2.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:3,
        title:"Focaccia With Melted Mozzarella Cheese",
        category:"lunch",
        price:30.99,
        img:"./images/3.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:4,
        title:"Aglio, Olio e Peperoncino",
        category:"dinner",
        price:20,
        img:"./images/4.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:5,
        title:"Fire And Ice Pizzeria",
        category:"breackfast",
        price:15.99,
        img:"./images/5.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:6,
        title:"Fire And Ice Pizzeria",
        category:"breackfast",
        price:15.99,
        img:"./images/6.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:7,
        title:"Piccata Di Pollo",
        category:"dinner",
        price:15,
        img:"./images/7.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:8,
        title:"Kit Kat Brownie Thick Shake",
        category:"shakes",
        price:15.99,
        img:"./images/8.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:9,
        title:"Mango Milk Shake",
        category:"shakes",
        price:15,
        img:"./images/9.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
    {
        id:10,
        title:"Zuppa Di Verdura",
        category:"lunch",
        price:11.99,
        img:"./images/10.jpg",
        desc:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dicta corporis vitae accusantium voluptatem earum totam corrupti minus. Soluta recusandae provident veniam eaque placeat rerum at necessitatibus perferendis pariatur laudantium.`
    },
]

const sectionCenter=document.querySelector(".section-center");
const filterBtns=document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded",function(){//وقتی صفحه لود شد روی آرایه لوپ بزند
 displayMenuItem(menu)
})


filterBtns.forEach(function(btn){
    btn.addEventListener("click",function(e){
         console.log(e.currentTarget.dataset.id)//در اینجا نام دیتا "آی دی" هست که در کد اچ تی ام ال نام گذاری شده
         const category=e.currentTarget.dataset.id;
         const menuFilter=menu.filter(function(menuItem){
             if(menuItem.category===category){//اگر مقدار "کتگوری" هر آیتم که از آرایه ی "منو" میگیرد با "کتگوری" که از دکمه ی 
                                                  //کلیک شده میآید برابر بود آن آیتم را برگرداند
                 return menuItem
             }//از اینجا به بعد یک منوی فیلتر شده داریم در ادامه روی منوی فیلتر شده شرط میگذاریم
         })
         if(category==="all"){ // اگر کلید دارای دیتا آدی آل را زدیم همه ی آرایه ی منو را نشان دهد
                       displayMenuItem(menu)
         }else{ // اگر کلید های دیگر را انتخاب کردیم آرایه ی فیلتر شده را نشان دهد
            displayMenuItem(menuFilter)
         }
    })
})

function displayMenuItem(menuItems){
    let displayMenu=menuItems.map(function(item){
        return `               
         <article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title}>
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
        </article>`;
    })
    displayMenu=displayMenu.join(" ")// همه ی آیتم های مپ بالایی را به هم متصل کن
    sectionCenter.innerHTML=displayMenu
}