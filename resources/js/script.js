const button = document.querySelector(".mine");
const video = document.getElementById("video");

// Scroll window button
button.addEventListener('click', (e) => {
    window.scrollTo({top: 700, left: 0, behavior: "smooth"});
});

// GSAP
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.once();

const timeline = gsap.timeline({defaults: {
    normalizeScroll: true,
    ignoreMobileResize: true,
    once: true
}});
// ScrollTrigger.ignoreMobileResize(timeline);

timeline
.from(".overlay", {
    scrollTrigger: {
        trigger: ".overlay",
        endTrigger: ".overlay",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
        normalizeScroll: true,
        ignoreMobileResize: true
    },
    opacity: 0
})
.from(".mine", {
    scrollTrigger: {
        trigger: ".mine",
        endTrigger: ".mine",
        scrub: true,
        // markers: true,
        start: "top 45%",
        end: "top top",
        normalizeScroll: true,
        ignoreMobileResize: true
    },
    y: -100,
    opacity: 1
})
.from(".video-container", {
    scrollTrigger: {
        trigger: ".overlay",
        endTrigger: ".overlay",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
        normalizeScroll: true,
        ignoreMobileResize: true
    },
    ease: true,
    x: "-100%",
    opacity: 0
    });
    

// ScrollTrigger.normalizeScroll();
// document.addEventListener("touchend", (e) => {
//     ScrollTrigger.disable({revert: false});
// });
    // ScrollTrigger.invalidateOnRefresh(timeline);
    // window.history.scrollRestoration = "manual";