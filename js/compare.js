
$ (function () {
    var href = location.href;
    var hrefList = href.split('?');
    if (hrefList.length > 1) { //split by ? and only get 1 length, prevent from failing. dont have a ? inside href. *(sth?sth = length = 1)
      var queryString = hrefList[1]; //id=3,2
      var queryStringList = queryString.replace("id=","").split(','); //["3", "2"]
      var firstMachineId = queryStringList[0];
      var secondMachineId = queryStringList[1];
      console.log(firstMachineId, secondMachineId);
      console.log (queryStringList);
  }
 });

// $(function () {
//     $.get("machinelist.csv", function(csvString) {
//         // Append DOM from csv to #machine-items-container
//         var csvObject = Papa.parse(csvString);
// });

// function getCSVid () {
//     for (var i=0; i<csvObject.data,length-1; i++)
//     {
//       if (firstMachineId == csvObject.data[i])
//       {
//         console.log (i);

//       }

//       else {
//         console.log("fail");
//       }
//     }
// }


// $(".sidebar").hide();
// console.log("pass");
// $(".bonding-capability").click(function(){
// $(".datainfo-container").hide();

// }) ;
 



$("#bonding-capability").click(function(){
  console.log("a");
  $(".nav li").removeClass();
  

  $(this).addClass("active");
  console.log("b");
  $(".col-sm-2 .dataCate").hide(); 
 console.log("c");
 

});

// $(".sidebar li a").click(function(){
//   var OurClass = $(this).attr('class');

//   $(".sidebar li").removeClass('active');
//   $(this).parent().addClass('active');



// });



$(function (){
  $.get(".machinelist.csv", function(csvString) {
    var csvObject = Papa.parse(csvString);

    for (var i=0; i<csvObject.data;length-1; i++) {
      $('machineimage-container').append(machineItemToDisplay (csvObject.data[i+1][1], csvObject.data[i+1][2]));
    }
  }

});

function machineItemToDisplay (machineName, machineImage) {
  return (
'<div class="col-sm-6 compare-machine-item">'
            + '<div class="center-block">'
              + '<div class="compare-machine-name first-machine text-center">' + machineName + '</div>'
               + '<img src="img/wb-img/wb-thumbnails/' +machineImage + '" class="img-responsive">'
                + '</div>'
            +'</div>'
  );
}

