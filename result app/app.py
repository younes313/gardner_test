from flask import Flask, render_template, jsonify, redirect
from flask import request
import json
import requests

app = Flask(__name__)


# home
@app.route('/', methods=['GET', 'POST'])
def home():
    return redirect('/exam')


# exam id and type
@app.route('/exam/<string:id2>', methods=['GET', 'POST'])
def exam(id2):
    dic = {
        'id2': id2,
    }
    return render_template('pre_result.html', dic=dic)


# final result
@app.route('/exam/result/<string:type>/<int:id>/<int:id2>', methods=['GET', 'POST'])
def result(type, id, id2):
    details = {
        'id': id,
        'type': type
    }

    url = 'http://127.0.0.1:3000/test/' + type + '/' + str(id) + '/' + str(id2)  # this should change to odoo url!

    print(url)
    r = requests.post(url, json=details)
    # print( r.json()['id'] )
    res = r.json()['result']  # '10,20,30,40,50,30,10,40'
    comment = r.json()['comment']
    name = r.json()['name']
    age = r.json()['age']
    exam_id = id

    ans = res.split(',')
    dic = {
        "Linguistic": ans[0],
        "Logical_mathematical": ans[1],
        "Spatial": ans[2],
        "Bodily_Kinesthetic": ans[3],
        "Intrapersonal": ans[4],
        "Interpersonal": ans[5],
        "Musical": ans[6],
        "Naturalist": ans[7],
        "comment": comment,
        "name": name,
        "age": age,
        "exam_id": exam_id,
        "id2": str(id2),
    }

    return render_template('final_result.html', dic=dic)


# just for test the request correctness
@app.route('/test/<string:type>/<int:id>/<int:id2>', methods=['GET', 'POST'])
def get_and_return(type, id, id2):
    dic = {
        'result': "10,20,30,40,50,30,10,40",
        'comment': 'بدک نیست',
        'name': 'امیر جهانبین',
        'age': '22',
        'exam_id': id,
    }

    return jsonify(dic)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=3000, threaded=True)
