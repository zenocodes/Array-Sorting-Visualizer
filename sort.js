function swap(i, j) {
  let temp = i.style.height;
  i.style.height = j.style.height;
  j.style.height = temp;
}

function enableSortBtn(){
    document.querySelector(".bubbleSort").disabled = true;
    
}

function disableSortBtn(){
    document.querySelector(".bubbleSort").disabled = false;
}

function disableSizeSlider(){
    document.querySelector("#arr_sz").disabled = true;
}

function enableSizeSlider()
{
    document.querySelector("#arr_sz").disabled = false;
}

function disableNewArrayBtn()
{
    document.querySelector(".newArray").disabled = true;
}
function enableNewArrayBtn()
{
    document.querySelector(".newArray").disabled = false;
}

function waitForMe(ms){
    return new Promise(resolve=>{
        setTimeout(()=>{resolve('')},ms);
    })
}

let arraySize = document.querySelector("#arr_sz");
// console.log(arraySize.value);
arraySize.addEventListener("input", () => {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector("#speed_input");

delayElement.addEventListener("input", () => {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

let array = [];

createNewArray();

function createNewArray(Total_bars = 60) {
  deleteOldBars();

  array = [];
  for (let i = 0; i < Total_bars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }
  console.log(array);

  const bars = document.querySelector("#bars");

  for( let i = 0; i<Total_bars;i++)
  {
      const bar = document.createElement("div");
      bar.style.height = `${array[i]*2}px`;
      bar.classList.add('bar');
      bar.classList.add('flex-item');
      bar.classList.add('barNo${i}');
      bars.appendChild(bar);
  }
}

function deleteOldBars() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
  console.log("From newarray " + arraySize.value);
  console.log("From newArray " + delay);
  enableSortBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});