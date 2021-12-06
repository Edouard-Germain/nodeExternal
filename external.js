const express = require('express');
const port = 5000
const app = express();
const got = require('./apigot.json')
const axios = require ('axios')

//Exercice 1 ====================>

app.get ('/game-of-thrones/json',(req,res)=>{
    res.send(got)
})

app.get('/game-of-thrones/url', (req,res)=>{
    axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
  })

/// Exercice 2 ==================> 

app.get('/pokemons/url', (req,res)=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=200')
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))
})

app.get ('/pokemon/:id',(req,res)=>{
    const {id} = req.params
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(error.response.status).send("Not found"))

})



