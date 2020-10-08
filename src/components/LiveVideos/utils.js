const isElementInViewport = (el) => {
    const { innerHeight, innerWidth } = window;
    const { clientHeight, clientWidth } = document.documentElement;
  
    const rect = el.getBoundingClientRect();
  
    return (
      rect.top >= 0
      && rect.left >= 0
      && rect.bottom <= (innerHeight || clientHeight)
      && rect.right <= (innerWidth || clientWidth)
    );
  };
  
  export {
    isElementInViewport
  };
  