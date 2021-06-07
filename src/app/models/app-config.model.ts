export interface AppConfigModel {
    env: {
        name: string;
    };
    logging: {
        level: number;
    };
    apiServer: {
        cryptodata: string;
        jwt: string;
    };
}