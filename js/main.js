let lista_alumnos = []

class Alumno{
    constructor(numero_de_lista, nombre, cant_notas){
        this.numero_de_lista = numero_de_lista,
        this.nombre = nombre,
        this.cant_notas = cant_notas,
        this.promedio = 0
        this.notas = []
    }
}

function cargar_nota(estudiante)
{
    
    for (let i = 0; i < estudiante.cant_notas; i++) 
    {
        let nota = parseInt(prompt("Ingrese la nota."))

        estudiante.notas.push(nota)
    }
    
}

function calcular_promedio(estudiante)
{
    let notas_sumadas = 0

    for (let i = 0; i < estudiante.cant_notas; i++) 
    {
        notas_sumadas = notas_sumadas + estudiante.notas[i]
    }

    estudiante.promedio = notas_sumadas / estudiante.cant_notas
}

function cargar_alumno()
{
    let cant_alumnos = parseInt(prompt("Ingrese la cantidad de alumnos."))

    for (let i = 1; i <= cant_alumnos; i++)
    {
        let alumno = prompt("Ingrese el nombre del alumno.")

        let cant_notas = parseInt(prompt("Ingrese la cantidad de notas que desea cargar."))
        
        const estudiante = new Alumno(i,alumno,cant_notas)
        cargar_nota(estudiante)
        calcular_promedio(estudiante)
        lista_alumnos.push(estudiante)
    }
    
    console.log(lista_alumnos)
}

function editar_notas()
{
    console.log(lista_alumnos)

    let alumno_a_editar = parseInt(prompt("Ingrese el número del alumno a editar su nota."))

    let nota_a_editar = parseInt(prompt("Escriba con número cual nota desea cambiar."))

    lista_alumnos[alumno_a_editar - 1].notas[nota_a_editar - 1] = parseInt(prompt("Ingrese la nota que desea colocarle al alumno."))
    calcular_promedio(lista_alumnos[alumno_a_editar - 1])
    
    console.log(lista_alumnos)
}

function menu()
{
    let salir_menu = false

    while (!salir_menu)
    {

        let opcion_ingresada = parseInt(prompt
            (`Ingrese una de las siguientes opciones:
                0 - Salir del menu
                1 - Ingresar notas y alumnos
                2 - Cambiar notas
                3 - Mostrar lista cargada
            `))

        switch (opcion_ingresada) 
        {
            case 0:
                alert("Gracias por venir, vuelva cuando quiera cargar notas!")
                salir_menu = true    
            break;
            case 1:
                cargar_alumno()
            break;
            case 2:
                if (!lista_alumnos.length) {
                    alert("No hay alumnos cargados.")
                }
                else{
                    editar_notas()
                } 
            break    
            case 3:
                if (!lista_alumnos.length) {
                    alert("No hay alumnos cargados.")
                }
                else{
                    console.log(lista_alumnos)
                }
            break
        }
    }
}

menu()
