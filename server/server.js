const fs = require("fs"),
    path = require("path");

let chirps = [
    {
        name: "josh",
        message: "hello!"
    },
    {
        name: "Garrett",
        message: "sup!"
    },
    {
        name: "Jake",
        message: "lkdnfdsnrgfjk!"
    },
    {
        name: "josh",
        message: "hello!"
    },
    {
        name: "josh",
        message: "hello!"
    },
];

const chirpsData = JSON.stringify(chirps);
fs.writeFile("./chirps.json", chirpsData, () => console.log("done"));

fs.readFile("./chirps.json", (err, data) => {
    if (err) throw err;
    console.log(JSON.parse(data));
});

