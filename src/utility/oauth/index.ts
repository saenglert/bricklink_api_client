import { OAUTH_SIGNATURE_METHOD, OAUTH_VERSION } from "../../constants";

import oauthSig from 'oauth-signature';
import { randomValueHex, unix } from "..";

export type OAuthHeaders = {
    'oauth_consumer_key': string,
    'oauth_token': string,
    'oauth_signature_method': string,
    'oauth_version': string,
    'oauth_timestamp': string,
    'oauth_none': string,
    'oauth_signature': string
};

/** 
 * Auth parameters for a request which
 * are static across multiple requests
 */
export type StaticAuthParameters = {
    'oauth_consumer_key': string,
    'oauth_token': string,
    'oauth_signature_method': string,
    'oauth_version': string,
};

export class OAuth {
    staticParams: StaticAuthParameters
    consumerSecret: string;
    tokenSecret: string;

    constructor(consumerKey: string, consumerSecret: string, token: string, tokenSecret: string) {
        this.staticParams = {
            'oauth_consumer_key': consumerKey,
            'oauth_token': token,
            'oauth_signature_method': OAUTH_SIGNATURE_METHOD,
            'oauth_version': OAUTH_VERSION,
        }
        this.consumerSecret = consumerSecret;
        this.tokenSecret = tokenSecret;
    }

    public getAuthHeaders(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string ) {
        const timestamp = unix().toString();
        const nonce = randomValueHex(16);
        const params = {
            ...this.staticParams,
            'oauth_timestamp': timestamp,
            'oauth_nonce': nonce,
        }
        return {
            ...params,
            'oauth_signature': oauthSig.generateSignature(method, url,params,this.consumerSecret, this.tokenSecret, {encodeSignature: false})
        };
    }
}