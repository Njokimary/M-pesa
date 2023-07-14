const mpesapin = 2323
let mpesabalance = 6270
let businessNumbers =[888888,247247,522522,888880]

function safaricomMpesa(){
    let menu = prompt('1 Send money\n 2 Withdraw\n 3 Buy Airtime\n 4 Lipa na M-pesa')
    if (menu ==1 || "Send Money"){
        let sendMoney = prompt( "Enter phone number");
        if (sendMoney == 1234567890){
            let amount = prompt( "Enter amount"); Default  
            let pin =prompt( "Enter pin number"); Default
            alert("Money sent successfully!");
        }else{
            alert("sorry,Your option is not available")
        }
    }
    if (menu ==4 || menu == "Lipa na M-pesa"){
        let lipaNaMpesa = prompt('1 Paybill\n 2 Buy goods and services\n 3 Pochi la biashara\n')

        if (lipaNaMpesa == 1){
            let businessNumber = prompt('Enter business number')
            let parsedBusinessNumber = parseInt(businessNumber)
            let lengthBusinessNumber =businessNumber.toString().length
            
            if(Number.isInteger(parsedBusinessNumber) && lengthBusinessNumber >=5 && lengthBusinessNumber <=6 && businessNumber.includes(parsedBusinessNumber)){
                let accNo = prompt ("Enter account number")
                if(accNo.length > 0){

                }
                let amount =parseInt(prompt ("Enter amount")) 
                //amount convert to interger 
                //confirm is the amunt is less than the balance >0
                
                if(amount <= mpesabalance && Number.isInteger(amount)){
                    let confirmation = confirm ("Do you wish to proceed with the transaction")
                    if(confirmation == true){
                        alert("Transaction successful")
                        mpesabalance = mpesabalance - amount
                    }
                }
                else{
                    alert("Insufficient Amount.Try fuliza")
                }
                alert("proceed")
            }else{
                alert("invalid business number")
            }


        }else if (lipaNaMpesa == 2){
            alert("buy goods and services")
        }else { 
            alert("sorry,Your option is not available")}
    }else if(menu==3){
        alert('Buy Airtime')
    }else{
        alert('sorry, Your option is not available')
    }

}

 console.log(safaricomMpesa())