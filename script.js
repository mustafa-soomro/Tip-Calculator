
// Variables - Put in your own variables to solve
let billAmount = 100
let numberOfDiners = 2
let serviceQuality = 'Terrible' //Good, Bad, or Terrible 







// Function that calculates the tip based off of what is entered
const calctip = () => {
  if (serviceQuality === 'Great') {
    return 0.2
  
} else if (serviceQuality === 'Good') 
    return 0.15

  else if (serviceQuality === 'Terrible') {
    return 0.10
}
 }

// Logs the variables entered
console.log('VARIABLES ENTERED:')
console.log('Bill Amount: $' + billAmount)
console.log('Number of Diners: ' + numberOfDiners)
console.log('Service Quality (great/good/terrible): ' + serviceQuality)

// Calculates the tip amount and logs it 
console.log('Tip: $' + (billAmount * calctip()))

// Calculates and logs the total bill plus the tip amount 
console.log('Total with tip: $' + (billAmount * calctip() + billAmount))

// Calculates how much each diner would pay 
console.log('Each diner would pay: $' + (billAmount * calctip() + billAmount) / numberOfDiners)