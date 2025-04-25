const BASE_URL = 'http://localhost:8080/talkovia/auth';

// 401 (Unauthorized)
// 403 (Forbidden)
// 404 (Not Found)
// 500 (Internal Server Error)

export async function login(objUser) {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        });
        if (response.status === 200) {
            const data = await response.json();
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('auth-token', data.token);
            return true;
        }
        console.error(`Erro da API: status ${response.status}`);
        return false;
    } catch (error) {
        console.error('Error: ', error);
        return false;
    }
}

export async function register(objUser) {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objUser)
        });
        if (response.status === 201) {
            const data = await response.json();
            sessionStorage.setItem('username', data.username);
            sessionStorage.setItem('auth-token', data.token);
            return true;
        }
        /*if (response.status === 409) {
            return 'USER_EXISTS';
        }*/
        console.error(`Erro da API: status ${response.status}`);
        return false;
    } catch (error) {
        console.error('Error: ', error);
        return false;
    }
}