let options = {
  root: document.querySelector("#app"),
  rootMargin: "0px",
  threshold: 1.0,
};
/**
 * 
 * @param {boolean} entries 
 * @param {object} observer 
 */

let handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting===true) {
      //  entry.target.style.color="blue";
        entry.target.style.translate = "-120px";
    }
    else{
       entry.target.style.translate = "120px";
    }
    console.log(observer);
  });
};

let observer = new IntersectionObserver(handleIntersect, options);

let target = document.querySelector("#elem");
observer.observe(target);


