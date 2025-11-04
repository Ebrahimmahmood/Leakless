// patterns.js
export const leakPatterns = [
  { name: "AWS Access Key", regex: /AKIA[0-9A-Z]{16}/ },
  { name: "Private Key", regex: /-----BEGIN PRIVATE KEY-----/ },
  { name: "Password", regex: /password\s*=\s*['"].+['"]/i },
  { name: "API Token", regex: /(api|token|key)[\s:=]+['"]?[A-Za-z0-9_\-]{16,}['"]?/i }
];
