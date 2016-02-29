$(document).ready(function(){
  $('#darthRevan').on('submit', function(event){
    event.preventDefault();
    var hk47 = {};
    $.each($('#darthRevan').serializeArray(), function(i,field){
      hk47[field.name] = field.value;
    });
    $('#darthRevan').find('input[type=text]').val("");
    kirKanosArray.push(hk47);
    monlthlyCreditsSpent();
  });
  monlthlyCreditsSpent();
});

var kirKanosArray = [];

function monlthlyCreditsSpent(){
  var monthlyCreds = 0;
  for(var i = 0; i < kirKanosArray.length; i++){
    var kyleKatarn = kirKanosArray[i];
    monthlyCreds += parseInt(kyleKatarn.yearlySal/12);
    $('.tieFighter').text("Name: " + kyleKatarn.empName);
    $('.tieBomber').text("ID Number: " + kyleKatarn.empIDnum);
    $('.tieInterceptor').text("Job Title: " + kyleKatarn.jobTitle);
    $('.tieAdvanced').text("Yearly Salary: " + kyleKatarn.yearlySal);
    var employeeCount = i + 1;
    $('.ebonHawk').text("Total monthly cost of salaries: $" + monthlyCreds);
    $('.c3PO').text("Total employees counted: " + employeeCount);
  }
  console.log(kirKanosArray);
  console.log(monthlyCreds);

}
