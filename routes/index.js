module.exports = (app) => {
    app.get('/', (req, res) => {
        res.render('index.ejs')
    })

app.post('/', (req, res) => {
    modelo.find()
    .then((modelo)=>{
        res.render('index.ejs',{dados:modelo})
    })
    .catch(()=>{
        res.render('index.ejs')
    })
    
    var conexao = require('..//config/databese')
    conexao()

    var modelo = require('..//models/mensagem')
    var documento = new modelo({
        nome:req.body.first_name,
        sobrenome: req.body.last_name,
        email: req.body.email,
        mensagem: req.body.mensagem
    })
    .save()
    .then(() => {
        res.redirect('/')
    })
    .catch(() => {
        res.send("Não foi possivel gravar o documento no Banco de Dados")
    })
})

}