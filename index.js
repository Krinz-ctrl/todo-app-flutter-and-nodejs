const app = require('./app');
const connectDB = require('./config/db');
const UserModal = require('./model/user.model');
connectDB();
const port = 3000;

app.get('/', (req, res) => {
    res.send("helloworld oki muzi");
})

app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`);
});