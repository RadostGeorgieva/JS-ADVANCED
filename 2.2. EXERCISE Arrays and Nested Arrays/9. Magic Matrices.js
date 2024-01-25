function magicMatrices(matrix) {

    let flag = true;

    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < matrix[0].length; i++) {
        sum1 += matrix[0][i];
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let b = 0; b < matrix[i].length; b++) {
            sum2 += matrix[i][b];
        }
        if (sum1 !== sum2) {
            flag = false;
            break;
        }
        else {
            sum2 = 0;
        }
    }
    sum2 = 0;
    let rows = matrix.length;
    let columns = matrix[0].length;

    for (let i = 0; i < columns; i++) {
        for (let b = 0; b < rows; b++) {
            sum2 += matrix[b][i];
        }
        if (sum1 !== sum2) {
            flag = false;
            break;
        }
        else {
            sum2 = 0;
        }
    }
    console.log(flag);
}