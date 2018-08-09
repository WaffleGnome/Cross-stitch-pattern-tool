$(document).ready(function(){
 var color_value = "black";
  
   $("input[type='radio']").click(function(){
     color_value = $("input[name='color_btn']:checked").val();
      $("h1").css("color",color_value);
    });
  
  $("td").mousedown(function(){
      $(this).css("color",color_value);
  });
  
   $("button").click(function(){
      $("td").css("color", "rgba(0, 0, 0, 0.06)");
  });
  
});
