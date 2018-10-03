import tensorflow as tf
import numpy as np
from tensorflow.examples.tutorials.mnist import input_data
# mnist = input_data.read_data_sets('MNIST_data',one_hot=True)
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_digits
from sklearn.preprocessing import LabelBinarizer
import pandas as pd
import random


digits = load_digits()
X = digits.data
y = digits.target
y = LabelBinarizer().fit_transform(y)
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.3)


def add_layer(inputs,in_size,out_size,layer_name,activation_function=None):
    Weights = tf.Variable(tf.random_normal([in_size,out_size]))
    biases = tf.Variable(tf.zeros([1,out_size ]) + 0.1)
    tf.summary.histogram(layer_name + '/biases', biases)
    Wx_plus_b = tf.matmul(inputs,Weights) + biases
    Wx_plus_b = tf.nn.dropout(Wx_plus_b, keep_prob)
    if activation_function is None:
        outputs = Wx_plus_b
    else:
        outputs = activation_function(Wx_plus_b)

    return outputs


# def compute_accuracy(v_xs,v_ys):
#     global prediction
#     y_pre = sess.run(prediction,feed_dict={xs:v_xs})
#     correct_prediction = tf.equal(tf.argmax(y_pre),tf.argmax(v_ys))
#     accuracy = tf.reduce_mean(tf.cast(correct_prediction,tf.float32))
#     result = sess.run(accuracy,feed_dict={xs:v_xs,ys:v_ys.reshape(38,1)})
#     return result


keep_prob = tf.placeholder(tf.float32)
xs = tf.placeholder(tf.float32,[None,64]) #28*28=784
ys = tf.placeholder(tf.float32,[None,10])

l1 = add_layer(xs,64,50,'l1',activation_function=tf.nn.tanh)
prediction = add_layer(l1,50,10,'l2',activation_function=tf.nn.softmax)

#
# prediction = add_layer(xs,4,3,activation_function=tf.nn.softmax)
#
#

cross_entropy = tf.reduce_mean(-tf.reduce_sum(ys*tf.log(prediction),reduction_indices=[1]))
tf.summary.scalar('loss',cross_entropy)
# cross_entropy = tf.losses.softmax_cross_entropy(ys,prediction)

train_spet = tf.train.GradientDescentOptimizer(0.5).minimize(cross_entropy)

init = tf.global_variables_initializer()
sess = tf.Session()
merged = tf.summary.merge_all()
train_writer = tf.summary.FileWriter('dota/train',sess.graph)
test_writer = tf.summary.FileWriter('dota/test',sess.graph)

sess.run(init)


for i in range(500):
    sess.run(train_spet,feed_dict={xs:X_train,ys:y_train,keep_prob:1})
    if i % 50 == 0:
        train_result = sess.run(merged,feed_dict={xs:X_train,ys:y_train,keep_prob:1})
        test_result = sess.run(merged, feed_dict={xs: X_test, ys: y_test,keep_prob:1})
        train_writer.add_summary(train_result,i)
        test_writer.add_summary(test_result,i)






