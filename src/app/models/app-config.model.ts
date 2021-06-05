export interface IAppConfig {
    env: {
        name: string;
    };
    logging: {
        console: boolean;
    };
    apiServer: {
        cryptodata: string;
    };
}