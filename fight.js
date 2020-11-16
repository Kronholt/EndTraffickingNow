// adds a onclick to the petition buttons - this displays the petition modal
$(".petition").on('click', function(){
    $(".petition-modal").css("display", "flex");
})

// adds on clic method to the close class (x that closes modal)
$(".close").on('click', function(){
    $(".petition-modal").css("display", "none");
})

//When user clicks the sign modal button, modal is closed 
$(".sign").on('click', function(){
    $(".petition-modal").css("display", "none");
    $(".petiton-modal-thanks").css("display", "flex");
})