let product = [
    {"name": "Apple", "cost": 10, "img": "Apple.png"},
    {"name": "Banana", "cost": 5, "img": "Banana.png"},
    {"name": "Avocado", "cost": 7, "img": "Avocado.png"},
]

let Billed = []
let Total = 0;

function Receipt(){

    let f_name = document.getElementById("f_name").value;
    let l_name = document.getElementById("l_name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("ph_no").value;
    let output = "<h2>Receipt</h2>"
    output += "<table>"
    output += `
    <tr>
        <td colspan="5" align="middle">Customer Details</td>
    </tr>
    <tr>
        <td colspan="2">Name: ${f_name} ${l_name}</td>
        <td>Ph_no: ${phone}</td>
        <td colspan="2">Email: ${email}</td>
    </tr>
    <tr>
        <td colspan="4" align="middle">Bill</td>
    </tr>
    <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Cost per Kg</th>
        <th>Total</th>
    </tr>
    `
    for(let i = 0; i < Billed.length; i++){
        output += `
        <tr>
            <td>
                ${Billed[i]["name"]}
            </td>
            <td>
                ${Billed[i]["quantity"]}
            </td>
            <td>$ ${Billed[i]["cost"]}</td>
            <td>
                <label>$ ${Billed[i]["Total"]}</label>
            </td>
        </tr>`;
    }
    output += `<tr>
                <td colspan="4" align="middle"> Total: $ ${Total}</td>
               </tr>
               </table>`

    return output;

}

function Bill(){

    Billed = []
    let total = 0;

    let boxes = document.getElementsByClassName("c_round");

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].checked){
            let temp = "w_" + product[i]["name"];
            let quantity = parseFloat(document.getElementById(temp).value) || 0;
            let total_p = quantity * product[i].cost;
            let item = {
                "name": product[i].name,
                "cost": product[i].cost,
                "quantity": quantity,
                "Total": total_p
            }
            total += total_p;
            Billed.push(item);
        }
    }
    Total = total;
    let newWindow = window.open("", "_blank");

    newWindow.document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Receipt</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h2 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid black; padding: 10px; text-align: center; }
            th { background-color: #f2f2f2; }
        </style>
    </head>
    <body>
        ${Receipt()}
    </body>
    </html>`);

    newWindow.document.close();

}

function RenderPage(){

    let output = "<h2>Product</h2>"
    output += "<table>"

    for(let i = 0; i < product.length; i++){
        output += `
        <tr>
            <td>
                <img alt="${product[i]["name"]}" src="${product[i]["img"]}" class="i_round">
            </td>
            <td>
                <input type="checkbox" id="c_${product[i]["name"]}" class="c_round">
                ${product[i]["name"]}
            </td>
            <td>$ ${product[i]["cost"]}</td>
            <td>
                <input type="text" id="w_${product[i]["name"]}" class="round">
                <label> kg</label>
            </td>
        </tr>`;
    }
    output += `<tr>
                <td colspan="4" align="middle"><button onclick="Bill()"> Submit </button></td>
               </tr>
               </table>`
    document.getElementById("product").innerHTML = output;
}