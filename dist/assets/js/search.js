window.onload = () => {
  let input = document.querySelector('#search')
  input.oninput = function() {
    let value = this.value.trim();
    let list = document.querySelectorAll('.documents__list li');
console.log(list)
    if (value != '') {
      list.forEach(elem => {
        if(elem.innerText.search(value) == -1) {
          elem.classList.add('hide');
        }
      });
    } else {
      list.forEach(elem => {
        elem.classList.remove('hide');
      })
    }
    console.log(this.value)
  };
}