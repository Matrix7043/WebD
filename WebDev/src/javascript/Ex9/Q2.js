let seats = new Array(10);
for (let i = 0; i < seats.length; i++) {
    seats[i] = 0;
}

console.log(seats);

function findAvail(start, end) {
    let i;
    for (i = start; i < end; i++) {
        if(seats[i] === 0) {
            seats[i] = 1;
            return i+1;
        }
    }
    return -1;
}

function BoardingPass(seat, type){
    let output = "<h1>Boarding pass</h1>";
    output += "<table border='1'>";
    output += "<tr>";
    output += "<th>";
    output += "Name";
    output += "</th>";
    output += "<td>";
    output += document.getElementById("Name").value;
    output += "</td>";
    output += "</tr>";
    output += "<tr>";
    output += "<th>";
    output += "Section";
    output += "</th>";
    output += "<td>";
    output += type;
    output += "</td>";
    output += "</tr>";
    output += "<tr>";
    output += "<th>";
    output += "Seat Number";
    output += "</th>";
    output += "<td>"
    output += seat;
    output += "</td>";
    output += "</tr>";
    return output;
}

function Book(){
    const section = parseInt(document.getElementById("section").value);
    document.getElementById("Output").innerHTML = "";

    if (section === 1){

        console.log("First-class Section");
        let seat = findAvail(0, 5);

        if(seat === -1){
            let conf = confirm("Unfortunately there no more seats left in First-class would like us to book you a seat in Economy?");
            if (conf === true) {
                console.log("Economy Section Transition");
                seat = findAvail(5, 10);
                if(seat === -1){
                    console.log("No seats left in Economy");
                    document.getElementById("Output").innerHTML = "<label>No seats left in First-class and Economy</label>";
                }
                else{
                    console.log("Booked Ticket in Economy");
                    document.getElementById("Output").innerHTML = BoardingPass(seat, "First-class");
                }
            }
        }

        else{
            console.log("Booked Ticket in First-class")
            document.getElementById("Output").innerHTML = BoardingPass(seat, "First-class");
        }

    }
    else if (section === 2){
        console.log("Economy Section");
        let seat = findAvail(5, 10);

        if(seat === -1){
            console.log("No seats left in Economy");
            document.getElementById("Output").innerHTML = "<label>No seats left in Economy</label>";

        }

        else{
            console.log("Booked Ticket in Economy");
            document.getElementById("Output").innerHTML = BoardingPass(seat, "Economy");
        }
    }

}
