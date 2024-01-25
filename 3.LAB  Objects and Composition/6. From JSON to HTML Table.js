function fromJSONToHTMLTable(str) {

    let students = JSON.parse(str);

    let tableString = '<table>\n';

    tableString += '   <tr>';
    Object.keys(students[0]).forEach(key => {
        tableString += `<th>${key}</th>`;
    });
    tableString += '</tr>\n';

    students.forEach(student => {
        tableString += '   <tr>';
        Object.values(student).forEach(value => {
            let escapedValue = String(value).replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
            tableString += `<td>${escapedValue}</td>`;
        });
        tableString += '</tr>\n';
    });

    tableString += '</table>';

    return tableString;
}
fromJSONToHTMLTable(`[{"Name":"Stamat",

"Score":5.5},{"Name":"Rumen", "Score":6}]`)