function tikTakToe(turns) {

    let table = [[false, false, false], [false, false, false], [false, false, false]]
    let turn = "X";

    for (let i = 0; i < turns.length; i++) {

        let [row, col] = turns[i].split(" ");
        row = Number(row);
        col = Number(col);

        if (table[row][col] == false) {
            table[row][col] = turn;
            if (checkForWinner(table, turn)) {
                console.log(`Player ${turn} wins!`);
                console.log(table.map(row => row.map(element => element.toString()).join("\t")).join("\n"));
                break;
            }
            turn = turn == "X" ? "O" : "X";

        } 
        else if ((table[row][col])) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        if(!checkFreeSpace(table)) {
            console.log(`The game ended! Nobody wins :(`);
            console.log(table.map(row => row.map(element => element.toString()).join("\t")).join("\n"));
            break;
        }
    }
    function checkForWinner(table, turn) {
        for (let i = 0; i < table.length; i++) {
            if ((table[i][0] == turn && table[i][1] == turn && table[i][2] == turn) ||
                (table[0][i] == turn && table[1][i] == turn && table[2][i] == turn) ||
                (table[0][0] == turn && table[1][1] == turn && table[2][2] == turn) ||
                (table[0][2] == turn && table[1][1] == turn && table[2][0] == turn)) {
                return true;
            }
            return false;
        }
    }
    function checkFreeSpace(table) {
        return !!table.flat().filter(x=>!x).length
    }

}