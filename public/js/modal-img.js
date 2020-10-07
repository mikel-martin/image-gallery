window.addEventListener('load', function () {
    setUpModal();
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) 
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    else 
        isEscape = (evt.keyCode === 27);
    if (isEscape) 
        closeModal();
};

function closeModal() {
    modal.style.display = "none";
    modal.classList.remove("modal-opened");
}

function setUpModal() {

    var modal_img = document.getElementById("modal-img");
    var modal = document.getElementById("modal");
    
    var close = document.getElementById("modal-close");
    var images = document.getElementsByClassName("image");

    close.onclick = function() {
        closeModal();
    }

    for(var i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            modal.style.display = "block";
            modal_img.src = this.src;
            modal.classList.add("modal-opened");
        }
    }

}
