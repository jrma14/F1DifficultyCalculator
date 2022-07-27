import timeit
import requests
import json
from bs4 import BeautifulSoup
from flask import Flask, jsonify
from flask import request
from flask_cors import CORS
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from multiprocessing.connection import wait
import time
import timeit  
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

app = Flask(__name__)


def scrapedifficulty(track, time):
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    url = f"https://www.f1laps.com/ai-difficulty-calculator/f12022/{track}/?laptime={time}#difficultyInputResult"
    driver.get(url)

    element = driver.find_element(By.ID,"laptime")
    elements = element.find_elements(By.XPATH,"//*//*//*//p")
    difficulty = elements[17].text

    return difficulty

def getDifficulty(track, time):
    url = f"https://www.f1laps.com/ai-difficulty-calculator/f12022/{track}/?laptime={time}"
    r = requests.get(url)
    html = r.text
    soup = BeautifulSoup(html,"html.parser")
    element = soup.find_all('p',class_='mt-1.5 pb-2 leading-6 font-extrabold text-4xl text-indigo-700')
    try:
        return element[0].text
    except:
        return -1


@app.route("/api/getusertimes",methods=['GET'])
def getUserTimes():
    f = open('usertimes.json',"r")
    data = json.load(f)
    return data

@app.route("/api/saveusertimes",methods=['POST'])
def saveUserTimes():
    with open('usertimes.json', 'w') as f:
        json.dump(request.get_json(), f)
    return '200'

@app.route("/api/calculatedifficulty",methods=['GET'])
def calculatedifficulty():
    args = request.args.to_dict()
    difficulty = getDifficulty(args.get('trackname'),args.get('laptime'))
    if difficulty == -1:
        return 404
    return {
        "difficulty": difficulty
        }

if __name__ == "__main__":
    CORS(app)
    app.run()  