// user interface logic
$(document).ready(function(){
  $("form#pingPong").submit(function(event){
    event.preventDefault();
    var number1= $("#submitted").val();
    var result= number1(pingpong);
  result.forEach(function(element){
    $("#result").append("<li>"+element);
  })
  });
});
//business logic
function number1(pingpong){
  var result=[];
  for(i=1; i<=pingpong;i++){
    if (i%15===0){
      result.push("ping pong");
    }
else if (i%5===0){
    result.push("pong");
  }else if (i%3===0){
    result.push("ping");
  }
   else{
     result.push(i);
   }
}
 return result;
}