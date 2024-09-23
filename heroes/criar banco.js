mongosh "mongodb+srv://nannilover.zqm21.mongodb.net/" --apiVersion 1 --username riancaiofuzinelli12

--acessar um banco
user heroesDb

--verificar os bancos existentes
show dbs

--verificar as coleções de um banco 
show collections

--criar uma coleção
dbCreateCollection("nome da coleção")



db.heroes.insertOne({
    nome: 'Superman',
    time: 'Liga da Justiça',
    idade: 33,
    genero: 'Masculino',
    habilidades: ['Superforça', 'Voo', 'Visão de Calor', 'Visão de Raio-X'],
    usaCapa: true,
    caracteristicas: {
        olhos: 'Castanho',
        cabelos: 'Preto'
    }
});

db.heroes.insertOne({
    nome: 'Homem-Aranha',
    time: 'Vingadores',
    idade: 17,
    genero: 'Masculino',
    habilidades: ['Superforça', 'Supervelocidade', 'Superagilidade', 'Sentido Aranha'],
    usaCapa: true,
    caracteristicas: {
        olhos: 'Castanho',
        cabelos: 'Castanho'
    },
    universo: 'Marvel'
});



db.heroes.insertMany([
    {
        nome: 'Batman',
        time: 'Liga da Justiça',
        idade: '42',
        genero: 'Masculino',
        habilidades: ['Inteligência',  'Riqueza', 'Habilidades de Combate'],
        usaCapa: true,
        caracteristicas: {
            olhos: 'Preto',
            cabelos: 'Preto'
        },
        universo: 'DC'
    },
    {
        nome: 'Mulher Maravilha',
        time: 'Liga da Justiça',
        idade: 5000,
        genero: 'Feminino',
        habilidades: ['Superforça', 'Velocidade', 'Sentido aguçado'],
        usaCapa: false,
        caracteristicas: {
            olhos: 'Azul',
            cabelos: 'Preto'
        },
        universo: 'DC'
    }
])

--READ 
db.heroes.find()
db.heroes.find().pretty()
db.heroes.find({ usaCapa: false})

--UPDATE
db.heroes.updateOne(
    {nome: 'Superman'},
    { $set: {universo: 'DC'}}
)

db.heroes.updateOne(
    {nome: 'Homem-Aranha'},
    { $set: {universo: 'Marvel Studios'}}
)

--DELETE
db.heroes.deleteOne({ _id: 1}),
db.heroes.deleteMany({ universo: 'DC'})

db.heroes.deleteOne({ _id: 1}),
db.heroes.deleteMany({ universo: 'Marvel Studios'})