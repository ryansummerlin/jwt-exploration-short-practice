// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package

const jwt = require('jsonwebtoken');

// Define variables - DO NOT MODIFY

// 1. Sign (create) a JWT containing your email address
let token; // DO NOT MODIFY! Re-assign the token variable below.

token = jwt.sign(
    { email: 'ryansummerlin777@gmail.com' },
    process.env.SECRET_KEY,
    { expiresIn: '1s' }
);

// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 2. Decode a JWT Payload

let payload; // DO NOT MODIFY! Re-assign the payload variable below.

payload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log('Payload:', payload);

// 3. Verify a JWT

let verifiedPayload; // DO NOT MODIFY! Re-assign the verifiedPayload variable below.

// verifiedPayload = jwt.verify(token, process.env.SECRET_KEY);

// See the verified payload in the console - DO NOT MODIFY
// console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
//    To "try" to get the payload using jwt.verify
//    Then "catch" the error and log it to the console.

// let otherKey = require('crypto').randomBytes(64).toString('hex');

// try {
//     verifiedPayload = jwt.verify(token, otherKey);
// } catch(e) {
//     console.log(e.message);
// }


// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
//    To "try" to get the payload using jwt.verify (with proper secret)
//    Then "catch" the error and log it to the console

try {
    setTimeout(() => {
        jwt.verify(token, process.env.SECRET_KEY);
    }, 2000)
} catch(e) {
    console.log(e.message);
}
