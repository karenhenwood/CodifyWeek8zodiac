//Day option creation
//Create an array to store values of 1-31 in
//Push the value of i into the array in a string format 
//Include leading zeros (if statement)
//Add each string to the DOM as the loop goes
var day = [];
for(var i=1; i<=31; i++){
 	if(i<10){
 		day.push("0"+i);
 	}else{
 		day.push(i.toString());
 	}

 	//Create an option HTML element <option></option>
 	var d = document.createElement("option");
 	//Assign the value of the option HTML element as the string representing the day value 
 	//<option value="i"></option>
 	d.value = day[i-1];
 	//Create the HTML text of the day value "01"...
 	var noded = document.createTextNode(day[i-1]);
 	//Create the final element that looks like <option value="i">"i"</option>
 	d.appendChild(noded);
 	//Select the thing we are going to stick the options in (day selector)
 	elementd = document.getElementById("day");
 	//Finally modify the day sector with the new option
 	elementd.appendChild(d);
}

//Year option creation
//Create an array to store year values in
//Push the value of i into the array in a string format 
//Include leading zeros (if statement)
//Add each string to the DOM as the loop goes
var year = [];
var index = 0;
for(var i=1900; i<=2017; i++){
 	year.push(i.toString());	
 	//Create an option HTML element <option></option>
 	var y = document.createElement("option");
 	//Assign the value of the option HTML element as the string representing the day value 
 	//<option value="i"></option>
 	y.value = year[index];
 	//Create the HTML text of the day value "01"...
 	var nodey = document.createTextNode(year[index]);
 	//Create the final element that looks like <option value="i">"i"</option>
 	y.appendChild(nodey);
 	//Select the thing we are going to stick the options in (day selector)
 	elementy = document.getElementById("year");
 	//Finally modify the day sector with the new option
 	elementy.appendChild(y);
 	index = index +1;
}

document.getElementById('Enter').onclick = function(){getDate()};
function getDate() {
    var m = document.getElementById("month").value;
    var d = document.getElementById("day").value;
    var y = document.getElementById("year").value;
    var moffset = Number(m)+1;
    document.getElementById("datereturn").innerHTML = moffset+"/"+d+"/"+y;
    var date = new Date(y,m,d); 
    console.log(date)
    var today = new Date (2017, 04,03)
    if (date<today){
    	console.log("date is less than today")
    }else{
    	console.log("date is greater than today")
    }
}



