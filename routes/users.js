var express = require('express');
var contacts = require('../controllers/ContactsController');
var router = express.Router();


router.get('/api/contacts', contacts.index);
router.get('/api/contacts/:id', contacts.getById);
router.post('/api/contacts', contacts.add);
router.delete('/api/contacts/:id', contacts.delete);

module.exports = router;
