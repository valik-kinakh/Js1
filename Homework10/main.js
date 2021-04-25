/////////Task1//////////
$("a[href^='https://']").attr('target','_blank');

/////////Task2//////////
$(".head").css('color','green').find(".inner").css('font-size','35px');

////////Task3///////////
$("h3:first").before($("div:first"));
$("h3:last").before($("div:last"));

////////Task4//////////
let count = 0;

$("input").on("change", function () {

if ($("input").eq(0).prop("checked") == true || $("input").eq(1).prop("checked") == true || $("input").eq(2)
.prop("checked") == true || $("input").eq(3).prop("checked") == true || $("input").eq(4).prop("checked") ==
true || $("input").eq(5).prop("checked") == true) {
count++;

} else {
count--;
}

if (count >= 3) {
$("input").attr("disabled", "disabled");
}
})