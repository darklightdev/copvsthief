
var cnvs = document.getElementById("main_canvas");
var cnvs_bg_color="#ffffff";
var cnvs_ln_color="#000000";
var ctx = cnvs.getContext("2d");
function test() {
	
	rect(ctx, 0, 0, cnvs.width, cnvs.height, cnvs_bg_color);
	line(ctx, 0, cnvs.height/2, cnvs.width, cnvs.height/2, cnvs_ln_color);
	line(ctx, cnvs.width/2, 0, cnvs.width/2, cnvs.height, cnvs_ln_color);
	circle(ctx, cnvs.width/2, cnvs.height/2, cnvs.width/2, cnvs_ln_color);
	
	circle(ctx, cnvs.width, cnvs.height/2, cnvs.width/8, cnvs_ln_color);
	circle(ctx, cnvs.width/2, 0, cnvs.width/8, cnvs_ln_color);
	circle(ctx, 0, cnvs.height/2, cnvs.width/8, cnvs_ln_color);
	circle(ctx, cnvs.width/2, cnvs.height, cnvs.width/8, cnvs_ln_color);
	
	circle(ctx, cnvs.width/2, cnvs.height/2, cnvs.width/8, cnvs_ln_color);
}

function rect(canvas_context, x, y, w, h, color) {
	canvas_context.fillStyle = color;
	canvas_context.fillRect(x, y, w, h);
}
function line(canvas_context, a , b, c, d, color) {
	canvas_context.fillStyle = color;
	canvas_context.moveTo(a,b);
	canvas_context.lineTo(c, d);
	canvas_context.stroke();
}
function circle(canvas_context, x, y, r, color){
	canvas_context.fillStyle = color;
	canvas_context.beginPath();
	canvas_context.arc(x, y, r,0,2*Math.PI);
	canvas_context.stroke();
}
