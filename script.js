
function convertToNumber(x) {
    var arr = x.split(",");

        for (var i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i])
    }
    return arr;

}

function averageArray(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length;
}

 function doIt() {
     var totalWeight = 0.01 * (parseInt(document.getElementById("homeworkWeight").value) + parseInt(document.getElementById("classworkWeight").value) + parseInt(document.getElementById("assessmentWeight").value) + parseInt(document.getElementById("participationWeight").value));

     var hp = convertToNumber(document.getElementById("homeworkPoints").value);
     var cp = convertToNumber(document.getElementById("classworkPoints").value);
     var ap = convertToNumber(document.getElementById("assessmentPoints").value);
     var pp = convertToNumber(document.getElementById("participationPoints").value);
     var ha =  averageArray(hp) * ( parseInt(document.getElementById("homeworkWeight").value) * .01) ;
     var ca = averageArray(cp) * ( parseInt(document.getElementById("classworkWeight").value) * .01) ;
     var aa = averageArray(ap) * ( parseInt(document.getElementById("assessmentWeight").value) * .01) ;
     var pa = averageArray(pp) * ( parseInt(document.getElementById("participationWeight").value) * .01) ;

     var currentGrade = (ha + ca +aa + pa) / totalWeight;

      document.getElementById("currentGrade").innerHTML = currentGrade + "%";
     document.getElementById("totalWeight").innerHTML = totalWeight * 100 + "%";

     averageColor( averageArray(hp), "homework");
     averageColor(averageArray(cp), "classwork");
     averageColor(averageArray(ap),"assessment");
     averageColor(averageArray(pp),"participation");

     return currentGrade;

}


function  calculateFinalNeeded() {
    var currentGrade = doIt();
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var gradeDesired = parseInt(document.getElementById("gradeDesired").value);
    var totalWeight = 1 - (finalWeight/100);
    var weightedCurrent = currentGrade * totalWeight;
    var gradeNeeded = (gradeDesired - weightedCurrent) / (finalWeight / 100);
    document.getElementById("gradeNeeded").innerHTML = gradeNeeded.toString().slice(0,5) + "% required to get a " + gradeDesired + "%";

}

function createTable() {

    var div = document.getElementById('tableContainer');
    var table = document.createElement("table");
    table.setAttribute("id", "mainTable");
    div.appendChild(table);

}
// i tried, isn't that the whole point :)


function averageColor (average, element){
    if(average >= 90){
        document.getElementById(element).style.background = "green";
    }
    if(average >= 80 && average < 90){
        document.getElementById(element).style.background = "blue";
    }
    if(average >= 70 && average < 80){
        document.getElementById(element).style.background = "yellow";
    }
    if(average >= 60 && average < 70){
        document.getElementById(element).style.background = "orange";
    }
    if(average < 60){
        document.getElementById(element).style.background = "red";
    }

}