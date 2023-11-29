
const options = {
  root: null,
  rootMargin: "0px",
  threshold: .1,
};

let handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-visible");
       console.log(entry.isIntersecting);
       observer.unobserve(entry.target);
    } 
    else{
       entry.target.classList.remove("reveal-visible");
    } 
  });
};

let observer = new IntersectionObserver(handleIntersect, options);

let target = document.querySelectorAll("[class*='reveal-']").forEach(r=>observer.observe(r))

