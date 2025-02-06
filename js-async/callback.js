function orderPizza(callback) {
    console.log("피자를 만들고 있습니다...");
    setTimeout(() => {
      const pizza = "페퍼로니 피자";
      console.log("피자가 완성되었습니다!");
      callback(pizza); // 작업 완료 후, 미리 정의된 콜백 호출
    }, 2000);
  }
  
  // 콜백: 피자가 완성되면 바로 배달 시작
  orderPizza((pizza) => {
    console.log(`${pizza}를 배달 중입니다!`);
  });