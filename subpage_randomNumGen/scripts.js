function setRangeBasedRandNum() {
    stField = document.getElementById("startNum");
    st = Number(stField.value)
    console.log("st:", st);
    endField = document.getElementById("endNum");
    end = Number(endField.value)
    console.log("end:", end);
    range = end - st + 1;
    console.log("range:", range);
    res = Math.floor(Math.random() * range);
    console.log("res:", res);
    res += st
    console.log("res:", res);
    resField = document.getElementById("rangeBasedRes");
    resField.innerHTML = "Result: " + res.toString();
    console.log("resField.innerHTML:", resField.innerHTML);
}

function setDigitsBasedRandNum() {
    nDigitFiels = document.getElementById("numDigits");
    nDigits = Number(nDigitFiels.value);
    console.log("nDigits:", nDigits);
    reses = [];
    for(let i = 0; i < nDigits; i++) {
        res = Math.floor(Math.random() * 10);
        reses.push(res);
    }
    console.log("reses contains: ");
    for(let i = 0; i < nDigits; i++) {
        console.log(reses[i], ', ');
    }
    resString = "Result: "
    for(let i = 0; i < nDigits; i++) {
        resString += reses[i].toString();
    }
    console.log("resString: ", resString)
    resField = document.getElementById("digitsBasedRes");
    resField.innerHTML = resString;
}