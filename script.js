function printNumbers(order) {
    if (order === 'TOP') {
      for (let i = 0; i <= 10; i++) {
        console.log(i);
      }
    } else if (order === 'BOTTOM') {
      for (let i = 10; i >= 0; i--) {
        console.log(i);
      }
    } else {
      console.log('არასწორია');
    }
  }

  
printNumbers('BOTTOM');


function calculator(operation) {
    let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
    let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));
    let result;

    if (operation === 'add') {
        result = num1 + num2;
        alert(`შედეგი: ${result}`);
    } else if (operation === 'subtract') {
        result = num1 - num2;
        alert(`შედეგი: ${result}`);
    } else if (operation === 'multiply') {
        result = num1 * num2;
        alert(`შედეგი: ${result}`);
    } else if (operation === 'divide') {
        if (num2 === 0) {
            alert("გაყოფა ნულზე შეუძლებელია.");
        } else {
            result = num1 / num2;
            alert(`შედეგი: ${result}`);
        }
    } else if (operation === 'lessThan') {
        if (num1 < num2) {
            alert(`${num1} ნაკლებია ${num2}-ზე.`);
        } else {
            alert(`${num1} არ არის ნაკლები ${num2}-ზე.`);
        }
    } else if (operation === 'greaterThan') {
        if (num1 > num2) {
            alert(`${num1} მეტია ${num2}-ზე.`);
        } else {
            alert(`${num1} არ არის მეტი ${num2}-ზე.`);
        }
    } else {
        alert("არასწორი ოპერაცია.");
    }
}


function showProducts(product) {
    const products = [
        { name: 'ვაშლი', price: 2.00 },
        { name: 'ბანანი', price: 13.50 },
        { name: 'კივი', price: 2.25 },
        { name: 'ქოქოსი', price: 15.30 }
    ];

    const productList = document.getElementById('productList');
    productList.innerHTML = ''; 


    if(product === 'show'){
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.textContent = `${product.name} - ფასი: ${product.price} ₾`;
            productList.appendChild(productItem);
        });
    }

    else if(product === 'close'){
        productList.removeChild(productItem);
    }

}