#Quiz
Modulo 9

Ejercicio P2P Obligatorio

Explicación de la tarea
Añadir auto-logout de sesión
 
Se pide añadir a la gestión de sesiones un mecanismo de autologout, de forma que si un usuario está inactivo (sin enviar ninguna solicitud HTTP) más de 2 minutos, la sesión se desconecte y deba volver a autenticarse para continuar.

Para implementar esta funcionalidad se recomienda añadir un middleware de auto-logout en app.js que guarde en cada transacción la hora del reloj del sistema en una variable de la sesión a la que está asociada. El middleware debe comprobar en cada transacción con una sesión activa si la han transcurrido más de 2 minutos desde la transacción anterior en dicha sesión, en cuyo caso destruirá la sesión.

Una vez realizados los cambios, debe guardarse una nueva versión (commit).
Ampliación opcional: Añadir una página de estadisticas
 

Las personas interesadas en practicar más con express y MVC, pueden añadir una página de estadisticas. La página de estadisticas estará accesible directamente desde la barra de navegación y mostrará las siguientes informaciones extraidas de la base de datos:

    El número de preguntas
    El número de comentarios totales
    El número medio de comentarios por pregunta
    El número de preguntas sin comentarios
    El número de preguntas con comentarios

Para implementar esta funcionalidad habra que crear una nueva entrada en el interfaz REST de quizes asociada a la ruta

     GET /quizes/statistics

Además habra que crear un nuevo controlador que extraiga la información de la base de datos y una nueva vista que la presente.

Una vez realizado habra que guardar esta funcionalidad en una nueva versión (commit). a continuación se desplegará la rama en heroku y se subirá a GitHub.
 


# Quiz
Proyecto Quiz - Curso Nodejs de MiriadaX - Tema 6

Explicación de la tarea

Crear un repositorio en Github donde subir el proyecto que se les pide desarrollar en los siguientes apartados de esta práctica.

El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos en las transparencias de clase.

No se permite clonar el repositorio oficial de la asignatura que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

Además se deben añadir los siguientes cambios a Quiz:

1) Modificar el servidor Quiz para añadir un enlace en el píe de página <footer> del marco de las páginas renderizadas que apunte a la página de su proyecto en GitHub.

2) Modificar el servidor Quiz para que sirva una nueva página con los datos de los autores de la práctica. Este desarrollo se realizará en una rama llamada créditos. Cree la rama creditos y cámbiese a ella para hacer el desarrollo pedido en este apartado.

    Crear un nuevo enlace en la barra de navegación que apunte a la página de créditos. La ruta de acceso a esta página debe ser /author.
    Modifique el router (routers/index.js) para que atienda las peticiones "GET /author" y sirva una nueva vista views/author.ejs con los datos de los autores o autor de la página, mostrando el nombre de los autores, su fotografía y un pequeño video (opcional) de 30 seg.

Cuando se haya terminado este desarrollo, integrelo en la rama master, y súbalo a GitHub.

Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar allí el servidor desarrollado en esta práctica.

Se deben seguir los mismos pasos explicados en las transparencias para realizar el despliegue.

Actualice GitHub con los cambios realizados en este apartado.

El proyecto desarrollado en esta practica, junto con todas las modificaciones añadidas, debe subirse al repositorio creado en Github por los alumnos.

Entregar en el texto de la entrega a MiriadaX

1) El URL al despliegue en Heroku como un enlace clicable.

2) El URL al proyecto en GITHUB como un enlace clicable.
El evaluador debe comprobar que en Heroku se ha desplegado la aplicación con los cambios solicitados y que en GITHUB se ha subido el proyecto y que los cambios solicitados se han introducido en el último commit.



Modulos necesarios:

	body-parser
	cookie-parser
	debug
	ejs
	express
	morgan
	serve-favicon
	
Desde Quiz\src\quiz se instalan con npm install porque están en las dependencias de package.json