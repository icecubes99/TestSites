var popup = document.getElementById('popup');
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
popup.style.display = 'none';
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
if (event.target == popup) {
    popup.style.display = 'none';
}
}

// Function to open the popup
function openPopup() {
popup.style.display = 'block';
}