
       $(window).load(function() {
    var vWidth = $(window).width();
    var vHeight = $(window).height();
    $('.table > section').css('width', vWidth).css('height', vHeight);
});

$(window).resize(function() {
    var vWidth = $(window).width();
    var vHeight = $(window).height();
    $('.table > section').css('width', vWidth).css('height', vHeight);
});
   