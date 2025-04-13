function Total(){
    var adults = parseInt(document.getElementById("adults").value);
    var children = parseInt(document.getElementById("children").value);
    var total = 10*adults + 5*children;
    document.getElementById("total").value = total;
}   