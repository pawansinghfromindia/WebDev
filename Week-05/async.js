async function run() {
  try {
    await console.log("Try block"); // There is no benefit of using await here
    const result = await promisifiedfunctions();
  } catch (error) {
    console.log("catch block");
  } finally {
    console.log("Finally Block");
  }
}

run();
