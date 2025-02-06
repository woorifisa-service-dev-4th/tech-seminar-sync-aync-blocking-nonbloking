function orderPizza() {
    console.log("피자 주문 완료!");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const pizza = "페퍼로니 피자";
            resolve(pizza); // 작업 완료 후 결과 전달
        }, 2000);
    });
}

orderPizza()
    .then((pizza) => {
        console.log(`피자가 완성되었습니다: ${pizza}`);
        console.log("배달을 시작합니다!");        
    })
    .catch((error) => console.log("문제가 발생했습니다:", error));