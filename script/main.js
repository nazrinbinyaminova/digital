$(window).ready(function() {
	$(".dropBtn").hide();
	count=true;
	$("#listBtn").click(function(event) {
		$(".dropBtn").removeClass('hidden-xs');
		if (count==true) {
			$(".dropBtn").slideDown("slow");
			$("#listBtn").attr("class", "lnr lnr-cross")
			$("#listBtn").css("float", "right")

			count=false;
		}else {
			count=true;
			$(".dropBtn").slideUp();
			$("#listBtn").attr("class", "lnr lnr-menu")
		}
	});
});

$(window).ready(function(){
	$(".topBtn").click(function() {
		$(window).animate({
			scrollTop: 0,
		}, 1000);
	});
})
