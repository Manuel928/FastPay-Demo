var a = document.forms["reg"] ["first_name"].value;
var b = document.forms["reg"] ["last_name"].value;
var c = document.forms["reg"] ["email"].value;
var d = document.forms["reg"] ["phone_number"].value;
var e = document.forms["reg"] ["network"].value;
var f = document.forms["reg"] ["amount"].value;

if ((a==null || a=="") && (b==null || b=="") && (c==null || c=="") && (d==null || d=="") && (e==null || e=="") && (f==null || f=="")) {
    alert ("All fields are required");
    return false;
}
if (a==null || a=="") {
    alert ("First name must be filled out");
    return false;
}
if (b==null || b=="") {
    alert ("Last name must be filled out");
    return false;
}
if (c==null || c=="") {
    alert ("Email must be filled out");
    return false;
}
if (d==null || d=="") {
    alert ("Please enter your phone number");
    return false;
}
if (e==null || e=="") {
    alert ("Please select a network provider");
    return false;
}
if (f==null || f=="") {
    alert("Please enter an amount");
    return false;
}