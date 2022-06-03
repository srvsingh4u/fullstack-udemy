// const { hash } = require("bcrypt");
// const { genSalt } = require("bcrypt");
const { hash } = require("bcrypt");
const bcrypt = require("bcrypt");

const hashpassword = async (pw) => {
  //   const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(pw, 10);
  //   console.log(salt);
  console.log(hash);
};

const login = async (pw, hashpw) => {
  const compare = await bcrypt.compare(pw, hashpw);
  if (compare) {
    console.log("sucefully logged in");
  } else {
    console.log("not signed in ");
  }
};
login(
  "monkesy",
  "$2b$10$mHsxG5LcEyT.2LsJQySaKOA4eKHDJjOYmqgi4KZF3S39H/7.XbViG"
);
// hashpassword("monkey");
// const hashpassword = async (pwd) => {
//   const salt = await bcrypt.genSalt(10);
//   const hash = await bcrypt.hash(pwd, salt);
//   console.log(salt);
//   console.log(hash);
// };

// const login = async (pwd, hashpw) => {
//   const result = await bcrypt.compare(pwd, hashpw);
//   if (result) {
//     console.log("sucessfully logged in");
//   } else {
//     console.log("iNavalid user");
//   }
// };
// login("monkey", "$2b$10$ByjOH2ERDigkGBcklPuCfOltwvq7gJp/FhlMF.oLIxT3oj6cTKLum");
// hashpassword("monkey");
