const mpesapin = 2323
let mpesabalance = 627

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