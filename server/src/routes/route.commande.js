const { Router } = require("express");
const router = Router();
const { commande,getcommande,livraison,commandeenvoye } = require("../controllers/commande.controllers");

router.post('/commande/:userId/:nom/:email',commande);

router.get('/commande',getcommande);

router.post('/commande/livraison/:id', livraison);

router.get('/commandeenvoye/:userId', commandeenvoye);

module.exports = router;