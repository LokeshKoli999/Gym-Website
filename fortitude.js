 
 function home()
{
    document.getElementById("homes").style.color="yellow";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function program()
{
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="yellow";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function plan()
{
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="yellow";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function blog()
{
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="yellow";
    document.getElementById("contacts").style.color="white";
}
function contact()
{
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="yellow";
}



// submit

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == "")
    {
        alert("Please enter name")
    }else if(number.value == "")
    {
        alert("Please enter number")
    }else
    {
        alert("Thank You for joining"+name.value)
    }
}
    