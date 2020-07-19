import Axios, { AxiosResponse } from 'axios';
import * as myenv from '../util/myenv';

const testCb = () => {
    let url : string = formatTBUrl();
    let telemeteryData = {
        temperature: getRandomInteger(20, 40),
        humidity: getRandomInteger(30, 70),
        oxygen: getRandomInteger(30, 40)
    };
    Axios.post(url, telemeteryData, {headers : {
        "content-type": "application/json"
    }}).then((res : AxiosResponse) => {
        console.log("RES: ", res.status);
    }).catch((err : any) => {
        console.log("ERR: ", err.response.status);
    });
};
// Min included, max excluded
function getRandomInteger(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min)) + min;
};
let formatTBUrl = () : string => {
    let tmpUrl : string = myenv.TB_TELEMETERY_URL;
    tmpUrl = tmpUrl.replace("$" + "HOST_NAME", myenv.TB_HOST_NAME);
    tmpUrl = tmpUrl.replace("$" + "ACCESS_TOKEN", myenv.TB_DUMMY_DEVICE_TOKEN);
    console.log("FINAL URL: ", tmpUrl);

    return tmpUrl;
}

export const startDummyDataPush = () : void => {
    var publishDummyDataOnInterval = setInterval(() => {
        testCb();
    }, 3000);
};