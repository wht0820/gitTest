//
require.config({
    paths: {
      jquery: "jquery-1.11.3",
      "jquery-cookie": "jquery.cookie",
      index: "index",
      nav: "nav_top"
    },
    shim: {
        "jquery-cookie": ["jquery"],
        parabola: {
            exports: "_",
        },
    },
})

require(["nav"], function(nav){
    nav.NavLeave();
    nav.NavEnter();
    nav.Border();
})