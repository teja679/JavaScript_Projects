function calculateInterest(){
 let inputValues = document.getElementsByClassName('input-balance')
 let updatedValues = document.getElementsByClassName('updated-balance')

    let temp

    for(let i=0; i<inputValues.length; i++){
        temp = Number(inputValues[i].value)
        if(temp > 200000){
            temp *= (1 + 0.1)
            temp *= (1 - 0.002)
            // temp = temp + temp * 0.1
            // temp = temp - temp * 0.002
        }
        else if (temp > 100000 ) {
            temp *= (1 + 0.05)
            temp *= (1 - 0.0005)
            // temp = temp + temp * 0.05
            // temp = temp - temp * 0.0005
        } else {
            temp *= (1 + 0.03)
            // temp = temp + temp * 0.03
        }
        updatedValues[i].value = Math.round(temp) && temp ? Math.round(temp) : ''
    }

}

// function calculateInterest() {
//     let inputBalanceNodes = document.getElementsByClassName("input-balance");
//     let displayUpdatedBalances = document.getElementsByClassName("updated-balance");
  
//     let temp
  
//     for (let i = 0; i < inputBalanceNodes.length; i++) {
//       temp = Number(inputBalanceNodes[i].value);
//       if(temp > 200000){
//         temp = temp + temp * 0.1
//         temp = temp - temp * 0.002
//       } else if (temp > 100000 ) {
//         temp = temp + temp * 0.05
//         temp = temp - temp * 0.0005
//       } else {
//         temp = temp + temp * 0.03
//       }
//       displayUpdatedBalances[i].value = temp
//     }
//   }