// $(function changeImage() {
// 	var image = document.getElementByID('eagleaeroadd');
// 	if (image.src = ("eagleaeroadd")) {
// 		image.src = "img/redadd.png";
// 	} 
// 	else {
// 		image.src = "img/whiteadd.png";
// 	}

// });



$ (function () {
		$(".compare-product").hide();

		$("#eagleaeroadd" && "#ihawkaeroadd").click(function() {
			$(".machine-greybox").attr('src', "../img/redadd.png")
		
			$(".compare-product").show();

		})

});


