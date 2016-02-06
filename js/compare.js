$ (function () {
  var href = location.href;
  var hrefList = href.split('?');
  if (hrefList.length > 1) {
    var queryString = hrefList[1];
    var queryStringList = queryString.replace("id=","").split(',');
    var firstMachineId = queryStringList[0];
    var secondMachineId = queryStringList[1];
    console.log(firstMachineId, secondMachineId);

  }
});
