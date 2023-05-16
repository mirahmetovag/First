const {EventEmitter} = require('events');
const fs = require('fs').promises;

const login = async function (data) {
    const users = JSON.parse(await fs.readFile('./users.json'));

    const user = users.find(
        (u) => u.username === data.username && u.password === data.password
    )
    if (!user) return console.log("User was not found");
    console.log("Successfully logged in");
}

events.on('login', login)

