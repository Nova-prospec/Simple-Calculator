const firstScreen = document.querySelector(".first_screen");
const secondScreen = document.querySelector(".second_screen");
const btns = document.querySelectorAll('span');

btns.forEach((btn) => {  // execute a function on all the calculator buttons
    btn.addEventListener("click", (e) => {
        let clicked = e.target.innerText  // get the text of whatever button is clicked on
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
//                 firstScreen.innerHTML = "Math Error"  // give a math error if the answer is infinity
            }
            else{
                firstScreen.innerHTML = evaluation
                setTimeout(()=>{
                    secondScreen.innerHTML = ""
                }, 2000)
            }

        }
        else if (clicked == "Delete"){
            secondScreen.innerHTML = secondScreen.innerHTML.slice(0,-1)  // delete the last number/expression on the screen
        }
        else if (clicked == "Clear"){
            firstScreen.innerHTML = ""  // clear the screens
        }
        else{
            secondScreen.innerHTML += clicked  
        }
    })})  

