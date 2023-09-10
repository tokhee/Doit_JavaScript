//최대공약수 구하기
//유클리드 호제법 이용하기
//MOD 연산 : 큰 수를 작은 수로 나눈 나머지 구하기

let a = parseInt(prompt("첫번째 수 입력"));
let b = parseInt(prompt("두번째 수 입력"));

//큰 수와 작은 수를 판별해 변수에 저장
let big;
let small;

if(a<b){
    //b가 큰수
    big= b;
    small=a;
}else{
    //a가 큰수
    big= a;
    small=b;
}

//약수 구하기
//모든 최대공약수는 1부터 시작하므로,
//변수 gcd는 1로 초기화 해둔다.
// 변수 gcd = 최대공약수
let gcd = 1;

//모든 최대공약수는 1부터 시작하기 때문에 i도 1부터 시작
//i는 1씩 증가하며 Small의 범위까지 나눠주는 수
//왜 i의 범위가 small까지냐면, 가장 마지막에 나눠서 떨어지는 수가 최대공약수이기 때문
for(let i = 1; i<=small ;i++){
    //변수 big과 small을 i로 나눴을 때 나머지가 0이면
    //변수 gcd에 i를 저장
    if (big%i ===0 && small%i ===0){
        gcd = i;
    }
}

console.log(`${a}와 ${b}의 최대공약수 : ${gcd}`);

