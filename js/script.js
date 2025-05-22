let counterUp = document.querySelectorAll(".counterUp")
let arr = Array.from(counterUp)
arr.map((items)=>{
    let count = 0
    function counterJs(){
        count++
        items.innerHTML = count
        if(count == items.dataset.number){
            clearInterval(stop)
        }
    }

    let stop = setInterval(function(){
        counterJs()
    },5500/items.dataset.number)
})

// let counterUp = document.querySelectorAll(".counterUp");
// let arr = Array.from(counterUp);
// // console.log(arr)

// arr.map((item) => {
//   let counter = 0;
//   function count() {
//     counter++;
//     item.innerHTML = counter;
//     if (counter == item.dataset.number) {
//       clearInterval(stop);
//     }
//   }
//   let stop = setInterval(function () {
//     count();
//   },8000/ item.dataset.number);
// });
