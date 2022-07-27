from multiprocessing.connection import wait
import time
import timeit  
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import requests
from bs4 import BeautifulSoup


def crawl(track, time):
    options = Options()
    options.headless = True
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    #Timer starts 
    start = timeit.default_timer()
    url = f"https://www.f1laps.com/ai-difficulty-calculator/f12022/{track}/?laptime={time}#difficultyInputResult"
    driver.get(url)

    element = driver.find_element(By.ID,"laptime")
    elements = element.find_elements(By.XPATH,"//*//*//*//p")
    difficulty = elements[17].text

    #Timer Stops
    stop = timeit.default_timer()
    #Prints the Start and End Time to Console
    print('Time: ', stop - start)

    return difficulty

def fetch(track, time):
    url = f"https://www.f1laps.com/ai-difficulty-calculator/f12022/{track}/?laptime={time}"
    r = requests.get(url)
    html = r.text
    soup = BeautifulSoup(html,"html.parser")
    element = soup.find_all('p',class_='mt-1.5 pb-2 leading-6 font-extrabold text-4xl text-indigo-700')
    print(soup.find_all('p',class_='mt-1.5 pb-2 leading-6 font-extrabold text-4xl text-indigo-700').size)
    

if __name__ == "__main__":
    # crawl("bahrain","1:09.821")
    fetch("bahrain","1:09.821")