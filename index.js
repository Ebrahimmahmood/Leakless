import { scanDirectory } from "./scanner.js";
import chalk from "chalk";

const results = scanDirectory("./testFiles");

if (results.length === 0) {
  console.log(chalk.green("✅ No leaks found!"));
} else {
  console.log(chalk.red("🚨 Potential secrets found:\n"));
  results.forEach(({ file, results }) => {
    console.log(chalk.yellow(`File: ${file}`));
    results.forEach(r => console.log(`  • ${r.name}: ${r.match}`));
  });
}
