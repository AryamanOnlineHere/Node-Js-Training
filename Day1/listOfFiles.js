import fs from "fs";

fs.readdir("./", (err, files) => {
  if (err) {
    console.error("error reading directory:", err);
    return;
  }
  console.log("Files in current directory", files);
});
