var cnvs = document.getElementById("main_canvas");
var ctx = cnvs.getContext("2d");
var Cutil={
	translate:function(A, dx=0 ,dy=0){return {x: A.x+dx , y: A.y+dy};},
	rotate:function(A, T=Math.PI){return {x: A.x*Math.cos(T)-A.y*Math.sin(T) , y: A.x*Math.sin(T)+A.y*Math.cos(T)};},
	rotatefrom:function(O, A, T=Math.PI){return Cutil.translate(Cutil.rotate(Cutil.translate(A, -O.x, -O.y), T), O.x, O.y);}
};
var Cdraw={
	line:function(CTX, A, B){
		CTX.moveTo(A.x, A.y);
		CTX.lineTo(B.x, B.y);
		return CTX;
	},
	rect:function(CTX, A, D){
		CTX.rect(A.x, A.y, D.w, D.h);
		return CTX;
	},
	circle:function(CTX, A, R, color){
		CTX.beginPath();
		CTX.arc(A.x, A.y, R,0,2*Math.PI);
		return CTX;
	}
};

center={x:cnvs.width/2, y:cnvs.height/2};
ctx.fillStyle="#000000";
Cdraw.line(ctx, {x:0,y:cnvs.height/2}, {x:cnvs.width,y:cnvs.height/2}).stroke();
Cdraw.line(ctx, {x:cnvs.width/2,y:0}, {x:cnvs.width/2,y:cnvs.height}).stroke();
Cdraw.circle(ctx, center, cnvs.width/2).stroke();
Cdraw.circle(ctx, center, 20).fill();
loc_size_radius=6;
//first
kizo={x:cnvs.width,y:cnvs.height/2};
Cdraw.circle(ctx, kizo, loc_size_radius).fill();
for(i=1;i<12;i++){
	kizo=Cutil.rotatefrom(center,kizo, Math.PI/(i%3==2?3:12));
	Cdraw.circle(ctx, kizo, loc_size_radius).fill();
}
	

