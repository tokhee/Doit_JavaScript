let number = parseInt(prompt("숫자를 입력하세요."));

function Number(n){
    if(n===0){
        document.write(`${n}은 0입니다.`);
    }else if(n>0){
        document.write(`${n}은 양수입니다.`);
    }else if(n<0){
        document.write(`${n}은 음수입니다.`);
    }
}

Number(number);