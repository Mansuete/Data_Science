import base64
import numpy as np
import io
from PIL import Image
import tensorflow as tf
import keras
from keras import backend as K
from keras.models import Sequential, load_model
from keras.preprocessing.image import ImageDataGenerator, img_to_array
from flask import request
from flask import jsonify
from flask import Flask
import flask_cors



app = Flask(__name__)
flask_cors.CORS(app)

def get_model():
    global model
    model = load_model('VGG16_cats_and_dogs.h5')
    print(" * Model loaded!")

def preprocess_image(image,target_size):
    if image.mode != 'RGB':
        image = image.convert('RGB')
    image = image.resize(target_size)
    image = img_to_array(image)
    image = np.expand_dims(image,axis=0)

    return image

print(' * Loading keras model....')
get_model()


graph = tf.get_default_graph()


@app.route("/predict", methods=['POST'])
def predict():
    message = request.get_json(force=True)
    encoded = message['image']
    decoded = base64.b64decode(encoded)
    with graph.as_default():
        image = Image.open(io.BytesIO(decoded))
        procssed_image = preprocess_image(image,target_size=(224,224))

        prediction = model.predict(procssed_image).tolist()

        response = {
            'prediction' : {
                'dog' : prediction[0][0],
                'cat' : prediction[0][1]
            }

        }
    return jsonify(response)