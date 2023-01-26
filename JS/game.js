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
        constructor({position, velocity}){
            this.position = position;
            this.velocity = velocity;
            this.characterWidth = 50;
            this.characterHeight = 100;
        }
        drawCharacter(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.position.x, this.position.y, this.characterWidth, this.characterHeight);

        }
        characterUpdate(){
            this.drawCharacter();
            //This will later be replaced with velocities given by some function of the user input.
            /*this.velocity.x += 0.01;
            this.velocity.y += 0.01;*/
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y; 

            //Prevent it from going outside of the canvas, we will use a max function that limits the position coord:
            if (this.position.x + this.characterWidth>= canvas.width){
                this.velocity.x = 0;
            }
            if (this.position.y + this.characterHeight >= canvas.height){
                this.velocity.y = 0;
            }
        }
    }

    class userInputs {
        constructor(){
        }
    }
    class game {
        constructor(width, height){
            this.width = width;
            this.height = height;
        }
        gameUpdate(){
            ctx.fillStyle = 'blue';
            ctx.fillRect(0,0, this.width, this.height); 
        }
    }

    const gameConstruct = new game(canvas.width, canvas.height, ctx);

    const playerOne = new player({
        position: {
            x:0,
            y:0
        },
        velocity: {
            x:1,
            y:1
        }
    });


    function animatedGame(){
        window.requestAnimationFrame(animatedGame);
        gameConstruct.gameUpdate();
        playerOne.characterUpdate();
    }

    animatedGame()
});