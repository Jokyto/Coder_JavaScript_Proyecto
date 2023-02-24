# Coder_JavaScript_Proyecto
Proyecto para el curso de JavaScript de coderHouse.

Este proyecto es un simulador de carga de alumnos con sus respectivas notas que le podra calcular el promedio de cada uno en base 10 con un decimal 
después de la coma.

Tendra la opción de CARGAR ALUMNO, EDITAR ALUMNO, CARGAR NOTA, EDITAR NOTA, BORRAR ALUMNO.

CARGAR ALUMNO:
  En la carga de alumno usted podrá proporcionar un nombre que se cargara a la lista, mostrara un cartel de exito y se vera reflejado en el DOM.
  En cuyo caso de que el nombre ya este en la lista, se mostrara un cartel de que ya hay un alumno con ese nombre y no se repetira.

EDITAR ALUMNO:
  Con editar alumno proporcionando un nombre y un nuevo nombre se va a reemplazar al alumno con dicho nombre por uno nuevo y aparecera un cartel de exito.
  En cuyo caso que no se encuentre el alumno con el que desea remplazarlo, saltará un cartel que dirá que no se pudo encontrar a este.
  
CARGAR NOTA:
  A cada alumno le puede cargar una nota indicando un nombre y la nota numerica para el futuro calculo del promedio.
  En cuyo caso que no se encuentre el alumno al que desee cargar una nota, saltará un cartel que dirá que no se pudo encontrar a este.

EDITAR NOTA:
  A cada alumno le puede editar una nota indicando un nombre, la nota que desea editar indicandola con numero yendo de izquierda a derecha 
  la primera nota(1), la segunda(2) y asi sucesivamente y la nota numerica con la que pisara la anterior.
  En cuyo caso que no se encuentre el alumno al que desee cargar una nota o la nota que esta marcando, saltará un cartel que dirá que no se
  pudo encontrar a este.

BORRAR ALUMNO
  Indicando un nombre que no distingue entre minúsculas y mayúsculas este se borrará de la lista, pero antes de poder borrarlo le aparecera
  un cartel preguntandole si desea borrar a dicho alumno, si acepta le saldrá un cartel de exito, en caso contrario un cartel de cancelacion.
  En cuyo caso que no se encuentre el alumno, saltará un cartel que dirá que no se pudo encontrar a este.
