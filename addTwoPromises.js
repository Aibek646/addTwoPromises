var addTwoPromises = async function (promise1, promise2) {
  return new Promise((resolve, reject) => {
    Promise.all([promise1, promise2]).then((values) => {
      const value1 = values[0];
      const value2 = values[1];
      resolve(value1 + value2);
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

/// using async and await

addTwoPromises(promise1, promise2).then((value) => {
  console.log(value);
});

var addTwoPromises = async function (promise1, promise2) {
  const value1 = await promise1;
  const value2 = await promise2;
  return value1 + value2;
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

addTwoPromises(promise1, promise2).then((value) => {
  console.log(value);
});
