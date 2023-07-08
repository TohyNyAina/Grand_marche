const { Router } = require("express");
const router = Router();
const { commande,getcommande } = require("../controllers/commande.controllers");

router.post('/commande/:userId/:nom/:email',commande)

router.get('/commande',getcommande)

module.exports = router;