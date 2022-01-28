/*
 * @Date: 2022-01-28 13:08:23
 * @LastEditors: GC
 * @LastEditTime: 2022-01-28 13:28:19
 * @FilePath: \Projects\6-Number Facts App\main.js
 */

// Two ways to deal with this API --> Ajax and fetch

let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");

let numberInput = document.querySelector("#numberInput");

// numberInput.addEventListener("input", getFactAjax);
numberInput.addEventListener("input", getFactFetch);


// function getFactAjax() {
//     let number = numberInput.value;

//     // Make a request to API with this number value
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://numbersapi.com/" + number);
    
//     xhr.onload = function() {
//         if(this.status == 200 && number != "") {
//             fact.style.display = "block";
//             factText.innerHTML = this.responseText;      
//         }
//     }

//     xhr.send();
// }

function getFactFetch() {
    let number = numberInput.value;

    fetch("http://numbersapi.com/" + number) 
        .then(response => response.text())
        .then(data => {
            if(number != "") {
                fact.style.display = "block";
                factText.innerHTML = data;
            }
        })

        .catch(err => {
            console.log(err);
        })
}