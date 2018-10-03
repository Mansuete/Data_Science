import tflearn
from tflearn.layers.recurrent import simple_rnn, lstm
from tflearn.layers.core import input_data, dropout, fully_connected
from tflearn.layers.estimator import regression
import tflearn.datasets.mnist as mnist

X, Y, test_x, test_y = mnist.load_data(one_hot=True)

X = X.reshape([-1, 28, 28])

test_x = test_x.reshape([-1, 28, 28])


# X = X.transpose(X,[1,0,2])
# X = X.reshape(X,[-1,28])
# X = X.split(X,28,0)

net = input_data(shape=[None,28,28],name='input')
net = lstm(net,128,dropout=0.8)
net = fully_connected(net,10,activation='softmax')
net = regression(net,optimizer='adam',learning_rate=0.001,loss='categorical_crossentropy')

model = tflearn.DNN(net)
model.fit(X, Y, validation_set=(test_x, test_y), show_metric=True,
          batch_size=128,n_epoch=3)
