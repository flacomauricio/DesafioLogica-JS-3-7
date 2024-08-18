 // Capturar información del usuario
 
 function ingresoDatos() {


   
    // Capturar información del usuario
    const nombre = prompt("¿Cuál es tu nombre?");
    const edad = prompt("¿Cuántos años tienes?");
    //const lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

     // mensaje personalizado
     const mensaje = `Hola ${nombre}, tienes ${edad} años`;

     // Mostrar el mensaje en un alert y en el HTML
     alert(mensaje);
     document.getElementById("mensaje").innerText = mensaje;

     // Pregunta adicional
     const respuestaUsuario = prompt(`¿Quieres seguir hacia el área de Front-End o hacia el área de Back-End? Responde con el número 1 para Front-End o 2 para Back-End.`);

if (respuestaUsuario == 1) {
    const respuestaPositiva = prompt(`Seleccionaste Front-End. ¿Quieres aprender React o Vue? Responde con el número 1 para React o 2 para Vue.`);
    
    if (respuestaPositiva == 1) {
        alert("Seleccionaste React");
        document.getElementById("mensaje").innerText += "\n Seleccionaste Front-End y queres estudiar REACT";
    } else if (respuestaPositiva == 2) {
        alert("Seleccionaste Vue");
        document.getElementById("mensaje").innerText += "\n Seleccionaste Front-End y queres estudiar VUE";
    } else {
        alert("Opción no válida");
    }
    
} else if (respuestaUsuario == 2) {
    const respuestaPositiva2 = prompt(`Seleccionaste Back-End. ¿Quieres aprender C# o Java? Responde con el número 1 para C# o 2 para Java.`);
    
    if (respuestaPositiva2 == 1) {
        alert("Seleccionaste C#");
        document.getElementById("mensaje").innerText += "\n Seleccionaste Back-End y queres estudiar C#";
    } else if (respuestaPositiva2 == 2) {
        alert("Seleccionaste Java");
        document.getElementById("mensaje").innerText += "\n Seleccionaste Back-End y queres estudiar JAVA";
    } else {
        alert("Opción no válida");
    }

} else {
    alert("Opción no válida");
}

const respuestaUsuario3 = prompt(`¿Deseas seguir especializándose en el área elegida o desarrollarte para convertirse en Fullstack? Responde con el número 1 para Seguir especializandome o 2 para FULLSTACK.`);       

if (respuestaUsuario3 == 1) {
    alert('Es importante que te especialices');
} else if(respuestaUsuario3 == 2){
    alert('Es muy buena eleccion convertirse en Fullsatack');
} else {
    alert('entrada erronea');
}


let materias = [];
let agregarMas = true;

while (agregarMas) {
    let nuevaMateria = prompt('¿Hay alguna otra tecnología que te gustaría aprender?:');
    
    if (nuevaMateria) {  // Verifica si el usuario ingresó algo
        materias.push(nuevaMateria);
    }

    agregarMas = prompt("¿Quieres agregar otra tecnología? Responde con 'si' o 'no'.").toLowerCase() === "si";
}

alert(`Según lo que escribiste, quieres aprender ${materias.join(', ')}, ¡excelente elección de tecnologías!`);

    
 }
 