$(".cat").click(function(event) {
	var num = parseInt($(event.target).data("counter")) || 0;
	$(event.target).data("counter", num + 1);
	$(event.target).parent().find(".count-display").text($(event.target).data("counter"));
});