const fs = require('fs');

function contarPalabras(archivo) {
    if (!fs.existsSync(archivo)) {
        console.log(`❌ El archivo "${archivo}" no existe.`);
        return;
    }

    const contenido = fs.readFileSync(archivo, 'utf-8');
    const palabras = contenido.split(/\s+/).filter(p => p.length > 0);

    console.log(`✅ El archivo "${archivo}" tiene ${palabras.length} palabras.`);
}

// Ejecutar el script con un archivo de prueba
contarPalabras('texto.txt');
