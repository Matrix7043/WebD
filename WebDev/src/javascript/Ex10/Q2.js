document.getElementById("main-title").textContent = "Updated Title";

document.getElementsByName("username")[0].value = "John Doe";

let genderRadios = document.getElementsByName("gender");
for (let radio of genderRadios) {
    if (radio.checked) {
        console.log("Selected Gender:", radio.value);
    }
}

let paragraphs = document.getElementsByTagName("p");
console.log("Total number of <p> elements:", paragraphs.length);

let listItems = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
for (let li of listItems) {
    console.log("List Item:", li.textContent);
}

let inputFields = document.getElementsByClassName("input-field");
for (let field of inputFields) {
    field.style.backgroundColor = "lightblue";
}

document.querySelector(".info").textContent = "This is the first info paragraph";

document.querySelector("input[name='gender']").checked = true;

let infoParagraphs = document.querySelectorAll(".info");
infoParagraphs.forEach(p => console.log("Info Paragraph:", p.textContent));

let checkboxes = document.querySelectorAll(".hobby");
checkboxes.forEach(checkbox => {
    checkbox.checked = true;
    console.log("Checked Hobby:", checkbox.value);
});
