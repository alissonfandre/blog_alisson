const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
//const routes = require("./routes");
const Carro = require ("./routes/carro");
const Cliente = require ("./routes/cliente");
const Iventario = require ("./routes/Inventario");
const Pedido = require ("./routes/Pedido");
const PORT =  8081;

app.use(cors());
app.use(bodyParser.json());
//app.use(routes);
app.use('/Carro',Carro);
app.use('/Cliente',Cliente);
app.use('/Iventario',Iventario);
app.use('/Pedido',Pedido);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});


