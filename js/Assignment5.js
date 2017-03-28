function GoDark() {
    document.getElementById("area1").style.visibility = "hidden";
    document.getElementById("area2").style.visibility = "hidden";
    document.getElementById("area3").style.visibility = "hidden";
}
function OptionChange()
{
    if (document.getElementById("options").value == "Customer List")
    {
        document.getElementById("area1").style.visibility = "visible";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "hidden";
    }
    else if (document.getElementById("options").value == "Customer Order History")
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "visible";
        document.getElementById("area3").style.visibility = "hidden";
    }
    else if (document.getElementById("options").value == "Customer Order List")
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "visible";
    }
    else
    {
        document.getElementById("area1").style.visibility = "hidden";
        document.getElementById("area2").style.visibility = "hidden";
        document.getElementById("area3").style.visibility = "hidden";
    }
}

function GetList()
{
    var objRequest = new XMLHttpRequest();
    
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/ServiceName/querystring";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
 {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {
    var output = JSON.parse(objRequest.responseText);
    GenerateOutput(output);
    }
 }
 
 objRequest.open("GET", url, true);
 objRequest.send();
 }
function GenerateOutput(result)
{
 var count = 0;
 var displaytext = "";

 for (count = 0; count < result.GetAllCustomersResult.length; count++)
 {
    displaytext += result.GetAllCustomersResult[count].CustomerID + ", " +
    result.GetAllCustomersResult[count].CustomerName + ", " +
    result.GetAllCustomersResult[count].CustomerCity + "<br>";

 }
 document.getElementById("customerdisplay").innerHTML = displaytext;
}

function GetOrderHistory()
{
    var objRequest = new XMLHttpRequest();
    
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getCustomerOrderHistory/customerID";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
 {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {
    var output = JSON.parse(objRequest.responseText);
    GenerateOutput(output);
    }
 }
 
 objRequest.open("GET", url, true);
 objRequest.send();
 }
function GenerateOutput(result)
{
 var count = 0;
 var displaytext = "";


 for (count = 0; count < result.getCustomerOrderHistory.length; count++)
 {
    displaytext += result[count].ProductName + ", " +
    result[count].TotalProductQuantityOrdered + "<br>";

 }
 document.getElementById("historydisplay").innerHTML = displaytext;
}

function GetOrderList()
{
    var objRequest = new XMLHttpRequest();
    
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getOrdersForCustomer/customerID";
    url += document.getElementById("custid").value;
    
    objRequest.onreadystatechange = function()
 {
    if (objRequest.readyState == 4 && objRequest.status == 200)
    {
    var output = JSON.parse(objRequest.responseText);
    GenerateOutput(output);
    }
 }
 
 objRequest.open("GET", url, true);
 objRequest.send();
 }
function GenerateOutput(result)
{
 var count = 0;
 var displaytext = "";


 for (count = 0; count < result.GetOrdersForCustomerResult.length; count++)
 {
    displaytext += result.GetOrdersForCustomerResult[count].OrderDate + ", " +
    result.GetOrdersForCustomerResult[count].OrderID + "<br>";

 }
 document.getElementById("listdisplay").innerHTML = displaytext;
}