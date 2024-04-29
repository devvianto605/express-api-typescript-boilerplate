import express, { Application, json, urlencoded } from 'express';
import mongoose from "mongoose";
import { router } from './routes/item.route';
import dotenv from 'dotenv';

export async function createServer(): Promise<Application> {
    const app = express();
    dotenv.config();


    app.use(urlencoded({ extended: false }));
    app.use(json());

    app.use("/", router);

    const password = encodeURIComponent(process.env.MONGODB_PASSWORD);

    mongoose
        .connect(process.env.MONGODB_CONNECTION_STRING?.replace('<password>', password))
        .then(() => {
            console.log("Connected to database!");
            app.listen(3000, () => {
                console.log("Server is running on port 3000");
            });
        })
        .catch(() => {
            console.log("Connection failed!");
        });



    return app;
}

