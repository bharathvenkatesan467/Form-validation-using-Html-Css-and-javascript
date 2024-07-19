function v()
{
    var fname=document.va.fname.value;
    var lname=document.va.lname.value;
    var city=document.va.city.value;
    var number=document.va.number.value;
    var address=document.va.address.value;

    if(fname==null || fname=="")
    {
        alert("First Name should not be blank");
        return false;
    }
    else if(lname==null || lname=="")
    {
        alert("Last Name should not be blank");
        return false;
    }
    else if(city==null || city=="")
    {
        alert("City should not be blank");
        return false;
    }
    else if(number==null || number=="")
    {
        alert("Number should not be blank");
        return false;
    }
    else if(address==null || address=="")
    {
        alert("Address should not be blank");
        return false;
    }
    else{
        alert("form submited successfully");
    }
}

