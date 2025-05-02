type FileSource = { path: string };
const fileSource: FileSource = {
    path: 'some/path/to/file.csv'
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
    connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
    if ('path' in source) {
        console.log(`Loading data from file: ${source.path}`);
        // Lógica para abrir e ler o arquivo
    } else if ('connectionUrl' in source) {
        console.log(`Loading data from database: ${source.connectionUrl}`);
        // Lógica para conectar no banco e pegar dados
    }
}
