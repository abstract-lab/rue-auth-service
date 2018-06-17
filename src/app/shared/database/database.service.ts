import { DbConfig, Db, Server, ServerConfig } from 'orientjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
    private server: Server;
    private database: Db;
    private connection: Db;
    constructor(private db_options: DbConfig, private server_options: ServerConfig) { }

    public async connect(): Promise<void> {
        try {
            this.server = new Server();
            this.server.configure(this.server_options);
            this.database = this.server.use(this.db_options);
            this.connection = await this.database.open();

            console.log(`Connected to OrientDb: ${this.connection.name}`);
        } catch (error) {
            console.log(`Error while connecting to the database: ${error}`);
        }
    }
}