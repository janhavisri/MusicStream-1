const express = require('express');
const app = express();
const UserRouter = require('./routers/UserRouter');
const UtilRouter = require('./routers/Util');
const port = process.env.PORT;
const cors = require('cors');
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static('./static/uploads'));

app.use('/users', UserRouter);
app.use('/util', UtilRouter);


app.get('/home', (req, res) => {
    console.log('client request on server');
    res.send('Request on home');
})

app.listen(port, () => {
    console.log(`Server started on port on localhost : ${port}`)
})