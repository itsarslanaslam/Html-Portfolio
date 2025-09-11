                                            //Event Listner 
                                            
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown", function(dets){
// if(dets.key === " "){
//     h1.textContent = "SPC";
// }
// else{
//     h1.textContent = dets.key;
// }
// })


                                            //Promises
console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})

 
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})


                                            //Callbacks

// console.log("Harry is a hacker")
// console.log("Rohan is a hecker")

// setTimeout(() => {
//     console.log("I am inside settimeout")
// }, 0);

// setTimeout(() => {
//     console.log("I am inside settimeout 2")
// }, 0);

// console.log("The End")

// const fn = () => {
//   console.log("Nothing")
// }

// const callback = (arg, fn) => {
//     console.log(arg)
//     fn()
// }

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = () => callback("Harry", fn);
//     document.head.append(sc)
// }

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )




                        //Calculating Factorial Using Loop vs Array.reduce

// let a = 7

// function factorial(number){
//    let arr = Array.from(Array(number+1).keys())
//    let c = arr.slice(1,).reduce((a, b)=> a*b)
//    return c
// }


// function facFor(number){
//     let fac = 1;
//     for (let index = 1; index <= number; index++) {
//         fac = fac * index
//     }
//     return fac
// }
// console.log(factorial(a))
// console.log(facFor(a))