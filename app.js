const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
//const routes = require("./routes");
const usuario = require ("./routes/usuario");
const post = require ("./routes/post");
const PORT =  8081;

app.use(cors());
app.use(bodyParser.json());
//app.use(routes);
app.use('/usuario',usuario);
app.use('/post',post);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


