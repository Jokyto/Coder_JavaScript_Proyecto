
let cargar_archivos = prompt("Desea cargar una lista de estudiantes por materia? (Responda con si o no).")

if (cargar_archivos.toLowerCase() == "si" || cargar_archivos.toLocaleLowerCase() == "sí") {

    let curso = prompt("Ingrese el curso que desee cargar.")
    let materia = prompt("Ingrese la materia que desee cargar.")
    let profesor = prompt("Ingrese el nombre del profesor.")
    let cuatrimestre = prompt("Ingrese el cuatrimestre de las notas.")
    let cant_alumnos = parseInt(prompt("Ingrese la cantidad de alumnos."))

    console.log(`Curso: ${curso}\nMateria: ${materia}\nCuatrimestre: ${cuatrimestre}\nProfesor: ${profesor}`)

    for (let i = 1; i <= cant_alumnos; i++)
    {
        let alumno = prompt("Ingrese el nombre del alumno.")
        let nota = parseInt(prompt("Ingrese la nota."))
        console.log(`|${i}| ${alumno} |${nota}|`)
    }

    alert("Gracias por su visita, vuelva cuando quiera cargar otra lista de alumnos.")
}
else{
    alert("Gracias por su visita, vuelva cuando quiera cargar una lista de alumnos.")
}