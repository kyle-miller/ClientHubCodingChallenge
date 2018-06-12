# ClientHubCodingChallenge
Coding Challenge for ClientHub Interview

A Docker wrapper for the Google Cloud function.

- docker-api-wrapper/fizzbuzz-api.py
   - Flask script wrapping the fizz buzz function in the Cloud.
- docker-api-wrapper/Dockerfile
   - Dockerfile for spinning up an API written with Python
- docker-api-wrapper/requirements.txt
   - Python dependencies


Docker can be built using:
`docker build . -t fizzbuzz-api`

Docker can be run using:
`docker run -it --rm -p 8080:8080 --name fizzbuzz-api -e FUNCTION_URL='http://cloud.functions.url' -e MAX_RANGE='50' fizzbuzz-api`

Houses a FizzBuzz like application to be deployed as a Google Cloud Function. https://en.wikipedia.org/wiki/Fizz_buzz

- function/fizzBuzz.js
   - Google Cloud Function to return FizzBuzz output
- function/package.js
