let report_type = undefined;
let gardner = document.getElementById("gardner");
let wexler = document.getElementById("wexler");
let exam_id = document.getElementById("std-id-input");

gardner.addEventListener("click", () => {
    report_type = "gardner";
    gardner.style.backgroundColor = "#0076f5";
    gardner.style.color = "white";
    wexler.style.backgroundColor = "#c1faff";
    wexler.style.color = "#0000005e";
});
wexler.addEventListener("click", () => {
    report_type = "wexler";
    wexler.style.backgroundColor = "#0076f5";
    wexler.style.color = "white";
    gardner.style.backgroundColor = "#c1faff";
    gardner.style.color = "#0000005e";
});
if(report_type === "gardner"){
    //show gardner report card
}
else if(report_type === "wexler"){
    //show wexler report card
}

let view_report = document.getElementById("view-report-btn");
view_report.addEventListener("click", () => {
   if(report_type === undefined){
        window.alert("لطفا یک کارنامه را انتخاب کنید.");
   }
   else if(exam_id.value=="")
   {
        window.alert("لطفا شماره آزمون را وارد کنید")
   }
   else{
       //show report
       location.href = "result/" + report_type + "/" + exam_id.value + "/" +  id2;
   }
//    console.log(exam_id.value);
});