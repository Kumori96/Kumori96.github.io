$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(50);
        },
        function(){
            $(this).children('.sub-menu').slideUp(50);
        }
    );
}); // end ready