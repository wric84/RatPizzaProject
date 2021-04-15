/*1. Create Directory named complaints_app
    -Inside create app.js, index.html, styles.css
    -link them as well as jQuery CDN library

2. The app:
    -search 311 call Data (look at link in assignment)
    -display all complaints, filtered by borough
    -check how police respond 
3.The data:
    -convert data from NYC open Data(provided through link on assignment) and format to JSON

4. When collapsed:
    -closeapi.png
    -When opened to see all the key value pairs: 
    -openapi.png 
    -Only collect key/values of interest:
        -borough
        -descriptor (which says what kind of complaint was made)
        -agency: "NYPD" (because we only want complaints that were handled by the police department)
        -resolution_description (which says how the police handled the complaint)

5. Working with an API
    -five buttons for the five boroughs when the page loads
    -input box where you see how many complaints for borough listed
        (When the user clicks on one of the five buttons, a list of complaints should be displayed on the page, according 
        to the number they input AND the borough they clicked on)
    -If the user doesn't input any number, make the default be 10
    -filter so only complaints that were handled by the NYPD! 
        (hint: consider filtering for a specific "agency" when making the API call)
    -When the list of complaints is shown, each complaint should also have a button on it that reads something along the 
    lines of "toggle police response"
    -When the user clicks on on the "toggle police response" button, it should then toggle how the police responded to that 
    particular complaint
    -Make sure it only toggles the response for that one complaint, not the entire list!
*/

