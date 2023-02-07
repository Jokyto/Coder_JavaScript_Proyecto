// class Alumno{
//     constructor(numero_de_lista, nombre, cant_notas){
//         this.numero_de_lista = numero_de_lista,
//         this.nombre = nombre,
//         this.cant_notas = cant_notas,
//         this.promedio = 0
//         this.notas = []
//     }
// }
// function cargar_nota(estudiante){ 
//     for (let i = 0; i < estudiante.cant_notas; i++) 
//     {
//         let nota = parseInt(prompt("Ingrese la nota."))
//         estudiante.notas.push(nota)
//     }    
// }
// function calcular_promedio(estudiante)
// {
//     let notas_sumadas = 0

//     for (let i = 0; i < estudiante.cant_notas; i++) 
//     {
//         notas_sumadas = notas_sumadas + estudiante.notas[i]
//     }

//     estudiante.promedio = notas_sumadas / estudiante.cant_notas
// }
// function cargar_alumno()
// {
//     let cant_alumnos = parseInt(prompt("Ingrese la cantidad de alumnos."))

//     for (let i = 1; i <= cant_alumnos; i++)
//     {
//         let alumno = prompt("Ingrese el nombre del alumno.")

//         let cant_notas = parseInt(prompt("Ingrese la cantidad de notas que desea cargar."))
        
//         const estudiante = new Alumno(lista_alumnos.length + 1,alumno,cant_notas)
//         cargar_nota(estudiante)
//         calcular_promedio(estudiante)
//         lista_alumnos.push(estudiante)
//     }
    
//     console.log(lista_alumnos)
// }
// function editar_notas()
// {

//     let alumno_a_editar = parseInt(prompt("Ingrese el número del alumno a editar su nota."))

//     let nota_a_editar = parseInt(prompt("Escriba con número cual nota desea cambiar."))

//     lista_alumnos[alumno_a_editar - 1].notas[nota_a_editar - 1] = parseInt(prompt("Ingrese la nota que desea colocarle al alumno."))
//     calcular_promedio(lista_alumnos[alumno_a_editar - 1])
    
//     console.log(lista_alumnos)
// }
// function promedio_aprobado(alumno)
// {
//     return alumno.promedio >= 7
// }
// function promedio_desaprobado(alumno)
// {
//     return alumno.promedio < 7
// }
// function alumnos_aprobados()
// {
//     lista_aprobados = lista_alumnos.filter(promedio_aprobado)
//     console.log(lista_aprobados) 
// }
// function alumnos_desaprobados()
// {
//     lista_desaprobados = lista_alumnos.filter(promedio_desaprobado)
//     console.log(lista_desaprobados) 
// }
// function buscar_alumno()
// {
//     let alumno_buscado = prompt("Ingrese el nombre del alumno que desee ver.")
//     console.log(lista_alumnos.find(Element => Element.nombre === alumno_buscado))
// }
// function remplazar_alumno()
// {
//     let alumno = prompt("Ingrese el nombre del alumno que desea remplazar.")
//     let remplazar_alumno_por = prompt("Ingrese el nombre del nuevo alumno.")

//     lista_alumnos.find(Element => Element.nombre === alumno).nombre = remplazar_alumno_por
//     console.log(lista_alumnos)
// }
// function mas_opciones()
// {
//     let salir = false
//     while (!salir)
//     {
//         let opcion_ingresada = parseInt(prompt
//             (`Ingrese una de las siguientes opciones:
//                 0 - Volver atras
//                 1 - Ver alumnos aprobados
//                 2 - Ver alumnos desaprobados
//                 3 - Buscar alumno
//                 4 - Remplazar/Corregir alumno
//             `))

//         switch (opcion_ingresada) 
//         {
//             case 0:
//                 salir = true
//             break;
//             case 1:
//                 if (!lista_alumnos.length) {
//                     alert("No hay alumnos cargados.")
//                 }
//                 else{
//                     alumnos_aprobados()
//                 }
//             break;
//             case 2:
//                 if (!lista_alumnos.length) {
//                     alert("No hay alumnos cargados.")
//                 }
//                 else{
//                     alumnos_desaprobados()
//                 } 
//             break    
//             case 3:
//                 if (!lista_alumnos.length) {
//                     alert("No hay alumnos cargados.")
//                 }
//                 else{
//                     buscar_alumno()
//                 } 
//             break
//             case 4:
//                 if (!lista_alumnos.length) {
//                     alert("No hay alumnos cargados.")
//                 }
//                 else{
//                     remplazar_alumno()
//                 } 
//             break
//         }
//     }
// }
// function menu()
// {
//     let salir_menu = false

//     while (!salir_menu)
//     {
//         let opcion_ingresada = parseInt(prompt
//             (`Ingrese una de las siguientes opciones:
//                 0 - Salir del menu
//                 1 - Ingresar notas y alumnos
//                 2 - Cambiar notas
//                 3 - Mostrar lista cargada
//                 4 - Más opciones de lista
//             `))

//         switch (opcion_ingresada) 
//         {
//             case 0:
//                 alert("Gracias por venir, vuelva cuando quiera cargar notas!")
//                 salir_menu = true    
//             break;
//             case 1:
//                 cargar_alumno()
//             break;
//             case 2:
//                 if (!lista_alumnos.length) {
//                     alert("No hay alumnos cargados.")
//                 }
//                 else{
//                     editar_notas()
//                 } 
//             break    
//             case 3:
//                 if (!lista_alumnos.length) {
//                     alert("No hay alumnos cargados.")
//                 }
//                 else{
//                     console.log(lista_alumnos)
//                 }
//             break
//             case 4:
//                 mas_opciones()
//             break
//         }
//     }
// }
// menu()

// ----------------------------------------------------------------------------------------------------------
// DOM

let lista_alumnos = []

if(localStorage.getItem("lista_mostrada")){
    lista_mostrada = JSON.parse(localStorage.getItem("lista_mostrada"))
}
else{
    lista_mostrada = false
}

if(localStorage.getItem("lista_alumnos")){
    lista_alumnos = JSON.parse(localStorage.getItem("lista_alumnos"))
}

class Alumno{
    constructor(numero_de_lista, nombre){
        this.numero_de_lista = numero_de_lista,
        this.nombre = nombre
        this.notas = []
        this.promedio = 0
    }
}

let cargar_alumno_btn = document.getElementById("Cargar_alumno_btn")
cargar_alumno_btn.addEventListener("click", () =>{
    cargar_alumno(lista_alumnos)
})

let editar_alumno_btn = document.getElementById("Editar_alumno_btn")
editar_alumno_btn.addEventListener("click", () =>{
    editar_alumno(lista_alumnos)
})

let cargar_nota_btn = document.getElementById("Cargar_nota_btn")
cargar_nota_btn.addEventListener("click", () =>{
    cargar_nota(lista_alumnos)
})

let editar_nota_btn = document.getElementById("Editar_nota_btn")
editar_nota_btn.addEventListener("click", () =>{
    editar_nota(lista_alumnos)
})

let mostrar_lista_btn = document.getElementById("Mostrar_lista_btn")
mostrar_lista_btn.addEventListener("click", () =>{
    if(lista_mostrada){
        let alumnos_div = document.getElementById("alumnos")
        alumnos_div.innerHTML = ""
        lista_mostrada = false
        localStorage.setItem("lista_mostrada", JSON.stringify("lista_mostrada"))
    }
    else{
        mostrar_alumnos(lista_alumnos)
        lista_mostrada = true
        localStorage.setItem("lista_mostrada", JSON.stringify("lista_mostrada"))
    }
})

function cargar_alumno(array){
    let input_alumno = document.getElementById("Alumno_input")

    const nuevo_alumno = new Alumno(array.length + 1, input_alumno.value)
    array.push(nuevo_alumno)
    mostrar_alumnos(array)

    input_alumno.value = ""
}

function mostrar_alumnos(array){
    let alumnos_div = document.getElementById("alumnos")
    let nota_alumno = 0;
    alumnos_div.innerHTML = ""

    for(let alumno of array){
        let nuevo_alumno_div = document.createElement("div")
        nuevo_alumno_div.innerHTML = `
        <div id="${alumno.numero_de_lista}" class="col-12">
            <div class = "row justify-content-center">     
                <h3 class="col-1 mb-0" style="border: 1px solid black"> Nº ${alumno.numero_de_lista} </h3>
                <h3 class="col-4 mb-0" style="border: 1px solid black"> ${alumno.nombre} </h3>
                <div class="col-6 mb-0" style="border: 1px solid black">
                    <div id="${alumno.numero_de_lista}_notas" class="row">
                    </div>
                </div>
                <h3 id ="${alumno.numero_de_lista}_promedio" class="col-1 mb-0" style="border: 1px solid black"> </h3>
            </div>
        </div>
        `
        alumnos_div.appendChild(nuevo_alumno_div)
        
        if(alumno.notas.length !== 0) {

            let notas_div = document.getElementById(`${alumno.numero_de_lista}_notas`)

            for(nota of alumno.notas){
                
                let nuevas_notas_div = document.createElement("div")
                nuevas_notas_div.innerHTML = `${nota}`
                nuevas_notas_div.classList.add("col","justify-content-center","align-items-center")
                notas_div.appendChild(nuevas_notas_div)
            }
        
            //Promedio
            let promedio_div = document.getElementById(`${alumno.numero_de_lista}_promedio`)
            
            for(let nota of alumno.notas){
                nota_alumno += nota
            }
            alumno.promedio = ( nota_alumno / alumno.notas.length)
            
            alumno.promedio = Math.round(alumno.promedio * 10) / 10

            promedio_div.textContent = alumno.promedio
            if(alumno.promedio >= 6.5){
                promedio_div.classList.remove("text-danger")
                promedio_div.classList.add("text-success")
            }
            else{
                promedio_div.classList.remove("text-success")
                promedio_div.classList.add("text-danger")
            }
            nota_alumno = 0  
        }
    }
    localStorage.setItem("lista_alumnos", JSON.stringify(lista_alumnos))
}

function editar_alumno(array)
{
    let alumno_input = document.getElementById("Alumno_editar_input")
    let nuevo_alumno_input = document.getElementById("Alumno_editado_input")
    
    if (!array.length ) {
        alumno_input.value = ""
        nuevo_alumno_input.value = ""
    }
    else{
        array.find(Element => Element.nombre === alumno_input.value).nombre = nuevo_alumno_input.value
        mostrar_alumnos(lista_alumnos)
        alumno_input.value = ""
        nuevo_alumno_input.value = ""
    }
}

function cargar_nota(array){
    let alumno_input = document.getElementById("Alumno_nota_input")
    let nota_input = document.getElementById("Nota_input")

    if (!array.length ) {
        alumno_input.value = ""
        nota_input.value = ""
    }
    else{
        array.find(Element => Element.nombre === alumno_input.value).notas.push(parseInt(nota_input.value))
        
        mostrar_alumnos(array)

        alumno_input.value = ""
        nota_input.value = " "
    }
}

function editar_nota(array){

    let alumno_input = document.getElementById("Alumno_recalificar_input")
    let nota_recalificar_input = document.getElementById("Nota_recalificar_input")
    let nota_recalificada_input = document.getElementById("Nota_recalificada_input")

    if (!array.length ) {
        alumno_input.value = ""
        nota_recalificar_input.value = ""
        nota_recalificada_input.value = ""
    }

    else{
        array.find(Element => Element.nombre === alumno_input.value).notas[parseInt(nota_recalificar_input.value) - 1] = parseInt(nota_recalificada_input.value)
        mostrar_alumnos(lista_alumnos)

        alumno_input.value = ""
        nota_recalificar_input.value = ""
        nota_recalificada_input.value = ""
    }
}
