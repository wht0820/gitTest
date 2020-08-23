define(["jquery"], function($){
    //左右按钮
    function cutin(){
        var oL = document.getElementById("section_left");
        var oR = document.getElementById("section_right");
        var oS = document.getElementById("section_Z_A");
        oS.onmouseenter = function(){
            oL.style.display = "block";
            oR.style.display = "block";
        }
        oS.onmouseleave = function(){
            oL.style.display = "none";
            oR.style.display = "none";
        }
    }


    function carousel(){
        var Ul = $(".section_C_1").find("ul");
        var iNow = 0; 
        var timer = null;
        var oli = $(".section_C_1").find("ol li");
        // $(".section_C_1")
        clearInterval(timer);
        timer = setInterval(function () {
            iNow++;
            tab();
        }, 5000);

        oli.click(function(){
          iNow = $(this).index();
          tab();
        })

        function tab() {
            oli.removeClass("ccs").eq(iNow ).addClass("ccs");
            if(iNow == oli.size()){
              oli.eq(0).addClass("ccs");
            }
            Ul.animate({ left:-1404 * iNow }, 500, function(){
                if(iNow == oli.size()){
                    iNow = 0;
                    Ul.css("left", 0);
                }
            });
        }

        $(".section_C_1").hover(function(){  
                $("#div22").fadeTo(500, 0.3, function(){})
        }, function(){
            $("#div22").fadeTo(500, 0, function(){})
        })
        $(".section_C_1").hover(function(){  
            $("#div23").fadeTo(500, 0.3, function(){})
            }, function(){
            $("#div23").fadeTo(500, 0, function(){})
        })

    }

    return {
        cutin: cutin,
        carousel: carousel
    }
})