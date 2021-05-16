function compute()
{
	//variables to compute
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    //interest calculator
    var interest = principal * years * rate / 100;
    var endYear = new Date().getFullYear() + parseInt(years);
     var compounded = principal * ((1 + ((rate/100)/12)) ** (12*years))
		
    //validate the principal, if negative show error
    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    
    //the result
    document.getElementById("result").innerHTML = `If you deposit <mark>${principal}</mark>,<br>
    at an interest rate of 
    <mark>${rate}</mark>.<br>
    You will receive an amount of <mark>${interest.toFixed(2)}</mark>,<br>
    in the year <mark>${endYear}</mark>
    <br>
    <br>
    With monthly compounded interest your balance would instead be <mark>${compounded.toFixed(2)}</mark>`;
}

//update the rate
function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rateVal").innerText = `${rateVal}%`;
}
        