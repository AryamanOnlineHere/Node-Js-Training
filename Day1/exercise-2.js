// import os from "os";
// import * as os from "os";

// console.log("platform:", os.platform());
// console.log("cpu architecture:", os.arch());

import fs from "fs/promises";

// function readFile() {
//   fs.readFile("exercise.js", "utf-8", (err, data) => {
//     if (err) {
//       console.error("error reading file", err);
//       return;
//     }
//     console.log("File content:", data);
//   });
// }
// readFile();

async function readFileWithPromise() {
  try {
    const data = await fs.readFile("exercise.js", "utf-8");
    // console.log("File content with promise", data);
    console.log(
      data
        .split("")
        .filter((u) => u != "u")
        .join("")
    );
  } catch (error) {
    console.log(error);
  }
}
readFileWithPromise();

function readFile(file) {
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) {
      console.error("error reading file", err);
      return;
    }
    console.log("File content:", data);
  });
}
readFile("example-1.js");
