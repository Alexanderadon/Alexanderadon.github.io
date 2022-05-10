document.querySelector('#search__content').oninput = function() {
  let val = this.value.trim();
  let elasticItems = document.querySelectorAll('.search__content li a');
  if(val != '') {
    elasticItems.forEach(function(elem) {
      if(elem.innerText.search((RegExp(val,"gi"))) == -1) {
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText;
      }
      else {
        elem.classList.remove('hide');
        let str = elem.innerText;
        elem.innerHTML = insertMark(str, elem.innerText.search((RegExp(val,"gi"))), val.length);
      }
    });
  }
  else {
    elasticItems.forEach(function(elem) {
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText;
    });
  }
}

function insertMark(string,pos,len) {

  return string.slice(0, pos) + '<mark>'+ string.slice(pos, pos + len)+'</mark>'+string.slice(pos + len);
}