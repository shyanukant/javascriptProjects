const person = document.getElementById('number')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const bill = document.getElementById('bill')
const tip = document.getElementById('tip')
const payAmount = document.getElementById('payAmount')
let addPerson = Number(person.innerText)

const calculate = () => {
    billAmount = Number(bill.value)
    tipAmount = Number(tip.value)
    finalBill = billAmount + (billAmount * tipAmount/100)

    totalPerPerson = finalBill/addPerson
    payAmount.innerText = `$${totalPerPerson.toLocaleString('en-US')}`
}
const increase = () => {
    addPerson += 1
    person.innerText = addPerson
    calculate()
}
const decrease = () => {
    if (addPerson > 1) {
        addPerson -= 1
        person.innerText = addPerson
    }
    calculate()
}
plus.onclick = () => increase()
minus.onclick = () => decrease()
bill.onkeyup, bill.oninput = () => calculate()
tip.onkeyup, tip.oninput = () => calculate()