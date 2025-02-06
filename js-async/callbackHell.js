doTask1((err, result1) => {
    if (err) {
      handleError(err);
    } else {
      doTask2(result1, (err, result2) => {
        if (err) {
          handleError(err);
        } else {
          doTask3(result2, (err, result3) => {
            if (err) {
              handleError(err);
            } else {
              console.log("작업 완료:", result3);
            }
          });
        }
      });
    }
  });