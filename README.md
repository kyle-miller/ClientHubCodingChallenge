# ClientHubCodingChallenge
Coding Challenge for ClientHub Interview

A Docker wrapper for the Google Cloud function.

- docker-api-wrapper/fizzbuzz-api.py
   - Flask script wrapping the fizz buzz function in the Cloud.
- docker-api-wrapper/Dockerfile
   - Dockerfile for spinning up an API written with Python
- docker-api-wrapper/requirements.txt
   - Python dependencies

Houses a FizzBuzz like application to be deployed as a Google Cloud Function. https://en.wikipedia.org/wiki/Fizz_buzz

- function/fizzBuzz.js
   - Google Cloud Function to return FizzBuzz output
- function/package.js
