from flask import Flask,render_template , jsonify
from flask import request
import json
import requests

app = Flask(__name__)



@app.route('/<string:id>')
def questions(id):
    return render_template('index.html' , dic={'id':id} )



@app.route('/calculate_result/<string:answers>/<string:id>' , methods=['POST' , 'GET'])
def calculate(answers,id):
  
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

    
	
#     #json version

#     result = {
#         'answers':answers,
#         'results':dic        
#     }

#     # request Odoo here
#     url = 'http://127.0.0.1:5000/get-result-and-return-that' 
#     r = requests.post(url, json = result)
#     print( r.json() )

#     return render_template('result.html' , dic=dic)


 # query parameter version

    url = 'http://127.0.0.1:8069/gardner/'+ str(dic['Linguistic']) + ',' +str(dic['Logical_mathematical']) + ',' +str(dic['Spatial']) + ',' +str(dic['Bodily_Kinesthetic']) + ',' +str(dic['Intrapersonal']) + ',' +str(dic['Interpersonal']) + ',' +str(dic['Musical']) + ',' +str(dic['Naturalist'] ) + ',' + str(id)
    print("url = "+url)
    r = requests.get(url)

    return render_template('result.html' , dic=dic)




# just for test the request correctness
@app.route('/gardner/<any>' , methods=['GET','POST'])
def get_and_return(any):
    print(any)
    return any

    # return request.get_json()



   




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

