#Quiz
Modulo 9

Ejercicio P2P Obligatorio

Explicaci�n de la tarea
A�adir auto-logout de sesi�n
 
Se pide a�adir a la gesti�n de sesiones un mecanismo de autologout, de forma que si un usuario est� inactivo (sin enviar ninguna solicitud HTTP) m�s de 2 minutos, la sesi�n se desconecte y deba volver a autenticarse para continuar.

Para implementar esta funcionalidad se recomienda a�adir un middleware de auto-logout en app.js que guarde en cada transacci�n la hora del reloj del sistema en una variable de la sesi�n a la que est� asociada. El middleware debe comprobar en cada transacci�n con una sesi�n activa si la han transcurrido m�s de 2 minutos desde la transacci�n anterior en dicha sesi�n, en cuyo caso destruir� la sesi�n.

Una vez realizados los cambios, debe guardarse una nueva versi�n (commit).
Ampliaci�n opcional: A�adir una p�gina de estadisticas
 

Las personas interesadas en practicar m�s con express y MVC, pueden a�adir una p�gina de estadisticas. La p�gina de estadisticas estar� accesible directamente desde la barra de navegaci�n y mostrar� las siguientes informaciones extraidas de la base de datos:

    El n�mero de preguntas
    El n�mero de comentarios totales
    El n�mero medio de comentarios por pregunta
    El n�mero de preguntas sin comentarios
    El n�mero de preguntas con comentarios

Para implementar esta funcionalidad habra que crear una nueva entrada en el interfaz REST de quizes asociada a la ruta

     GET /quizes/statistics

Adem�s habra que crear un nuevo controlador que extraiga la informaci�n de la base de datos y una nueva vista que la presente.

Una vez realizado habra que guardar esta funcionalidad en una nueva versi�n (commit). a continuaci�n se desplegar� la rama en heroku y se subir� a GitHub.
 


# Quiz
Proyecto Quiz - Curso Nodejs de MiriadaX - Tema 6

Explicaci�n de la tarea

Crear un repositorio en Github donde subir el proyecto que se les pide desarrollar en los siguientes apartados de esta pr�ctica.

El proyecto debe rehacer  el servidor Quiz desde cero, repitiendo los mismos pasos descritos en las transparencias de clase.

No se permite clonar el repositorio oficial de la asignatura que aloja el servidor Quiz. Debe repetirse el desarrollo desde cero.

Adem�s se deben a�adir los siguientes cambios a Quiz:

1) Modificar el servidor Quiz para a�adir un enlace en el p�e de p�gina <footer> del marco de las p�ginas renderizadas que apunte a la p�gina de su proyecto en GitHub.

2) Modificar el servidor Quiz para que sirva una nueva p�gina con los datos de los autores de la pr�ctica. Este desarrollo se realizar� en una rama llamada cr�ditos. Cree la rama creditos y c�mbiese a ella para hacer el desarrollo pedido en este apartado.

    Crear un nuevo enlace en la barra de navegaci�n que apunte a la p�gina de cr�ditos. La ruta de acceso a esta p�gina debe ser /author.
    Modifique el router (routers/index.js) para que atienda las peticiones "GET /author" y sirva una nueva vista views/author.ejs con los datos de los autores o autor de la p�gina, mostrando el nombre de los autores, su fotograf�a y un peque�o video (opcional) de 30 seg.

Cuando se haya terminado este desarrollo, integrelo en la rama master, y s�balo a GitHub.

Una vez realizados y probados estos cambios, debe crearse una cuenta en heroku para desplegar all� el servidor desarrollado en esta pr�ctica.

Se deben seguir los mismos pasos explicados en las transparencias para realizar el despliegue.

Actualice GitHub con los cambios realizados en este apartado.

El proyecto desarrollado en esta practica, junto con todas las modificaciones a�adidas, debe subirse al repositorio creado en Github por los alumnos.

Entregar en el texto de la entrega a MiriadaX

1) El URL al despliegue en Heroku como un enlace clicable.

2) El URL al proyecto en GITHUB como un enlace clicable.
El evaluador debe comprobar que en Heroku se ha desplegado la aplicaci�n con los cambios solicitados y que en GITHUB se ha subido el proyecto y que los cambios solicitados se han introducido en el �ltimo commit.



Modulos necesarios:

	body-parser
	cookie-parser
	debug
	ejs
	express
	morgan
	serve-favicon
	
Desde Quiz\src\quiz se instalan con npm install porque est�n en las dependencias de package.json