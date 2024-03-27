const tl = gsap.timeline()
const tl2 = gsap.timeline()
function animationsProgram() {


  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();





}

animationsProgram()

function animate() {
  tl.from('nav', {
    opacity: 0,
    duration: 0.6,
    delay: 0.2
  })

  tl.from('#home', {
    y: '100px',
    opacity: 0,
    delay: 0.2,
    duration: 0.6,
  })

  gsap.from('#about div',{
    y: 50,
    opacity:0,
    // duration: 0.6,
    stagger: 0.1,
    scrollTrigger:{
      trigger: '#section-2',
      scroller: 'main',
      start: 'top 20%',
      end: 'bottom bottom',
    }
  })


  let linkedin = document.querySelector('.linkedin')
  let linkedin_logo = document.querySelector('.linkedinlogo')
  linkedin.addEventListener('mousemove', function (dets) {
    let x_val = dets.clientX - linkedin.getBoundingClientRect().left;
    let y_val = dets.clientY - linkedin.getBoundingClientRect().top;

    linkedin_logo.style.display = 'inline'
    gsap.to(linkedin_logo, {
      left: x_val,
      top: y_val,
      ease: 'expo'
    })
  })
  linkedin.addEventListener('mouseleave', function () {
    linkedin_logo.style.display = 'none'
  })


  var tl3 = gsap.timeline({
    ease: 'none',
    scrollTrigger: {
      trigger: '#section-2',
      scroller: 'main',
      pin: true,
      scrub: true,
      start: '0% top',
      end: '100% 0%',
    }
  })
  tl3.to('#about', {
    width: '100%',
    duration: 5,
    scale: 0.8,
    filter: 'blur(5px)',
  }, '1')
  
  .to('#experience', {
    left: '0%',
    duration: 5,
  }, '1')
  
  .to('#experience',{
    left:'0%',
    scale:'0.9',
    duration:5,
    filter: 'blur(5px)'
  },'b')

  .to('#skills',{
    left: '0%',
    duration: 6.5,
    delay:2.5,
  },'1')
  

}
animate()

function init() {

  function cursor() {
    let cursor = document.querySelector('.second-cursor')

    window.addEventListener('mousemove', function (dets) {
      gsap.to(cursor, {
        x: dets.clientX - 20,
        y: dets.clientY - 20,
        ease: 'circ'
      })
    })
  }
  cursor()


}

init()