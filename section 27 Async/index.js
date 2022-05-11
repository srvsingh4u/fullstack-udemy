// // console.log("hii the code starts running");

// // setTimeout(() => console.log("hy timeout function"), 2000);
// // console.log("2nd function");

// // setTimeout(() => {
// //   document.body.style.backgroundColor = "red";
// //   setTimeout(() => {
// //     document.body.style.backgroundColor = "green";
// //     setTimeout(() => {
// //       document.body.style.backgroundColor = "blue";
// //       setTimeout(() => {
// //         document.body.style.backgroundColor = "yellow";
// //         setTimeout(() => {
// //           document.body.style.backgroundColor = "orange";
// //         }, 1000);
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// // const delayedColorChange = (color, delay, callback) => {
// //   setTimeout(() => {
// //     document.body.style.backgroundColor = color;
// //     callback();
// //   }, delay);
// // };
// // delayedColorChange("red", 2000, () => {
// //   delayedColorChange("yellow", 1000, () => {
// //     delayedColorChange("blue", 1000, () => {
// //       delayedColorChange("orange", 1000, () => {
// //         delayedColorChange("yellow", 1000, () => {
// // //           delayedColorChange("violet", 1000, () => {});
// // //         });
// // //       });
// // //     });
// // //   });
// // // });

// // const fakeRequestPromise = (url) => {
// //   return new Promise((resolve, reject) => {
// //     const delay = Math.floor(Math.random() * 4500) + 500;
// //     setTimeout(() => {
// //       if (delay > 4000) {
// //         reject("Connection Timeout :(");
// //       } else {
// //         resolve(`Here is your fake data from ${url}`);
// //       }
// //     }, delay);
// //   });
// // };
// // fakeRequestPromise("yelp.com/api/coffee/page1")
// //   .then((data) => {
// //     console.log("IT WORKED!!!!!! (page1)");
// //     console.log(data);
// //     // return fakeRequestPromise("yelp.com/api/coffee/page2");
// //   })
// //   .then((data) => {
// //     console.log("IT WORKED!!!!!! (page2)");
// //     console.log(data);
// //     return fakeRequestPromise("yelp.com/api/coffee/page3");
// //   })
// //   .then((data) => {
// //     console.log("IT WORKED!!!!!! (page3)");
// //     console.log(data);
// //   })
// //   .catch((err) => {
// //     console.log("OH NO, A REQUEST FAILED!!!");
// //     console.log(err);
// //   });

// const login = async function (username, password) {
//   if (!username || !password) throw "Invalid Credential";
//   if (password === "pune") return "welcome";
//   throw " inavlid password";
// };
// login("ravi")
//   .then((msg) => {
//     console.log("loggedin");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Error");
//     console.log(err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};
async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE!";
}
rainbow().then(() => {
  "end of rainbow";
});
