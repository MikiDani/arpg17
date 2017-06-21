var startsite = new Site("start");

startsite.img = "images/abc.jpg";
startsite.description = "ez itt a bolt!!!! eeeeee"
startsite.reachable = true;
var lopok = startsite.addOption("kocsit lopok", function(){
	if (!gun.owned){
		printc("fegyver nélkül??");
	} else {
		kocsiba.reachable = true;
		refresh();
	}
});

startsite.addOption("pisztolyt lopok", function(){
	gun.owned = true;
	lopok.active = false;
	refresh();
});

startsite.addToolRelay("pisztoly", function(){
	kocsiba.reachable = true;
	refresh();
	printc("remek, loptál egy kocsit!");
});

var gun = new Tool("pisztoly", "<img src='images/images.jpg'/>");

var kocsiba = new Site("kocsiba");

kocsiba.addToolRelay("pisztoly", function(){
	kocsiba.img = "images/zsaru.jpg"
	start.reachable = false;
	refresh();
	printc("bumm szívtál!");
});


var uton = new Site("úton", "<img src='images/images.jpg'/><br/>úton");

uton.img = "images/zsaru.jpg"
uton.reachable = true
uton.description = "szoptááá köcsög !!!"