from flask import Flask,render_template 
from flask import request

app = Flask(__name__)

@app.route('/')
def questions():
    return render_template('index.html')



@app.route('/calculate_result/<string:answers>' , methods=['POST' , 'GET'])
def calculate(answers):
    # if request.method == 'POST':
    #     scores = request.get_json()
    #     answers = str(scores['answers'])
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

    print(dic)
	
    return render_template('result.html' , dic=dic)


    

    # return json.jsonify({
    #     'scores': scores
    # })



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
