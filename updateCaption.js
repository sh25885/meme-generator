const topCaption = document.querySelector(".top");
const bottomCaption = document.querySelector(".bottom")
const inputBoxTop = document.querySelector("#user_input_top");
const inputBoxBottom = document.querySelector("#user_input_bottom")

function updateCaption(){
    console.log("updating caption")
    topCaption.textContent = inputBoxTop.value;
    bottomCaption.textContent = inputBoxBottom.value;
}