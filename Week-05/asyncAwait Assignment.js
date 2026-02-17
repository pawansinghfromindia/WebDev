// log "hi" after 1 second
// log "hello" after 3 seconds of step 1
// log "hello there" after 5 seconds of step 2

function setTimeoutPromisified(print, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(print);
    }, ms);
  });
}

async function run() {
  let result1 = await setTimeoutPromisified("hi", 1000);
  console.log(result1);
  let result2 = await setTimeoutPromisified("hello", 3000);
  console.log(result2);
  let result3 = await setTimeoutPromisified("hello there", 5000);
  console.log(result3);
}

run();

// Best way

function setTimeoutPromisified2(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function solve() {
  await setTimeoutPromisified2(1000);
  console.log("hi");
  await setTimeoutPromisified2(3000);
  console.log("hello");
  await setTimeoutPromisified2(5000);
  console.log("hello there");
}

solve();
