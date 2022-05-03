console.log('Hello  World')

function enable_val() {
    document.getElementById('custom').style.display = 'block'
    document.getElementById('cus').style.display = 'none'
}

let bill = document.getElementById('bill_inp');
bill.addEventListener('input', setBillVal)

function setBillVal() {
    let bill_val = parseInt(bill.value)



}

let ppl = document.getElementById('inp_people')
ppl.addEventListener('input', set_ppl)

function set_ppl() {
    let set_p = ppl.value

}
// let set_p = ppl.value

// let test = document.getElementById('tst')
// test.addEventListener('click', done)
let set_p = ppl.value

// function done() {
//     console.log(bill.value * ppl.value / 100)
// }





// Final
let tip_five = document.getElementById('for_fv')
tip_five.addEventListener('click', function tip_fv() {
    // Tip Calculation
    let tip_fv_fnl = bill.value * 0.05 / ppl.value
    console.log(bill.value * 0.05 / ppl.value)
    document.getElementById('tip_amt_fn').innerHTML = '$' + tip_fv_fnl.toFixed(2)
    let parsed = parseInt(bill.value)
        // bill Calculation
    document.getElementById('bill_amt_fn').innerHTML = '$' + (bill.value * 0.05 / ppl.value + parsed).toFixed(2)

})

let tip_tn = document.getElementById('tn')
tip_tn.addEventListener('click', function tip_tn() {
    let tip_fv_fnl = bill.value * 0.1 / ppl.value
    console.log(bill.value * 0.1 / ppl.value)
    document.getElementById('tip_amt_fn').innerHTML = '$' + tip_fv_fnl.toFixed(2)
    let parsed = parseInt(bill.value)
        // bill Calculation
    document.getElementById('bill_amt_fn').innerHTML = '$' + (bill.value * 0.1 / ppl.value + parsed).toFixed(2)
})
let tip_ft = document.getElementById('ft')
tip_ft.addEventListener('click', function tip_ft() {
        let tip_fv_fnl = bill.value * 0.15 / ppl.value
        console.log(bill.value * 0.15 / ppl.value)
        document.getElementById('tip_amt_fn').innerHTML = '$' + tip_fv_fnl.toFixed(2)
        let parsed = parseInt(bill.value)
            // bill Calculation
        document.getElementById('bill_amt_fn').innerHTML = '$' + (bill.value * 0.15 / ppl.value + parsed).toFixed(2)
    })
    // 25%
let twf = document.getElementById('twf')
twf.addEventListener('click', function twf_() {
    let tip_fv_fnl = bill.value * 0.25 / ppl.value
    console.log(bill.value * 0.25 / ppl.value)
    document.getElementById('tip_amt_fn').innerHTML = '$' + tip_fv_fnl.toFixed(2)
    let parsed = parseInt(bill.value)
        // bill Calculation
    document.getElementById('bill_amt_fn').innerHTML = '$' + (bill.value * 0.25 / ppl.value + parsed).toFixed(2)
})
let fifty = document.getElementById('fifty')
fifty.addEventListener('click', function fifty() {
    let tip_fv_fnl = bill.value * 0.5 / ppl.value
    console.log(bill.value * 0.5 / ppl.value)
    document.getElementById('tip_amt_fn').innerHTML = '$' + tip_fv_fnl.toFixed(2)
    let parsed = parseInt(bill.value)
        // bill Calculation
    document.getElementById('bill_amt_fn').innerHTML = '$' + (bill.value * 0.5 / ppl.value + parsed).toFixed(2)
})
let cus_val = document.getElementById('custom')
console.log(cus_val)
    // let bill = document.getElementById('bill_inp');
cus_val.addEventListener('input', setcus)

function setcus() {
    let val = parseInt(cus_val.value)
    console.log(val)



}
let me = cus_val.value

// Custom
let for_cus = document.getElementById('custom')
for_cus.addEventListener('input', function for_num() {
    let tip_fv_fnl = bill.value * cus_val.value * 0.01 / ppl.value
    console.log(bill.value * cus_val.value * 0.01 / ppl.value)
    document.getElementById('tip_amt_fn').innerHTML = '$' + tip_fv_fnl.toFixed(2)
    let parsed = parseInt(bill.value)
        // bill Calculation
    document.getElementById('bill_amt_fn').innerHTML = '$' + (bill.value * cus_val.value * 0.01 / ppl.value + parsed).toFixed(2)
})
let reset = document.getElementById('reset')
reset.addEventListener('click', function reset() {
    document.getElementById('bill_amt_fn').innerHTML = '$' + '0.00'
    document.getElementById('tip_amt_fn').innerHTML = '$' +
        '0.00'
    document.getElementById('custom').style.display = 'none'
    document.getElementById('cus').style.display = 'block'
    ppl.value = 0.00
    bill.value = 0.00
})