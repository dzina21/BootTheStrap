//Smooth scrolling to sections. This code derived from code courtesy of onetrickpony via StackOverflow
$("nav ul li a[href^='#'], .a-hash[href^='#']").on('click', function (e) { /* the first paremeter is always the event */
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top-50
    }, "slow", function () {
        console.log('I WAS CLICKED');

        // when done, add hash to url
        // (default click behaviour)
        // window.location.hash = hash;
    });

});