#!/usr/bin/env node
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (err) {
    console.error(err);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/virtualspirit/codelabs-next-web.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && pnpm install`;
const removeBinDirCommand = `rm -rf bin`;

console.log(`Init project ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log("Installing dependencies...");
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);

const removeBinDir = runCommand(removeBinDirCommand);
if (!removeBinDir) process.exit(-1);

console.log(
  "Init project successfully! follow the following command script to start."
);
