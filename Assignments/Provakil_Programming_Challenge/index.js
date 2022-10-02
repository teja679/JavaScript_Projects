
// arguments
// expiry_date (String)
// months_to_buy (int)
// monthly_cost (int)

// var expiry_date = "19/06/2022"
// var months_to_buy = 1
// var monthly_cost = 1000
var finalDay = ''
var finalMonth = 0
var finalYear = ''
const calculate = (expiry_date, months_to_buy, monthly_cost) => {
    const day = expiry_date.slice(0,2)
    const month = expiry_date.slice(3,5)
    const year = expiry_date.slice(6)
    if(day == 1 || day == 15){
        finalDay = day
        finalMonth = month + months_to_buy
        if(finalMonth > 12){
            finalYear = year + (finalMonth/12)
            finalMonth %= 12
        }
    }
    console.log(day, month, year)
    console.log(finalDay, finalMonth, finalYear)
    // console.log(expiry_date, months_to_buy, monthly_cost)
}
calculate("15/06/2022", 1, 1000)