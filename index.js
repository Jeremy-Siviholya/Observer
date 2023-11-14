window.addEventListener(
  "load",
  function (event) {
    boxElement = document.querySelector("#elem");

    createObserver();
  },
  false
);

function buildThresholdList() {
  var thresholds = [];

  for (var i = 1.0; i <= numSteps; i++) {
    var ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function createObserver() {
  var observer;

  var options = {
    root: document.querySelector("#app"),
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}

var numSteps = 20.0;

var boxElement;
var prevRatio = 0.0;
var increasingColor = "";
var decreasingColor = "white";

// On met l'ensemble en place.

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace(
        "ratio",
        entry.intersectionRatio
      );
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace(
        "ratio",
        entry.intersectionRatio
      );
    }

    prevRatio = entry.intersectionRatio;
  });
}
