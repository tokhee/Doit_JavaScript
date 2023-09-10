let userNumber = prompt("판별할 숫자를 입력하세요.");

if(userNumber !== null){
    userNumber =parseInt(userNumber); //null이 아니면 입력값을 숫자로 변환
    (userNumber%2 ===0) ? alert(`${userNumber}는 짝수입니다.`) : alert(`${userNumber}는 홀수입니다.`);
}

