// define controlls
const screen = document.querySelector(".screen");
const operators = document.querySelectorAll(".op");
const cls = document.querySelector(".cls");
const numeric = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");

function writeToTerminal(value = ""){
    if(value == ""){
        return screen.innerText = "Insert some operations!";
    }

    if(screen.innerText.match(/[a-z]/g)){
        return screen.innerText = value;
    }

    screen.innerText += value;
}

numeric.forEach(item => {
    item.addEventListener('click', function(e){
        const number = e.target.innerText;
    
        writeToTerminal(number);
    });
})

cls.addEventListener('click', function(){
    writeToTerminal();
})

operators.forEach(operator => {
    operator.addEventListener('click', function(e){
        const op = e.target.innerText;

        writeToTerminal(op);
    })
})

equal.addEventListener('click', function(){
    try {
        if(screen.innerText.match(/[\*, +, \-, /]/g)){
            return screen.innerText = eval(screen.innerText);
        }
    } catch (error) {
        return screen.innerText = "Invalid Expression!";
    }
});