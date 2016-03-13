C3 Charts Examples with ReactJS
===============================

If your are interested in C3 library, you can find set of examples in this repo. These examples contain different ideas and approaches that will help get along with C3 combined with ReactJS. There is no official c3-react component that takes all features in C3 library so I used it here as it is and tried to make a c3-react component that is controled well and has the power of using all C3 features so I construct it with the Reflux Archtecture because depending on props will lead to regenerating charts over and over. You can find this approach in the component called "excel".

There are 4 types of examples in this repo:

1. C3 Charts: which examine the use of C3 library and showing some of its types like bar, pie, donut, gauge, horizontal-bar and line charts.

2. C3-Pubnub Charts: which examine how realtime charts work with the use of pubnub.com as a push server. There are five examples for five different chart types.

3. Interactive Attendance Chart: this one has events within charts so you get specific info about the clicked point.

4. Excel Example: C3 chart in this example gets its data from excel file. The backend of uploading and processing excel file is done by Ruby on Rails API project and you can find it in the following link: https://github.com/abahaggag/import-excel-api


By: Ahmed Bahaggag, ROR Developer at Clickapps co