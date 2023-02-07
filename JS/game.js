window.addEventListener('load', function(){
    //We first put the event listener, such that this will not run before the window is loaded.
    const canvas = document.getElementById("game");
    //From the window object's document (e.g. HTML, CSS, etc.) we get the canvas object by tag name (would be better to use an id here instead)
    const ctx = canvas.getContext('2d');
    //We create a context object for the canvas, by calling the getContext method from the Canvas API on our referenced canvas element.
    //We pick 2d rendering, but webgl would be used for 3d rendering.
    canvas.width = 1200;
    canvas.height = 800;

    const tileWidth = 40;
    const tileHeight = 40;

    const floorCollisions2DArr = [];
    
    for (let i = 0; i < floorCollisions.length; i += canvas.width/tileWidth){
        floorCollisions2DArr.push(floorCollisions.slice(i, i + 30))
    }

    const platformCollisions2DArr = [];
    
    for (let i = 0; i < platformCollisions.length; i+= canvas.width/tileWidth){
        platformCollisions2DArr.push(platformCollisions.slice(i, i + 30))
    }

    const collisionBlocks = [];
    const platformCollisionBlocks = [];
    /*We will make different classes within the game, the order of the classes matters since some may inherit from others
    and given that all will be hoisted, we need to ensure that the necessary classes are initialised already. E.g. if
    A is in B, then we must declare and initialise A before B. */


    // PROBABLY HAVE TO RESCALE IT SO THAT THE TILES CORRESPOND TO THE WIDTH OF THE ACTUAL IMAGE/BACKGROUND. I.E. ONE BLOCK WIDE = WIDTH/30.
    
    class collisionBlock{
        constructor(position, ctx){
            this.ctx = ctx;
            this.blockPosition = position;
            this.blockWidth = 40;
            this.blockHeight = 40;
        }
        
        drawBlock(){
            this.ctx.fillStyle = 'rgba(255,0,0,0.5)';
            this.ctx.fillRect(this.blockPosition.x, this.blockPosition.y, this.blockWidth, this.blockHeight);
            //console.log('drawing')
        }
    }

    class background{
        constructor(game){
            this.game = game;
            this.image = new Image();
            this.image.src = '../images/tile_map.png';
        }
        backgroundDraw(){
            if (!this.image) return
            else this.game.ctx.drawImage(this.image, 0, 0, this.game.width, this.game.height);
        }
        backgroundUpdate(){
            this.backgroundDraw();
        }
    }


    floorCollisions2DArr.forEach((subarray, yVal) => {
        subarray.forEach((elementVal, xVal) => {
            if (elementVal > 0){
                collisionBlocks.push(
                    new collisionBlock({
                        x:xVal * tileWidth,
                        y:yVal * tileHeight   
                    }, ctx)
                )
            }
        })
    })
    platformCollisions2DArr.forEach((subarray, yVal) => {
        subarray.forEach((elementVal, xVal) => {
            if (elementVal > 0){
                platformCollisionBlocks.push(
                    new collisionBlock({
                        x:xVal * tileWidth,
                        y:yVal * tileHeight  
                    }, ctx)
                )
            }
        })
    })





    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    class player {
        constructor(game){
            this.game = game;
            this.game.characterWidth = 50;
            this.game.characterHeight = 100;
        }
        drawCharacter(){
            ctx.fillStyle = 'red';
            ctx.fillRect(this.game.playerPosition.x, this.game.playerPosition.y, this.game.characterWidth, this.game.characterHeight);

        }
        characterUpdate(){
            this.drawCharacter();
            //console.log(this.game.playerKeys);

            //ADD COLLISION CONDITION WITH THE GROUND.
            // Temporary collision condition:
            if (this.game.playerKeys.includes('w') && this.game.height - 5 < this.game.playerPosition.y + this.game.characterHeight) this.game.playerVelocity.y = -5;
            //else if(this.game.playerKeys.includes('s') && this.game.playerPosition.y <= this.game.height - this.game.characterHeight) this.game.playerVelocity.y = 2;
            else if (this.game.playerPosition.y < this.game.height - this.game.characterHeight) this.game.playerVelocity.y += gravity;
            else this.game.playerVelocity.y = 0;
        

            if (this.game.playerKeys.includes('d') && this.game.playerPosition.x <= this.game.width - this.game.characterWidth) this.game.playerVelocity.x = 2;
            else if(this.game.playerKeys.includes('a') && this.game.playerPosition.x > 0) this.game.playerVelocity.x = -2;
            else this.game.playerVelocity.x = 0; 

            //This will later be replaced with velocities given by some function of the user input. 
            this.game.playerPosition.x += this.game.playerVelocity.x;
            this.game.playerPosition.y += this.game.playerVelocity.y; 

            //Prevent it from going outside of the canvas, we will use a max function that limits the position coord:
            /*if (this.game.playerPosition.x + this.characterWidth>= canvas.width){
                this.game.playerVelocity.x = 0}
            else if(this.game.playerPosition.x <= 0){this.game.playerVelocity.x = 0};

            if (this.game.playerPosition.y + this.characterHeight >= canvas.height){
                this.game.playerVelocity.y = 0;
            }  else this.game.playerVelocity.y += gravity; */
        }
    }
    class bulletInstant{
        constructor(game, bulletPosition, shotDamage, shotSpeed){
            this.game = game;
            this.bulletPosition = bulletPosition;
            this.shotDamage = shotDamage;
            this.shotSpeed = shotSpeed;
            this.bulletWidth = 20;
            this.bulletHeight = 5;
        }
        drawBullet(){
            ctx.fillStyle = 'white';
            ctx.fillRect(this.bulletPosition.x, this.bulletPosition.y, this.bulletWidth, this.bulletHeight);
            this.bulletPosition.x += this.shotSpeed; 
        }
        bulletCollision(enemy){
            if (
                this.bulletPosition.x < enemy.x + enemy.width &&
                this.bulletPosition.x + this.width > enemy.x &&
                this.bulletPosition.y < enemy.y + enemy.height &&
                this.bulletPosition.y + this.height > enemy.y
            ) {
                enemy.takeDamage(this.shotDamage);
                return true;
            }
            return false;
            }

    }
    class bulletManagement{
        constructor(game){
            this.game = game;
            this.bulletPosition = {
                x: this.game.playerPosition.x + this.game.characterWidth,
                y: this.game.playerPosition.y + this.game.characterHeight/2
            }
            this.shotDelay = 10;
            this.shotDamage = 1;
            this.shotSpeed = 2;
            this.bullets = [];
            this.bulletTimer = 0;
        }
        shoot(){
            if (this.bulletTimer <= 0){
                this.bullets.push(new bulletInstant(this.game, this.bulletPosition, this.shotDamage, this.shotSpeed));
                this.bulletTimer = this.shotDelay;
            }
            this.bulletTimer--;
        }
        drawBullet(){
            this.bullets.forEach((bullet) => {
                if (this.offScreen(bullet)){
                    this.bullets.splice(this.bullets.indexOf(bullet), 1);
                }
                else bullet.draw(this.game.ctx);
            })
        }
        offScreen(bullet){
            return (bullet.position.x <= 0 || bullet.position.x >= this.game.width || bullet.position.y <= 0 || bullet.position.y >= this.game.height)
        }
        collisionEvent(enemy){
            return this.bullets.some((bullet) =>{
                if (bullet.bulletCollision(enemy)){
                    this.bullets.splice(this.bullets.indexOf(bullet), 1)
                    return true;
                }
                else return false; 
            })
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
                //console.log(keyEvent.key)
                if (( (keyEvent.key.toLowerCase() == 'w') ||
                    (keyEvent.key.toLowerCase() == 'a') ||
                    (keyEvent.key.toLowerCase() == 's') ||
                    (keyEvent.key.toLowerCase() == 'd') ||
                    (keyEvent.key.toLowerCase() == 'o') ||
                    (keyEvent.key.toLowerCase() == 'p')
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
        constructor(width, height, ctx, collisionBlockObjs, platformCollisionBlockObjs){
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
            this.characterWidth = 50;
            this.characterHeight = 100;
            this.collisionBlockObjs = collisionBlockObjs;
            this.platformCollisionBlocks = platformCollisionBlockObjs;
            this.gameBackground = new background(this)
            this.playerOne = new player(this);
            this.playerInput = new userInputs(this);
            this.playerKeys = [];
            this.ctx = ctx;
            this.playerDirection = null; 
        }
        gameUpdate(){
            //this.ctx.fillStyle = 'blue';
            //this.ctx.fillRect(0,0, this.width, this.height);
            this.gameBackground.backgroundUpdate();
            this.collisionBlockObjs.forEach((collision) => {
                collision.drawBlock();
            })
            //console.log(this.platformCollisionBlocks);
            this.platformCollisionBlocks.forEach((collision) => {
                collision.drawBlock();
            })
            this.playerOne.characterUpdate(); 
            this.playerInput.inputListener();
            if (! this.playerKeys.length){
                this.playerDirection = this.playerKeys.slice(-1)
            };
            
        }
    }
    const gravity = 0.2; //0.1;

    const gameConstruct = new game(canvas.width, canvas.height, ctx, collisionBlocks, platformCollisionBlocks);

    


    function animatedGame(){
        window.requestAnimationFrame(animatedGame);
        gameConstruct.gameUpdate();
        
    }

    animatedGame()
});