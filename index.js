const cv = require("opencv4nodejs");
const fs = require("fs");

const configPath = "./configure.js" // Stores our config file

console.log("Version V0.1.0");

var config = {
    "networkTablesAddress": "10.45.50.5",
    "webPortalPort": 8000,

    //version information
    "version_major": 0,
    "version_minor": 1,
    "version_patch": 0 ,
};

if(fs.existsSync(configPath))
    config = require(configPath);
else {
    console.log("No Config File")
}

try {
    if(fs.existsSync(configPath)) {
        config = require(configPath);
        console.log("Found Config File!");
    } else {
        console.log("No Config Found, Generating new Config File, Settings ust be changed");
    fs.writeFileSync("./configure.js","module.exports = " + JSON.stringify(config, null, 2) + ";"); // Write File If It isn't found
    }
} catch (err){
    console.log("Corrupt Or Bugged Out Config, Crashing......");
    throw new error("hAhA cORUptS fIlesS");
}