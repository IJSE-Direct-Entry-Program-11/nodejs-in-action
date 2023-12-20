import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    database: 'dep11_node',
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    port: 3306
});

// for(let i = 0; i< 10; i++){
//     await connection.execute('INSERT INTO customer (name, contact) VALUES (?, ?)',
//         ['Kasun', '077-1234567']);
// }

const [customerList] = await connection.execute('SELECT * FROM customer');
console.log(customerList);