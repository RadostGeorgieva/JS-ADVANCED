function stringLengthAndAverage(str1, str2, str3) {
    let sumOfLength = str1.length + str2.length + str3.length;
    let averageLength = sumOfLength/3;
    console.log(sumOfLength);
    console.log(Math.floor(averageLength));
}
stringLengthAndAverage('pasta', '5', '22.3')