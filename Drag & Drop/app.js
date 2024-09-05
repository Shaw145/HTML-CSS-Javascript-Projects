let lists = document.getElementsByClassName("list");
let rightBox = document.querySelector(".right");
let leftBox = document.querySelector(".left");

for(let list of lists){
    list.addEventListener("dragstart", (e)=>{
        let selected = e.target;

        let parent = selected.parentElement;

        rightBox.addEventListener("dragover", e=>{
            e.preventDefault();
        })


        rightBox.addEventListener("drop", e=>{
            if(!parent.classList.contains("right")){
                
                rightBox.appendChild(selected);
                selected = null;
            }
        })


        
        leftBox.addEventListener("dragover", e=>{
            e.preventDefault();
        })


        leftBox.addEventListener("drop", e=>{
            if(!parent.classList.contains("left")){

                leftBox.appendChild(selected);
                selected = null;
            }

        })
    })
}