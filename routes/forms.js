var express         = require('express'),
	formController  = require('../controllers/FormController'),
	router          = express.Router();

router.get('/api/forms', formController.index);
router.get('/api/forms/:id', formController.getById);
router.post('/api/forms', formController.add);
router.delete('/api/forms/:id', formController.delete);	

module.exports = router;