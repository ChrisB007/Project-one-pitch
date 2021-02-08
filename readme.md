# Project Title: Guess 'N' Time


##Game Overview</br>
The purpose of this multi-player game is to appoint one player who 'describes using words'
either 'images or keywords' that is shown on the screen via 'GameBox', and the other players
to guess correctly without sufficient information. The first player **MUST NOT** disclose / mention
the object shown in the image by its name or keyword, instead he/she has to associate it by reference (with other objects)
or by action.

##Game Rules</br>
1. Do not callout or disclose the objects in the image by its name or keyword
2. You can ONLY reference the object in the image to other objects or by acting it out.
3. A complete game consists of six turns for each player.
4. Each player has 20 seconds to describe/ guess the image/word in each turn.
5. The winner gets bar stacks added to his/her container.
6. Whoever has the most bars (That reaches the top of the container first) wins the game - Game ends.


## How To Play

This game can only be played by two players at a time.<br>
The first player starts the game by pushing the "Start / Pause" button.<br>
As the counter goes down, the first player describes objects/ words shown while the second player guesses.<br>
Players can choose to pause the game at any time during the game.<br>

## Related images

[wireframe](public/images/Screen Shot 2021-02-08 at 12.52.57 AM.png)


## User Stories

0. Input Camera shows players.
    0a. Player bar stack starts at 0
1. Click 'Start | Pause' to begin game
    1a. Countdown begins (20sec).
    1b. Image / word is added to the "Game Box"
    1c. Clue is added to the "Clue Box"
    1d. Player2's button is disabled.
2. If 'Countdown' reaches 'zero' and Guesses is not a match, Player switches turns.
    2a. If Player1 wins the round, 'bar stack' is increamented by one. Player switches turns.
    2b. If Player2 wins the round, Player2's 'bar stack' is increamented by one. Player switches turns.
    2c. Bar stacks are color coded from 'Red to Green'
3. If Player1 barstack is equal to 6, player1 wins.
    If Player2 barstack is equal to 6, player2 wins.



## Developer Documentation (Demo)

Install dependencies - npm install
Start - npm start

For development run watchify - npm run watch

Open localhost in two browser tabs for testing. On the same machine, don't open tabs in two different browsers as it will fail to provide camera access to 2 different applications(browsers) simultaneously.
Deploy it and open url in two separate devices for real-world usage.
