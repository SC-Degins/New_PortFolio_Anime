var cursor = document.querySelector("#cursor");
var main = document.querySelector(".fullwrapper");

main.addEventListener("mousemove",function(dets){
  gsap.to("#cursor",{
    x:dets.x,
    y:dets.y,
    ease: Expo
  })
})

var a = document.querySelector("#option a:nth-child(1)");
a.style.color = "rgb(179, 123, 55)";

gsap.to("#photo img", {
  scale: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#photo img",
    scroller: "body",
    start: "top 0%",
    end: "top 0%",
    // markers: true,
    scrub: 2.5,
  },
});

gsap.from("#about #about-text", {
  scale: 0.5,
  duration: 4,
  opacity:0,
  scrollTrigger: {
    trigger: "#about #about-text",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    // markers: true,
    scrub: 1,
  },
});

gsap.from(".nlink",{
  stagger:.2,
  y:20,
  opacity:0,
  duration:0.3,
})

gsap.from("#loganime", {
  opacity: 0,
  duration:0.5,
  left:-20
});

gsap.from(".card", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 75%",
    // markers: true,
    scrub: 1,
  },
});

gsap.from(".opacity", {
  opacity:0,
  scale:0.7,
  duration: 2,
  scrollTrigger: {
    trigger: ".opacity",
    scroller: "body",
    start: "top 50%",
    end: "top 55%",
    // markers: true,
    scrub: 2,
  },
});