const fileSource = {
    path: 'some/path/to/file.csv'
};
const dbSource = {
    connectionUrl: 'some-connection-url',
};
function loadData(source) {
    if ('path' in source) {
        console.log(`Loading data from file: ${source.path}`);
        // Lógica para abrir e ler o arquivo
    }
    else if ('connectionUrl' in source) {
        console.log(`Loading data from database: ${source.connectionUrl}`);
        // Lógica para conectar no banco e pegar dados
    }
}
export {};
