var startsite = new Site("start");

startsite.reachable = true;
startsite.description  = "hell� vil�g";
startsite.addOption("bumm1", function(){printc(this.name);});
startsite.addOption("bumm2", function(){printc(this.name);});

var seconds = new Site("second");

seconds.reachable = true;
seconds.description  = "hell� m�sodik vil�g";
seconds.addOption("nyit", function(){
	thirds.reachable = true;
	printc("third nyitva");
	refresh_ui();
});

newlontool = new Tool("newlontool");
newlontool.owned = true;

var thirds = new Site("third");

thirds.reachable = false;
thirds.description  = "hell� haradik vil�g";

thirds.addToolRelay("newlontool", function(){
	printc("nem, a ny�l az!");
});