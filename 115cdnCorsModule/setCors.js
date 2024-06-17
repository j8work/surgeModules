/**
 * setCors.js - A script to add Access-Control-Allow-Origin header to responses
 */

let headers = $response.headers;
headers['Access-Control-Allow-Origin'] = '*';

$done({ headers });