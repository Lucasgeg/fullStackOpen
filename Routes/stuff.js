const express = require("express");
const router = express.Router();
const Thing = require("../model/thing");
const stuffCtrl = require("../controllers/stuff");

/* Création de donnée */
router.post("/", stuffCtrl.createThing);
/* Mise à jour d'une donnée */
router.put("/:id", stuffCtrl.modifyThing);
/* Suppression d'une donnée */
router.delete("/:id", stuffCtrl.deleteThing);
/* Récupération d'une donnée par son ID */
router.get("/:id", stuffCtrl.getOne);
/* récupération de toutes les données */
router.get("/", stuffCtrl.getAll);

module.exports = router;
