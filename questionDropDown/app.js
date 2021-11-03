// const btns=document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         console.log(e.currentTarget.parentElement.parentElement)//المان پرنت هر سوال را انتخاب میکنیم تا بتوانیم در سی اس اس به المان های مختلف درون المان پرنت کلاس بدهیم
//         const question=e.currentTarget.parentElement.parentElement
//         question.classList.toggle("show-text")
//     })
// })

//اگر بخواهیم به صورت دیگری بنویسیم و همچنین با کلیک بر روی یک دکمه سوالات دیگر بسته شوند کد زیر را توجه کن

const questions=document.querySelectorAll(".question");

questions.forEach(function(question){
    
    const btn = question.querySelector(".question-btn");
    console.log(question)
    btn.addEventListener("click",function(){
        console.log(question)
        questions.forEach(function(item){
            console.log(item)
            if(item!==question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })
})