function createButton() {
    let start = document.createElement('button');
    let end = document.createElement('button');
    let reset = document.createElement('button');

    start.textContent = "Start";
    end.textContent = "End";
    reset.textContent = "Reset";

    let Hours = document.createElement('label');
    let Minutes = document.createElement('label');
    let Seconds = document.createElement('label');

    Hours.textContent = "00";
    Minutes.textContent = "00";
    Seconds.textContent = "00";

    let separator1 = document.createTextNode(":");
    let separator2 = document.createTextNode(":");

    let sec = 0, min = 0, hrs = 0;
    let interval = null;

    start.addEventListener('click', function() {
        if (!interval) { // Prevent multiple intervals
            interval = setInterval(function() {
                sec += 1;
                if (sec === 60) {
                    sec = 0;
                    min += 1;
                }
                if (min === 60) {
                    min = 0;
                    hrs += 1;
                }

                Seconds.textContent = sec.toString().padStart(2, "0");
                Minutes.textContent = min.toString().padStart(2, "0");
                Hours.textContent = hrs.toString().padStart(2, "0");
            }, 1000);
        }
    });

    end.addEventListener('click', function() {
        clearInterval(interval);
        interval = null;
    });

    reset.addEventListener('click', function() {
        clearInterval(interval);
        interval = null;
        sec = 0; min = 0; hrs = 0;
        Hours.textContent = "00";
        Minutes.textContent = "00";
        Seconds.textContent = "00";
    });

    // Append elements to document
    document.body.appendChild(Hours);
    document.body.appendChild(separator1);
    document.body.appendChild(Minutes);
    document.body.appendChild(separator2);
    document.body.appendChild(Seconds);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(start);
    document.body.appendChild(end);
    document.body.appendChild(reset);
    document.body.appendChild(l4_break);


    DateOfBirth();
    textArea();
}

function DateOfBirth() {

    let input = document.createElement("input");
    input.type = "date";

    let text = document.createElement("input");
    text.value = "";

    input.addEventListener("mouseover", function() {
        let date =  new Date(input.value);
        let now = new Date();

        text.value = (now.getFullYear() - date.getFullYear()).toString();
    })

    document.body.appendChild(l2_break);
    document.body.appendChild(input);
    document.body.appendChild(l3_break);
    document.body.appendChild(text);


}

function textArea(){

    let area = document.createElement("textarea");
    let input = document.createElement("input");
    input.type = "number";
    input.value = "0";
    let count = 0;
    area.addEventListener("keyup", function() {
        input.value = area.value.length;
    })


    document.body.appendChild(l1_break);
    document.body.appendChild(area);
    document.body.appendChild(l0_break);
    document.body.appendChild(input);

}

let l0_break = document.createElement("br");
let l1_break = document.createElement("br");
let l2_break = document.createElement("br");
let l3_break = document.createElement("br");
let l4_break = document.createElement("br");
