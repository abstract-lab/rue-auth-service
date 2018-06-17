import { ODatabase, Db, Record } from 'orientjs';
import { Injectable } from '@nestjs/common';
import { DB_CLASS_NAMES } from '../../utils/consts';
import * as Bluebird from 'bluebird';

@Injectable()
export class DatabaseService {
    private database: ODatabase;
    constructor(private options: any) { }

    public async connect(): Promise<void> {
        try {
            this.database = new ODatabase(this.options);
            console.log(`Connected to OrientDb: ${this.database.name}`);
        } catch (error) {
            console.log(`Error while connecting to the database: ${error}`);
        }
    }

    public async init(): Promise<void> {
        const classPromises: Bluebird<any>[] = [];
        try {
            this.database.open()
                .then((db: Db) => {

                    for(let className in DB_CLASS_NAMES) {
                        classPromises.push(db.class.create(DB_CLASS_NAMES[className], 'V', null, false, true));
                    }

                    return Promise.all(classPromises);
                })
                .then((values: any[]) => {
                    console.log(`Initialisation completed`);
                })
                .catch((error) => {
                    console.log(`Error creating classes: ${error}`);
                })
                .finally(() => {
                    this.database.close();
                })
        } catch(error) {
            console.log(error);
        }
    }
}