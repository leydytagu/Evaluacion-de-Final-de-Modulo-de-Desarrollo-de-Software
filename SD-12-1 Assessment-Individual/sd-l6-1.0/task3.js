// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";
export async function addUser(firstName, lastName, email) {
    const serverURL = getServerURL();
    const response = await fetch(`${serverURL}/users`);
    let users = await response.json();
    const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);
    const newId = maxId + 1;
    const newUser = {
        id: newId.toString(),
        first_name: firstName,
        last_name: lastName,
        email: email
    };
    await fetch(`${serverURL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const newUser2 = {
        id: newId,
        first_name: firstName,
        last_name: lastName,
        email: email
    };
    return console.log(newUser2);
}


