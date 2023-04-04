function scrollToPosition(id, headerHeight) {
    var element = document.getElementById(id);
    var offset = element.offsetTop;
    var position = offset - headerHeight;
  
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  }