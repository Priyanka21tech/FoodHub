

$(document).ready(function()
 {
    $("input").focus(function()
         {
        $(this).css("background-color":"pink");
        $(this).css("color":"#000");
    });
    
    $("input").blur(function()
        {
         $(this).css("background-color":"yellow");
        $(this).css("color":"#4f4f4f");
    });
    $("#msg").focus(function()
       {
        $(this).css("background-color":"pink");
        $(this).css("color":"#000");
    });
     $("#msg").blur(function()
        {
         $(this).css("background-color":"yellow");
        $(this).css("color":"#4f4f4f");
    });
    
    /*change of text to upper case*/
    
    $('input').keyup(function()
                    {
        this.value=this.value.toUpperCase();
    });
    
    /* no field to be left blank*/
    
    $("#btn").bind("click",function()
        {
        var fname=$("#fname").val();
        var lname=$("#lname").val();
        var ctno=$("#ctno").val();
        var mail=$("#mail").val();
        var msg=$("#msg").val();
        
        if(fname==''|| lname==''|| ctno==''|| mail=='' || msg=='')
            {
                alert("Please fill all the fields !!!");
                $('input[type="text"],input[type="email"]').css("border","2px solid red");
                $('input[type="text"],input[type="email"]').css("border-shadow","0 0 3px red");
                $('#msg').css("border","2px solid red");
                $('msg').css("border-shadow","0 0 3px red");
                
            }
    });
    
    /* first name and last name inputs*/
    
    $('input[id="fname"],input[id="lname"]').keypress(function(e)
                {
                     var arr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";                                 
                    var code;
                    if(window.event)
                        code=e.keyCode;
                    else
                        code=e.which;
        var char=keychar=String.fromCharCode(code);
        if(arr.indexOf(char)==-1)
            return false;
        
              });
    
    /*contact*/
    
    $("#ctno").keydown(function(event)
                      {
        if(event.keyCode==8 || event.keyCode==13 || event.keyCode==16 || (event.keyCode>=35 && event.keyCode<=39) || (event.keyCode==46) || (event.keyCode==9))
            {
                return;
            }
        else{
            if(event.shiftKey || (event.keyCode<=48 || event.keyCode>57)&&(event.keyCode<96 || event.keyCode>105)&&('#ctno.val().length>11'))
               {
                    {event.preventDefault();}
            
               }
        }
    });
    
});
