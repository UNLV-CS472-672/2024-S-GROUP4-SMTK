# Small Talk
SmallTalk is a web application designed to create a virtual community for children in hospitals, allowing them to connect with peers facing similar health challenges.

## Overview
This project is born from a vision to blend social support, entertainment, and direct communication with healthcare teams into a single, child-friendly platform. While our ultimate ambition includes a comprehensive suite of features aimed at enhancing the hospital experience for young patients, this prototype will focus on core functionalities achievable within the scope of this semester.

## Features
- Create a verified account as a patient, alumni that has recovered, parent of patient, or hospital faculty
- Reach out to Doctors or Nurses virtually
- Interact with other patients virtually
- Have access to any hospital services digitally
- Have a visible calendar and notification bar that tells you the plans for the day and future events of the month.

## Planned Features
This list is what we will strive to achieve during this semester, while not the core functionality of the application, lists our plans and goals we wish to achieve in the project. 

[PDF of Plans](https://github.com/UNLV-CS472-672/2024-S-GROUP4-SMTK/blob/main/docs/img/PlannedFeatures.pdf)

Once a planned feature is successfully implemented it will be moved from this list into the features list.

[Image of Chart Diagram for Creating Chatroom](https://github.com/UNLV-CS472-672/2024-S-GROUP4-SMTK/blob/main/docs/img/chatroomChart.png)

## Testing
This project utilizes the Jest testing suite for its unit tests. Our goal of testing coverage is 90%. When developing a test or simply wanting to run jest on the app, follow these steps:

1. Navigate into the small-talk directory
2. run the command 'npm install' to install any missing dependencies
3. run one of the following jest scripts:  
    3.1 'npm run test' - This simply runs the jest testing script and outputs the names of the tests being ran and whether they've been successful or not.  
    3.2 'npm run test:watch' - Use this command when you are actively debugging a test and would like to see the test reran ever time you update the file. Each time you save a test file, jest will be ran on that file and output the results  
    3.3 'npm run test:coverage' - Jest will be ran like usual but output a comprehensive report of the coverage for the app. It lists the files, percentages of statements, branches, functions, and lines, and lists the uncovered lines in the files. It will also print the targeted testing coverage percent and whether or not we've reached it.  

## How to run the Chatroom
This project utilizes socket.io to create a connection between the users and the chatroom. In order to run the chatroom on your own machine you will need to follow the following steps:

1. Open two terminal windows
2. In the first terminal - Navigate to the small-talk directory:  
    2.1 'npm install' - used to install any missing dependencies  
    2.2 'npm run dev' - This will simply run the website on your localhost 
3. In the second terminal - Navigate to the chatroom-socket-server directory:  
    3.1 'npm install' - used to install any missing dependencies  
    3.2 'npm start' - This will run the socket server 
4. You can confirm this is working properly by going to the chatroom page and see if you connect to the page by your username appearing on the list of online users. 
