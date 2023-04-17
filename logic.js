// declear variable currency one and cuurency two

const currency1 = document.getElementById("currencyOne");
const currency2 = document.getElementById("currencyTwo");
const amount1 = document.getElementById("valueOne");
const amount2 = document.getElementById("valueTwo");
const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

// clculate function

function calculate(){
     const curr1 = currency1.value;
     const curr2 = currency2.value;

     fetch (' https://api.exchangeratesapi.io/latest?base=$(curr1)')
     .then(res =>res.json())
     .then(data =>{
        const rate = data.rates[curr2];
        //rule
        rate.innerText = '1 ${curr1} = ${rateE} ${curr2}';
        valueTwo.value = (valueOne.value*rateE).toFixed(2);
     })
}

currency1.addEventListener('change', calculate);
currency2.addEventListener('change',calculate);
valueOne.addEventListener('change',calculate);
valueTwo.addEventListener('change',calculate);
swap.addEventListener('click',()=>{
    const temp = currency1.value;
    currenc1.value = currency2.value;
    currency2.value = temp;
    calculate();
})






























