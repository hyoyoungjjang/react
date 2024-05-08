// const testAPI = (data, callback) => {
//     setTimeout(() => { //비동기 통신에서 필요한 데이터 전달
//         callback("안녕")
//     }, 1000);
// }

// testAPI({id: 10}, (res) => {
//     //결과 res를 사용
//     testAPI({id: res}, (re2) => {
        
//     })
// })



// function ajac(requestJson){
//     let xhr = new XMLHttpReqest();

//     requestJson.method = requestJson.mothod ? requestJson.method : "get";

//     xhr.open(requestJson.method, requestJosn.url, true);

//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             let result = JOSN.parse()
//         }
//     }
// }

// const testAPI2 = new Promise((resolve, reject) => {
//     setTimeout(() => { //비동기 통신에서 필요한 데이터 전달
       
//     }, 1000);
// })

// testAPI2().then((res) => {
//     console.log(res)
// }).error(() => {

// });

const getPromise = function(seconds){
    return new Promise((resolve, reject) => {
        setTimeout(() => { //비동기 통신에서 필요한 데이터 전달
           resolve("완료")
        }, seconds * 1000)
    })
}


//async키워드가 선언된 함수에서는 await을 사용할 수 있다.
//await키워드는 비동기통신을 마치 동기통신터럼 사용할 수 있게 해준다.
const runner = async () => {
    const res1 = await getPromise(1);
    console.log(res1)

    const res2 = await getPromise(2);
    console.log(res2)

    const res3 = await getPromise(3);
    console.log(res3)
}

runner();