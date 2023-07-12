const CryptoJS = require("crypto-js");
const axios = require("axios");

const replacer = (key, value) => {
    if (typeof value == "number" && !isFinite(value)) {
        return String(value);
    }
    return value;
};

const OauthRequest = async (scriptId, deployId, auth, reqBody, method) => {
    var NETSUITE_ACCOUNT_ID = process.env.NETSUITE_ACCOUNT_ID;
    var BASE_URL =
        "https://" +
        NETSUITE_ACCOUNT_ID.toLowerCase().replace("_", "-") +
        ".restlets.api.netsuite.com/app/site/hosting/restlet.nl";
    var HTTP_METHOD = method || "POST";
    var SCRIPT_ID = scriptId;
    var OAUTH_VERSION = "1.0";
    var SCRIPT_DEPLOYMENT_ID = deployId || "1";
    var TOKEN_ID = auth.tokenId;
    var TOKEN_SECRET = auth.tokenSecret;
    var CONSUMER_KEY = auth.consumerKey;
    var CONSUMER_SECRET = auth.consumerSecret;
    var text = "";
    var length = 32;
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    var OAUTH_NONCE = text;
    var TIME_STAMP = Math.round(+new Date() / 1000);

    var data = "";
    data = data + "deploy=" + SCRIPT_DEPLOYMENT_ID + "&";
    data = data + "oauth_consumer_key=" + CONSUMER_KEY + "&";
    data = data + "oauth_nonce=" + OAUTH_NONCE + "&";
    data = data + "oauth_signature_method=" + "HMAC-SHA256" + "&";
    data = data + "oauth_timestamp=" + TIME_STAMP + "&";
    data = data + "oauth_token=" + TOKEN_ID + "&";
    data = data + "oauth_version=" + OAUTH_VERSION + "&";
    data = data + "script=" + SCRIPT_ID;
    var encodedData = encodeURIComponent(data);
    var completeData = HTTP_METHOD + "&" + encodeURIComponent(BASE_URL) + "&" + encodedData;
    var hmacsha256Data = CryptoJS.HmacSHA256(completeData, CONSUMER_SECRET + "&" + TOKEN_SECRET);
    var base64EncodedData = hmacsha256Data.toString(CryptoJS.enc.Base64); // My first way to use this

    var oauth_signature = encodeURIComponent(base64EncodedData);

    var OAuth = 'OAuth oauth_signature="' + oauth_signature + '",';
    OAuth = OAuth + 'oauth_version="1.0",';
    OAuth = OAuth + 'oauth_nonce="' + OAUTH_NONCE + '",';
    OAuth = OAuth + 'oauth_signature_method="HMAC-SHA256",';
    OAuth = OAuth + 'oauth_consumer_key="' + CONSUMER_KEY + '",';
    OAuth = OAuth + 'oauth_token="' + TOKEN_ID + '",';
    OAuth = OAuth + 'oauth_timestamp="' + TIME_STAMP + '",';
    OAuth = OAuth + 'realm="' + NETSUITE_ACCOUNT_ID + '"';

    var url = BASE_URL + "?script=" + SCRIPT_ID + "&deploy=" + SCRIPT_DEPLOYMENT_ID;
    var header = { Authorization: OAuth, "Content-Type": "application/json" };
    var body = JSON.stringify(reqBody || {}, replacer);
    const response = await axios.post(url, body, {
        headers: header,
    });
    return response.data;
};

module.exports = { OauthRequest };
