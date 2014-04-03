// To set mindate in enddate
function customRange(input)
{
return {
        minDate: (input.id == "end_date" ? $("#start_date").datepicker("getDate") : new Date())
      };
}

// To set maxdate in startdate
function customRangeStart(input)
{
return {
        maxDate:(input.id == "start_date" ? $("#end_date").datepicker("getDate") : null)
      };
}

$(document).ready(function() {

   $('#start_date').datepicker(
   {
       beforeShow: customRangeStart,
       minDate: 0,
       dateFormat: "yy-mm-dd",
       changeYear: true
   });

   $('#end_date').datepicker(
   {
       beforeShow: customRange,
       dateFormat: "yy-mm-dd",
       changeYear: true
   });
});