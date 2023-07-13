import { MongoClient, MongoClientOptions, Db } from 'mongodb';

const url = 'mongodb://localhost:27017'; // Cambia la URL si es necesario
const options: MongoClientOptions = {
    maxPoolSize: 10,
};

class MongoDB {
    private client: MongoClient;
    private db: Db;

    async connect(): Promise<void> {
        try {
            this.client = new MongoClient(url, {options});
            await this.client.connect();
            console.log('Conectado exitosamente a MongoDB');
            this.db = this.client.db('nombre_de_la_base_de_datos'); // Cambia por el nombre de tu base de datos
        } catch (error) {
            console.log('Error al conectar a MongoDB:', error);
        }
    }

    async disconnect(): Promise<void> {
        try {
            await this.client.close();
            console.log('Conexión cerrada');
        } catch (error) {
            console.log('Error al cerrar la conexión:', error);
        }
    }

    getDatabase(): Db {
        return this.db;
    }
}

export default MongoDB;
