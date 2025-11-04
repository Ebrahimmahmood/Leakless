const input = document.getElementById("inputText");
const results = document.getElementById("results");
const scanBtn = document.getElementById("scanBtn");

// Simple regex patterns for secrets
const patterns = [
  { name: "AWS Access Key", regex: /AKIA[0-9A-Z]{16}/g },
  { name: "Password", regex: /password\s*=\s*["'][^"']+["']/gi },
  { name: "API Token", regex: /KEY\s*=\s*[A-Za-z0-9]{16,}/g },
];

scanBtn.addEventListener("click", () => {
  const text = input.value;
  let found = [];

  patterns.forEach(p => {
    const matches = text.match(p.regex);
    if (matches) {
      matches.forEach(m => found.push(`${p.name}: ${m}`));
    }
  });

  results.textContent = found.length > 0 ? found.join("\n") : "No secrets found!";
});
