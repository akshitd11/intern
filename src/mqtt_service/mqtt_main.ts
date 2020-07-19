import { connect, MqttClient, Packet, ISubscriptionGrant, IClientOptions } from 'mqtt';

let mqttUrl : String = "mqtts://ovh.infinitusps.in:8884";
let connOpts: IClientOptions = { username: "window-client", password: "window-client" };
export const connectMqtt = () => {
    let mqttClient: MqttClient = connect(mqttUrl, connOpts);
    mqttClient.on("connect", (iConnOpts : Packet) => {
        console.log("ON MQTT CONN: ", iConnOpts);
        mqttClient.subscribe('#', {qos : 1}, (err: Error, granted : ISubscriptionGrant[]) => {
            if (err) {
                console.log("On err: ", err);
            } else {
                console.log("On Subscribe # : ", granted);
            }
        });
    });
    mqttClient.on('error', (e: Error) => {
        console.error("Error mqtt: ", e);
    });
    mqttClient.on('message', (topic: String, payload: Buffer, packet : Packet) => {
        console.log("Received Packet: topic: ", topic, "Message: ", payload.toString());
        console.log("Packet: ", packet);
    });
};