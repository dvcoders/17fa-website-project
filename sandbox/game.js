var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});


//constants
var PLAYER_GRAVITY = 1100;
var PLAYER_ACCELERATION = 2000;
var PLAYER_DRAG = 0.92;
// var PLAYER_MAXSPEED = 400;
var PLAYER_JUMPHEIGHT = 700;

//variables
var player;
var floor;
var weapon;

var floor1;
var floor2;
var floor3;


// load images and resources
function preload() {

	game.load.image("gray",			"asset/gray.jpg");
	game.load.image("platform",		"asset/platform.jpg");
	game.load.image("player", 		"asset/man.gif");

	game.load.image("red",			"asset/red.png");

}

function create() {

	//  Background
	game.add.tileSprite(0, 0, game.width, game.height, 'gray');

	//player set up
	player = game.add.sprite(300, 400, "player");
	player.anchor.set(0.5, 0.5);

	//floor set up
	floor = game.add.sprite(400, 550, "platform");
	floor.width = 700;
	floor.height = 40;
	floor.anchor.set(0.5, 0.5);

	//physics engines
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.physics.enable(player, Phaser.Physics.ARCADE);
	player.body.allowGravity = true;
	player.body.gravity.y = PLAYER_GRAVITY;
	// player.body.drag.set(PLAYER_DRAG);
	// player.body.maxVelocity.set(PLAYER_MAXSPEED);
	player.body.collideWorldBounds = true;

	game.physics.enable(floor, Phaser.Physics.ARCADE);
	floor.body.immovable = true;


	//
	{
		floor1 = game.add.sprite(150, 350, "platform");
		floor1.width = 200;
		floor1.height = 40;
		floor1.anchor.set(0.5, 0.5);

		floor2 = game.add.sprite(650, 350, "platform");
		floor2.width = 200;
		floor2.height = 40;
		floor2.anchor.set(0.5, 0.5);
		
		floor3 = game.add.sprite(400, 200, "platform");
		floor3.width = 300;
		floor3.height = 40;
		floor3.anchor.set(0.5, 0.5);





		game.physics.enable(floor1, Phaser.Physics.ARCADE);
		floor1.body.immovable = true;
		game.physics.enable(floor2, Phaser.Physics.ARCADE);
		floor2.body.immovable = true;
		game.physics.enable(floor3, Phaser.Physics.ARCADE);
		floor3.body.immovable = true;
	}


	//create weapon
	weapon = game.add.weapon(20, 'red');
	weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
	weapon.bulletSpeed = 1000;
	weapon.fireRate = 100;


}//create

function update()
{
	//collision
	if((game.physics.arcade.collide(player, floor)
		|| game.physics.arcade.collide(player, floor1)
		|| game.physics.arcade.collide(player, floor2)
		|| game.physics.arcade.collide(player, floor3))
		&& game.input.keyboard.isDown(Phaser.Keyboard.UP)
		&& player.body.acceleration.y == 0)
	{
		player.body.velocity.y = -PLAYER_JUMPHEIGHT;
	}//if



	//drag
	player.body.velocity.x = player.body.velocity.x * PLAYER_DRAG;

	//weapon
	if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
	{
		weapon.trackSprite(player, player.width, 0);
		weapon.fireAngle = Math.acos(player.width/Math.abs(player.width))/Math.PI*180;
		weapon.fire();
	}//if

	playerMove();
}//update


function playerMove()
{
	if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
	{
		player.body.acceleration.x = -PLAYER_ACCELERATION;
		player.width = -Math.abs(player.width);
	}
	else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
	{
		player.body.acceleration.x = PLAYER_ACCELERATION;
		player.width = Math.abs(player.width);
	}
	else
	{
		player.body.acceleration.x = 0;
	}


}//playerMove



