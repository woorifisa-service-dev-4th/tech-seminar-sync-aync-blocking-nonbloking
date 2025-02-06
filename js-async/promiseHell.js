orderPizza("하와이안 피자")
    .then((pizzaStatus) => {
        prepareDelivery(pizzaStatus)
            .then((deliveryStatus) => {
                startDelivery(deliveryStatus)
                    .then((finalStatus) => {
                        notifyCustomer(finalStatus)
                            .then((notificationStatus) => {
                                console.log(notificationStatus);
                            })
                            .catch((error) => {
                                console.error("고객 알림 실패:", error);
                            });
                    })
                    .catch((error) => {
                        console.error("배달 실패:", error);
                    });
            })
            .catch((error) => {
                console.error("배달 준비 실패:", error);
            });
    })
    .catch((error) => {
        console.error("피자 주문 실패:", error);
    })