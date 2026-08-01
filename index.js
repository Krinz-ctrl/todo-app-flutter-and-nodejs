const app = require('./app');
const db = require('./config/db')
db();
const port = 3000;

app.get('/', (req, res) => {
    res.send("helloworld oki muzi");
})

app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
});