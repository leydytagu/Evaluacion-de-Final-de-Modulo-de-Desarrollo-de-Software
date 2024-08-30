// Task 4: delUser(number)
import { getServerURL } from "./task1.js";

export async function delUser(id) {

    const serverURL = getServerURL();

    await fetch(`${serverURL}/users/${id}`, {
            method: 'DELETE'
    });


}

