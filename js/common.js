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