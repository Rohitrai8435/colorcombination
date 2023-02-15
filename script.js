
function animatiohome(){
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        scrub: 1,
        pin: true,
        markers: true,
    }
})


tl
.to("#circle #botm img", {
    rotate: "-180deg",
    scale: .5,
    stagger: .1,
    ease: Power1
}, "same")
.to("#circle",  {
    
    scale: .5,
    ease: Power1
}, "same")
.to("#smcircle",  {
    
    scale: .5,
    ease: Power1
}, "same")
.to("#botmcircle",  {
    top:"50%",
    scale: 1.2,
    ease: Power1
}, "same")
.to("#circle",  {
    opacity:0,
    scale: 0,
    ease: Power1
}, "same1")
.to("#smcircle",  {
    
    scale: 0,
    ease: Power1
}, "same1")
.to("#botmcircle",  {
    opacity:0,
    delay:-.3,
    ease: Power1
}, "same1")
.to("#pinkfalre",  {
  top:"30%",
    rotate:"0deg",
    
    ease: Power1
}, "same1")
.to("#leftbox",  {
   top:"0%",
    delay:0.3,
    duration:2,
    ease: Power1
}, "same1")
.to("#leftbox",  {
   top:"-100%",
    duration:2,
    ease: Power1
})


.to("#circle #top img", {
    scale: .6,
   
    ease: Power1
}, "same")
.to("#centerimg  img", {
    scale: 0,
   
    ease: Power1
},"same")

.to("#overlay>h1", {
    y:300,
    ease: Power1
},"same")
.to("#centerimg h5", {
    opacity:0,
    ease: Power1
},"same")
}

animatiohome();
var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#secondpage",
        start : "top top",
        scrub: .3,
        pin: true,
        
        markers: true,
    }
})
t2.to(".scircle",{
    top:"50%",
    stagger:.1,
    ease:Power1
})
t2.to(".scircle",{
    left:"50%",
    ease:Power1
},)
t2.to(".scircle",{
    scale:10,
    ease:Power1
})
t2.to(".scircle",{
    background: `linear-gradient(to right, #D5A7B4, #B4AAD5)`,
    duration:4,
    ease:Power1
},"alpha")
t2.to("#gradiant",{
    left : "-100%",
    duration : 4,
    ease:Power1
},"alpha")
t2.to("#p1",{
    opacity : 0,
    ease:Power1
},"alpha")
t2.to("#p2",{
    opacity : 1,
    ease:Power1
},"alpha")

