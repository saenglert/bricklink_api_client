import axios, { Axios, AxiosRequestConfig } from 'axios';
import {Generator} from 'oauth-header';

class Client {

    private axios: Axios;
    private generator: Generator;

    constructor(consumerKey: string, consumerSecret: string, token: string, tokenSecret: string) {
        this.generator = new Generator(consumerKey, consumerSecret, token, tokenSecret);
        this.axios = axios.create({
            baseURL: 'https://api.bricklink.com/api'
        })
    }

    async makeRequest(config: AxiosRequestConfig) {
        try {
            const auth = this.generator.generateHeaderValue("GET", Client.buildUri(config)) ;
            const response = await this.axios.request({
                ...config,
                headers: {
                    ...config.headers,
                    'Authorization': auth
                }
            });
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    static buildUri(config: AxiosRequestConfig): string {
        const baseUrl = config.baseURL;
        const url = config.url;
        let uri: string = "";

        if(!baseUrl && !url) {
            throw new Error("No url or base url given");
        }

        if (baseUrl) {
            uri = baseUrl;
        }

        if (url) {
            uri += url;
        }

        return uri;
    }

    async getOrder(id: string) {
        this.makeRequest({
            url: `/store/v1/orders/${id}`,
            method: 'GET'
        });
    }

}

const client = new Client(
    '',
    '',
    '',
    ''
);

export default Client;