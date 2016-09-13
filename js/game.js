var Cutil={
	translate:function(A, dx=0 ,dy=0){return {x: A.x+dx , y: A.y+dy};},
	rotate:function(A, T=Math.PI){return {x: A.x*Math.cos(T)-A.y*Math.sin(T) , y: A.x*Math.sin(T)+A.y*Math.cos(T)};},
	rotatefrom:function(O, A, T=Math.PI){return Cutil.translate(Cutil.rotate(Cutil.translate(A, -O.x, -O.y), T), O.x, O.y);}
};
var Cdraw={
	line:function(CTX, A, B){CTX.moveTo(A.x, A.y);CTX.lineTo(B.x, B.y);return CTX;},
	rect:function(CTX, A, D){CTX.rect(A.x, A.y, D.w, D.h);return CTX;},
	circle:function(CTX, A, R, T1=0, T2=2*Math.PI){CTX.beginPath();CTX.arc(A.x, A.y, R, T1, T2);return CTX;}
};

var cnvs = document.getElementById("main_canvas");
var ctx = cnvs.getContext("2d");

center={x:cnvs.width/2, y:cnvs.height/2};
bradius=cnvs.width/2-20;
ctx.fillStyle="#000000";
loc_size_radius=5;
dd=Math.cos(Math.PI/12)*bradius;
sradius=Math.sin(Math.PI/12)*bradius;
Cdraw.line(ctx, {x:center.x-bradius, y:center.y}, {x:center.x+bradius, y:center.y}).stroke();
Cdraw.line(ctx, {x:center.x, y:center.y-bradius}, {x:center.x, y:center.y+bradius}).stroke();
Cdraw.circle(ctx, center, bradius).stroke();
ctx.fillStyle="#ffffff";
Cdraw.circle(ctx, center, sradius/2).fill();
ctx.fillStyle="#000000";
Cdraw.circle(ctx, center, sradius/2).stroke();
Cdraw.circle(ctx, center, loc_size_radius).fill();
Cdraw.circle(ctx, {x:center.x-dd, y:center.y}, sradius, 3*Math.PI/2, Math.PI/2).stroke();
Cdraw.circle(ctx, {x:center.x, y:center.y-dd}, sradius, 2*Math.PI, Math.PI).stroke();
Cdraw.circle(ctx, {x:center.x+dd, y:center.y}, sradius, Math.PI/2, 3*Math.PI/2).stroke();
Cdraw.circle(ctx, {x:center.x, y:center.y+dd}, sradius, Math.PI, 2*Math.PI).stroke();

Cdraw.circle(ctx, Cutil.translate(center, -dd+sradius), loc_size_radius).fill();
Cdraw.circle(ctx, Cutil.translate(center, 0, -dd+sradius), loc_size_radius).fill();
Cdraw.circle(ctx, Cutil.translate(center, dd-sradius), loc_size_radius).fill();
Cdraw.circle(ctx, Cutil.translate(center, 0, dd-sradius), loc_size_radius).fill();
nforth=0;
for(i=0;i<12;i++){
	stop=i!=0?Cutil.rotatefrom(center,stop, Math.PI/(i%3==2?3:12)):Cutil.translate(center,bradius);
	Cdraw.circle(ctx, stop, loc_size_radius).fill();
}
