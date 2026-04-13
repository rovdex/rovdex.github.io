const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

document
  .querySelectorAll(".hero-copy, .hero-panel, .section-heading, .about-grid article, .capability-grid article, .timeline article, .quote, .footer")
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });