var a = 1;


$(document).ready(function(){
  $("#knopka").mouseover(function(){$("#knopka").css("background-color", "#374f34");});
  $("#knopka").mouseleave(function(){$("#knopka").css("background-color", "#4c7548");});
});


function otvet()
{
  if (a)
  {
  var sum = 0;
  var value;

  for (var i = 1; i < 31; i++)
  {
    value = $("#ans" + i).is(":checked");
    if (value) {sum++;}
  }

  console.log(sum);
  $("#prav").text("В этом тесте у тебя " + sum + " правильных ответов из 15.");

  if(sum > 7 && sum < 12){
  console.log("средний");
  $("#result").text("Вы хорошо знаете авто.");
  $("#result").css("color", "#ffd784");
	}

	if(sum >= 12){
  console.log("высокий");
  $("#result").text("Вы превосходно знаете авто.");
  $("#result").css("color", "#374f34");
	}

	if(sum <= 7){
  console.log("низкий");
  $("#result").text("Вы плохо разбираетесь в авто.");
  $("#result").css("color", "#a80000");
	}
  $("#prav").show();
  $("#result").show();
  $("#knopka").text("Начать заново");
  a = 0;
  }


  else
  {
  $("#prav").text("Данный тест затрагивает далеко не все марки авто.");
  $("#result").text("Автор теста:  Любуцин Максим");
  $("#result").css("color", "#374f34");

  $("#knopka").text("Закончить тест");
  $('html, body').animate({scrollTop:0}, '300');

  $('input:radio').prop('checked', 0);


  a = 1;
  }
}
