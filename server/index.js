// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

var Evento = require("./controllers/eventos");
var Promotor = require("./controllers/promotor");


var mongoose = require ('mongoose')

var mongoDB='mongodb://127.0.0.1/Hackathon';

mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true});

var db = mongoose.connection;

db.on('error',console.error.bind(console," ! MongoDB connection ERROR"));

db.on('open',function(){
  console.log("MongoDB: Connection sucesseful...")
})

const app = express();



app.get("/api/eventos", (req, res) => {
    Evento.getEventos()
    .then(dados => {
      console.log("/api/eventos");
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
});

app.get("/api/eventos/diferentesCategorias", (req, res) => {
  Evento.diferentesCategorias()
  .then(dados => {
    console.log("/api/eventos/diferentesCategorias");
    res.json(dados);
  })
  .catch(erro => res.status(601).json({erro:erro}))
});

app.get("/api/eventos/outros", (req, res) => {
  var query = {};

  if (req.body.distrito !== null) {
      query.distrito = req.body.distrito;
  }
  if (req.body.concelho !== null) {
      query.concelho = req.body.concelho;
  }
  if (req.body.categorias !== null) {
    query.categorias = req.body.categorias;
}
  // distrito, // concelho //categorias
  console.log(req.body) 
  Evento.queryBD(query)
  .then(dados => {
    console.log("/api/eventos");
    res.json(dados);
  })
  .catch(erro => res.status(601).json({erro:erro}))
});


app.get("/api/promotores", (req, res) => {
    Promotor.getPromotores()
    .then(dados => {
    console.log("/api/promotores");
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
});


  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

