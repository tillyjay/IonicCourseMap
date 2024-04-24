# Ionic Course Map
## TypeScript Ionic Course Map Application 
This project was an extension of a previous project that involved an college course map application built with C# and ASP.NET. You could say that this project was the cool younger brother to my C# app, and it introduced me to three new technologies, API serverless functions, TypeScript, and Ionic. I really enjoyed working with all these new technologies, first by creating serveless functions and deploying an API to Azure. Then I used TypeScript and the React Ionic Framework to consume the deployed API and displayed in a user friendly mobile format. 

## Features 
- Ionic aesthetic mobile application.
- Tabs to display the four category endpoints ( Academic Years, Courses, Diploma Programs, and Instructors.
- From the tabs there are navigation paths to more specific sets of information for the selected endpoint and display the data. For example, Academic Years links to a particular Semester, which links to a specific Course from that Semester, which then displays all the data for that course.
- Search bar functionality on Courses page that updates with input.
- Pull-down-to-refresh functionality.
- Back button to navigate to the top level of each tab.

## Lessons Learned 
- Created serverless functions in order to deploy my API with Azure.
- Using TypeScript, creating type interfaces to keep my code more clean and pass down as props for the React components.
- Using React hooks to manage state and fetch data from the API.
- Using aspects of react-router-dom to help navigate between tabs.
- More practice creating components.
- How to utilize the Ionic framework to take data and display it in a mobile format.

## Future Improvements
- Add register and login user capability.
- It would be cool to add functionality for an admin user to input information into the application.
- Improve upon the styling and make better use of the Ionic functionality.

# Images 
## Academic Years Landing Page
![image](https://github.com/tillyjay/IonicCourseMap/assets/97525044/f911713a-9478-4458-8d2f-4e8d38dd09f4)

## Path via Academic Years Tab with Back Button
![image](https://github.com/tillyjay/IonicCourseMap/assets/97525044/09debe09-fdcf-4ff0-b77a-4f77d03fa582)

## Courses Search Bar
![image](https://github.com/tillyjay/IonicCourseMap/assets/97525044/961a5cfa-9a4f-4f9f-8e9a-ebabbe8f395b)

## Course Details ( final navigation page through Academic Years tab)
![image](https://github.com/tillyjay/IonicCourseMap/assets/97525044/00879b6c-aed9-4c21-8d1a-17add016c42c)
