# MoonPhase

## Project Description
This project will allow a user to enter a date and a time and receive an image of the phase of the moon. This is tied with the next phase in the lunar cycle to be displayed. The data is going to be sourced with the API from the United States Naval Observatory (USNO).

## Wireframes and Priority Matrix
[Wireframes](http://res.cloudinary.com/jkarlin929/image/upload/v1515444341/wireframe_project2.jpg) 

[Time Priority Matrix](http://res.cloudinary.com/jkarlin929/image/upload/v1515444380/time_matrix_project2.jpg) 

## MVP
Create, Read, Update, Delete the Time and Date for desired moon phase.  Searching for a date and time and rendering corresponding image for date and time, along with next phase of the moon in the lunar cycle. Styling the pages using CSS.

## POST-MVP
Displaying Moon rise and set times according to a location. Add additional bodies (i.e., jupiter, europa, mars)

## App Components
### Creating Items:
    -date
    -time
    -lunar phase
    -image/image URL

### Editing Items:
    -date
    -time
    -lunar phase
    -image URL

### Deleting Items:
    -date
    -time
    -lunar phase
    -image URL

### Getting Items:
    -date
    -time
    -lunar phase
    -image URL/image


## Functional Components
| Component     | Priority      | EST Time  | Time Invested | Actual Time|
| ------------- |:-------------:| :--------:| :------------:|:----------:|
| Create        | H             |  10hr     |     12hr      |     14hr   |
| Get/Read      | H             |   5hr     |      7hr      |     9hr    |
| Edit          | H             |   10hr    |     11hr      |     13hr   |
| Delete        | H             |   5hr     |     7hr       |     7hr    |
| CSS Styling   | H             |   8hr     |     8hr       |     8hr    |
| Add Moon Phase| H             |   5hr     |     8hr       |     8hr    |
|     Info                                                               |    
| Add other ima-| M             |   6hr     |     N/A       |            |
|    ges                                                                 |

## Helper Functions
| Function              |   Description                                   |
|:---------------------:|:-----------------------------------------------:|
| style="width: 390px;" | Styles input box to make it longer to view input|

## Issues and Resolutions
The API returns a BLOB, when retrieving the image using axios. Currently, using the ability to create and edit the image url, linking it to the proper image from the API.

When adding other info for the moon phase I encountered several errors and decided on a different route, to add other images by creating a body table with all the planetary bodies to choose from.

When trying to create a new image with multiple images to choose from I received this error: "code": "22P02". The documentation is psql says it is an INVALID TEXT REPRESENTATION error.

When testing the image for different dates, I discovered, some images were cut off from the div. To fix this problem, I chose the largest planetary body (Jupiter) and the date to which is was closest to Earth (9/20/2010) and chose that to scale my image to using transform() in css. This way, as least every other planetary object would be completely visible.