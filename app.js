const inputs= document.querySelectorAll(".input");
function funFocus(){
    let parent= this.parentNode;
    parent.classList.add("focus")
}
function blurFunc(){
    let parent=this.parentNode;
    if(this.value==""){parent.classList.remove("focus");}
}
inputs.forEach((input)=>{
input.addEventListener("focus",funFocus);
input.addEventListener("focus",blurFunc)
});
 