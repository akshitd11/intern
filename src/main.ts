import { app } from './app';
import http from 'http';
import mongodb from 'mongodb';
import * as routes from './routes/index';
import * as mqtt_main from './mqtt_service/mqtt_main';
import * as cbs from './callbacks/callback_main';
import * as myenv from './util/myenv';

console.log("Starting application in", myenv.NODE_ENV, "environment")

let mongoURI: string = 'mongodb://localhost:27017/modterm';
const mongoClient: mongodb.MongoClient = new mongodb.MongoClient(mongoURI, { useUnifiedTopology: true });

mongoClient.connect(function (err : mongodb.MongoError, client : mongodb.MongoClient) {
    if (err) {
        throw err
    }
    let db = client.db('modterm')

    db.collection('test_1').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
    })
})


routes.register(app);

const port : number = 3050;
const hostname : string = "127.0.0.1";
const server : http.Server = http.createServer(app);

server.on('error', (err : Error) => {
    console.error("SERVER FATAL ERROR: ", err);
});
server.on('listening', () => {
    console.info(`Server listening on http://${hostname}:${port}`);
});
server.listen(port, hostname);

// mqtt_main.connectMqtt();

// cbs.startDummyDataPush();