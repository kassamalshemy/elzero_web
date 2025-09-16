


const element = document.getElementById("button");
const text_1 = document.getElementById("text_1");
const h1 = document.querySelector("h1");

element.addEventListener("click", function(){
  text_1.style.color = "red";
  text_1.style.fontSize = "40px";
  h1.style.display = "none";
});


// const myTextElement = document.getElementById("myText");
// const colorButton = document.getElementById("colorButton");

// colorButton.addEventListener("click", function () {
// myTextElement.style.color = "blue"; 
// });



let arr = [1,2,3,4,5,6,7,8,9,10];

console.log(typeof arr);
console.log(arr);

function even(x)
{
    let arr1 = {};  
    let iter = 0;
    for (let i in x){
        if (arr[i] % 2 === 0){
            arr1[iter] = arr[i];
            iter++;
        }
    }
    return arr1; 
}
let new_array = even(arr);
console.log(new_array);  