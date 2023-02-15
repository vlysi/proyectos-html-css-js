const sections = document.querySelectorAll("section");
const transition = document.querySelector(".transition");
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];


const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navScroll, options);

function navScroll(entries){
  entries.forEach(function(entry) {
    const className = entry.target.className;
    const activeLink = document.querySelector(`[data-page="${className}"]`);
    const elementIndex = entry.target.getAttribute('data-index');
    const coordinates = activeLink.getBoundingClientRect();
    const directions = {
      height: coordinates.height,
      width: coordinates.width,
      top: coordinates.top,
      left: coordinates.left,
    };

    if(entry.isIntersecting) {
      transition.style.setProperty('height', `${directions.height}px`);
      transition.style.setProperty('width', `${directions.width}px`);
      transition.style.setProperty('top', `${directions.top}px`);
      transition.style.setProperty('left', `${directions.left}px`);
      transition.style.backgroundColor = gradients[elementIndex];

    }

  });
};

sections.forEach(function(section){
  observer.observe(section);
})


