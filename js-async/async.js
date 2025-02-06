async function processOrder() {
    try {
        const pizzaStatus = await orderPizza("하와이안 피자");
        const deliveryStatus = await prepareDelivery(pizzaStatus);
        const finalStatus = await startDelivery(deliveryStatus);
        const notificationStatus = await notifyCustomer(finalStatus);
        console.log(notificationStatus);
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

processOrder();