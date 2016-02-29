var hk47 = {};

$(document).ready(function(){
  $('#darthRevan').on('submit', function(event){
    event.preventDefault();

    $.each($('#darthRevan').serializeArray(), function(i,field){
      hk47[field.name] = field.value;
    });
    $('#darthRevan').find('input[type=text]').val("");
    kirKanosArray.push(hk47);
    monlthlyCreditsSpent();
  });
  //monlthlyCreditsSpent();
});

var kirKanosArray = [];
var monthlyCreds = 0;

function monlthlyCreditsSpent(){

  for(var i = 0; i < kirKanosArray.length; i++){
    var kyleKatarn = kirKanosArray[i];
    //monthlyCreds += parseInt(kyleKatarn.yearlySal/12);
    $('.tieFighter').text("Name: " + kyleKatarn.empName);
    $('.tieBomber').text("ID Number: " + kyleKatarn.empIDnum);
    $('.tieInterceptor').text("Job Title: " + kyleKatarn.jobTitle);
    $('.tieAdvanced').text("Yearly Salary: " + kyleKatarn.yearlySal);
    var employeeCount = i + 1;
    //$('.ebonHawk').text("Total monthly cost of salaries: $" + monthlyCreds);
    //$('.c3PO').text("Total employees counted: " + employeeCount);
    //This is where I append the data
    //$('.rakataPrime').append('<div></div>');
    //var carnorJax = $('.rakataPrime').children().last();
    //carnorJax.append('<p>#' + employeeCount + ') NAME: ' + hk47.empName + ' ID NUMBER: ' + hk47.empIDnum + ' JOB TITLE: ' + hk47.jobTitle + ' YEARLY SALARY: ' + hk47.yearlySal);
  }
  monthlyCreds += parseInt(kyleKatarn.yearlySal/12);
  //var employeeCount = i + 1;
  $('.ebonHawk').text("Total monthly cost of salaries: $" + monthlyCreds);
  $('.c3PO').text("Total employees counted: " + employeeCount);

  $('.rakataPrime').append('<div></div>');
  var carnorJax = $('.rakataPrime').children().last();
  carnorJax.append('<p>#' + employeeCount + ') NAME: ' + hk47.empName + ' ID NUMBER: ' + hk47.empIDnum + ' JOB TITLE: ' + hk47.jobTitle + ' YEARLY SALARY: ' + hk47.yearlySal);
  console.log(kirKanosArray);
  console.log(monthlyCreds);
  console.log(hk47);
}
