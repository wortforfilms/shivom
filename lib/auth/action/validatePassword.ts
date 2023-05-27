import crypto from "crypto";

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match

export function validatePassword(user: any, inputPassword: any) {
  console.log("start  validating---->", user.user[0].spua.salt);
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.user[0].spua.salt, 7860, 64, "sha512")
    .toString("hex");
  // console.log(inputHash, "----->", user.user[0].password, "---=>");
  const passwordsMatch = user.user[0].password === inputHash;
  return passwordsMatch;
}
