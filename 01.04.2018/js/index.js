var reqem=document.getElementById("reqem");
var quvvetustu=document.getElementById("quvvetustu");
var yekun=document.getElementById("yekun");
var click=document.getElementById("click");


click.onclick=function(){
    for( var Sum=1, i = 1; i<=quvvetustu.value; i++){
        Sum*=reqem.value
       
   };
   yekun.value=Sum;
    console.log(Sum);
}

add.onclick=function()
{
    yekun.value=reqem.value+quvvetustu.value
};




     