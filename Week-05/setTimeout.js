setTimeout(() => {
  console.log("Hello 1 sec has been passed", 1);
}, 1000);

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(2000).then(() => {
  console.log("Hello 2 Sec has been passed", 2);
});

setTimeoutPromisified(3000).then(() => {
  console.log("Hello 3 Sec has been passed", 3);
});

function setTimeoutPromisified2(delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, delay);
  });
}

setTimeoutPromisified2(1000)
  .then(function () {
    console.log("1 second has passed");
  })
  .catch(function () {
    console.log("An error came");
  })
  .finally(function () {
    console.log("Finally block will run either after success or failure");
  });
