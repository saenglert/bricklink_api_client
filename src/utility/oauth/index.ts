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
 * Auth headers for a request which
 * are static across multiple requests
 */
export type StaticAuthHeaders = {
    'oauth_consumer_key': string,
    'oauth_token': string,
    'oauth_signature_method': string,
    'oauth_version': string,
};

export class OAuth {
    staticHeaders: StaticAuthHeaders
    consumerSecret: string;
    tokenSecret: string;

    constructor(consumerKey: string, consumerSecret: string, token: string, tokenSecret: string) {
        this.staticHeaders = {
            'oauth_consumer_key': consumerKey,
            'oauth_token': token,
            'oauth_signature_method': OAUTH_SIGNATURE_METHOD,
            'oauth_version': OAUTH_VERSION,
        }
        this.consumerSecret = consumerSecret;
        this.tokenSecret = tokenSecret;
    }

    public getAuthHeaders(method: string, url: string ) {
        const timestamp = unix().toString();
        const nonce = randomValueHex(16);
        const params = {
            ...this.staticHeaders,
            'oauth_timestamp': timestamp,
            'oauth_nonce': nonce,
        }
        return {
            ...params,
            'oauth_signature': oauthSig.generateSignature(method, url,params,this.consumerSecret, this.tokenSecret, {encodeSignature: false})
        };
    }
}