![Crime Scene](./Images/crime_scene.png)
# Chicago-Crime

Predicting Arrests from Chicago Crime Data 2016-2019. 

Susan Young, Teodora Latinska, Tricia Miller

## Problem:

Predict the likelihood that a registered crime in City of Chicago databases resulted in an arrest.

### Client and Impact:

The target clients may be police departments in the city of Chicago, lawmakers, city planners, correctional facilities and a multitude of other actors who are affected by the number of arrests in the city. Predicting whether a crime resulted in an arrest could help decision makers determine the most likely conditions that could result in future arrests and thus make contingency plans for mitigating the conditions that cause the likelihood to go up, not only making neighborhoods safer, but also planning for police staffing needs, correctional facility needs, etc. Furthermore, the model could help predict whether a current open case will result in an arrest or not, helping police departments assess their effectiveness and the methods in use.  

### Data Source:

We will be using the official City of Chicago Data Portal at https://data.cityofchicago.org/ to source crime data for the years 2016, 2017, 2018. This will provide us with a robust dataset of over 600,000 observations to train the data. Our data has 22 feature variables, which will be analyzed to determine use for model building. The accuracy of our model will then be assessed on 2019 crime data. 

### Approach:

This is a classification problem with a binary answer – arrest or no arrest. We will be predicting the probability of arrest given certain crime characteristics and as such, the output will be a float between and including 0 and 1. We will test a number of different classification models like logistic regression and Naïve Bayes classifiers to determine which one gives the best predictions. 

#### Technologies:

* Python Pandas
* Python Matplotlib
* HTML/CSS/Bootstrap
* Scikit-Learn