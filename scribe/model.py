import requests
from pdf2image import convert_from_path
import pytesseract

API_URL = "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2"
headers = {"Authorization": "Bearer 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"}

def retrieve_resume(pdf_file):
    pages = convert_from_path(str(pdf_file), first_page=1, single_file=True)
    pages[0].save("test.jpg", quality=85)
    text = pytesseract.image_to_string('test.jpg')
    
    return text

def get_questions(text_file):
    file_path = 'questions.txt'
 
    with open(file_path, 'r') as file:
        file_content = []
        line = file.readline()
        
        while line:
            file_content.append(line)
            line = file.readline()
    
    return file_content

def query(payload):
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.json()

output = []
questions = get_questions('questions.txt')
resume = retrieve_resume('test.pdf')

print(resume)

for question in questions:
    print(query({
        "inputs": 'answer this question: ' + question + ' \n\nwith this resume... \n\n' + resume,
        "parameters": {
            "return_full_text": False,
            "max_length": 200   ,
            "options":{
                "use_cache": False
            }
        }
    })[0]['generated_text'])
