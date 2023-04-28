function throttle(func, delay) {
  let lastTime = 0;
  return function () {
    const context = this;
    const args = arguments;
    const currentTime = Date.now();
    if (currentTime - lastTime >= delay) {
      func.apply(context, args);
      lastTime = currentTime;
    }
  };
}


// //ADDING THROTTLE TO CODE

// function loadContent() {
//   // code to load content goes here
// }

// const throttledLoadContent = throttle(loadContent, 500);

// window.addEventListener('scroll', throttledLoadContent);