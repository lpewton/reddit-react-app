# Reddit Archeo
Reddit Archeo is a web application that ises an API to select all articles contained in Reddit and displays them in the home page. There, the user can see them and when they click on them it redirects to the original article.

Aside from that, the user can also select their favorite articles that are then stored in the local storage and displayed in the favorites tab. The user can then add notes (also stored in the local storage) to the various articles. These favorite articles can also be removed from the local storage.

Though this app is responsive, it is best shown on mobile phone screens.

You can find the live link for this website here: [https://lpewton-reddit-archaeo-app.netlify.app.](https://lpewton-reddit-archaeo-app.netlify.app/home)

## TABLE OF CONTENTS:
  * [User Experience (UX):](#user-experience-ux)
    + [App purpose](#app-purpose)
    + [Target](#target)
    + [Displays](#displays)
    + [Colors and design](#colors-and-design)
  * [Features](#features)
  * [Unfixed bugs and features left to implement](#unfixed-bugs-and-features-left-to-implement)
  * [Security Measures](#security-measures)
  * [Validator Testing](#validator-testing)
  * [Technologies Used](#technologies-used)
  * [Deployment:](#deployment)
    + [In the terminal](#in-the-terminal)
    + [In Netlify](#in-netlify)

## User Experience (UX):

### App purpose:
The purpose of this website is to provide archaeology related articles to the user and save them. Also allowing the users to store some of them in order to go back to them later or to leave notes on them.

This allows for reading the most recent news on the field without having to open many different pages or search.

### Target:
The target population for this app is anyone who is interested in the field of archaeology or anyone who wants to learn about it. Even though it's open to all publics, it can also be used by professionals to stay up to date with it.

### Displays:
The layout of the app is clear, communicative and there is an easy intuition on how to find the information.

### Colors and design:
The colors of this website are consistent with the colors of the archaeology fiels, brown colors that are usually associated with the color of sediment. These are shown in different tones to distinguish the different functionalities of the page elements.


## Features:
### Header:
This is where the user can move between the tabs and where the title is displayed:

<img width="359" alt="Screenshot 2024-01-28 at 18 55 12" src="https://github.com/lpewton/reddit-react-app/assets/114712846/c4f74286-1b8d-41ba-a60a-41378d21ea92">


### Home page:
Where all articles are displayed, regardless of the user's choice to store them.

<img width="358" alt="Screenshot 2024-01-28 at 18 56 15" src="https://github.com/lpewton/reddit-react-app/assets/114712846/8ef148e3-5cd0-4c61-ba7b-22360a3466e1">


### Favorites page:
The articles deemed as favorites by the user are stored here, along with the notes stored with them.

<img width="360" alt="Screenshot 2024-01-28 at 19 01 01" src="https://github.com/lpewton/reddit-react-app/assets/114712846/9bc74ac3-1047-4a01-9d0f-8f1b29b0ec96">

## Unfixed bugs and features left to implement:
Though the information is currently stored into the Local Storage, it might be more useful if some day you can store them in a database. With more time, one could be added to the app.

### SECURITY MEASURES:
All app functions were tested several times to make sure they worked under many conditions.

## Validator Testing:
- All HTML templates passed the W3C validator (https://validator.w3.org) without any issues.
- All CSS passed the Jigsaw validator (https://jigsaw.w3.org) with no errors found.
- The app could be opened from Mozzila Firefox, Chrome and Safari without any issues.
- This app was passed through the lighthouse test and passed without any issues. Performance is a little bit lower as it's reduced by the use of Bootstrap and the icons, but these are essential to the app.


## Technologies Used:
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- React

## Deployment:
### In the terminal:
1. Run npx create-react-app reddit-archeo

Develop your app.

### In Netlify:
1. Connect your repository to the Netlify app.
2. Set the Deploy Settings to the following:
   <img width="512" alt="Screenshot 2024-01-28 at 19 40 35" src="https://github.com/lpewton/reddit-react-app/assets/114712846/fb1e20f8-355e-47a8-91af-dae122c35b8a">
