var data,
    postID,
    menuBtn = document.querySelector('#menuBtn');

menuBtn.style.display = 'inline';

function postCtrl(c) {
console.log('current state: ' + c);
  switch(c) {
    case 'home':
      getJSON(c, 185);
      break;
    case 'about':
      getJSON(c, 324);
      break;
    case 'services.index':
      getJSON(c, 185);
      break;
    case 'services.custom':
      getJSON(c, 324);
      break;
    case 'services.repairs':
      getJSON(c, 185);
      break;
    case 'services.redesign':
      getJSON(c, 324);
      break;
  }
}

function getJSON(c, postID) {
  var	xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      data = JSON.parse(xhr.response);
      document.getElementById(c).innerHTML = data.content;
    }
  };
  xhr.open('GET', 'http://www.rhyansdesignstudio.com/wp_api/v1/posts/' + postID);
  xhr.send();
}