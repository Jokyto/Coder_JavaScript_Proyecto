let lista_alumnos = []

const cargar_alumnado = async () => {
    const response = await fetch("alumnos.json")
    const data = await response.json()

    for(let estudiante of data){
        let nuevo_alumno = new Alumno(estudiante.nombre)
        nuevo_alumno.notas = estudiante.notas
        nuevo_alumno.numero_de_lista = estudiante.numero_de_lista
        nuevo_alumno.promedio = estudiante.promedio
        lista_alumnos.push(nuevo_alumno)
    }
    localStorage.setItem("lista_alumnos", JSON.stringify(lista_alumnos))
}

let ordenar_promedio_mayor = document.getElementById("Mayor_promedio_btn")
ordenar_promedio_mayor.addEventListener("click", () =>{
    ordenar_mayor_promedio(lista_alumnos)
    ordenar_promedio_mayor.classList.remove("d-block")
    ordenar_promedio_menor.classList.remove("d-none")
    ordenar_promedio_mayor.classList.add("d-none")
    ordenar_promedio_menor.classList.add("d-block")
    localStorage.setItem("Mayor_promedio", JSON.stringify(true))
})

let ordenar_promedio_menor = document.getElementById("Menor_promedio_btn")
ordenar_promedio_menor.addEventListener("click", () =>{
    ordenar_menor_promedio(lista_alumnos)
    ordenar_promedio_menor.classList.remove("d-block")
    ordenar_promedio_mayor.classList.remove("d-none")
    ordenar_promedio_menor.classList.add("d-none")
    ordenar_promedio_mayor.classList.add("d-block")
    localStorage.setItem("Mayor_promedio", JSON.stringify(false))
})

let alfabetico_ascendente = document.getElementById("Alfabetico_ascendente_btn")
alfabetico_ascendente.addEventListener("click", () =>{
    ordenar_alfabetico_ascendente(lista_alumnos)
    alfabetico_ascendente.classList.remove("d-block")
    alfabetico_descendiente.classList.remove("d-none")
    alfabetico_ascendente.classList.add("d-none")
    alfabetico_descendiente.classList.add("d-block")
    localStorage.setItem("Alfabetico_ascendente", JSON.stringify(true))
})

let alfabetico_descendiente = document.getElementById("Alfabetico_descendiente_btn")
alfabetico_descendiente.addEventListener("click", () =>{
    ordenar_alfabetico_descendente(lista_alumnos)
    alfabetico_descendiente.classList.remove("d-block")
    alfabetico_ascendente.classList.remove("d-none")
    alfabetico_descendiente.classList.add("d-none")
    alfabetico_ascendente.classList.add("d-block")
    localStorage.setItem("Alfabetico_ascendente", JSON.stringify(false))
})

let ocultar_lista = document.getElementById("Ocultar_lista_btn")
ocultar_lista.addEventListener("click", () =>{
    let alumnos_div = document.getElementById("alumnos")
    let lista = document.getElementById("lista")
    lista.classList.add("d-none")
    lista.classList.remove("d-block")
    ocultar_lista.classList.add("d-none")
    ocultar_lista.classList.remove("d-block")
    mostrar_lista.classList.add("d-block")
    mostrar_lista.classList.remove("d-none")
    alumnos_div.innerHTML = ""
    
    lista_se_muestra = false
    localStorage.setItem("lista_se_muestra", JSON.stringify(lista_se_muestra))
})

let mostrar_lista = document.getElementById("Mostrar_lista_btn")
mostrar_lista.addEventListener("click", () =>{
    mostrar_alumnos(lista_alumnos)
    ocultar_lista.classList.add("d-block")
    ocultar_lista.classList.remove("d-none")
    mostrar_lista.classList.add("d-none")
    mostrar_lista.classList.remove("d-block")
    lista_se_muestra = true
    localStorage.setItem("lista_se_muestra", JSON.stringify(lista_se_muestra))
})

localStorage.getItem("lista_alumnos") ? (lista_alumnos = JSON.parse(localStorage.getItem("lista_alumnos"))) : (cargar_alumnado())

localStorage.getItem("lista_se_muestra") && (JSON.parse(localStorage.getItem("lista_se_muestra"))) ? (mostrar_alumnos(lista_alumnos),ocultar_lista.classList.remove("d-none"), ocultar_lista.classList.add("d-block"),mostrar_lista.classList.remove("d-block"),mostrar_lista.classList.add("d-none"))
:
(ocultar_lista.classList.remove("d-block"),ocultar_lista.classList.add("d-none"), mostrar_lista.classList.remove("d-none"), mostrar_lista.classList.add("d-block"))

localStorage.getItem("Mayor_promedio") && (JSON.parse(localStorage.getItem("Mayor_promedio"))) ? (ordenar_promedio_mayor.classList.remove("d-block"),ordenar_promedio_menor.classList.remove("d-none"),ordenar_promedio_mayor.classList.add("d-none"),ordenar_promedio_menor.classList.add("d-block"))
:
(ordenar_promedio_menor.classList.remove("d-block"), ordenar_promedio_mayor.classList.remove("d-none"), ordenar_promedio_menor.classList.add("d-none"), ordenar_promedio_mayor.classList.add("d-block"))

localStorage.getItem("Alfabetico_ascendente") && (JSON.parse(localStorage.getItem("Alfabetico_ascendente"))) ? (alfabetico_ascendente.classList.remove("d-block"),alfabetico_descendiente.classList.remove("d-none"),alfabetico_ascendente.classList.add("d-none"),alfabetico_descendiente.classList.add("d-block"))
:
(alfabetico_descendiente.classList.remove("d-block"), alfabetico_ascendente.classList.remove("d-none"), alfabetico_descendiente.classList.add("d-none"), alfabetico_ascendente.classList.add("d-block"))


class Alumno{
    constructor(nombre){
        this.numero_de_lista = 0
        this.nombre = nombre
        this.notas = []
        this.promedio = 0
    }
}

let cargar_alumno = document.getElementById("Cargar_alumno_btn")
cargar_alumno.addEventListener("click", () =>{
    cargar_alumnos(lista_alumnos)
})

let editar_alumno = document.getElementById("Editar_alumno_btn")
editar_alumno.addEventListener("click", () =>{
    editar_alumnos(lista_alumnos)
})

let cargar_nota = document.getElementById("Cargar_nota_btn")
cargar_nota.addEventListener("click", () =>{
    cargar_notas(lista_alumnos)
})

let editar_nota = document.getElementById("Editar_nota_btn")
editar_nota.addEventListener("click", () =>{
    editar_notas(lista_alumnos)
})

let borrar_alumno = document.getElementById("Borrar_alumno_btn")
borrar_alumno.addEventListener("click", () =>{
    Swal.fire({
        title: '¿Esta seguro de borrar el alumno?',
        text: "No va a poder revertirlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, borralo!',
        cancelButtonText: 'No, no quiero!',
      }).then((result) => {
        if (result.isConfirmed) {
            borrar_alumnos(lista_alumnos)
            Swal.fire(
                'Alumno borrado!',
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire(
            'Cancelado',
            'No se ha borrado al alumno!',
            'error'
          )
        }
      })
})

function cargar_alumnos(array){
    let input_alumno = document.getElementById("Alumno_input")

    array.find(Element => Element.nombre.toLowerCase() === input_alumno.value.toLowerCase()) ? 
    (input_alumno.value = "", Toastify({
        text: "Ya hay un alumno con ese nombre",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast())
      :
      ( nuevo_alumno = new Alumno(input_alumno.value),
        array.push(nuevo_alumno),
        mostrar_alumnos(array),
        input_alumno.value = "",
        Toastify({
            text: "Se cargo el alumno",
            className: "info",
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast())
}

function mostrar_alumnos(array){
    let alumnos_div = document.getElementById("alumnos")
    let nota_alumno = 0;
    let lista_mostrada = document.getElementById("lista")
    let alumno_nro = 1;
    alumnos_div.innerHTML = ""
    lista_mostrada.classList.remove("d-none")
    lista_mostrada.classList.add("d-block")

    for(let alumno of array){
        alumno.numero_de_lista = alumno_nro
        let nuevo_alumno_div = document.createElement("div")
        nuevo_alumno_div.innerHTML = `
        <div id="${alumno.numero_de_lista}" class="col-12">
            <div class = "row justify-content-center">     
                <h3 class="col-1 mb-0" style="border: 1px solid black"> Nº ${alumno_nro} </h3>
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

        //Muestro las notas
        if(alumno.notas.length !== 0) {

            let notas_div = document.getElementById(`${alumno.numero_de_lista}_notas`)

            for(nota of alumno.notas){
                
                let nuevas_notas_div = document.createElement("div")
                nuevas_notas_div.innerHTML = `${nota}`
                nuevas_notas_div.classList.add("col","text-center")
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

            alumno.promedio >= 6.5 ? (promedio_div.classList.remove("text-danger"),promedio_div.classList.add("text-success"))
            :
            (promedio_div.classList.remove("text-success"),promedio_div.classList.add("text-danger"))

            nota_alumno = 0  
        }
        alumno_nro++
    }
    alumno_nro = 1
    localStorage.setItem("lista_alumnos", JSON.stringify(array))
}

function editar_alumnos(array)
{
    let alumno_input = document.getElementById("Alumno_editar_input")
    let nuevo_alumno_input = document.getElementById("Alumno_editado_input")
    
    if (!array.length) {
        alumno_input.value = ""
        nuevo_alumno_input.value = ""
    }
    else{
        array.find(Element => Element.nombre.toLowerCase() === alumno_input.value.toLowerCase()) ? 
        (
            array.find(Element => Element.nombre.toLowerCase() === alumno_input.value.toLowerCase()).nombre = nuevo_alumno_input.value,
            mostrar_alumnos(array),

            alumno_input.value = "",
            nuevo_alumno_input.value = "",

            Toastify({
                text: "Se cambio el alumno",
                className: "info",
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast()
        ) 
        :
        (
            alumno_input.value = "",
            nuevo_alumno_input.value = "",

            Toastify({
                text: "No se encontro el alumno",
                className: "info",
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast()
        )
    }


}

function cargar_notas(array){
    let alumno_input = document.getElementById("Alumno_nota_input")
    let nota_input = document.getElementById("Nota_input")

    if (!array.length ) {
        alumno_input.value = ""
        nota_input.value = ""
    }
    else{
        array.find(Element => Element.nombre.toLowerCase() === alumno_input.value.toLowerCase()) ? 
        (
            array.find(Element => Element.nombre.toLowerCase() === alumno_input.value.toLowerCase()).notas.push(parseInt(nota_input.value)),
        
            mostrar_alumnos(array),

            alumno_input.value = "",
            nota_input.value = " ",

            Toastify({
                text: "Se cargo la nota",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast()
        ) 
        :
        (
            alumno_input.value = "",
            nuevo_alumno_input.value = "",

            Toastify({
                text: "No se encontro el alumno",
                className: "info",
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast()
        )
    }
}

function editar_notas(array){

    let alumno_input = document.getElementById("Alumno_recalificar_input")
    let nota_recalificar_input = document.getElementById("Nota_recalificar_input")
    let nota_recalificada_input = document.getElementById("Nota_recalificada_input")

    if (!array.length ) {
        alumno_input.value = ""
        nota_recalificar_input.value = ""
        nota_recalificada_input.value = ""
    }
    else{
        array.find(Element => Element.nombre.toLowerCase() === alumno_input.value.toLowerCase()) ? 
        (
            array.find(Element => Element.nombre.toLowerCase() === alumno_input.value.toLowerCase()).notas[parseInt(nota_recalificar_input.value) - 1] ?
            (
                array.find(Element => Element.nombre.toLowerCase() === alumno_input.value.toLowerCase()).notas[parseInt(nota_recalificar_input.value) - 1] = parseInt(nota_recalificada_input.value),
            mostrar_alumnos(array),
    
            alumno_input.value = "",
            nota_recalificar_input.value = "",
            nota_recalificada_input.value = "",

            Toastify({
                text: "Se edito la nota",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast()
            )
            :
            (
                alumno_input.value = "",
                nota_recalificar_input.value = "",
                nota_recalificada_input.value = "",
    
                Toastify({
                    text: "No se encontro la nota",
                    className: "info",
                    style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    }
                }).showToast()
            )
        ) 
        :
        (
            alumno_input.value = "",
            nota_recalificar_input.value = "",
            nota_recalificada_input.value = "",

            Toastify({
                text: "No se encontro el alumno",
                className: "info",
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast()
        )
    }
}

function borrar_alumnos(array){
    let borrar_alumno_input = document.getElementById("Borrar_alumno_input")

    array.find(Element => Element.nombre.toLowerCase() === borrar_alumno_input.value.toLowerCase()) ? 
        (
            array = array.filter(item => item.nombre.toLowerCase() !== borrar_alumno_input.value.toLowerCase()),
            borrar_alumno_input.value = ""
        )
        :
        (
            borrar_alumno_input.value = "",
    
            Toastify({
                text: "No se encontro el alumno",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast()
        )
    mostrar_alumnos(array)

    
}

function ordenar_menor_promedio(array){
    array.sort((primer_alumno, segundo_alumno) => primer_alumno.promedio - segundo_alumno.promedio)
    mostrar_alumnos(array)
}

function ordenar_mayor_promedio(array){
    array.sort((primer_alumno, segundo_alumno) => segundo_alumno.promedio - primer_alumno.promedio)
    mostrar_alumnos(array)
}

function ordenar_alfabetico_ascendente(array){
    array.sort((primer_alumno, segundo_alumno) => {
        const nombre_primer_alumno = primer_alumno.nombre.toLowerCase();
        const nombre_segundo_alumno = segundo_alumno.nombre.toLowerCase();

        if(nombre_primer_alumno < nombre_segundo_alumno){
            return -1
        }
        if (nombre_primer_alumno > nombre_segundo_alumno) {
            return 1
        }
        return 0
    })
    mostrar_alumnos(array)
}

function ordenar_alfabetico_descendente(array){
    array.sort((primer_alumno, segundo_alumno) => {
        const nombre_primer_alumno = primer_alumno.nombre.toLowerCase();
        const nombre_segundo_alumno = segundo_alumno.nombre.toLowerCase();

        if(nombre_primer_alumno > nombre_segundo_alumno){
            return -1
        }
        if (nombre_primer_alumno < nombre_segundo_alumno) {
            return 1
        }
        return 0
    })
    mostrar_alumnos(array)
}