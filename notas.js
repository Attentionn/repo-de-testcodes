const fs = require('fs');

const archivo = 'notas.json';

function cargarNotas() {
    try {
        const datos = fs.readFileSync(archivo, 'utf-8');
        return JSON.parse(datos);
    } catch (error) {
        return [];
    }
}

function guardarNotas(notas) {
    fs.writeFileSync(archivo, JSON.stringify(notas, null, 2));
}

function agregarNota(titulo, contenido) {
    const notas = cargarNotas();
    notas.push({ titulo, contenido });
    guardarNotas(notas);
    console.log(`Nota "${titulo}" agregada.`);
}

function listarNotas() {
    const notas = cargarNotas();
    if (notas.length === 0) {
        console.log('No hay notas guardadas.');
        return;
    }
    console.log('Notas guardadas:');
    notas.forEach((nota, index) => console.log(`${index + 1}. ${nota.titulo} - ${nota.contenido}`));
}

function eliminarNota(titulo) {
    let notas = cargarNotas();
    const nuevasNotas = notas.filter(nota => nota.titulo !== titulo);
    
    if (notas.length === nuevasNotas.length) {
        console.log(`Nota "${titulo}" no encontrada.`);
        return;
    }

    guardarNotas(nuevasNotas);
    console.log(`Nota "${titulo}" eliminada.`);
}

// Pruebas
agregarNota('Tarea', 'Hacer el reporte de Node.js');
listarNotas();
eliminarNota('Tarea');
listarNotas();
