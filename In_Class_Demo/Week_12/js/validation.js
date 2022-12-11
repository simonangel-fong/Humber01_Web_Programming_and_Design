function validation() {
  var fname = document.getElementById("t1").value;
  var lname = document.getElementById("t2").value;
  var age = document.getElementById("t3").value;
  var isValid = true;

  if (fname == "") {
    document.getElementById("t1result").innerHTML = "First name is required.";
    isValid = false;
  } else {
    document.getElementById("t1result").innerHTML = "";
  }

  if (lname == "") {
    document.getElementById("t2result").innerHTML = "Last name is required.";
    isValid = false;
  } else {
    document.getElementById("t2result").innerHTML = "";
  }

  if (age == "") {
    document.getElementById("t3result").innerHTML = "Age is required.";
    isValid = false;
  } else if (age < 18 || age > 80) {
    document.getElementById("t3result").innerHTML =
      "Age is not in the range of 18 and 80.";
    isValid = false;
  } else {
    document.getElementById("t3result").innerHTML = "";
  }

  if (isValid == true) {
    document.getElementById("f1").submit();
  }
}
