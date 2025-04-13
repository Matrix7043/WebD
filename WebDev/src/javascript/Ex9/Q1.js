function CreateTable() {
    let temp = [55, 62, 68, 74, 59, 45, 41, 58, 60, 67, 65, 78, 82,
                         88, 91, 92, 90, 93, 87, 80, 78, 79, 72, 68, 61, 59, 55, 65];
    let map = {};
    let hot = 0, cold = 0, pleasant=0;
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] >= 85) {
            map[temp[i]] = "HOT";
            hot++;
        } else if (60 <= temp[i] && temp[i] <= 84) {
            map[temp[i]] = "PLEASANT";
            pleasant++;
        } else {
            map[temp[i]] = "COLD";
            cold++;
        }
    }
    document.write("<table border='1'>");
    document.write("<tr>");
    document.write("<th>Temperature</th>");
    document.write("<th>Category</th>");
    document.write("</tr>");
    for (let i = 0; i < temp.length; i++) {
        document.write("<tr>");
        document.write("<td>" + temp[i] + "</td>");
        document.write("<td>" + map[temp[i]] + "</td>");
        document.write("</tr>");
    }
    document.write("</table><br>");
    document.write("<label>Count of HOT days: " + hot + "</label><br>");
    document.write("<label>Count of PLEASANT days: " + pleasant + "</label><br>");
    document.write("<label>Count of COLD days: " + cold + "</label><br>");

}
CreateTable()
