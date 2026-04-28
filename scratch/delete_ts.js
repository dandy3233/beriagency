import fs from "fs";
try {
  fs.unlinkSync("src/routeTree.gen.ts");
  console.log("Successfully deleted src/routeTree.gen.ts");
} catch (err) {
  console.error("Error deleting file:", err);
}
