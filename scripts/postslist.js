function navigateToPost() {
    location.href = "post.html";
}
var trashFunctions = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        // Get the trash modal
        var modal = document.getElementsByClassName('trash-modal')[i];

        // Get the div that opens the modal
        var div = document.getElementsByClassName("deleteIcon")[i];

        // When the user clicks on the trash icon, open the modal
        div.onclick = function() {
            modal.style.display = "block";
        }

        // Get the <span> element that closes the modal
        var close = document.getElementsByClassName("trash-modal-button-no")[i];
         //When the user clicks on `No` button, close the modal
       close.onclick = function() {
            modal.style.display = "none";
        }
    }
}

trashFunctions(3)
        
function modalDeleteClick(element){
    element.closest("div.card-post").style.display = "none";
}