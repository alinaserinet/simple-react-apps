const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;
const token = 'token';

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    setTimeout(() => {
        if(username === 'admin' && password === 'admin') {
            return res.send({
                success: true,
                token
            })
        }
    
        res.send({
            success: false,
            error: 'username or password wrong!'
        })
    }, 1000);
});

app.get('/users/me', (req, res) => {
    const { authorization } = req.headers;
    if(authorization === token) {
        return res.send({
            success: true,
            data: {
                id: 1,
                username: 'admin',
                email: 'admin@gmail.com',
                name: 'admin'
            }
        })
    }

    res.send({
        success: false,
        error: 'token is not valid!'
    })

})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

