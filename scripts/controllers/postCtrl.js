var media = {},
    pages = {};

function postCtrl(c) {
  if(pages[c]) {
// pages[c].gallery.indexOf(NaN) > -1
    //     if(pages[c].gallery)
    targetID = document.querySelector('#' + c);
    var gallery = document.createElement('div');
    gallery.classList.add('gallery');
    for(var i in pages[c].gallery) {
      pages[c].gallery[i] = isNaN(pages[c].gallery[i]) ? 0 : +pages[c].gallery[i];
      if(pages[c].gallery[i] !== 0) {
        var img = document.createElement('img'),
            id = pages[c].gallery[i];
        img.src = media[pages[c].gallery[i]];
        if(img.src !== window.location.protocol + '//' + window.location.host + '/undefined') {
          gallery.appendChild(img);
        }
      }
    }
    targetID.innerHTML = '';
    targetID.appendChild(gallery);
    targetID.innerHTML += pages[c].content;
  }
}