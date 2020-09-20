$(function() {
    
    /* Collapse Start */
    
        $("[data-collapse]").on("click", function(Event) {
        Event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $(blockId).slideToggle();
    });
    
    /* Collapse End */

    
    
    /* Smooth Scrool Start */
    
    $("[data-scroll]").on("click", function(Event) {
        Event.preventDefault();
        
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $("html, body").animate( {
            scrollTop : blockOffset
        }, 500);
        
    });
    
    /* Smooth Scrool End */
});