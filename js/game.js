var cnvs = document.getElementById("main_canvas");
var ctx = cnvs.getContext("2d");
var GameEngine={
	cursor:{
		x:0,
		y:0,
		set:function(x=0,y=0){this.x=x; this.y=y; return this;},
		trnsltx:function(dx){this.x=this.x+dx; return this;},
		trnslty:function(dy){this.y=this.y+dy; return this;},
		trnslt:function(dx,dy){return this.trnsltx(dx).trnslty(dy);},
		trnsltxy:function(dxy){return this.trnslt(dxy,dxy);},
		toGameEngine:function(){return GameEngine;}
	},
	stroke:function(){ctx.stroke();return this;},
	fill:function(){ctx.fill();return this;},
	dim:{width:500, height:500},
	bc_color:"#A9A9A9", ln_color:"#000000", cop_color:"#FF0000",
	backround:function(w, h){
		ctx.fillStyle=this.bc_color;
		ctx.fillRect(this.cursor.x, this.cursor.y, w, h);
		return this;
	},
	line:function(a, b){
		ctx.fillStyle=this.ln_color;
		ctx.moveTo(this.cursor.x, this.cursor.y);
		ctx.lineTo(a, b);
		return this.stroke();
	},
	circle:function(r, rad1=0, rad2=2*Math.PI){
		ctx.fillStyle = this.ln_color;
		ctx.beginPath();
		ctx.arc(this.cursor.x, this.cursor.y, r, rad1, rad2);
		return this;
	},
	start:function(){
		/* Do something here */
		this.cursor.set();
		return this.backround(this.dim.width, this.dim.height);
	}
};
//Launch
GameEngine.start();