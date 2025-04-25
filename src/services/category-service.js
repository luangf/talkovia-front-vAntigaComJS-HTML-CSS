const BASE_URL = 'http://localhost:8080/talkovia/categories';

export async function getAllCategories() {
    try {
        const response = await fetch(BASE_URL, {
            headers: {
                'Authorization': `Bearer ${sessionStorage.getItem('auth-token')}`
            }
        });
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
        console.error(`Erro da API: status ${response.status}`);
        return null;
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}

export async function saveCategory(objCategory) {
    try {
        const token = sessionStorage.getItem('auth-token');
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(objCategory)
        });
        if (response.status === 201) {
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error: ', error);
    }
}

export async function deleteCategoryById(id) {
    try {
        const token = sessionStorage.getItem('auth-token');
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });
        if (response.status === 200) {
            const message = await response.text();
            alert(message);
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}
