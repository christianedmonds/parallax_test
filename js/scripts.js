var copyClick = document.querySelector('.copyright');
var copyContent = document.querySelector('.copy_content');

function copyShow() {
  copyContent.style.display = "block";
}

copyClick.addEventListener('click', copyShow);
