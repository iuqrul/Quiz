var express = require('express');
var router = express.Router();
/* Importamos el controlador */
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

/* Añadimos las rutas de pregunta y respuesta */
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

/* GET créditos */
router.get('/author', function(req, res, next) {
  res.render('author', { author: 'Javi Lurquí' });
});

module.exports = router;