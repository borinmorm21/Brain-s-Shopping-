function calculateCost() {
    const budget = parseFloat(document.getElementById('budgetInput').value)
    const belt = parseFloat(document.getElementById('beltNum').value)
    const shirt = parseFloat(document.getElementById('shirtNum').value)

    //item cost multiple with items quantity 
    const beltCost = 5 * belt
    const shirtCost = 10 * shirt

    //amount left
    const moneyLeft = budget - (beltCost + shirtCost)
    //amount need to pay
    const payAmount = budget - moneyLeft

    if(isNaN(budget) || isNaN(belt) || isNaN(shirt)){
        document.getElementById('output').innerHTML = 'Invalid input. Please enter a number.'
    } else if(budget < (beltCost + shirtCost)){
        //Not enough amount
        const leftAmount = (beltCost + shirtCost) - budget
        document.getElementById('output').innerHTML = `You don't have enough amount. <br>You need <span>$${leftAmount}</span> more.`
    } else {
        document.getElementById('output').innerHTML = `You need to pay <span>$${payAmount.toFixed(2)}</span>, You have <span>$${moneyLeft}</span> left.`
    }
  }