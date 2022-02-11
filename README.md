# How to Edit Steps

The structure is set up to allow easy editing of steps.

Each individual step is located under "src/steps/StepX.js" where X is the step number.

In this file you will see "StepXObj", which amoing other things, contains "SpeechBubble" with the text to be displayed in the speech box at the bottom.

There is also a function named "Visuals" - this is what controls what will be shown in the visual box.

### -- Steps without cards

Visuals for steps without cards are contained within the "stepVisuals" folder and can be edited within there

### -- Steps with cards

Steps with cards will contain two arrays in the "StepX.js" file:
#### hand
- The hand variable contains the cards in the players hand
#### middle
- The middle variable contains the cards in the middle of the table


