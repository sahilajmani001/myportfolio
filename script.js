function valueSetters() {
  gsap.set("#nav a", { y: "-100%", opacity: 0 });
  gsap.set("#home span .child", { y: "100%" });
  gsap.set("#home .row img", { opacity: 0 });
}

function revealToSpan() {
  document.querySelectorAll(".reveal").forEach(function (elem) {
    var parent = document.createElement("span");
    var child = document.createElement("span");
    parent.classList.add("parent");
    child.classList.add("child");
    child.innerHTML = elem.innerHTML;
    parent.appendChild(child);
    elem.innerHTML = "";
    elem.appendChild(parent);
  });
}

function loaderAnimation() {
  var tl = gsap.timeline();
  tl.from("#loader .child span", {
      x: "100",
      duration: 1.4,
      delay: 0.5,
      stagger: 0.2,
      ease: Power3.easeInOut
    })
    .to("#loader .parent .child", {
      y: "-100%",
      duration: 1,
      ease: Circ.easeInOut
    })
    .to("#loader ", {
      height: 0,
      duration: 1,
      ease: Circ.easeInOut
    })
    .to("#green ", {
      height: "100%",
      top: 0,
      delay: -0.8,
      duration: 1,
      ease: Circ.easeInOut
    })
    .to("#green ", {
      height: "0%",
      delay: -0.69,
      duration: 1,
      ease: Circ.easeInOut,
      onComplete: function () {
        animateHomepage();
      //  LocoInitialize();
      }
    });
}

function animateHomepage() {
  var tl = gsap.timeline();
  tl.to("#nav a", {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      ease: Expo.easeInOut
    })
    .to("#home .parent .child", {
      y: 0,
      stagger: 0.5,
      ease: Expo.easeInOut,
      duration: 0.5
    });
}

//function LocoInitialize() {
//    const scroll = new LocomotiveScroll({
//      el: document.querySelector('#main'),
//      smooth: true
      // Add any other options you need
//    });
//  }
  
  //document.addEventListener('DOMContentLoaded', function() {
 //LocoInitialize();
//});


revealToSpan();
valueSetters();
loaderAnimation();
//LocoInitialize();