function createButton(){
    let button = document.createElement('button');
    button.innerText = 'Button';
    button.style.backgroundColor = 'red';
    button.addEventListener("mouseover",function(){button.style.backgroundColor = "green"})
    button.addEventListener("mouseout",function(){button.style.backgroundColor = "red"})

    document.body.appendChild(button);
}

function numberOfKeys(){

    let input = document.createElement("input");
    input.type = "text";
    let inputNumber = document.createElement("input");
    inputNumber.type = "number";
    inputNumber.value = "0";
    input.addEventListener("keydown", function(){
        inputNumber.value = (1 + parseInt(inputNumber.value)).toString();
    })

    document.body.appendChild(input);
    document.body.appendChild(inputNumber);

}

function createTextBox(){
    let textBox = document.createElement('input');
    textBox.style.backgroundColor = 'green';
    textBox.type = 'text';
    textBox.value = 'Hello World';
    textBox.addEventListener('focus',function(){ textBox.style.backgroundColor = "Yellow";});
    textBox.addEventListener('blur',function(){ textBox.style.backgroundColor = "green"; textBox.value = 'Hello World';});

    document.body.appendChild(textBox);
}

function buttonWithAList(){
    let input = document.createElement('input');
    let list = document.createElement('ul');
    input.type = 'text';
    let button = document.createElement('button');
    button.innerText = 'Add';
    button.addEventListener("dblclick", function(){
        if (input.value.trim() !== '') {
            let item = document.createElement('li');
            item.innerHTML = input.value;
            list.appendChild(item);
            input.value = '';
        }
    });
    document.body.appendChild(input);
    document.body.appendChild(button);
    document.body.appendChild(list);

}

function createTable() {
    let table = document.createElement("table");
    table.border = 1;

    for (let i = 0; i < 2; i++) {  // Start from 0 for correct row indexing
        let row = table.insertRow(i);
        for (let j = 0; j < 3; j++) {  // Start from 0 for correct cell indexing
            let cell = row.insertCell(j);  // Use j instead of i + j
            cell.textContent = "Cell: " + (i + 1) + (j + 1); // Display 1-based index for clarity
        }
    }

    let l0_break = document.createElement("br");
    let l1_break = document.createElement("br");
    let l2_break = document.createElement("br");
    let l3_break = document.createElement("br");
    document.body.appendChild(table);
    document.body.appendChild(l0_break);
    createButton();
    document.body.appendChild(l1_break);
    createTextBox();
    document.body.appendChild(l2_break);
    buttonWithAList();
    document.body.appendChild(l3_break);
    numberOfKeys();
}

