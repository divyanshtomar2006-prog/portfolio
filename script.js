const faders = document.querySelectorAll(".fade");

const appear = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

faders.forEach(fade => appear.observe(fade));
