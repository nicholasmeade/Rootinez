### Frontend Technologies

React, JS, HTML, CSS. Deployment on Github Pages.

#### Frontend Goals

- successful implementation of the backend features that the user can take advantage of to interact with the application
- clear area for a user to create their own account
    - maybe introduce the application idea and have the 'create user' section/button/etc be right under it upon pageload
- section to describe how to use the application/suggestions for the user
    - will require different routes in the React app
- color scheme that aids in easy visibility/reading
- stretch goal: possible implementation of React Spring for animations on the site

### Backend Technologies

Django, Python, PostgreSQL. Deployment on Heroku.

#### Backend Goals

- user authentication - to have the ability for someone to create their own account and interact with the application *django authentication*
- allow the user to create their own routines, which will have the following model:
    - name of the routine (required field, limit name to 50-75 characters)
    - description of the routine (required field, limit description to 300-500 characters)
    - option to select which routine section they want to add it to
        - another option added could be the user's ability to make a new routine section for whatever they want
    - build out the CRUD functionality for any routine made by the user
    - stretch goal: ability to link a user's routine to Google Calendar
    - stretch goal: ability to house video links (i.e. YouTube Links for videos that refer to routines/programs/how to do something/motivation etc)
- have designated sections the user can move/assign their routines to
    - prepopulate some routine sections, examples:
        - workout routine
        - eating routine
        - health routine
        - morning routine
        - evening routine
        - work routine

### Wireframes

[Layout](https://www.figma.com/file/gO2vNMlENgS608f14cp0Qz/Rootinez?node-id=0%3A1)