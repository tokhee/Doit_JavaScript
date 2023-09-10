/*
  *
  * Author : jian
  * Date : 2023-09-09
  * File : prime.js
  *
  * 자바스크립트로 소수 판별하기
  * 소수는 1과 자기 자신으로만 나눌 수 있는 숫자
*/

const number = parseInt(prompt("자연수를 입력하세요."));
//number =  사용자에게 입력받아올 값
let prime;
//prime = 소수 판별된 값

if (number === 1) {
    document.write(`${number}는 소수도, 합성수도 아니다.`)
}else if(number ===2){
    prime = true;
}else{
    for (let i =2 ; i<number ; i++){
    //i는 2부터 시작하고, 사용자에게 입력받아오는 number값이 작으며, 1씩 증가해 for문을 수행한다
    if (number%i === 0){
        //사용자에게 입력받아온 number값이 i로 나눈 나머지가 0이면 소수가 아님
        prime= false;
        break
    }else{
        //사용자에게 입력받아온 number값이 i로 나눈 나머지가 0이 아니면 소수임.
        prime = true;
    }
    }
}

if (prime){
    document.write(`${number}는 소수입니다.`)
}else{
    document.write(`${number}는 소수가 아닙니다.`)
}