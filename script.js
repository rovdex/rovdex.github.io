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
  .querySelectorAll(
    ".hero-copy, .hero-stage, .section-heading, .system-grid > *, .capability-grid article, .proof-grid article, .workflow-shell, .workflow-list article, .quote, .footer"
  )
  .forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });