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

//When button is clicked, start function calls with getDate()
document.getElementById('Enter').onclick = function(){
    getDate();
};

//getDate takes the user's year month day selection from the screen and assigns them into a date object
//called date.  It then passes that date object to the findSign fuction
function getDate() {
    var date = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("day").value); 
    findSign(date);
};

//findSign figures out what the user's sign is based on the date object it was passed and then calls the
//makeLink function.  makeLink needs to know the sign and the index of the href it should use for that
//sign.
function findSign(date){
    //Capricorn dates Dec22-Dec31 and Jan01-Jan19
    if(date.getMonth()==11 && date.getDate()>=22 || date.getMonth()==00 && date.getDate()<20){   
        makeLink("Capricorn", 0);
    }
    //Aquarius dates Jan20-Jan31 and Feb01-Feb18
    else if(date.getMonth()==00 && date.getDate()>=20 || date.getMonth()==01 && date.getDate()<19){
        makeLink("Aquarius", 1);
    }
    //Pices dates Feb19-Feb29 and Mar02-Mar20
    else if (date.getMonth()==01 && date.getDate()>=19 || date.getMonth()==02 && date.getDate()<21){
        makeLink("Pices", 2);
    }
    //Aries dates
    else if (date.getMonth()==02 && date.getDate()>=21 || date.getMonth()==03 && date.getDate()<20){
        makeLink("Aries",3);
    }
    //Tarus dates
    else if (date.getMonth()==03 && date.getDate()>=20 || date.getMonth()==04 && date.getDate()<21){
        makeLink("Tarus", 4);
    }
    //Gemini dates
    else if (date.getMonth()==04 && date.getDate()>=21 || date.getMonth()==05 && date.getDate()<21){
        makeLink("Gemini", 5);
    }
    //Cancer dates
    else if (date.getMonth()==05 && date.getDate()>=21 || date.getMonth()==06 && date.getDate()<23){
        makeLink("Cancer", 6);
    }
    //Leo dates
    else if (date.getMonth()==06 && date.getDate()>=23 || date.getMonth()==07 && date.getDate()<23){
        makeLink("Leo", 7);
    }
    //Virgo dates
    else if (date.getMonth()==07 && date.getDate()>=23 || date.getMonth()==08 && date.getDate()<23){
        makeLink("Virgo", 8);
    }
    //Libra dates
    else if (date.getMonth()==08 && date.getDate()>=23 || date.getMonth()==09 && date.getDate()<23){
        makeLink("Libra", 9);
    }
    //Scorpio dates
    else if (date.getMonth()==09 && date.getDate()>=23 ||date.getMonth()==10 && date.getDate()<22){
        makeLink("Scorpio", 10);
    }
    //Sagittarius dates
    else if (date.getMonth()==10 && date.getDate()>=22 || date.getMonth()==11 && date.getDate()<22){
        makeLink("Sagittarius", 11);
    };

//makeLink holds onto a bunch of links to the astostyles website for each sign and replaces the anchor element
//in index.html with custon string with the user's sign that links them to the astrostyels website.
//makeLink needs to be passed the correct sign and index from findSign to build the right link
function makeLink(sign, index){
    var astostyleLinks = [
    //Capricorn link
        "http://astrostyle.com/capricorn-horoscope/?_ga=2.227532830.2042845848.1493865470-1968424341.1493865069",
    //Aquarius link
        "http://astrostyle.com/aquarius-horoscope/?_ga=2.63383727.1026654909.1493870831-1968424341.1493865069",
    //Pices link
        "http://astrostyle.com/pisces-horoscope/?_ga=2.224898330.1888346831.1493870854-1968424341.1493865069",
    //Aries link
        "http://astrostyle.com/aries-horoscope/?_ga=2.195155695.2133227147.1493871364-1968424341.1493865069",
    //Tarus link
        "http://astrostyle.com/taurus-horoscope/?_ga=2.195155695.2133227147.1493871364-1968424341.1493865069",
    //Gemini link
        "http://astrostyle.com/gemini--horoscope/?_ga=2.91383322.1285016157.1493871397-1968424341.1493865069",
    //Cancer link
        "http://astrostyle.com/cancer-horoscope/?_ga=2.239370499.1428095349.1493871422-1968424341.1493865069",
    //Leo link
        "http://astrostyle.com/leo-horoscope/?_ga=2.191207530.1590654686.1493871435-1968424341.1493865069",
    //Virgo link
        "http://astrostyle.com/virgo-horoscope/?_ga=2.264569479.920382855.1493871453-1968424341.1493865069",
    //Libra link
        "http://astrostyle.com/libra-horoscope/?_ga=2.91896026.1777955588.1493871473-1968424341.1493865069",
    //Scorpio link
        "http://astrostyle.com/scorpio-horoscope/?_ga=2.27754879.2108274600.1493871497-1968424341.1493865069",
    //Sagittarius link
        "http://astrostyle.com/sagittarius-horoscope/?_ga=2.169668705.1138769747.1493871557-1968424341.1493865069"];

    var anchor = document.getElementById("signlink");
    //if statement adjusts the anchor text's grammar (an vs. a) for signs that start with vowels
    if(sign =="Aquarius" || sign == "Aries"){
        var anchorText = "You're an " + sign + "! Click here to go to Astrosyle.com and learn more";
    }else{
        var anchorText = "You're a " + sign + "! Click here to go to Astrosyle.com and learn more";  
    };
    anchor.innerHTML = anchorText;
    anchor.href = astostyleLinks[index];
    }
};




