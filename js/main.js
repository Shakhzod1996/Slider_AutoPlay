$(document).ready(function () {

    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 3000)
    })

    let slideCount = $('#slider ul li').length;
    let slideWidth = $('#slider ul li').width();
    let slideHeight = $('#slider ul li').height();
    let slideUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: slideUlWidth, marginLeft: -slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: +slideWidth
        }, 400, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        })
    };

    function moveRight() {
        $('#slider ul').animate({
            left: -slideWidth
        }, 400, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        })
    }

    $('a.control-prev').click(function () {
        moveLeft()
    })

    $('a.control-next').click(function () {
        moveRight()
    })
})