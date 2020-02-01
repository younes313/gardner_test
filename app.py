from flask import Flask,render_template , jsonify
from flask import request
import json
import requests

app = Flask(__name__)

@app.route('/')
def questions():
    return render_template('index.html')



@app.route('/calculate_result/<string:answers>' , methods=['POST' , 'GET'])
def calculate(answers):
  
    Linguistic = 0
    Logical_mathematical = Spatial = Bodily_Kinesthetic = Musical = Interpersonal = Intrapersonal = Naturalist = 0
    
    for i ,res in enumerate(answers):
        if i%8 == 0:
            Linguistic += int(res)
        elif i%8 == 1:
            Logical_mathematical += int(res)
        elif i%8 == 2:
            Spatial += int(res)
        elif i%8 == 3:
            Bodily_Kinesthetic += int(res)
        elif i%8 == 4:
            Intrapersonal += int(res)
        elif i%8 == 5:
            Interpersonal += int(res)
        elif i%8 == 6:
            Musical += int(res)
        elif i%8 == 7:
            Naturalist += int(res)

    dic = { 
            "Linguistic":Linguistic,
            "Logical_mathematical":Logical_mathematical,
            "Spatial":Spatial,
            "Bodily_Kinesthetic":Bodily_Kinesthetic,
            "Intrapersonal":Intrapersonal,
            "Interpersonal":Interpersonal,
            "Musical":Musical,
            "Naturalist":Naturalist,
        }

    
	
    

    result = {
        'answers':answers,
        'results':dic        
    }

    # request Odoo here
    url = 'http://127.0.0.1:5000/get-result-and-return-that' 
    r = requests.post(url, json = result)
    print( r.json() )

    return render_template('result.html' , dic=dic)


# just for test the request correctness
@app.route('/get-result-and-return-that' , methods=['POST'])
def get_and_return():
    return request.get_json()
    




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

