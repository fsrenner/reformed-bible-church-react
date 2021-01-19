const admins = [
    {
        username: 'dude',
        password: 'duder'
    }, 
    {
        username: 'someguy',
        password: 'yessir'
    }, 
];

export const login = (obj) => {
    let admin = admins.filter(admin => admin.username === obj.username);
    if (admin.length === 0) {
        return `Username: ${obj.username} does not exist in our system`;
    } else {
        return (obj.password === admin[0].password) 
            ? admin[0] 
            : `The password was incorrect for username: ${obj.username}`;
    }
};