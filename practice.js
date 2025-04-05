/*
question 1.>

make a rectangle and when we move on that rectangle on the left
 side we want to gradually change the color of the rectangle to
  red and when we move mouse to the right side we want to
   change the color to blue

   steps

   step1 - sabse pahle ye pata karo ke mouse rectange par aaya and move hua ya nahi
  step2 - ab ye calculate karo ke ham center se left par hai ya center se right par ahi
  step3 - ab yee calculate karo ke hum center se kitna left par hai,jitna left par hai utni intensity se color red lagao


question 2.>

when we move mouse to left side make the rectangle slow down
 the more mouse reaches to the left and do the same when mouse 
 goes to the right side

*/




var rect = document.querySelector("#center");
rect.addEventListener("mousemove", function (details) {
    var rectanglelocation = rect.getBoundingClientRect()
    var insiderectval = details.clientX - rectanglelocation.left


    console.log(details)


    if (insiderectval < rectanglelocation.width / 2) {
      var redcolor=  gsap.utils.mapRange(
        0,
        rectanglelocation.width/2,
        255,
        0,
        insiderectval
      )
      gsap.to(rect,{   
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease:Power4
      })
    }
    else {
      var bluecolor=  gsap.utils.mapRange(
        
        rectanglelocation.width/2,
        rectanglelocation.width,
        0,
        255,
        insiderectval
      )
      gsap.to(rect,{   
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease:Power4
      })
    }
})




rect.addEventListener("mouseleave",function(){
gsap.to(rect,{
  backgroundColor:'white'
})})