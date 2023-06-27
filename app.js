document.getElementById("cal").addEventListener("click", () => {
  var sem1 = document.getElementById("sem1").value;
  var sem2 = document.getElementById("sem2").value;
  var sem3 = document.getElementById("sem3").value;
  var sem4 = document.getElementById("sem4").value;
  var drop = document.getElementById("drop").value;
  var sum = sem1 * 20 + sem2 * 24 + sem3 * 20 + sem4 * 20;
  var sub = drop * 4;

  //console.log(sum - sub);
  var ans = (sum - sub) / 80;
  //console.log(ans);
  document.getElementById("final").value = ans;
  document.getElementById("final").style.visibility = "visible";
});
