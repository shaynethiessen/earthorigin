import {exec} from "child_process";

export function sortPackageJson() {
    exec ('yarn sort-package-json "**/package.json"');
}