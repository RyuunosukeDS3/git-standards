#!/usr/bin/env node

const { execSync } = require("child_process");

const [,, cmd] = process.argv;

switch (cmd) {
  case "commit":
    execSync("npx cz", { stdio: "inherit" });
    break;
  case "install-hooks":
    execSync("lefthook install", { stdio: "inherit" });
    break;
  case "init":
    execSync("cp -n .czrc ../.czrc || true", { stdio: "inherit" });
    execSync("cp -n lefthook.yml ../lefthook.yml || true", { stdio: "inherit" });
    execSync("cp -n commitlint.config.js ../commitlint.config.js || true", { stdio: "inherit" });
    execSync("lefthook install", { stdio: "inherit" });
    break;
  default:
    console.log("Usage: git-standards <command>");
    console.log("Commands:\n  commit\n  install-hooks\n  init");
}
