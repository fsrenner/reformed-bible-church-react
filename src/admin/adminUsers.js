const login = async (username, password) => {
    const url = 'http://api.reformedbible.org/admin';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });
    return response.json();
}

export const userLogin = async (obj) => {
    const admin = await login(obj.username, obj.password);
    return (admin.length === 0) ? `User: ${obj.username} does not exist in our system, or the password was incorrect` : admin[0];
};