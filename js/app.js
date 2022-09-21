const firstScreen = document.querySelector(".first_screen");
const secondScreen = document.querySelector(".second_screen");
const btns = document.querySelectorAll('span');

btns.forEach((btn) => {  // execute a function on all the calculator buttons
    btn.addEventListener("click", (e) => {
        let clicked = e.target.innerText  // get the text of whatever 
        // console.log(clicked);

        if (clicked == "AC") {  // clear the two screens
            secondScreen.innerHTML = ""
            firstScreen.innerHTML = ""            
        }else if (clicked == "=") {

            // evaluate the expression on the second screen
            let evaluation = eval(secondScreen.innerHTML)

            if (evaluation == undefined || evaluation == null) { // clear the screen if the evaluation is faulty
                firstScreen.innerHTML = "";
            }
            else if (evaluation == Infinity){  
                firstScreen.innerHTML = "Math Error"
            }
            else{
                firstScreen.innerHTML = evaluation
                setTimeout(()=>{
                    secondScreen.innerHTML = ""
                }, 2000)
            }

        }
        else if (clicked == "Delete"){
            secondScreen.innerHTML = secondScreen.innerHTML.slice(0,-1)
        }
        else if (clicked == "Clear"){
            firstScreen.innerHTML = ""
        }
        else{
            secondScreen.innerHTML += clicked
        }
    })})  

// if (btnText == "Delete"){
//     secondScreen.textContent = secondScreen.textContent.substring.length-1
// }
// if (btnText == "=") {
//     firstScreen.innerText = eval(secondScreen.innerText)
//     secondScreen.textContent = "";
// }else{
//     secondScreen.textContent += i.targe;
// }