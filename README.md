#Dog Match Game

Deployed app: ……………………..

##The brief for this project was –

**Build a memory game:**

*Build a simple single-player pattern-matching memory game.*

*We encourage you to create your own game, by choosing a set of visual and/or auditory patterns that increase in complexity 
over the course of the game and challenge the player. Games that you could look at for inspiration include Simon and Bop It.
Provide users with clear explanations on how to play the game and with clear feedback on how they're doing at any stage
With this in mind, I created a card matching memory game where the user has to match all the images in order to finish the game and play again.*

##UX
The user stories are -
•	I want to click the cards to flip them over and find the right pairs.
•	I want to challenge my memory.
•	I want to be notified about future game releases.

##Wireframes
Please refer to the wireframes directory for individual page wireframes. 

##Features

###Existing Features
•	**Heading text:** Instructs the user how to start playing.
•	**Gameboard:** Allows the user flip cards over and play the game.
•	**New Game:** Allows the user start a new game.
•	**Subscribe function:** Allows the user to input their email address, to subscribe to the developer in order to get updates of new games.
•	**Confirmation email:** Tells users that they have successfully subscribed to the service. 

##Features Left to Implement
•	Adding a score element and a highest score table to the game so that players can try to beat previous scores or other players.
•	Adding harder levels to the game to make it more challenging.
•	Add interactive aspects to the end of the game in order to continue, level up or close the game. 

##Technologies Used

###Languages Used:

**HTML** – used to structure the site.
**CSS** – used to style the site.
**Javascript** - used for the interactive elements on the site.
**Materialize** – used to style, structure and create a responsive site.

###Other

**GitHub** - used to deploy the project.
**Gitpod** - used to write the project code.
**Microsoft Word** – used to create the wireframes for the project.
**EmailJS** – used to send users email address to developer to add to subscription list.

##Testing

•	**New game button:** Tested several times throughout the project and found to work each time.
•	**Card flip:** Tested by playing the game and clicked cards flipped over.
•	**Card Match:**  Tested in the console log as the game was being built. Tested in the final project by playing the game 
    and cards did not flip back once deemed to be a match.
•	**No Card Match:** Tested in the console log as the game was being built. Tested in the final project by playing the game 
    and found that cards did flip back over once deemed to not be a match.
•	**Subscribe to email:** Tested when setting up this function in emailJS, no errors. Testing during the project and errors found. 
    Tested at the end of the project and found to have errors. See Debugging section for solutions.

##Debugging:

**Bug:** While playing when first building the project, the cards were flipping back over at such a speed that they weren’t being 
        to the user and weren’t being shown as not a match.
**Solution:** I added a timer interval to my else statement 

**Bug:** The subscribe to email function was not sending the email template through (midway through the project build).
**Solution:** Connection between EmailJS and Gmail had been lost. This was fixed by re-establishing the connection.

**Bug:** The subscribe to email function was not sending the email template through (at the end of the project build).
**Solution:** The <form> end tag had been edited to the wrong place. Moved the </form> tag to include the submit button.

##Responsiveness of site:

To aid in creating a responsive site, I used a header and a footer from Materialize. 
During the building of the game, I have checked various screen sizes and, whilst the game is too tricky to play to be phone compatible, 
it adjusts well to a tablet screen. On a mobile view, it is not possible to see all of the cards without scrolling and so would not be suitable 
to be played on these devices.

##Deployment

I created a repository on GitHub using the GitPod template supplied by Code Institute and linked GitPod to my project. I committed the 
content at various stages throughout the creation of my project. 
Having completed my project, I pushed to GitHub as the final stage of deployment. 

##Credits

####Content
•	This project was written and altered using a tutorial by Laurence Svekis on Udemy. 
•	Materialise was utilised for the styling of this project.
•	Guidance on the layout and functions were obtained from queries on Slack.

####Media
•	All photos used in this site are from Google Images.

####Acknowledgements
•	This project was written and altered using a tutorial by Laurence Svekis on Udemy. 

 


