from flask import Flask,render_template , jsonify, redirect
from flask import request
import json
import requests


app = Flask(__name__)




# home
@app.route('/' , methods=['GET','POST'])
def home():
    return redirect('/exam')


# exam id and type
@app.route('/exam' , methods=['GET','POST'])
def exam():

    return render_template('pre_result.html')



# final result
@app.route('/exam/result/<string:type>/<int:id>', methods=['GET','POST'])
def result(type, id):

	details = {
		'id':id,
		'type':type        
	}

	url = 'http://127.0.0.1:3000/test'
	r = requests.post(url, json = details)
	print( r.json()['id'] )
	res = '10,20,30,40,50,30,10,40'

	ans = res.split(',')
	dic = { 
			"Linguistic":           ans[0],
			"Logical_mathematical": ans[1],
			"Spatial":              ans[2],
			"Bodily_Kinesthetic":   ans[3],
			"Intrapersonal":        ans[4],
			"Interpersonal":        ans[5],
			"Musical":              ans[6],
			"Naturalist":           ans[7],
		}

	return render_template('result.html', dic=dic)


# just for test the request correctness
@app.route('/test' , methods=['GET','POST'])
def get_and_return():
    # print(any)
    # return any

    return request.get_json()


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000, threaded=True)
