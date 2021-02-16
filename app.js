// loginButtonHandler...
const getLogin = () =>{
    const inputEmail = document.getElementById('email-input').value ;
    const inputPass = document.getElementById('pass-input').value ;
    document.getElementById('login-area').style.display = 'none' ;
    document.getElementById('transction-Area').style.display = 'block'
}

//  depositHandler...
const addDeposit = ()=>{
    const depositNumber = getInputs('deposit-input') ;
    if (depositNumber < 0) {
        alert('Deposit value not negative')
    }
    else{
        
        getUpdateSpan(depositNumber ,'current-deposit');
        getUpdateSpan(depositNumber ,'current-Balance')  ;
        document.getElementById('deposit-input').value = ''
    }
}

// commoncode...... 

//    const depositAmount = document.getElementById('deposit-input').value ;
//    const depositNumber = parseFloat(depositAmount) ;

//    const currentDeposit = document.getElementById('current-deposit').innerText ;
//    const currentDepositNumber = parseFloat(currentDeposit) ;
//    const totalDeposit =  depositNumber + currentDepositNumber ;   
//    document.getElementById('current-deposit').innerText= totalDeposit ;     

// updatedd
const getUpdateSpan = (depositNumber , id) => {
    const currentBalance = document.getElementById(id).innerText ;
    const currentBalanceNumber = parseFloat(currentBalance) ;
    const totalBalance = currentBalanceNumber + depositNumber ;
    document.getElementById(id).innerText = totalBalance ;
}
// WithdrawHandler....
const getWithdraw = () =>{
   const withDraw = getInputs('Withdraw-input');
   document.getElementById('Withdraw-input').value  = ''
   getUpdateSpan(withDraw  ,'current-withdraw') ;
   getUpdateSpan(-1*withDraw ,'current-Balance') ;
   
   
}
const getInputs = (id) =>{
    const withdrawInput = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawInput);
    return withdrawNumber 
}
