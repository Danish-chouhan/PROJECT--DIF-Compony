var planeOn = document.getElementById("plane")

planeOn.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random() * 3)) * 230)
    planeOn.style.left = random + "px"
    counter++
})