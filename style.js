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

function sendEmail() {
  console.log("function call");
  var name = document.getElementById("name").value;
  var mail = document.getElementById("email").value;
  var Phone = document.getElementById("number").value;
  var purpose = document.getElementById("purpose").value;
  var mess = document.getElementById("mess").value;

  var body =
    "Name: " +
    name +
    "<br> Email: " +
    email +
    "<br> Phone No.: " +
    number +
    "<br> Purpose:" +
    purpose
    "<br> Subject: " +
    mess;

  Email.send({
    SecureToken: "db633b7a-4f3d-41d4-a2fc-90cef1da9ded",
    To: mail,
    From: "suvamchakrabortirax@gmail.com",
    Subject: "New Contact form User",
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Successfll!",
        text: "Your Message Just Send",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "error",
        text: "Something look Wrong",
        icon: "error",
      });
    }
  });
}