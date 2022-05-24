const button = document.querySelector(".mine");
const video = document.getElementById("video");

// Scroll window button
button.addEventListener('click', (e) => {
    window.scrollTo({top: 700, left: 0, behavior: "smooth"});
})

// GSAP
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({defaults: {}})

timeline
    .from(".video", {
        scrollTrigger: {
            trigger: ".overlay",
            endTrigger: ".overlay",
            scrub: true,
            start: "top top",
            end: "bottom bottom"
        },
        ease: true,
        x: "100%",
        opacity: 0
        })
    .from(".overlay", {
        scrollTrigger: {
            trigger: ".overlay",
            endTrigger: ".overlay",
            scrub: 1,
            start: "top top",
            end: "bottom bottom"
        },
        opacity: 0
    })
    .from(".mine", {
        scrollTrigger: {
            trigger: ".mine",
            endTrigger: ".mine",
            scrub: 1,
            // markers: true,
            start: "top 60%",
            end: "bottom 40%"
        },
        opacity: 0.9
    })
    .from(".mine", {
        scrollTrigger: {
            trigger: ".mine",
            endTrigger: ".mine",
            scrub: 0.2,
            // markers: true,
            start: "top 85%",
            end: "bottom 60%"
        },
        y: "40%"
    })