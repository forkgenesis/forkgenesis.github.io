function toggleParagraphs(name) {
    var elements = document.getElementsByClassName(name);
    for (let element of elements) {
        if (element.style.display == "none") {
            element.style.display = 'flex';
          } else {
            element.style.display = 'none';
          }
    }
  }