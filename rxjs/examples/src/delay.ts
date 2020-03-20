function delay(ms: number) {
  return new Promise(resolve => {
    setTimeout(() => resolve('done'), ms);
  });
}

async function runDelay() {
  console.log("before delay");
  await delay(2000);

  console.log("after delay");
}

runDelay();

