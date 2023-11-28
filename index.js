let options = {
  root: document.querySelector("body"),
  rootMargin: "0px",
  threshold: 1.0,
};


let handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      
        entry.target.animate([
          { transform: "translateX(-10px)", opacity: 0 },
          { transform: "translateX(0)", opacity: 1 },
        ]
        ,
        {

          duration:300,
        }
        );
    }
      
    console.log(entry.target);
    console.log(entry.isIntersecting);
  });
};

let observer = new IntersectionObserver(handleIntersect, options);

let target = document.querySelector("#elem");
observer.observe(target);


