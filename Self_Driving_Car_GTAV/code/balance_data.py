import numpy as np
import pandas as pd
from collections import Counter
from random import shuffle
import cv2

training_data = np.load('training_data_new.npy')

df = pd.DataFrame(training_data)
print(Counter(df[1].apply(str)))
print(df)

lefts = []
rights = []
forwards = []

shuffle(training_data)

for data in training_data:
    img = data[0]
    choice = data[1]

    if choice == [1,0,0]:
        lefts.append([img, choice])
    elif choice == [0,1,0]:
        forwards.append([img, choice])
    elif choice == [0,0,1]:
        rights.append([img, choice])
    else:
        print("No matches!!!!!")

forwards = forwards[:len(lefts)][:len(rights)]
lefts = lefts[:len(forwards)]
rights = rights[:len(forwards)]

final_data = forwards + lefts + rights



shuffle(final_data)
print(len(final_data))
np.save('tain_data_new_balanced.npy', final_data)

# for data in training_data:
#     img = data[0]
#     print(img.shape)
#     choice = data[1]
#     cv2.imshow('test', img)
#     print(choice)
#     if cv2.waitKey(25) & 0xFF == ord('q'):
#         cv2.destroyAllWindows()
#         break
