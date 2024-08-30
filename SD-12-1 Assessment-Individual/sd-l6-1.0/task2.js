// Task 2: listUsers()
import { getServerURL } from "./task1.js";
export async function listUsers() {
    
    const users = await fetch(`${getServerURL()}/users`);
    let usersJSON = await users.json();

    usersJSON = usersJSON.map(user => ({...user,id: parseInt(user.id)}));
    usersJSON = usersJSON.slice(0, 4);
    let jsonString = JSON.stringify(usersJSON, null, 2);

    jsonString = jsonString.replace(/"(\w+)":/g, '$1:'); 
    jsonString = jsonString.replace(/"([^"]*)"/g, "'$1'");

    jsonString = jsonString.split('\n').map(line => {
        if (line.startsWith(' ')) {
            return line.slice(1);
        }
        return line;
    }).join('\n');
    jsonString = jsonString.split('\n').map(line => {
        if (line.startsWith(' ')) {
            return line.slice(1);
        }
        return line;
    }).join('\n');

    return console.log(jsonString);
}


