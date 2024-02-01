function generateReport() {
    let table = document.querySelectorAll("tbody tr");

    let allData = [];
    let headerNames = [];

    // Extract header names based on checked checkboxes in the header row
    let headerCheckboxes = document.querySelectorAll("thead input[type='checkbox']");
    headerCheckboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            headerNames.push(checkbox.parentNode.textContent.trim());
        }
    });

    // Extract row data based on checked checkboxes and header names
    for (let i = 0; i < table.length; i++) {
        let cols = table[i].children;
        let rowData = {};

        headerCheckboxes.forEach((checkbox, index) => {
            if (checkbox.checked) {
                rowData[headerNames[index]] = cols[index].textContent.trim();
            }
        });

        allData.push(rowData);
    }

    // Display the JSON stringified allData in the output element
    document.getElementById("output").textContent = JSON.stringify(allData);
}
