# Project Title: Guess 'N' Time


##Game Overview</br>
The purpose of this multi-player game is to appoint one player who 'describes using words'
either 'images or keywords' that is shown on the screen via 'GameBox', and the other players
to guess correctly without sufficient information. The first player **MUST NOT** disclose / mention
the object shown in the image by its name or keyword, instead he/she has to associate it by reference (with other objects)or by action.

##Game Rules</br>
1. Do not callout or disclose the object in the image by its name or keyword<br>
2. You can ONLY reference the object in the image to other objects or by acting it out.<br>
3. A complete game consists of six turns for each player.<br>
4. Each player has 20 seconds to describe/ guess the image/word in each turn.<br>
5. The winner gets bar stacks added to his/her container.<br>
6. Whoever has the most bars (That reaches the top of the container first) wins the game - Game ends.<br>


## How To Play

This game can only be played by one player.<br>
Guess what image is behind the curtain in 30 seconds or less.<br>
 As you continue to make progress, the timer gets shorter.<br>
Your answer must be an exact word that describes the image<br>
Click can click for "Clues"<br>
The computer scores point each time you fail to guess correctly.<br>
You score point each time you guess the image correctly.<br>

## Related images

![alt wireframe](public/images/wire2.png)


## User Stories

1. Click 'Start to begin game<br>
    1a. Countdown begins (30sec).<br>
    1b. Image loads "Game Box"<br>
    1c. Clue is added to the "Clue Box"<br>
2. If 'Countdown' reaches 'zero' and Guesses is not a match, Player switches turns.<br>
    2a. If Player1 wins the round, 'bar stack' is increamented by one. Player switches turns.<br>
    2b. If Player2 wins the round, Player2's 'bar stack' is increamented by one. Player switches turns.<br>
    2c. Bar stacks are color coded from 'Red to Green'<br>
3. If Player1 barstack is equal to 6, player1 wins.<br>
    If Player2 barstack is equal to 6, player2 wins.<br>

## MVP
* On load, I get prompted to enter a number between 1 - 10.




## Developer Documentation (Demo)

Install dependencies - npm install<br>
Start - npm start<br>

For development run watchify - npm run watch<br>

Open localhost in two browser tabs for testing. On the same machine, don't open tabs in two different browsers as it will fail to provide camera access to 2 different applications(browsers) simultaneously.<br>
Deploy it and open url in two separate devices for real-world usage.<br>
