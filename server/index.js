// server/index.js

const express = require("express");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;

var Evento = require("./controllers/eventos");
var Promotor = require("./controllers/promotor");

function mergeObjects(data, q) {
  for (var key in q) {
    if (q.hasOwnProperty(key)) {
      data[key] = q[key];
    }
  }
}


var mongoose = require ('mongoose')

var mongoDB='mongodb://127.0.0.1/Hackathon';

mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true});

var db = mongoose.connection;

db.on('error',console.error.bind(console," ! MongoDB connection ERROR"));

db.on('open',function(){
  console.log("MongoDB: Connection sucesseful...")
})

const app = express();

app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));



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
  console.log("-------------------")
  console.log(req.query.distrito) 
  console.log("-------------------")
  var q = {};
  var data = {};
  var d1 = {};
  var d2 = {};
  var d3 = {};
  var s = {};

  if (req.query.distrito != null && req.query.distrito != "null" ) {
    if (req.query.distrito == "VianadoCastelo") {
      q.distrito = "Viana do Castelo";
    }
    else if (req.query.distrito == "CasteloBranco") {
      q.distrito = "Castelo Branco";
    }
    else if (req.query.distrito == "VilaReal") {
      q.distrito = "Vila Real";
    }
    else { 
      q.distrito = req.query.distrito;
    }

  }
  if(req.query.hora != null && req.query.hora != "null" ){
    data = {"data.hora" : req.query.hora};

    mergeObjects(q,data);
  }

  if(req.query.dia != null && req.query.dia != "null" ){
    d1 = {"data.dia" : req.query.dia};

    mergeObjects(q,d1);
  }

  if(req.query.mes != null && req.query.mes != "null" ){
    d2 = {"data.mes" : req.query.mes};

    mergeObjects(q,d2);
  }

  if(req.query.diaSemana != null && req.query.diaSemana != "null" ){
    d3 = {"data.diaDaSemana" : req.query.diaSemana};

    mergeObjects(q,d3);
  }

  if (req.query.promotor != null && req.query.promotor != "null") {
    q.promotor = req.query.promotor;
  }

  if (req.query.concelho != null && req.query.concelho != "null") {
      q.concelho = req.query.concelho;
  }

  if (req.query.id != null && req.query.id != "null") {
    q._id = req.query.id;
  }

  if (req.query.categorias != null && req.query.categorias != "null" && req.query.categorias != "Todas") {
    q.categorias = req.query.categorias;
  }

  if (req.query.search != null && req.query.search != "null") {
    
    s = {$text: { $search: req.query.search }}

    mergeObjects(q,s);
  }



  console.log(q);
  Evento.queryBD(q)
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

app.post('/api/eventos',(req,res) => {
  console.log(req.body);
  Evento.addEvento(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(603).json({erro:erro}))

})

app.post('/api/promotores',(req,res) => {
  Promotor.addPromotores(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(603).json({erro:erro}))

})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

