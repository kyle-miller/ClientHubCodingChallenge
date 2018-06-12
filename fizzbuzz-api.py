#!/usr/bin/python3

'''

	Wraps an API for returning output from a FizzBuzz REST service. This
	script uses a required FUNCTION_URL environment variable for the
	external REST service. Also accepts an optional MAX_RANGE env
	variable to call the service with.

'''


import flask
import json
import os
import requests


max_range = int(os.environ.get('MAX_RANGE', 100))
url = str(os.environ.get('FUNCTION_URL'))
app = flask.Flask(__name__)


@app.route('/', methods=['GET'])
def get():
	response = requests.post(url, json={'max_range': max_range})
	response_data = response.text if response.status_code == 200 else 'Unable to make REST request: {}'.format(response.text)
	resp = flask.Response(response_data)
	resp.headers['Content-Type'] = 'text/plain'
	return resp


if __name__ == '__main__':
	app.run(host='0.0.0.0', port=8080)

