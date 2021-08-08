const fs = require('fs-extra');
const ejecuta = require('child_process');

const origen = 'C:\\ProgramData\\Avid\\MediaCentralUX\\CCTT\\config.txt';
const destino = 'C:\\ProgramData\\Avid\\MediaCentralUX\\config.txt';
const comando = 'C:\\ProgramData\\Avid\\MediaCentralUX\\MediaCentralUX.lnk';

fs.copy(origen, destino)
    .then(() => {
        console.log('Inicianco Media Central UX - CCTT ...')
    })
    .catch(err => {console.error(err)});

ejecuta.exec(`cmd /c ${comando}`, (error) => {
    if(error) console.log(error);
})