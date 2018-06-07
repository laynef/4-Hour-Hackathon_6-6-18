# Four Hour Hackathon (June 6th, 2018)

- Start Time: 1:20pm
- End Time: 5:20pm

## Initial Conception
    - Shopping site like Amazon

## What I accomplished

    - I created an api with dynamic queries and params based on the route for every model in the database
    - I have the ability to add new versions and keep track of every new api version
    - I have a database schema where a user can pick out products that are attached to an order through a many to many relationship
    - I have seeders for dummy data
    - I have migations for my database

## How I accomplished it

    - Circular imports through a file system so naming conventions will work in my favor on route types
    - Circular imports on utils or that the file name and space does not matter (You can have as many files as possible and get one object to import util functions)
    - I built a normalize response function that recursively flattens out the entire object by model name given back from the includes

    ```
    // user with tracking

    {
        id: 1 // user id
        tracking_id: 1 // tracking data with the prefix 'tracking'

        // if there is an include inside of another include
        // tracking_differentModel_id: 1,

    }

    ```
    - I have a function to handle includes

## What would I like to do with more time

    - Fix my associations so includes return with 'as' keywords that are named by the parent model then Child model in camelCase for the util function to work across any controller
    - JSON web tokens for authenicated routes
    - Build safety checks for false routes
    - Return HTML Previews of 404, 500 errors, & database errors which I put as 400
    - Util function for database errors
    - Univeral util function for alerts on all types of database errors (sequelize returns the type of errors)
    - Authenication middleware 
    - API tests by importing the routes object (for automatic api tests)
    - API documentation
    -- add third parameter to controller for documentation boolean
    -- Import the routes object and get only the controllers
    -- Create utils function for 'where' keyword to render fixtures for if the documentation boolean is true
    -- Call all routes declared with fixtures that work and render the JSON from the controller, the middleware (Using the key in the middleware object as a description and the value as the middleware function), and showing the route path
    - Start on my web client to render data


# Installation

Have Homebrew Installed: 
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Dependiences
`brew install postgresql`
`brew install node`
`createdb -p 5430 database_development`
`npm i`
`npm run fresh-db`
`npm run start-api`