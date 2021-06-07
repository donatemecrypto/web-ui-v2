export interface AppConfigModel {
    env: {
        name: string;
    };
    logging: {
        console: boolean;
    };
    apiServer: {
        cryptodata: string;
        jwt: string;
    };
}