gsap.to(".imgcont",
{
    ease: Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger:2
})
gsap.to(".letter h1",
{
    ease: Expo.easeInOut,
    duration:2,
    stagger:2,
    top: 0
})
gsap.to(".letter h1",
{
    ease: Expo.easeInOut,
    delay: 2,
    duration:2,
    stagger:2,
    top: "-100%"
})
gsap.to(".imgcont",
{
    ease: Expo.easeInOut,
    delay:2,
    width:"0%",
    duration:2,
    stagger:2
})