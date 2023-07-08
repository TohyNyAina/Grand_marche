const con = require("../config/db");
require('dotenv').config();

exports.commande = (req, res) => {
    const { panierDatas } = req.body;
    const userId = req.params.userId;
    const nom = req.params.nom;
    const email = req.params.email;
  
    // Vérifiez que les données sont présentes
    if (!panierDatas) {
      return res.status(400).json({ error: "Données manquantes" });
    }
  
    // Effectuez l'insertion des données dans la table appropriée
    const query =
      "INSERT INTO commande (nom_produit, prix_unitaire, nombre, userId, nom, email) VALUES ?";
    const values = panierDatas.map((panierData) => [
      panierData.name,
      panierData.prix,
      panierData.nombre,
      userId,
      nom,
      email,
    ]);
  
    con.query(query, [values], (err, results) => {
      if (err) {
        console.error("Erreur lors de l'insertion des données : ", err);
        return res
          .status(500)
          .json({ error: "Erreur lors de l'insertion des données" });
      }
  
      console.log("Données insérées avec succès !");
      return res.status(200).json({ message: "Données insérées avec succès" });
    });
  };
  
exports.getcommande = (req,res)=>{
      
    con.query('SELECT * FROM commande',(err,result)=>{
         
         if(result){
            res.status(200).json(result)
          }else{
  
            res.send({error:'aucun data '})
          }
  
    })
     
  }