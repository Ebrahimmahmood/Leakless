import fs from "fs";
import path from "path";
import { leakPatterns } from "./patterns.js";

export function scanFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const results = [];

  leakPatterns.forEach(({ name, regex }) => {
    const matches = content.match(regex);
    if (matches) {
      results.push({ name, match: matches[0] });
    }
  });

  return results;
}

export function scanDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalResults = [];

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.lstatSync(fullPath).isFile()) {
      const res = scanFile(fullPath);
      if (res.length) {
        totalResults.push({ file, results: res });
      }
    }
  });

  return totalResults;
}
