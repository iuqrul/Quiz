var express = require('express');
var router = express.Router();
/* Importamos el controlador */
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title : 'Quiz'
	});
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load); // autoload :quizId

/* Añadimos las rutas de pregunta y respuesta */
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

/* GET créditos */
router.get('/author', function (req, res, next) {
	res.render('author', {
		author : 'Javier Lurquí'
	});
});

module.exports = router;
