function orderPizza(pizzaType) {
    console.log(`${pizzaType} 주문 완료!`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${pizzaType}가 완성되었습니다!`); // 주문한 피자 전달
        }, 2000);
    });
}

function prepareDelivery(pizza) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${pizza} 배달 중입니다!`);
        }, 1000);
    });
}
orderPizza("하와이안 피자")
    .then((result) => {
        console.log(result); // 성공 처리
        return prepareDelivery(result);
    })
    .then((deliveryStatus) => {
        console.log(deliveryStatus); // 다음 작업 실행
    })
    .catch((error) => {
        console.error(error); // 에러 처리
    })