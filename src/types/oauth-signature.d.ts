declare module 'oauth-signature' {
    
    function generateSignature (
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        url: string,
        parameters: {
            oauth_consumer_key : string,
            oauth_token : string,
            oauth_nonce : string,
            oauth_timestamp : string,
            oauth_signature_method : string,
            oauth_version : string,
        },
        consumerSecret: string,
        tokenSecret?: string,
        options?: {
            encodeSignature: boolean
        }
    ): string;
}