var content_1 = document.getElementById('content_1');
var content_2 = document.getElementById('content_2');
var content_3 = document.getElementById('content_3');
var background_img1 = document.getElementById('background_img1');
var background_img2 = document.getElementById('background_img2');
var background_img3 = document.getElementById('background_img3');
function nav_a_onclick(){
    content_1.style.display = "inline-block";
    content_2.style.display = "none";
    content_3.style.display = "none";
}
function nav_b_onclick(){
    content_1.style.display = "none";
    content_2.style.display = "inline-block";
    content_3.style.display = "none";
}
function nav_c_onclick(){
    content_1.style.display = "none";
    content_2.style.display = "none";
    content_3.style.display = "inline-block";
}
/*
nav_a.onclick = function(){
    if(content_2.style.visibility != "hidden")
    {
        hidden_anim(content_2);
    }else {
        hidden_anim(content_3);
    }
    //animation
    show_anim(content_1);
};
nav_b.onclick = function(){
    //animation
    if(content_1.style.visibility != "hidden")
    {
        hidden_anim(content_1);
    }else {
        hidden_anim(content_3);
    }
    //animation
    show_anim(content_2);
};
nav_c.onclick = function(){
    //animation
    if(content_1.style.visibility != "hidden")
    {
        hidden_anim(content_1);
    }else {
        hidden_anim(content_2);
    }
    //animation
    show_anim(content_3);
};

function hidden_anim(content){
    function opa(){
      content.style.opacity -= 0.05;
    }
    while (content.style.opacity>=0)
    {
        opa();
    }
    content.style.visibility = "hidden";
    content.style.opacity = 1;
}

function show_anim(content){
    content.style.opacity = 0;
    content_2.style.visibility = "visible";
    function opa(){
        content.style.opacity += 0.05;
    }
    while (content.style.opacity<=1)
    {
        opa();
    }
}*/