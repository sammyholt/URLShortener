# URLShortener
A simple Node.js URL Shortener API

## Usage
1. Create .env file from .env.example file and replace examples with real values.
2. Deploy to server hosted on a domain you specified in the .env file.
3. Make post request to http://yourdomain.example/api/url/shorten with json data.  Only one field is needed which is "longUrl": UrlToBeShortened
4. Server will return a json response which contains the shortened URL.  Visit that URL in your browser and the server will redirect to the longUrl.