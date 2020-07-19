import * as dotenv from 'dotenv';


dotenv.config();
let envFilePath : string;
switch (process.env.NODE_ENV) {
    case "test":
        envFilePath = `${__dirname}/../../.env.test`;
        break;
    case "production":
        envFilePath = `${__dirname}/../../.env.production`;
        break;
    default:
        envFilePath = `${__dirname}/../../.env.development`;
}
let ret : dotenv.DotenvConfigOutput = dotenv.config({ path: envFilePath });
if (ret.error) {
    //Die here so admin know that env file could not be parsed.
    console.error("Environment config file not found or contains error.\r\nPath for config file: ", envFilePath);
    process.exit(1);
}

export const NODE_ENV: string = process.env.NODE_ENV ? process.env.NODE_ENV : "dev";
export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const TB_HOST_NAME : string = process.env.TB_HOST_NAME ? process.env.TB_HOST_NAME : "http://localhost:8081/";
export const TB_TELEMETERY_URL : string = process.env.TB_TELEMETERY_URL ? process.env.TB_TELEMETERY_URL : "$HOST_NAME/api/v1/$ACCESS_TOKEN/telemetry";
export const TB_DUMMY_DEVICE_TOKEN : string = process.env.TB_DUMMY_DEVICE_TOKEN ? process.env.TB_DUMMY_DEVICE_TOKEN : "dummydevicetoken"; 
