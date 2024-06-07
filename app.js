document.getElementById("cal").addEventListener("click", () => {
  var sem1 = document.getElementById("sem1").value;
  var sem2 = document.getElementById("sem2").value;
  var sem3 = document.getElementById("sem3").value;
  var sem4 = document.getElementById("sem4").value;
  var sem5=document.getElementById("sem5").value;
   var sem6=document.getElementById("sem6").value;
  var drop = document.getElementById("drop").value;
  
  var drop2= document.getElementById("drop2").value;
  var sum = sem1 * 20 + sem2 * 24 + sem3 * 20 + sem4 * 20 +sem5*24 +sem6*24;
  var sub = drop * 4+drop2*4;

  //console.log(sum - sub);
  if(sub!=0)
    var ans = (sum - sub) / 132;
  else
    var ans=(sum)/132;
  //console.log(ans);
  document.getElementById("final").value = ans;
  document.getElementById("final").style.visibility = "visible";
});
