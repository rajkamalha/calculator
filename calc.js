let screen = document.getElementById("screen");
function btnclick(value){
    screen.value+=value;

}
function clears(){
    screen.value=""
}
function find(){
    let resultt=eval(screen.value)
screen.value=resultt;
}