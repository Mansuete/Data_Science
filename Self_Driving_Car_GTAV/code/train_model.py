import numpy as np
from alexnet import alexnet
WIDTH = 160
HEIGHT = 120
LR = 1e-3
EPOCHS = 10
MODEL_NAME = 'pygta5-car-fast-{}-{}-{}-epochs-300K-data.model'.format(LR,'alexnetv2',EPOCHS)

model = alexnet(WIDTH, HEIGHT, LR)

hm_data = 22
for epoch in range(EPOCHS):
    for data in range(1,hm_data+1):
        train_data = np.load('d:\\3kurs1sem\semestrone\JUPYTER\GTAV5_SelfDriving\data\\training_data-{}-balanced.npy'.format(data))

        train = train_data[:-100]
        test = train_data[-100:]

        X = np.array([i[0] for i in train]).reshape(-1 , WIDTH, HEIGHT, 1)
        Y = [i[1] for i in train]


        test_X = np.array([i[0] for i in train]).reshape(-1 , WIDTH, HEIGHT, 1)
        test_Y = [i[1] for i in train]


        model.fit({'input': X}, {'targets': Y}, n_epoch=1,
                  validation_set=({'input': test_X}, {'targets': test_Y}),
                  snapshot_step=500, show_metric=True, run_id=MODEL_NAME)

        model.save(MODEL_NAME)