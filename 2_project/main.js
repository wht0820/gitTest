//
require.config({
    paths: {
      jquery: "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      index: "index",
      nav: "nav_top",
      section1: "section"
    },
    shim: {
        "jquery-cookie": ["jquery"],
        parabola: {
            exports: "_",
        },
    },
})

require(["nav", "section1"], function(nav, section1){
    nav.NavLeave();
    nav.NavEnter();
    nav.Border();
    section1.cutin();
    section1.carousel();
})
