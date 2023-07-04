const con = require("../config/db");
const bcrypt = require("bcrypt");
const jswt =require('jsonwebtoken')
require('dotenv').config()
const saltRounds = 10;



exports.register = (req, res) => {
  console.log(req.body);
  const date = new Date()
  const formattedDate = date.toISOString().slice(0, 19).replace('T', ' '); 
  const emailRegister = req.body.emailRegister;
  const passwordRegister = req.body.passwordRegister;

  bcrypt.hash(passwordRegister, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    con.query(
      "INSERT INTO user (id,email,password,type,prenom,nom,adresse,date) VALUES(?,?,?,?,?,?,?,?)",
      [null,emailRegister, hash,'client',null,null,null,formattedDate],
      (err, result) => {
        console.log(err);
      }
    );
  });
};



exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  con.query("SELECT * FROM user WHERE email=?", email, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ error: 'Erreur lors de la connexion' });
    } else {
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.status(200).json({
              token: jswt.sign({
                nom: result[0].nom,
                type: result[0].type,
                email: result[0].email
              }, process.env.jwtkey)
            });
          } else {
            res.status(401).send({ message: "Nom d'utilisateur ou mot de passe incorrect" });
          }
        });
      } else {
        res.status(401).send({ message: "L'utilisateur n'existe pas" });
      }
    }
  });
};


exports.loged = (req,res)=>{

   if(req.session.user){
      res.send({loggedIn:true, user:req.session.user})
   }else{
        res.send({loggedIn:false})
   }
}

exports.getUerRole = (req, res) => {
  let authorization = req.headers.authorization.replace("bearer= ",'');

  let cookie_parsing = jswt.verify(authorization,process.env.jwtkey);

  res.status(200).json({
    role : cookie_parsing.type
  });
}


exports.getAllUserData = (req,res)=>{
    
  con.query('SELECT * FROM user WHERE type="client"',(err,result)=>{
       
       if(result){
          res.status(200).json(result)
        }else{

          res.send({error:'aucun data '})
        }

  })
   
}


exports.deleteUser = (req,res)=>{
     const {id} = req.params
    con.query(`DELETE FROM user WHERE id=${id}`,(error,result)=>{
      if(result){
        res.status(200).json(result)
      }else{
        res.send({error:'impossible de supprimer'})
      }
    })
    
}

exports.commande = (req,res)=>{
  const { panierDatas } = req.body;

  // Vérifiez que les données sont présentes
  if (!panierDatas) {
    return res.status(400).json({ error: "Données manquantes" });
  }

  // Effectuez l'insertion des données dans la table appropriée
  const query = "INSERT INTO commande (nom_produit, prix_unitaire) VALUES ?";
  const values = panierDatas.map((panierData) => [
    panierData.name,
    panierData.prix,
  ]);

  con.query(query, [values], (err, results) => {
    if (err) {
      console.error("Erreur lors de l'insertion des données : ", err);
      return res.status(500).json({ error: "Erreur lors de l'insertion des données" });
    }

    console.log("Données insérées avec succès !");
    return res.status(200).json({ message: "Données insérées avec succès" });
  });
}

exports.getcommande = (req,res)=>{
    
  con.query('SELECT * FROM commande',(err,result)=>{
       
       if(result){
          res.status(200).json(result)
        }else{

          res.send({error:'aucun data '})
        }

  })
   
}