window.addEventListener('load', function(){
    //We first put the event listener, such that this will not run before the window is loaded.
    const canvas = document.getElementById("game");
    //From the window object's document (e.g. HTML, CSS, etc.) we get the canvas object by tag name (would be better to use an id here instead)
    const ctx = canvas.getContext('2d');
    //We create a context object for the canvas, by calling the getContext method from the Canvas API on our referenced canvas element.
    //We pick 2d rendering, but webgl would be used for 3d rendering.
    canvas.width = 700;
    canvas.height = 500;

    /*We will make different classes within the game, the order of the classes matters since some may inherit from others
    and given that all will be hoisted, we need to ensure that the necessary classes are initialised already. E.g. if
    A is in B, then we must declare and initialise A before B. */

    class player {
        constructor(game){
            //this.position = position;
            //this.velocity = velocity;
            this.game = game;
            this.characterWidth = 50;
            this.characterHeight = 100;
        }
        drawCharacter(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.game.playerPosition.x, this.game.playerPosition.y, this.characterWidth, this.characterHeight);

        }
        characterUpdate(){
            this.drawCharacter();
            //console.log(this.game.playerKeys);

            //ADD COLLISION CONDITION WITH THE GROUND.
            if (this.game.playerKeys.includes('w')) this.game.playerVelocity.y = -2;
            else if(this.game.playerKeys.includes('s')) this.game.playerVelocity.y = 2;
            //else this.game.playerVelocity.y = 0;

            if (this.game.playerKeys.includes('d')) this.game.playerVelocity.x = 2;
            else if(this.game.playerKeys.includes('a')) this.game.playerVelocity.x = -2;
            else this.game.playerVelocity.x = 0; 

            //This will later be replaced with velocities given by some function of the user input. 
            this.game.playerPosition.x += this.game.playerVelocity.x;
            this.game.playerPosition.y += this.game.playerVelocity.y; 

            //Prevent it from going outside of the canvas, we will use a max function that limits the position coord:
            if (this.game.playerPosition.x + this.characterWidth>= canvas.width){
                this.game.playerVelocity.x = 0;
            }
            if (this.game.playerPosition.y + this.characterHeight >= canvas.height){
                this.game.playerVelocity.y = 0;
            }  else this.game.playerVelocity.y += gravity; 
        }
    }

    class userInputs {
        constructor(game){
        this.game = game;

        }
        inputListener(){
            //console.log(this.game.playerKeys);
            window.addEventListener('keydown', (keyEvent) => {
                //Returns -1 if no key present in array.
                
                if (( (keyEvent.key == 'w') ||
                    (keyEvent.key == 'a') ||
                    (keyEvent.key == 's') ||
                    (keyEvent.key == 'd') 
                    )   && this.game.playerKeys.indexOf(keyEvent.key) == -1){
                            this.game.playerKeys.push(keyEvent.key);
                };
            });
            window.addEventListener('keyup', (keyEvent) => {
                if (this.game.playerKeys.indexOf(keyEvent.key) != -1){
                    this.game.playerKeys.splice(this.game.playerKeys.indexOf(keyEvent.key), 1);
                }
            });
            /* Alternatively, we could have a function that pushes a key onto an array, in which case we would then have to 
            have the keyup delete those elements. Furthermore, this array would be used within the playerupdate in order to 
            compute the updates */
        }


    }
    class game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.playerPosition = {
                x:0,
                y:0
            };
            this.playerVelocity = {
                x:0,
                y:0
            };
            this.playerOne = new player(this);
            this.playerInput = new userInputs(this);
            this.playerKeys = [];
        }
        gameUpdate(){
            ctx.fillStyle = 'blue';
            ctx.fillRect(0,0, this.width, this.height);
            
            this.playerOne.characterUpdate(); 
            this.playerInput.inputListener();
        }
    }
    const gravity = 0.1;

    const gameConstruct = new game(canvas.width, canvas.height, ctx);

    


    function animatedGame(){
        window.requestAnimationFrame(animatedGame);
        gameConstruct.gameUpdate();
        
    }

    animatedGame()
});