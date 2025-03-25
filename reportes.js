const os = require('os');
const fs = require('fs');
console.log('📢 Iniciando reporte del sistema...');

const report = {
    sistemaOperativo: os.platform(),
    versionSO: os.release(),
    arquitectura: os.arch(),
    memoriaTotal: os.totalmem(),
    memoriaLibre: os.freemem(),
    cpus: os.cpus().length
};

const reportJson = JSON.stringify(report, null, 2);
fs.writeFileSync('reporte_sistema.json', reportJson, 'utf-8');

console.log('✅ Reporte generado: reporte_sistema.json');
