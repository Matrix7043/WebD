function getBMICategory(bmi, gender) {
    if (gender === 1) {
        if (bmi < 17.5) return "Anorexia";
        if (bmi >= 17.51 && bmi <= 19.10) return "Underweight";
        if (bmi >= 19.11 && bmi <= 25.80) return "Ideal range";
        if (bmi >= 25.81 && bmi <= 27.30) return "Marginally overweight";
        if (bmi >= 27.31 && bmi <= 32.30) return "Overweight";
        return "Very overweight or Obese";
    } else {
        if (bmi < 17.5) return "Anorexia";
        if (bmi >= 17.501 && bmi <= 20.70) return "Underweight";
        if (bmi >= 20.71 && bmi <= 26.40) return "Ideal range";
        if (bmi >= 26.41 && bmi <= 27.80) return "Marginally overweight";
        if (bmi >= 27.81 && bmi <= 31.10) return "Overweight";
        return "Very overweight or Obese";
    }
}

function Calculate(){
    let weight = parseInt(document.getElementById("weight").value);
    let height_f = parseInt(document.getElementById("height_f").value);
    let height_i = parseInt(document.getElementById("height_i").value);

    let BMI = (703*weight)/Math.pow(height_f*12+height_i,2);

    let gender = parseInt(document.getElementById("BMI").value);

    document.getElementById("output").value = BMI;
    alert(getBMICategory(BMI, gender));

}