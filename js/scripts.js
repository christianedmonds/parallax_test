var copyClick = document.querySelector('.copyright');
var copyContent = document.querySelector('.copy_content');

function copyShow() {
  copyContent.style.display = "block";
}

copyClick.addEventListener('click', copyShow);


( function( $ ) {
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
} )( jQuery );
