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
        var aBtns = $("slideshow_introduce").find("ul li");
        var iNow = 0; 
        var timer = null;
        $("#play")
          .mouseenter(function () {
            clearInterval(timer);
          })
          .mouseleave(function () {
            timer = setInterval(function () {
              iNow++;
              tab();
            }, 2000);
          });

        timer = setInterval(function () {
          iNow++;
          tab();
        }, 2000);

        //给所有的按钮添加点击
        aBtns.click(function () {
          iNow = $(this).index();
          tab();
        });

        function tab() {
          //删除class名
          aBtns.removeClass("active").eq(iNow).addClass("active");
          if (iNow == aBtns.size()) {
            aBtns.eq(0).addClass("active");
          }

          oUl.animate({ top: -150 * iNow }, 500, function () {
            if (iNow == aBtns.size()) {
              iNow = 0;
              oUl.css("top", 0);
            }
          });
        }
    }

    return {
        cutin: cutin,
        carousel: carousel
    }
})