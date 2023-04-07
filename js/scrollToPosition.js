function scrollToPosition(id, headerHeight) {
    let element = document.getElementById(id);
    let offset = element.offsetTop;
    let position = offset - headerHeight;
  
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }