$ (function () {
		$(".compare-product").hide();

		// When user selects 2 buttons,
		// tore machine-id and show compare product button

		// 1. show that you have clicked, remove click when you unclick
		// 2. click machine-id -> get id
		// 3. store 2 id
		// 4. after click 2, show compare-product

		var firstMachineItemId, secondMachineItemId;
		$(".select-machine-item-select").click(function() {
			var machineId = $(this).data("machine-id");

			if (machineId == firstMachineItemId || machineId == secondMachineItemId) { // remove
					if (machineId == firstMachineItemId) {
						firstMachineItemId = undefined;
					} else {
						secondMachineItemId = undefined;
					}
					$(this).attr("src", "img/whiteadd.png");

			} else { // add
				if (firstMachineItemId == undefined && machineId != secondMachineItemId) { // first container is empty
					firstMachineItemId = machineId;
					$(this).attr("src", "img/redadd.png");
				} else if (secondMachineItemId == undefined && machineId != firstMachineItemId) {
					secondMachineItemId = machineId;
					$(this).attr("src", "img/redadd.png");
				}

			}

			if (firstMachineItemId != undefined && secondMachineItemId != undefined) { // full
				$(".select-machine-item-select")
				.not(".select-machine-item-select[data-machine-id="+firstMachineItemId+"]")
				.not(".select-machine-item-select[data-machine-id="+secondMachineItemId+"]")
				.attr("src", "img/fadedadd.png");

				$(".compare-product").show();
			} else { // not full
				$(".select-machine-item-select")
				.not(".select-machine-item-select[data-machine-id="+firstMachineItemId+"]")
				.not(".select-machine-item-select[data-machine-id="+secondMachineItemId+"]")
				.attr("src", "img/whiteadd.png");

				$(".compare-product").hide();
			}

		});


		// When user clicks compare product,
		// bring user to url with querystring id equals to 2 product id

		$(".compare-product").click(function() {
			var url = "compare.html" + "?id=" + firstMachineItemId + "," + secondMachineItemId;
			window.location = url;
		});

});
