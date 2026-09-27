
gsap.from(".profile-card", {
  duration: 1.2,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".profile-links li", {
  duration: 0.8,
  y: 25,
  opacity: 0,
  stagger: 0.15,
  delay: 0.5,
  ease: "power2.out"
});