import crypto from 'crypto';

/**
 * Creates a random hex value
 * 
 * http://blog.tompawlak.org/how-to-generate-random-values-nodejs-javascript
 * 
 * @param len Length of the hex value
 * @returns  A random hex value of the desired length
 */
export const randomValueHex =  (len: number): string => {
    return crypto.randomBytes(Math.ceil(len/2))
        .toString('hex') // convert to hexadecimal format
        .slice(0,len).toUpperCase();   // return required number of characters
}

/**
 * Returns current unix timestamp
 * @returns number
 */
export const unix = (): number => Math.floor(new Date().getTime() / 1000);
