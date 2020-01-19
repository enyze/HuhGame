function include(url) {
		var script = document.createElement('script');
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);
	}

include("cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js");

var config = 
{
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene:
	{
		preload: preload,
		create: create,
		update: update
	}
};

var cursors;

var game = new Phaser.Game(config);

function preload()
{

}

function create()
{
	// Events
	cursors = this.input.keyboard.createCursorKeys();
}

function update()
{

}