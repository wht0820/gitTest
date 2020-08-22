define(function(){
    //nav鼠标移入
    function NavEnter(){
        var Nav = document.getElementById("nav_1");
        var NavColor = document.getElementById("nav_3_2_1");
        var NAVColor = NavColor.getElementsByTagName("a");
        var NAVnav = document.getElementById("nav_5");
        var Nav_3 = document.getElementById("nav_3_2_2");
        var nav_a = Nav_3.getElementsByTagName("span");
        Nav.onmouseenter = function(){
            Nav.style.background = "#fff";
            for(var i = 0 ; i < NAVColor.length ; i++){
                NAVColor[i].style.color = "black";
            }
            for(var i = 0; i < nav_a.length; i++){
                nav_a[i].style.color = "black";
            }
            NAVnav.style.backgroundImage = 'url("https://www1.djicdn.com/dps/303ebb0010bed26e989b7d9966eb0c0b.svg")';
        }
    }

    //nav鼠标移出
    function NavLeave(){
        var Nav = document.getElementById("nav_1");
        var NavColor = document.getElementById("nav_3_2_1");
        var NAVColor = NavColor.getElementsByTagName("a");
        var NAVnav = document.getElementById("nav_5");
        var Nav_3 = document.getElementById("nav_3_2_2");
        var nav_a = Nav_3.getElementsByTagName("span");
        Nav.onmouseleave = function(){
            Nav.style.background = 0;
            NavColor.style.color = "#fff";
            for(var i = 0; i < NAVColor.length; i++){
                NAVColor[i].style.color = "#fff";
            }
            for(var i = 0; i < nav_a.length; i++){
                nav_a[i].style.color = "#fff";
            }
            NAVnav.style.backgroundImage = "url('https://www1.djicdn.com/dps/e5f926c322d7fdf80eafe38a0d12000c.svg')";
        }
    }

    //单个加下边框,加下拉菜单
    function Border(){
        var NavColor = document.getElementById("nav_3_2_1");
        var nav_Li = NavColor.getElementsByTagName("li");
        var nav_div = document.getElementById("explore");
        var Div_li = nav_div.getElementsByTagName("li");
        var Div_div = document.getElementById("expenditure");
        for(var i = 0; i < Div_li.length; i++){
            Div_li[i].onmouseenter = function(){
                this.style.background = "#ebeff2";
            }
            Div_li[i].onmouseleave = function(){
                this.style.background = "";
            }
        }

        function H(Node, Css){
            Css.style.display = "block";
            Node.style.borderBottom = "2px solid black";
        }
        function N(oNode, oCss){
            oCss.style.display = "none";
            oNode.style.borderBottom = "";
        }
        //
        nav_Li[5].onmouseenter = function(){
            H(nav_Li[5], nav_div);
        }
        nav_Li[5].onmouseleave = function(){
            N(nav_Li[5], nav_div);
        }
        //
        nav_Li[0].onmouseenter = function(){
            H(nav_Li[0], Div_div);
        }
        nav_Li[0].onmouseleave = function(){
            N(nav_Li[0], Div_div);
        }
        //
        

        // nav_Li[1].onmouseenter = function(){
        //     nav_div.style.display = "block";
        //     this.style.borderBottom = "2px solid black";
        //     this.style.height = "62px";
        // }
        // nav_Li[1].onmouseleave = function(){
        //     nav_div.style.display = "none";
        //     this.style.borderBottom = "";
        //     this.style.height = "";
        // }
        // nav_Li[2].onmouseenter = function(){
        //     nav_div.style.display = "block";
        //     this.style.borderBottom = "2px solid black";
        //     this.style.height = "62px";
        // }
        // nav_Li[2].onmouseleave = function(){
        //     nav_div.style.display = "none";
        //     this.style.borderBottom = "";
        //     this.style.height = "";
        // }
        // nav_Li[3].onmouseenter = function(){
        //     nav_div.style.display = "block";
        //     this.style.borderBottom = "2px solid black";
        //     this.style.height = "62px";
        // }
        // nav_Li[3].onmouseleave = function(){
        //     nav_div.style.display = "none";
        //     this.style.borderBottom = "";
        //     this.style.height = "";
        // }
        // nav_Li[4].onmouseenter = function(){
        //     nav_div.style.display = "block";
        //     this.style.borderBottom = "2px solid black";
        //     this.style.height = "62px";
        // }
        // nav_Li[4].onmouseleave = function(){
        //     nav_div.style.display = "none";
        //     this.style.borderBottom = "";
        //     this.style.height = "";
        // }
        // nav_Li[6].onmouseenter = function(){
        //     nav_div.style.display = "block";
        //     this.style.borderBottom = "2px solid black";
        //     this.style.height = "62px";
        // }
        // nav_Li[6].onmouseleave = function(){
        //     nav_div.style.display = "none";
        //     this.style.borderBottom = "";
        //     this.style.height = "";
        // }
    }
    
    return {
        NavLeave: NavLeave,
        NavEnter: NavEnter,
        Border: Border
    }
})