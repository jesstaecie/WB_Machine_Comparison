
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



    // function GetData(cell,row){
    // var excel = new ActiveXObject("Excel.Application"); //creates a new ref obj of ActiveXObject for excel application
    // var excel_file = excel.Workbooks.Open("D:\\jess - work\2016\flash_comparison\machine comparison list.csv"); //locate excel file
    // var excel_sheet = excel.Worksheets("machine comparison list"); //sheet in excel we are using
    // var data = excel_sheet.Cells(cell,row).Value; 
    // document.getElementById('compare-machine-name').innerText =data; //get data at the specific cell and row position from this sheet
    // console.log (excel);
   // }


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


$(".sidebar").hide();
console.log("pass");
$(".bonding-capability").click(function(){
$(".datainfo-container").hide();

}) ;






// $(".bonding-capability").click(function(){
//   $(".sidebar li").removeClass("active");
//   $(this).addClass("active");

// })

$(".sidebar li").click(function(){
  var OurClass = $(this).attr('class');

  $(".sidebar li").removeClass('active');
  $(this).parent().addClass('active');

  

});
