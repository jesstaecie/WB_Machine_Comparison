$(function () {
		$.get("machinelist.csv", function(csvString) {
				// Append DOM from csv to #machine-items-container
				var csvObject = Papa.parse(csvString);
				var title = csvObject.data[0];

				for(var i=0; i<csvObject.data.length-1; i++) {
					$('#machine-items-container').append(machineItemRowHtml(csvObject.data[i+1][1], csvObject.data[i+1][0], csvObject.data[i+1][2]));
				}


				// On click setup
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
						.not(".select-machine-item-select[data-machine-id="+firstMachineItemId+"]") //plus three strings tgt => .machineitem[data-id=5]
						.not(".select-machine-item-select[data-machine-id="+secondMachineItemId+"]")
						.attr("src", "img/fadedadd.png");


						$(".compare-product").show();
					} else { // not full
						$(".select-machine-item-select")
						.not(".select-machine-item-select[data-machine-id="+firstMachineItemId+"]") //will select either one with id
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
});


function machineItemRowHtml(machineName, machineId, machineImage) {
	return (
		'<div class="col-sm-4 select-machine-item">'
			+ '<div class="center-block">'
				+ '<img src="img/wb-img/wb-thumbnails/'+ machineImage + '" class="img-responsive" >'
					+ '<div class="machine-greybox text-center" style="color:white">'
						+ machineName	+ ' <img src="img/whiteadd.png" width="20" height="20" align="right" data-machine-id="' + machineId + '" class="select-machine-item-select">'
					+ '</div>'
			+ '</div>'
		+ '</div>'
	);
}
