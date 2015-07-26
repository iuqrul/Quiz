var express = require('express');
var router = express.Router();
/* Importamos el controlador */
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {
		title : 'Quiz',
		errors : []
	});
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load); // autoload :quizId

/* Definimos las rutas de la aplicación */
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new', quizController.new);
router.get('/quizes/:quizId(\\d+)/edit', quizController.edit);
router.put('/quizes/:quizId(\\d+)', quizController.update);
router.delete ('/quizes/:quizId(\\d+)', quizController.destroy);
router.post('/quizes/create', quizController.create);

/* GET créditos */
router.get('/author', function (req, res, next) {
	res.render('author', {
		author : 'Javier Lurquí',
		errors : []
	});
});

module.exports = router;
