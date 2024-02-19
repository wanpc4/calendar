var year = 2024, day_to_day = "", day_1 = "Monday", day_2 = "Tuesday", day_3 = "Wednesday", day_4 = "Thursday", day_5 = "Friday", day_6 = "Saturday", day_7 = "Sunday";

//Make the days become a single letter:
function daysLowerCase(){
	var days = [day_1.substring(0,1).toUpperCase(),day_2.substring(0,1).toUpperCase(),day_3.substring(0,1).toUpperCase(),day_4.substring(0,1).toUpperCase(),day_5.substring(0,1).toUpperCase(),day_6.substring(0,1).toUpperCase(),day_7.substring(0,1).toUpperCase()];
	return `<td><strong>${days[6]}</strong></td>
<td><strong>${days[0]}</strong></td>
<td><strong>${days[1]}</strong></td>
<td><strong>${days[2]}</strong></td>
<td><strong>${days[3]}</strong></td>
<td><strong>${days[4]}</strong></td>
<td><strong>${days[5]}</strong></td>`;
}

//From the first until the last day of the month
function daysInMonth(){
	for(var i = 0; i <= 9; i++){
		day_to_day += i;
	}

	return day_to_day;
}

//January
function janMonth(){
	var month = "January";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td>${daysInMonth()[3] + day_to_day[1]}</td>
	<td></td>
	<td></td>
	<td></td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//February
function febMonth(){
	var month = "February";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td></td>
	<td></td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//March
function marMonth(){
	var month = "March";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[3] + day_to_day[1]}</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//April
function aprMonth(){
	var month = "April";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//May 
function mayMonth(){
	var month = "May";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td></td>
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td>${daysInMonth()[3] + day_to_day[1]}</td>
	<td></td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//June
function junMonth(){
	var month = "June";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>${daysInMonth()[1]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//July 
function julMonth(){
	var month = "July";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td>${daysInMonth()[3] + day_to_day[1]}</td>
	<td></td>
	<td></td>
	<td></td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//August
function augMonth(){
	var month = "August";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td>${daysInMonth()[3] + day_to_day[1]}</td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//September
function sepMonth(){
	var month = "September";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//October
function octMonth(){
	var month = "October";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td>${daysInMonth()[3] + day_to_day[1]}</td>
	<td></td>
	<td></td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//November
function novMonth(){
	var month = "November";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//December 
function decMonth(){
	var month = "December";

	return `<tr id="month-year">
	<th colspan="7"><i>${month}</i> <i>${year}</i></th>	
</tr>

<tr id="days">
	${daysLowerCase()}
</tr>

<tr id="first-week">
	<td>${daysInMonth()[1]}</td>
	<td>${daysInMonth()[2]}</td>
	<td>${daysInMonth()[3]}</td>
	<td>${daysInMonth()[4]}</td>
	<td>${daysInMonth()[5]}</td>
	<td>${daysInMonth()[6]}</td>
	<td>${daysInMonth()[7]}</td>
</tr>

<tr id="second-week">
	<td>${daysInMonth()[8]}</td>
	<td>${daysInMonth()[9]}</td>
	<td>${daysInMonth()[1] + day_to_day[0]}</td>
	<td>${daysInMonth()[1] + day_to_day[1]}</td>
	<td>${daysInMonth()[1] + day_to_day[2]}</td>
	<td>${daysInMonth()[1] + day_to_day[3]}</td>
	<td>${daysInMonth()[1] + day_to_day[4]}</td>
</tr>

<tr id="third-week">
	<td>${daysInMonth()[1] + day_to_day[5]}</td>
	<td>${daysInMonth()[1] + day_to_day[6]}</td>
	<td>${daysInMonth()[1] + day_to_day[7]}</td>
	<td>${daysInMonth()[1] + day_to_day[8]}</td>
	<td>${daysInMonth()[1] + day_to_day[9]}</td>
	<td>${daysInMonth()[2] + day_to_day[0]}</td>
	<td>${daysInMonth()[2] + day_to_day[1]}</td>
</tr>

<tr id="fourth-week">
	<td>${daysInMonth()[2] + day_to_day[2]}</td>
	<td>${daysInMonth()[2] + day_to_day[3]}</td>
	<td>${daysInMonth()[2] + day_to_day[4]}</td>
	<td>${daysInMonth()[2] + day_to_day[5]}</td>
	<td>${daysInMonth()[2] + day_to_day[6]}</td>
	<td>${daysInMonth()[2] + day_to_day[7]}</td>
	<td>${daysInMonth()[2] + day_to_day[8]}</td>
</tr>

<tr id="fourth-week-extend">
	<td>${daysInMonth()[2] + day_to_day[9]}</td>
	<td>${daysInMonth()[3] + day_to_day[0]}</td>
	<td>${daysInMonth()[3] + day_to_day[1]}</td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>

<tr id="fourth-week-extend">
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
	<td></td>
</tr>`;
}

//To display days
document.getElementById("days").innerHTML = daysLowerCase();

//January 2024: 
document.getElementById("january").innerHTML = janMonth();
console.log(janMonth());

//February 2024:
document.getElementById("february").innerHTML = febMonth();
console.log(febMonth());

//March 2024:
document.getElementById("march").innerHTML = marMonth();
console.log(marMonth());

//April 2024:
document.getElementById("april").innerHTML = aprMonth();
console.log(aprMonth());

//May 2024:
document.getElementById("may").innerHTML = mayMonth();
console.log(mayMonth());

//June 2024: 
document.getElementById("june").innerHTML = junMonth();
console.log(junMonth());

//July 2024:
document.getElementById("july").innerHTML = julMonth();
console.log(julMonth());

//August 2024:
document.getElementById("august").innerHTML = augMonth();
console.log(augMonth());

//September 2024:
document.getElementById("september").innerHTML = sepMonth();
console.log(sepMonth());

//October 2024:
document.getElementById("october").innerHTML = octMonth();
console.log(octMonth());

//November 2024: 
document.getElementById("november").innerHTML = novMonth();
console.log(novMonth()); 

//December 2024:
document.getElementById("december").innerHTML = decMonth();
console.log(decMonth());