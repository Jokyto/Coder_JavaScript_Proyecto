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
        
        const estudiante = new Alumno(lista_alumnos.length + 1,alumno,cant_notas)
        cargar_nota(estudiante)
        calcular_promedio(estudiante)
        lista_alumnos.push(estudiante)
    }
    
    console.log(lista_alumnos)
}

function editar_notas()
{

    let alumno_a_editar = parseInt(prompt("Ingrese el número del alumno a editar su nota."))

    let nota_a_editar = parseInt(prompt("Escriba con número cual nota desea cambiar."))

    lista_alumnos[alumno_a_editar - 1].notas[nota_a_editar - 1] = parseInt(prompt("Ingrese la nota que desea colocarle al alumno."))
    calcular_promedio(lista_alumnos[alumno_a_editar - 1])
    
    console.log(lista_alumnos)
}

function promedio_aprobado(alumno)
{
    return alumno.promedio >= 7
}

function promedio_desaprobado(alumno)
{
    return alumno.promedio < 7
}

function alumnos_aprobados()
{
    lista_aprobados = lista_alumnos.filter(promedio_aprobado)
    console.log(lista_aprobados) 
}

function alumnos_desaprobados()
{
    lista_desaprobados = lista_alumnos.filter(promedio_desaprobado)
    console.log(lista_desaprobados) 
}

function buscar_alumno()
{
    let alumno_buscado = prompt("Ingrese el nombre del alumno que desee ver.")
    console.log(lista_alumnos.find(Element => Element.nombre === alumno_buscado))
}

function remplazar_alumno()
{
    let alumno = prompt("Ingrese el nombre del alumno que desea remplazar.")
    let remplazar_alumno_por = prompt("Ingrese el nombre del nuevo alumno.")

    lista_alumnos.find(Element => Element.nombre === alumno).nombre = remplazar_alumno_por
    console.log(lista_alumnos)
}

function mas_opciones()
{
    let salir = false
    while (!salir)
    {
        let opcion_ingresada = parseInt(prompt
            (`Ingrese una de las siguientes opciones:
                0 - Volver atras
                1 - Ver alumnos aprobados
                2 - Ver alumnos desaprobados
                3 - Buscar alumno
                4 - Remplazar/Corregir alumno
            `))

        switch (opcion_ingresada) 
        {
            case 0:
                salir = true
            break;
            case 1:
                if (!lista_alumnos.length) {
                    alert("No hay alumnos cargados.")
                }
                else{
                    alumnos_aprobados()
                }
            break;
            case 2:
                if (!lista_alumnos.length) {
                    alert("No hay alumnos cargados.")
                }
                else{
                    alumnos_desaprobados()
                } 
            break    
            case 3:
                if (!lista_alumnos.length) {
                    alert("No hay alumnos cargados.")
                }
                else{
                    buscar_alumno()
                } 
            break
            case 4:
                if (!lista_alumnos.length) {
                    alert("No hay alumnos cargados.")
                }
                else{
                    remplazar_alumno()
                } 
            break
        }
    }
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
                4 - Más opciones de lista
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
            case 4:
                mas_opciones()
            break
        }
    }
}

menu()
