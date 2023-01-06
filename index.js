const personA = document.getElementById('person-a')
const personB = document.getElementById('person-b')
const CalculateBtn = document.getElementById('but')
const display = document.getElementById('display-div')
const month = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

CalculateBtn.addEventListener('click', function() {
	// first get the values of the input

	const personADateOfBirth = personA.value
	const personBDateOfBirth = personB.value

	// convert them into Date object

	const convertedPersonADate = new Date(personADateOfBirth)
	const convertedPersonBDate = new Date(personBDateOfBirth)

	// grab each of the Date values needed

	let personAYear = convertedPersonADate.getFullYear()
	let personAMonth = convertedPersonADate.getMonth() + 1
	let personADate = convertedPersonADate.getDate()

	let personBYear = convertedPersonBDate.getFullYear()
	let personBMonth = convertedPersonBDate.getMonth() + 1
	let personBDate = convertedPersonBDate.getDate()

	// getting the differences between the year, month and day

	let yearDiff =  personBYear - personAYear
	let monthDiff
	let dateDiff

	if (personBMonth >= personAMonth) {
		monthDiff = personBMonth - personAMonth
	} else {
		yearDiff--
		monthDiff = 12 + personBMonth - personAMonth
	}

	if (personBDate >= personADate) {
		dateDiff = personBDate - personADate
		console.log(dateDiff)
	} else {
		monthDiff--
		let days = month[personBMonth]
		dateDiff = days + personBDate - personADate
		if (monthDiff < 0) {
			monthDiff = 11
			yearDiff--
		}
	}

	// display the result of the codes 

	display.innerHTML = `${yearDiff}Years ${monthDiff}Month ${dateDiff}Days`
	display.style.display = 'block'
})    