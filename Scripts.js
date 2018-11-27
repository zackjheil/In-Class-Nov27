/* Testing the Visibility of Objects


function myButton(){
  document.getElementById("Invisible").style.visibility = "hidden";
  console.log("Hah fake");
}

*?
//This was to test Timeouts and repetitive Motions

/* function WaitForPrint()
{
setTimeout(function(){PrintDivOne(); }, 1000);
}

function PrintDivOne(){
  document.getElementById("divOne").innerHTML += "One Div";
setTimeout(function(){PrintDivTwo() ; }, 2000);
}

function PrintDivTwo(){
  document.getElementById("divTwo").innerHTML += "Two Div";
setTimeout(function(){WaitForPrint() ; }, 1000);
}
*/
