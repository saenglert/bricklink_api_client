export enum ResultCodes {
    OK = 200, /** A request has been successfully fulfilled. */
    OK_CREATED = 201, /** A request has been successfully fulfilled. */
    OK_NO_CONTENT = 204, /** A request has been successfully processed but does not need to return any data. */
    INVALID_URI = 400, /** A request has been made to a malformed URL. */
    INVALID_REQUEST_BODY = 400, /** A request has been made with a malformed JSON body. */
    PARAMETER_MISSING_OR_INVALID = 400, /** One of the parameters specified is invalid or missing. */
    BAD_OAUTH_REQUEST = 401, /** Bad OAuth request (wrong consumer key, bad nonce, expired timestamp, etc.). Error message should indicate which one and why. */
    PERMISSION_DENIED = 403, /** The user is not permitted to make the given request. */
    RESOURCE_NOT_FOUND = 404, /** The resource you requested does not exist. */
    METHOD_NOT_ALLOWED = 405, /** The request method is not permitted. */
    UNSUPPORTED_MEDIA_TYPE = 415, /** The server refused to service the request because the entity of the request is in a format not supported by the requested resource for the requested method. */
    RESOURCE_UPDATE_NOT_ALLOWED = 422, /** Your post/put request was denied (attempt to update an order status to unavailable value...). */
    INTERNAL_SERVER_ERROR = 500, /** An unexpected error has occurred in the API. */
}