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
    //This is where I append the data
    $('.rakataPrime').append('<div></div>');
    var carnorJax = $('.rakataPrime').children().last();
    carnorJax.append('<p>' + hk47.empName + ' ' + hk47.empIDnum + ' ' + hk47.jobTitle + ' ' + hk47.yearlySal);
    carnorJax.append('<p>Name: ' + hk47.empName + '</p>');
    carnorJax.append('<p>' + hk47.empIDnum + '</p>');
    carnorJax.append('<p>' + hk47.jobTitle + '</p>');
    carnorJax.append('<p>' + hk47.yearlySal + '</p>');
  }
  console.log(kirKanosArray);
  console.log(monthlyCreds);

}
