let rect = document.querySelector("#center");
rect.addEventListener("mousemove", function(details){
    let rectlocation =  rect.getBoundingClientRect();
    let rectinside = details.clientX - rectlocation.left
    if(rectinside < rectlocation.width/2){
let redcolor = gsap.utils.mapRange(0, rectlocation.width/2, 255, 0, rectinside);
    gsap.to(rect, {
        backgroundColor: `rgb(${redcolor}, 0 , 0)`,
        ease: Power4,
    });
}else{
let bluecolor = gsap.utils.mapRange(rectlocation.width/2, rectlocation.width , 0, 255, rectinside);
    gsap.to(rect, {
        backgroundColor: `rgb(0, 0 , ${bluecolor})`,
        ease: Power4,
    });
    }
})
rect.addEventListener("mouseleave", function(){

gsap.to(rect, {
    backgroundColor: "white"
});
});


// 1) mapRange(inMin, inMax, outMin, outMax, valueToMap)