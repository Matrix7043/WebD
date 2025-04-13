let data = {
    1: {"name": "Alen", "age": 39},
    2: {"name": "Deena", "age": 47},
    3: {"name": "Diana", "age": 21},
    4: {"name": "Jack", "age": 54},
    5: {"name": "Jain", "age": 23},
    6: {"name": "Kevin", "age": 61},
    7: {"name": "Louis", "age": 69},
    8: {"name": "Rex", "age": 49}
}

function SearchPid(){
    document.getElementById("search").innerHTML = "";
    let pid = document.getElementById("myQuery").value;
    if(pid in data){
        let output = "<br><h1>Matching Data:</h1><br><table border='1'>";
        output += "<thead><tr><th>pid</th><th>Name</th><th>Age</th></tr></thead>";
        output += "<tbody>";
        output += "<tr>";
        output += "<td>" + pid + "</td>";
        output += "<td>" + data[pid]["name"] + "</td>";
        output += "<td>" + data[pid]["age"] + "</td>";
        output += "</tr>"
        output += "</tbody>";
        output += "</table>";

        document.getElementById("search").innerHTML = output;

    }
    else{
        document.getElementById("search").innerHTML = "<h3>No record found</h3>";
    }

}

function SortedData() {
    let sortedData = Object.entries(data)
        .map(([id, details]) => ({ id, ...details }))
        .sort((a, b) => b.age - a.age);

    let output = "<br><h1>Sorted Data:</h1><br><table border='1'>";
    output += "<thead><tr><th>pid</th><th>Name</th><th>Age</th></tr></thead>";
    output += "<tbody>";
    for (let i = 0; i < sortedData.length; i++) {
        output += "<tr>";
            output += "<td>" + sortedData[i]["id"] + "</td>";
            output += "<td>" + sortedData[i]["name"] + "</td>";
            output += "<td>" + sortedData[i]["age"] + "</td>";
        output += "</tr>";
    }
    output += "</tbody>";
    output += "</table>";

    document.getElementById("results").innerHTML = output;

}

function FilterAge(){
    let u_limit = parseInt(document.getElementById("u_limit").value);
    let l_limit = parseInt(document.getElementById("l_limit").value);

    document.getElementById("filter").innerHTML = "";

    let output = "<br><h1>Filtered Data:</h1><br><table border='1'>";
    output += "<thead><tr><th>Pid</th><th>Name</th><th>Age</th></tr></thead>";
    output += "<tbody>";
    for (let i of Object.keys(data)) {
        if (data[i].age >= l_limit && data[i].age <= u_limit) {
            output += "<tr>";
            output += "<td>" + i + "</td>";
            output += "<td>" + data[i]["name"] + "</td>";
            output += "<td>" + data[i]["age"] + "</td>";
            output += "</tr>";
        }
    }
    output += "</tbody>";
    output += "</table>";

    document.getElementById("filter").innerHTML = output;

}