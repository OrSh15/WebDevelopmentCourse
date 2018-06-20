(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"12_6__Cars_NEW_atlas_", frames: [[98,66,50,50],[0,0,96,96],[104,170,50,50],[0,98,96,96],[98,118,50,50],[0,196,50,50],[52,196,50,50],[98,0,64,64]]}
];


// symbols:



(lib.Image = function() {
	this.spriteSheet = ss["12_6__Cars_NEW_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["12_6__Cars_NEW_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_1 = function() {
	this.spriteSheet = ss["12_6__Cars_NEW_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_1_2 = function() {
	this.spriteSheet = ss["12_6__Cars_NEW_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["12_6__Cars_NEW_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["12_6__Cars_NEW_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.spriteSheet = ss["12_6__Cars_NEW_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["12_6__Cars_NEW_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yellow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B5B5").s().p("AACAiIAAgOIALAAIAAgZQAAgGgCgEQgDgDgEAAQgIAAgCAOIgEAmIgRAAIAEgkQAAgEACgEIAEgHIABAAIAAgBIgFACIgFABIgEgNIAPgEIAPgBQAPAAAIAIQAIAHAAAQIAAAkg");
	this.shape.setTransform(52.4,49.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B5").s().p("AgMAfQgHgFgDgHQgEgHgBgIIAAgEQABgEACgGIADgIIABAAIAAgBIgIACIgDgMIAQgEIAPgBQAPABAJAHQAIAJAAAPIAAAGQAAAIgDAHQgEAHgHAFQgHADgIAAQgJAAgGgDgAgFgPQgDAFgBAJIAAAFQAAAEACAEQABADADACQADACADAAQADAAACgCQAEgCABgDQACgEgBgEIAAgFQAAgJgDgFQgDgEgFAAQgGAAgCAEg");
	this.shape_1.setTransform(45,49.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5B5B5").s().p("AAKAhIAAgqQAAgJgJAAIgKAAIAAAzIgSAAIAAhBIAcAAQANAAAHAGQAHAHAAAMIAAAog");
	this.shape_2.setTransform(38,49.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5B5B5").s().p("AAFAhIAAgrQAAgDgCgDQgDgCgDAAIgUAAIAAgOIAVAAQAIAAAFADQAGADADAFQAEAFgBAHIAAAqg");
	this.shape_3.setTransform(31.3,49.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5B5B5").s().p("AgDATIAAgXIgKAAIAAgOIAbAAIAAAlg");
	this.shape_4.setTransform(26.5,47.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B5B5B5").ss(2).p("AFDhxQAAgTgNgOQgMgOgUgBQgUgCgSAAInTAAQglAAgcAOQgeAOAAAUIAADiQAAAUAeAQQAdARAkAAIH2AAQAUAAAOgOQAOgOAAgUg");
	this.shape_5.setTransform(19.8,11.4,0.422,0.422);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A5A5A5").s().p("AjjCkQgkAAgdgRQgegQAAgUIAAjiQAAgUAegOQAcgOAlAAIHTAAIAnACQASABANAOQANAOAAATIAADlQAAAUgOAOQgOAOgUAAg");
	this.shape_6.setTransform(19.8,11.4,0.422,0.422);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B5B5B5").ss(2).p("AkWCjIIsAAQAhAAALgiQAKgigagUIkHjTQgggagmAAIj7AAQgTAAgNAPQgOAOAAAUIAADjQAAAUAOAOQANAPATAAg");
	this.shape_7.setTransform(51.6,11.2,0.422,0.422);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A5A5A5").s().p("AkWCjQgTAAgNgPQgOgOAAgVIAAjhQAAgVAOgOQANgPATAAID7AAQAmAAAgAaIEHDTQAaAUgKAiQgLAighAAg");
	this.shape_8.setTransform(51.6,11.2,0.422,0.422);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5B5B5B").ss(3).p("ACWAAQAAA9gsAsQgrArg/AAQg+AAgsgrQgsgsAAg9QAAg8AsgsQAtgrA9AAQA+AAAsArQAsAsAAA8g");
	this.shape_9.setTransform(17.8,38.6,0.422,0.422);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A5A5A5").s().p("AhqBpQgrgsgBg9QABg8ArgsQAtgrA9AAQA+AAAtArQAsAsAAA8QAAA9gsAsQgsArg/AAQg+AAgsgrg");
	this.shape_10.setTransform(17.8,38.6,0.422,0.422);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5B5B5B").s().p("AiUCTQg+g9AAhWQAAhVA+g9QA9g9BXAAQBYAAA9A9QA+A9AABVQAABWg+A9Qg+A9hXAAQhXAAg9g9gAhnhrQgsAsAAA9QAAA8AsAsQAsArA9AAQA/AAAsgrQAsgsAAg8QAAg9gsgsQgtgrg+AAQg9AAgsArg");
	this.shape_11.setTransform(17.7,38.7,0.422,0.422);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiiChQhEhDAAheQAAhdBEhDQBDhCBfAAQBgAABDBCQBEBDAABdQAABehEBDQhDBChgAAQhfAAhDhCgAhxh1QgvAwgBBDQABBCAvAvQAxAvBCAAQBEAAAxgvQAwgvAAhCQAAhDgwgwQgxgvhEAAQhCAAgxAvg");
	this.shape_12.setTransform(17.8,38.7,0.422,0.422);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5B5B5B").ss(3).p("ACWAAQAAA9gsAsQgrArg/AAQg+AAgsgrQgsgsAAg9QAAg8AsgsQAtgrA9AAQA+AAAsArQAsAsAAA8g");
	this.shape_13.setTransform(64.1,38.6,0.422,0.422);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A5A5A5").s().p("AhpBpQgtgsABg9QgBg8AtgsQAsgrA9AAQA+AAAsArQAtAsgBA8QABA9gtAsQgrArg/AAQg+AAgrgrg");
	this.shape_14.setTransform(64.1,38.6,0.422,0.422);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5B5B5B").s().p("AiUCTQg+g9AAhWQAAhVA+g9QA9g9BXAAQBXAAA+A9QA+A9AABVQAABWg+A9Qg+A9hXAAQhXAAg9g9gAhnhrQgsAsAAA9QAAA8AsAsQAsArA9AAQA/AAAsgrQAsgsAAg8QAAg9gsgsQgtgrg+AAQg9AAgsArg");
	this.shape_15.setTransform(64,38.7,0.422,0.422);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiiChQhEhDAAheQAAhdBEhDQBDhCBfAAQBfAABEBCQBDBDAABdQAABehDBDQhEBChfAAQhfAAhDhCgAhxh1QgvAwAABDQAABCAvAvQAxAvBDAAQBEAAAwgvQAwgvAAhCQAAhDgwgwQgwgvhEAAQhDAAgxAvg");
	this.shape_16.setTransform(64,38.7,0.422,0.422);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5B5B5").s().p("AgiAPQgEAAgDgDQgDgEAAgDIAAgJQAAgEADgDQADgDAEAAIBEAAQAEAAAEADQADADAAAEIAAAJQAAADgDAEQgEADgEAAg");
	this.shape_17.setTransform(42.3,20.9,0.422,0.422);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B5B5B5").s().p("AgIAyQgWAAgQgOQgRgOAAgWQAAgWARgNQAQgOAWAAIBDAAQABAAACAEQACAFgBAGIAABUg");
	this.shape_18.setTransform(80.3,25.3,0.422,0.422);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5B5B5").s().p("ArTHrQhsAAhNg9QhMg+AAhXIAAqMQAAgxArgjQAsgjA9AAIQrAAQA6AAAqAgIJcHCQAgAVAMAYQAGAOAAAQIAADYQAABWhLA9QhMA9hrAAg");
	this.shape_19.setTransform(41.3,20.5,0.422,0.422);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AACAiIAAgOIAMAAIgBgZQAAgGgDgEQgCgDgEAAQgIAAgBAOIgFAmIgRAAIAEgkQABgEACgEIADgHIABAAIgFABIgFABIgEgMIAPgEIAPgCQAQAAAHAIQAIAIAAAPIAAAkg");
	this.shape_20.setTransform(52.5,49);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMAeQgGgDgFgIQgDgGgBgKIAAgDQABgEABgFQACgFADgDIABgBIgIACIgEgNIAPgDIAQgCQAPABAJAHQAIAJAAAPIAAAFQAAAKgEAGQgEAIgGADQgHAFgJAAQgHAAgHgFgAgGgOQgDAEAAAKIAAADQABAGABADQACADACACQADACACAAQAEAAACgCQADgCABgDQACgDAAgGIAAgEQAAgJgDgFQgDgEgGAAQgEAAgEAFg");
	this.shape_21.setTransform(45.1,49.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAKAhIAAgqQAAgJgJAAIgKAAIAAAzIgRAAIAAhBIAbAAQANAAAHAGQAGAHABAMIAAAog");
	this.shape_22.setTransform(38.1,49.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAhIAAgqQAAgFgCgCQgCgCgEAAIgTAAIAAgOIAUAAQAHAAAGADQAGADADAFQADAFAAAHIAAAqg");
	this.shape_23.setTransform(31.4,49.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgCATIAAgXIgLAAIAAgOIAbAAIAAAlg");
	this.shape_24.setTransform(26.6,47.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D3D3D3").s().p("Ag+AyIgEgGQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIB8haQABgBABAAQAAAAABAAQABAAAAAAQABABAAAAIAEAGQAAABABABQAAAAAAABQAAAAAAABQgBAAgBABIh8BaIgCABIgCgCg");
	this.shape_25.setTransform(11.8,8.8,0.42,0.42);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D3D3D3").s().p("AguAjIgBgBQgEgFAGgDIBTg9QAGgEADAFIABABQAEAFgGADIhTA+IgEABQgDAAgCgDg");
	this.shape_26.setTransform(13.6,9.4,0.42,0.42);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#666666").ss(2).p("AFDhxQAAgTgNgOQgMgOgUgBQgUgCgSAAInTAAQglAAgcAOQgeAOAAAUIAADiQAAAUAeAQQAdARAkAAIH2AAQAUAAAOgOQAOgOAAgUg");
	this.shape_27.setTransform(19.9,11.4,0.42,0.42);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A5A5A5").s().p("AjjCkQgkAAgdgRQgegQAAgUIAAjiQAAgUAegOQAcgOAlAAIHTAAIAnACQASABANAOQANAOAAATIAADlQAAAUgOAOQgOAOgUAAg");
	this.shape_28.setTransform(19.9,11.4,0.42,0.42);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#666666").ss(2).p("AkWCjIIsAAQAhAAALgiQAKgigagUIkHjTQgggagmAAIj7AAQgTAAgNAPQgOAOAAAUIAADjQAAAUAOAOQANAPATAAg");
	this.shape_29.setTransform(51.6,11.3,0.42,0.42);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A5A5A5").s().p("AkWCjQgTAAgNgPQgOgOAAgVIAAjhQAAgVAOgOQANgPATAAID7AAQAmAAAgAaIEHDTQAaAUgKAiQgLAighAAg");
	this.shape_30.setTransform(51.6,11.3,0.42,0.42);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3).p("ACWAAQAAA9gsAsQgrArg/AAQg+AAgsgrQgsgsAAg9QAAg8AsgsQAtgrA9AAQA+AAAsArQAsAsAAA8g");
	this.shape_31.setTransform(17.9,38.6,0.42,0.42);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A5A5A5").s().p("AhqBpQgrgsgBg9QABg8ArgsQAtgrA9AAQA+AAAtArQAsAsAAA8QAAA9gsAsQgsArg/AAQg+AAgsgrg");
	this.shape_32.setTransform(17.9,38.6,0.42,0.42);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AiUCTQg+g9AAhWQAAhVA+g9QA9g9BXAAQBYAAA9A9QA+A9AABVQAABWg+A9Qg+A9hXAAQhXAAg9g9gAhnhrQgsAsAAA9QAAA8AsAsQAsArA9AAQA/AAAsgrQAsgsAAg8QAAg9gsgsQgtgrg+AAQg9AAgsArg");
	this.shape_33.setTransform(17.8,38.7,0.42,0.42);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiiChQhEhDAAheQAAhdBEhDQBDhCBfAAQBgAABDBCQBEBDAABdQAABehEBDQhDBChgAAQhfAAhDhCgAhxh1QgvAwgBBDQABBCAvAvQAxAvBCAAQBEAAAxgvQAwgvAAhCQAAhDgwgwQgxgvhEAAQhCAAgxAvg");
	this.shape_34.setTransform(17.9,38.7,0.42,0.42);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3).p("ACWAAQAAA9gsAsQgrArg/AAQg+AAgsgrQgsgsAAg9QAAg8AsgsQAtgrA9AAQA+AAAsArQAsAsAAA8g");
	this.shape_35.setTransform(64,38.6,0.42,0.42);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5A5A5").s().p("AhpBpQgtgsABg9QgBg8AtgsQAsgrA9AAQA+AAAsArQAtAsgBA8QABA9gtAsQgrArg/AAQg+AAgrgrg");
	this.shape_36.setTransform(64,38.6,0.42,0.42);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AiUCTQg+g9AAhWQAAhVA+g9QA9g9BXAAQBXAAA+A9QA+A9AABVQAABWg+A9Qg+A9hXAAQhXAAg9g9gAhnhrQgsAsAAA9QAAA8AsAsQAsArA9AAQA/AAAsgrQAsgsAAg8QAAg9gsgsQgtgrg+AAQg9AAgsArg");
	this.shape_37.setTransform(63.9,38.7,0.42,0.42);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AiiChQhEhDAAheQAAhdBEhDQBDhCBfAAQBfAABEBCQBDBDAABdQAABehDBDQhEBChfAAQhfAAhDhCgAhxh1QgvAwAABDQAABCAvAvQAxAvBDAAQBEAAAwgvQAwgvAAhCQAAhDgwgwQgwgvhEAAQhDAAgxAvg");
	this.shape_38.setTransform(63.9,38.7,0.42,0.42);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgiAPQgEAAgDgDQgDgEAAgDIAAgJQAAgEADgDQADgDAEAAIBEAAQAEAAAEADQADADAAAEIAAAJQAAADgDAEQgEADgEAAg");
	this.shape_39.setTransform(42.3,20.9,0.42,0.42);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgIAyQgWAAgQgOQgRgOAAgWQAAgWARgNQAQgOAWAAIBDAAQABAAACAEQACAFgBAGIAABUg");
	this.shape_40.setTransform(80.1,25.3,0.42,0.42);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FBB03B").s().p("AkvDOQguAAgfgaQghgZAAglIAAkSQAAgUATgPQASgOAaAAIG/AAQAZAAARANID+C9QANAIAFAKQACAHABAGIAABbQgBAkgfAZQggAagsAAg");
	this.shape_41.setTransform(41.4,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,82.8,58);


(lib.storage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.alpha = 1;
	}
	this.frame_1 = function() {
		this.stop();
		this.alpha = 0.5;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(17.2,8,0.598,0.598);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36D1DC","#39CBDD","#41BADF","#4F9FE2","#5B86E5"],[0,0.204,0.471,0.78,1],-58,0,58.1,0).s().p("AmZGaQiqipAAjxQAAjvCqiqQCpiqDwAAQDwAACqCqQCqCqAADvQAADxiqCpQiqCqjwAAQjwAAipiqg");
	this.shape.setTransform(32.2,22.5,0.387,0.387);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABAiIAAgIIARAAIAAggQAAgJgEgEQgEgFgHAAQgFAAgEAEQgDAEgBAIIgFAqIgLAAIAGgqQAAgEACgEQACgFADgCIABgBIgGACIgHACIgDgIIAPgEIAOgBQANAAAIAHQAHAIAAANIAAAng");
	this.shape_1.setTransform(59.8,54.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAtIAAgwIAAgHIACgGIAJAAIgBAFIAAAIIAAAwgAgCANQAEAAAEgCQAEgDADgEQADgEgBgFIAAgfIgoAAIAAgIIAzAAIAAAnQAAAHgDAHQgEAFgHAEQgGAEgIgBg");
	this.shape_2.setTransform(52.6,55.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_3.setTransform(47,54.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIA1AAIAABBgAgPAZIAfAAIAAgxIgfAAg");
	this.shape_4.setTransform(41.9,54.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJArIAXg5IgnAAIAAgcIALAAIAAAUIAoAAIAAAHIgZA6g");
	this.shape_5.setTransform(32.4,53.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASAhIgdgoQgGAEAAAIIAAAcIgKAAIAAgYQAAgJADgEQADgGAGgCIgOgUIAMAAIATAcIAQgcIAMAAIgVAkIAVAdg");
	this.shape_6.setTransform(25.8,54.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAhIAAgpQAAgIgFgEQgDgEgIAAIgOAAIgBA5IgKAAIAAhBIAZAAQAMAAAHAGQAGAGABANIAAAog");
	this.shape_7.setTransform(18.5,54.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAfQgGgEgEgHQgDgHAAgJIAAgGIABgJIADgHIAFgFIABgBIgMADIgCgIIAPgDIAOgBQAKgBAGAEQAHAEAEAGQADAIAAAJIAAAHQAAAJgDAHQgEAHgGAEQgHAEgIgBQgIABgGgEgAgHgWQgEADgCAFQgBAFgBAGIAAAHQAAAHACAEQACAFAEADQAEADAFAAQAFAAAEgDQAEgDADgFQABgEABgHIAAgHQgBgHgBgEQgDgFgEgDQgEgCgGAAQgEAAgEACg");
	this.shape_8.setTransform(11.1,54.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_9.setTransform(5.6,54.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAtIAAhRIgHAAIAAgIIARAAIAABZg");
	this.shape_10.setTransform(2.2,55.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5B5B5").s().p("AmZGaQiqipAAjxQAAjvCqiqQCpiqDwAAQDwAACqCqQCqCqAADvQAADxiqCpQiqCqjwAAQjwAAipiqg");
	this.shape_11.setTransform(32.2,22.5,0.387,0.387);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5B5B5").s().p("AABAiIAAgIIARAAIAAggQAAgJgEgEQgEgFgHAAQgFAAgEAEQgDAEgBAIIgFAqIgLAAIAGgqQAAgEACgEQACgFADgCIABgBIgGACIgHACIgDgIIAPgEIAOgBQANAAAIAHQAHAIAAANIAAAng");
	this.shape_12.setTransform(59.8,54.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B5B5").s().p("AgXAtIAAgwIAAgHIACgGIAJAAIgBAFIAAAIIAAAwgAgCANQAEAAAEgCQAEgDADgEQADgEgBgFIAAgfIgoAAIAAgIIAzAAIAAAnQAAAHgDAHQgEAFgHAEQgGAEgIgBg");
	this.shape_13.setTransform(52.6,55.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B5B5").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_14.setTransform(47,54.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5B5B5").s().p("AgaAhIAAhBIA1AAIAABBgAgPAZIAfAAIAAgxIgfAAg");
	this.shape_15.setTransform(41.9,54.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B5B5B5").s().p("AgJArIAXg5IgnAAIAAgcIALAAIAAAUIAoAAIAAAHIgZA6g");
	this.shape_16.setTransform(32.4,53.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5B5B5").s().p("AASAhIgdgoQgGAEAAAIIAAAcIgKAAIAAgYQAAgJADgEQADgGAGgCIgOgUIAMAAIATAcIAQgcIAMAAIgVAkIAVAdg");
	this.shape_17.setTransform(25.8,54.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B5B5B5").s().p("AAQAhIAAgpQAAgIgFgEQgDgEgIAAIgOAAIgBA5IgKAAIAAhBIAZAAQAMAAAHAGQAGAGABANIAAAog");
	this.shape_18.setTransform(18.5,54.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5B5B5").s().p("AgMAfQgGgEgEgHQgDgHAAgJIAAgGIABgJIADgHIAFgFIABgBIgMADIgCgIIAPgDIAOgBQAKgBAGAEQAHAEAEAGQADAIAAAJIAAAHQAAAJgDAHQgEAHgGAEQgHAEgIgBQgIABgGgEgAgHgWQgEADgCAFQgBAFgBAGIAAAHQAAAHACAEQACAFAEADQAEADAFAAQAFAAAEgDQAEgDADgFQABgEABgHIAAgHQgBgHgBgEQgDgFgEgDQgEgCgGAAQgEAAgEACg");
	this.shape_19.setTransform(11.1,54.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5B5B5").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_20.setTransform(5.6,54.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B5B5B5").s().p("AgBAtIAAhRIgHAAIAAgIIARAAIAABZg");
	this.shape_21.setTransform(2.2,55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.4,63.5);


(lib.seats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.alpha = 1;
	}
	this.frame_1 = function() {
		this.stop();
		this.alpha = 0.5;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Image_1_1();
	this.instance.parent = this;
	this.instance.setTransform(14.7,3.9,0.75,0.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36D1DC","#39CBDD","#41BADF","#4F9FE2","#5B86E5"],[0,0.204,0.471,0.78,1],-58,0,58.1,0).s().p("AmaGaQipipgBjxQABjvCpiqQCriqDvAAQDwAACrCqQCpCqAADvQAADxipCpQirCqjwAAQjvAAiriqg");
	this.shape.setTransform(33.4,22.4,0.387,0.387);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgHAAIgZAAIAAgIIAZAAQAMAAAHAGQAGAGABANIAAAogAgZAhIAAgXIABgIIADgFIAIAAIgBAFIgBAIIAAAXg");
	this.shape_1.setTransform(62.6,51.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAMAhIAAgtQAAgGgDgDQgDgDgGAAIgWAAIAAgIIAWAAQAHAAAFACQAFADACAEQADAFAAAGIAAAtg");
	this.shape_2.setTransform(56.1,51.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAhIAAgIIAjAAIAAghQAAgIgEgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAHAGQAGAGAAANIAAAfIAJABIAAAIg");
	this.shape_3.setTransform(50.5,51.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgIAAIgXAAIAAgIIAYAAQAMAAAHAGQAGAGAAANIAAAogAgYAhIAAgXIABgIIACgFIAIAAIgBAFIAAAIIAAAXg");
	this.shape_4.setTransform(44,51.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAiIAAgJIARAAIAAgfQAAgJgEgFQgEgEgHAAQgFAAgEAEQgDAFgBAGIgFArIgLAAIAGgqQAAgEACgEQACgEADgCIABgBIgGABIgHACIgDgIIAPgDIAOgCQANAAAIAHQAHAHAAAOIAAAng");
	this.shape_5.setTransform(34,51.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_6.setTransform(28.4,51.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAgQgJgCgIgEIAAg7IAKAAIAAA1IAMAFIALABQAHAAAHgCQAGgDAEgFQADgFAAgGIAAgmIALAAIAAAnQAAAIgFAHQgGAGgIAEQgJADgJAAQgJAAgIgCgAgJAOQACgCABgEIABgIIAAghIAKAAIAAAfQAAAFgCAEQgBAEgCAEg");
	this.shape_7.setTransform(22.4,51.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAhIAAgIIAjAAIAAghQgBgIgDgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAGAGQAHAGAAANIAAAfIAJABIAAAIg");
	this.shape_8.setTransform(14.7,51.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AABATIAAgcIgMAAIAAgIIAXAAIAAAkg");
	this.shape_9.setTransform(9.6,49.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAhIAAhBIA1AAIAABBgAgPAZIAfAAIAAgxIgfAAg");
	this.shape_10.setTransform(4.4,51.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5B5B5").s().p("AmaGaQipipgBjxQABjvCpiqQCriqDvAAQDwAACrCqQCpCqAADvQAADxipCpQirCqjwAAQjvAAiriqg");
	this.shape_11.setTransform(33.4,22.4,0.387,0.387);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5B5B5").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgHAAIgZAAIAAgIIAZAAQAMAAAHAGQAGAGABANIAAAogAgZAhIAAgXIABgIIADgFIAIAAIgBAFIgBAIIAAAXg");
	this.shape_12.setTransform(62.6,51.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B5B5").s().p("AAMAhIAAgtQAAgGgDgDQgDgDgGAAIgWAAIAAgIIAWAAQAHAAAFACQAFADACAEQADAFAAAGIAAAtg");
	this.shape_13.setTransform(56.1,51.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B5B5").s().p("AgaAhIAAgIIAjAAIAAghQAAgIgEgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAHAGQAGAGAAANIAAAfIAJABIAAAIg");
	this.shape_14.setTransform(50.5,51.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5B5B5").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgIAAIgXAAIAAgIIAYAAQAMAAAHAGQAGAGAAANIAAAogAgYAhIAAgXIABgIIACgFIAIAAIgBAFIAAAIIAAAXg");
	this.shape_15.setTransform(44,51.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B5B5B5").s().p("AABAiIAAgJIARAAIAAgfQAAgJgEgFQgEgEgHAAQgFAAgEAEQgDAFgBAGIgFArIgLAAIAGgqQAAgEACgEQACgEADgCIABgBIgGABIgHACIgDgIIAPgDIAOgCQANAAAIAHQAHAHAAAOIAAAng");
	this.shape_16.setTransform(34,51.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5B5B5").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_17.setTransform(28.4,51.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B5B5B5").s().p("AgSAgQgJgCgIgEIAAg7IAKAAIAAA1IAMAFIALABQAHAAAHgCQAGgDAEgFQADgFAAgGIAAgmIALAAIAAAnQAAAIgFAHQgGAGgIAEQgJADgJAAQgJAAgIgCgAgJAOQACgCABgEIABgIIAAghIAKAAIAAAfQAAAFgCAEQgBAEgCAEg");
	this.shape_18.setTransform(22.4,51.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5B5B5").s().p("AgaAhIAAgIIAjAAIAAghQgBgIgDgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAGAGQAHAGAAANIAAAfIAJABIAAAIg");
	this.shape_19.setTransform(14.7,51.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5B5B5").s().p("AABATIAAgcIgMAAIAAgIIAXAAIAAAkg");
	this.shape_20.setTransform(9.6,49.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B5B5B5").s().p("AgaAhIAAhBIA1AAIAABBgAgPAZIAfAAIAAgxIgfAAg");
	this.shape_21.setTransform(4.4,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.9,60.3);


(lib.safety = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.alpha = 1;
	}
	this.frame_1 = function() {
		this.stop();
		this.alpha = 0.5;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Image_3();
	this.instance.parent = this;
	this.instance.setTransform(17.4,5,0.661,0.661);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36D1DC","#39CBDD","#41BADF","#4F9FE2","#5B86E5"],[0,0.204,0.471,0.78,1],-21.4,0,21.5,0).s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g+BYgBQBZABA/A+QA/A/AABYQAABZg/A/Qg/A+hZABQhYgBg/g+g");
	this.shape.setTransform(33.3,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAhIAAgIIAjAAIAAghQAAgIgEgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAGAGQAHAGAAANIAAAfIAJABIAAAIg");
	this.shape_1.setTransform(62.8,52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAfQgGgDgDgGQgDgGgBgIIAAgoIALAAIAAAoQAAAGACAEQACAEADACQAEACAEAAQAEAAAEgCQAEgCACgEQACgEAAgGIAAgVQAAgFgCgDQgDgDgFAAQgDAAgEACIgBgHIAFgDIAHgBQAFAAADACQAFADABAEQACAEAAAGIAAAWQABAIgEAGQgDAGgGADQgGADgIAAQgHAAgGgDg");
	this.shape_2.setTransform(56.2,52.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABATIAAgdIgMAAIAAgIIAXAAIAAAlg");
	this.shape_3.setTransform(50.4,50.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAhIAAgpQAAgIgDgEQgEgEgIAAIgOAAIAAA5IgKAAIAAhBIAYAAQANAAAGAGQAHAGgBANIAAAog");
	this.shape_4.setTransform(45.6,52.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_5.setTransform(40,52.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAhIAAgIIAEAAQAFAAACgCQADgEAAgEIAAgVIABgKQABgFADgEIgNAAIAAgIIAeAAQAOABAGAFQAHAHAAANIAAAoIgLAAIAAgpQAAgJgEgDQgDgFgJAAIgIAAIgDAIIgBAKIAAAWQAAAJgFAFQgEAEgIABIgHgBg");
	this.shape_6.setTransform(34.5,52.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAiIAAgKIAEAAQAIgBAFgEQAEgFABgHIAAggIgOAAIAAgIIAZAAIAAAhIABALIAFAWIgKAAIgEgSIgBAAQAAAEgDAFIgHAHQgFACgGABIgDAAg");
	this.shape_7.setTransform(26,52.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAhIAAgIIAjAAIAAghQAAgIgEgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAGAGQAHAGAAANIAAAfIAJABIAAAIg");
	this.shape_8.setTransform(20.9,52.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_9.setTransform(15.9,52.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgHAAIgYAAIAAgIIAYAAQAMAAAHAGQAHAGAAANIAAAogAgYAhIAAgXIABgIIABgFIAJAAIgBAFIgBAIIAAAXg");
	this.shape_10.setTransform(11,52.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgIAAIgXAAIAAgIIAYAAQAMAAAHAGQAHAGgBANIAAAogAgYAhIAAgXIABgIIABgFIAJAAIgBAFIAAAIIAAAXg");
	this.shape_11.setTransform(4.2,52.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5B5B5").s().p("AmHGIQijiiAAjmQAAjlCjijQCiiiDlAAQDmAACiCiQCjCjAADlQAADmijCiQiiCjjmAAQjlAAiiijg");
	this.shape_12.setTransform(33.3,21.4,0.387,0.387);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B5B5").s().p("AgaAhIAAgIIAjAAIAAghQAAgIgEgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAGAGQAHAGAAANIAAAfIAJABIAAAIg");
	this.shape_13.setTransform(62.8,52.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B5B5").s().p("AgNAfQgGgDgDgGQgDgGgBgIIAAgoIALAAIAAAoQAAAGACAEQACAEADACQAEACAEAAQAEAAAEgCQAEgCACgEQACgEAAgGIAAgVQAAgFgCgDQgDgDgFAAQgDAAgEACIgBgHIAFgDIAHgBQAFAAADACQAFADABAEQACAEAAAGIAAAWQABAIgEAGQgDAGgGADQgGADgIAAQgHAAgGgDg");
	this.shape_14.setTransform(56.2,52.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5B5B5").s().p("AABATIAAgdIgMAAIAAgIIAXAAIAAAlg");
	this.shape_15.setTransform(50.4,50.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B5B5B5").s().p("AAPAhIAAgpQAAgIgDgEQgEgEgIAAIgOAAIAAA5IgKAAIAAhBIAYAAQANAAAGAGQAHAGgBANIAAAog");
	this.shape_16.setTransform(45.6,52.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5B5B5").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_17.setTransform(40,52.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B5B5B5").s().p("AgfAhIAAgIIAEAAQAFAAACgCQADgEAAgEIAAgVIABgKQABgFADgEIgNAAIAAgIIAeAAQAOABAGAFQAHAHAAANIAAAoIgLAAIAAgpQAAgJgEgDQgDgFgJAAIgIAAIgDAIIgBAKIAAAWQAAAJgFAFQgEAEgIABIgHgBg");
	this.shape_18.setTransform(34.5,52.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5B5B5").s().p("AgTAiIAAgKIAEAAQAIgBAFgEQAEgFABgHIAAggIgOAAIAAgIIAZAAIAAAhIABALIAFAWIgKAAIgEgSIgBAAQAAAEgDAFIgHAHQgFACgGABIgDAAg");
	this.shape_19.setTransform(26,52.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5B5B5").s().p("AgaAhIAAgIIAjAAIAAghQAAgIgEgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAGAGQAHAGAAANIAAAfIAJABIAAAIg");
	this.shape_20.setTransform(20.9,52.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B5B5B5").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_21.setTransform(15.9,52.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5B5B5").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgHAAIgYAAIAAgIIAYAAQAMAAAHAGQAHAGAAANIAAAogAgYAhIAAgXIABgIIABgFIAJAAIgBAFIgBAIIAAAXg");
	this.shape_22.setTransform(11,52.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5B5B5").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgIAAIgXAAIAAgIIAYAAQAMAAAHAGQAHAGgBANIAAAogAgYAhIAAgXIABgIIABgFIAJAAIgBAFIAAAIIAAAXg");
	this.shape_23.setTransform(4.2,52.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.6,61.4);


(lib.red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOgiQAHAHAJARQAPAagCATg");
	this.shape.setTransform(68.3,24.8,0.467,0.465);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAjQgPAAgKgMQgJgLAAgOIAAgCQAAgNAJgIQAKgJAPAAIAKAAIAdBFg");
	this.shape_1.setTransform(67.3,24.8,0.467,0.465);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AACAlIAAgPIANAAIAAgbQAAgIgDgDQgDgEgFAAQgJAAgCAPIgEAqIgTAAIAEgnQABgFACgFQABgEADgDIABAAIAAgBIgGACIgFACIgEgPQAHgCAJgCQAJgBAIAAQARAAAJAIQAIAJAAAQIAAAog");
	this.shape_2.setTransform(39.6,49.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAVIAAgZIgLAAIAAgQIAdAAIAAApg");
	this.shape_3.setTransform(33.1,47.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAlIgIgCIAAgPIAJACQAFAAACgDQACgCAAgFIAAggIgNAAIAAgQIAfAAIAAAyQAAAHgCAFQgDAFgFADQgFADgGAAIgHAAg");
	this.shape_4.setTransform(28.4,49.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDAVIAAgZIgMAAIAAgQIAfAAIAAApg");
	this.shape_5.setTransform(23.7,47.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3D3D3").s().p("AgoAgIgEgHQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIBQg1QABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIAEAGQABABAAABQAAABAAAAQAAABgBAAQAAABgBAAIhQA0IgCABIgCgBg");
	this.shape_6.setTransform(19.4,12.4,0.467,0.465);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3D3D3").s().p("Ag+AyIgEgFQgBgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIB8haQABgBABAAQAAAAABAAQAAAAABABQAAAAABAAIAEAGQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABIh8BaIgBABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBg");
	this.shape_7.setTransform(18.1,10.4,0.467,0.465);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiAPQgEAAgDgDQgDgEAAgEIAAgIQAAgEADgDQADgDAEAAIBEAAQAFAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgFAAg");
	this.shape_8.setTransform(39.2,21.5,0.467,0.465);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAPQgEAAgEgDQgDgEAAgEIAAgIQAAgEADgDQAEgDAEAAIBEAAQAEAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgEAAg");
	this.shape_9.setTransform(13.1,21,0.467,0.465);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("ACHAAQAAA3gnAnQgoAng4AAQg3AAgognQgngnAAg3QAAg2AngnQAognA3AAQA4AAAoAnQAnAnAAA2g");
	this.shape_10.setTransform(52.6,34.9,0.467,0.465);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A5A5A5").s().p("AhfBeQgngnAAg3QAAg2AngnQAognA3AAQA4AAAoAnQAnAnAAA2QAAA3gnAnQgoAng4AAQg3AAgogng");
	this.shape_11.setTransform(52.6,34.9,0.467,0.465);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiFCEQg4g3AAhNQAAhNA4g3QA3g2BOAAQBPAAA4A2QA3A3AABNQAABNg3A3Qg4A3hPAAQhNAAg4g3gAhdhgQgnAnAAA3QAAA2AnAnQAoAnA3AAQA4AAAognQAngnAAg2QAAg3gngnQgogng4AAQg3AAgoAng");
	this.shape_12.setTransform(52.5,35.1,0.467,0.465);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3).p("ACHAAQAAA3gnAnQgoAng4AAQg3AAgognQgngnAAg3QAAg2AngoQAognA3AAQA4AAAoAnQAnAoAAA2g");
	this.shape_13.setTransform(15.6,35.7,0.467,0.465);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A5A5A5").s().p("AhfBeQgngnAAg3QAAg2AngoQAognA3ABQA4gBAoAnQAnAoAAA2QAAA3gnAnQgoAog4AAQg3AAgogog");
	this.shape_14.setTransform(15.6,35.7,0.467,0.465);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AiFCFQg4g3AAhOQAAhMA4g3QA3g3BOAAQBOAAA4A3QA4A2AABNQAABOg4A3Qg3A2hPAAQhOAAg3g2gAhdhgQgnAnAAA3QAAA2AnAoQAoAnA3AAQA4AAAognQAngoAAg2QAAg3gngnQgogng4AAQg3AAgoAng");
	this.shape_15.setTransform(15.5,35.9,0.467,0.465);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiXCWQg/g+AAhYQAAhXA/g+QA/g+BYAAQBZAAA/A+QA/A+AABXQAABYg/A+Qg/A+hZAAQhYAAg/g+gAhphtQgtAsAAA/QAAA9AtAtQAtAsA+AAQBAAAAtgsQAtgtAAg9QAAg/gtgsQgtgshAAAQg+AAgtAsg");
	this.shape_16.setTransform(15.5,35.9,0.467,0.465);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiXCWQhAg+ABhYQgBhXBAg+QA/g+BYAAQBZAAA/A+QBAA+AABXQAABYhAA+Qg/A+hZAAQhYAAg/g+gAhphtQgtAtAAA+QAAA+AtAsQAtAsA+AAQBAAAAsgsQAtgsAAg+QAAg+gtgtQgsgshAAAQg+AAgtAsg");
	this.shape_17.setTransform(52.7,35.4,0.467,0.465);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AiFCFQg4g3AAhOQAAhMA4g3QA3g4BOAAQBPAAA3A4QA4A3AABMQAABOg4A3Qg3A2hPAAQhOAAg3g2gAhdhgQgnAnAAA3QAAA3AnAmQAoAnA3ABQA4gBAognQAngmAAg3QAAg3gngnQgogng4AAQg3AAgoAng");
	this.shape_18.setTransform(15.5,34.7,0.467,0.465);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#666666").p("ADOh3IAADlQAAAUgMAPQgNARgUAAIk6AAQgYAAgQgSQgQgSAFgUQAWhjBghIQBehICKgXQAZgEASAMQARAMAAAVg");
	this.shape_19.setTransform(19.3,11.6,0.467,0.465);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A5A5A5").s().p("AiZCiQgYAAgQgSQgQgSAFgUQAWhjBghIQBehICKgXQAZgEASAMQARAMAAAWIAADjQAAAVgMAPQgNARgUAAg");
	this.shape_20.setTransform(19.3,11.6,0.467,0.465);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#666666").p("AClCkIkqAAQgaAAgdgRQgegSAAgTIAAjiQAAgWAegPQAdgOAdAGQCFAeBfBHQBgBHAXBcQAGAXgPATQgPATgcAAg");
	this.shape_21.setTransform(42.4,11.5,0.467,0.465);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A5A5A5").s().p("AiFCkQgaAAgdgRQgegSAAgTIAAjiQAAgWAegPQAdgOAdAGQCFAeBfBHQBgBHAXBcQAGAXgPATQgPATgcAAg");
	this.shape_22.setTransform(42.4,11.5,0.467,0.465);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AA153F").s().p("ACwGOQi/AAiygBIgaABIgjgCIgSgBIkLgDIgSgBQgVgDgQgEIgDAAIgagIQg3gSggglQghgnAAg1QAAg0AdgtQAdgsAxgaQgBgOAAgQQAAixCth+QCth/D1AAQDBAACnCAQCVBzA3CYQA+AIA5AfQAZAOAPAMQATAQANAUIgLAAQgPAAgKAJQgJAIAAAOIAAABQAAAPAJALQAKAMAPAAIAoAAQAGAOAAAwQgFA6gnAoQgkAlg9ATIghAHIhVAIg");
	this.shape_23.setTransform(34.2,18.6,0.46,0.465);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B5B5B5").s().p("AgOgiQAHAHAJARQAPAagCATg");
	this.shape_24.setTransform(68.4,25.4,0.464,0.473);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B5B5B5").s().p("AgCAjQgPAAgKgMQgJgLAAgOIAAgCQAAgNAJgIQAKgJAPAAIAKAAIAdBFg");
	this.shape_25.setTransform(67.3,25.4,0.464,0.473);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B5B5B5").s().p("AACAmIAAgPIANAAIAAgdQAAgHgDgEQgDgDgFAAQgJAAgBAPIgFArIgTAAIAFgoQAAgFACgEQACgFACgDIABAAIAAgBIgFACIgGABIgEgOQAHgDAJgBIARgCQARAAAJAJQAIAIAAARIAAApg");
	this.shape_26.setTransform(39.7,49.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B5B5B5").s().p("AgDAVIAAgZIgMAAIAAgQIAfAAIAAApg");
	this.shape_27.setTransform(33.3,47.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B5B5B5").s().p("AgKAmIgHgCIAAgPIAJAAQAEABACgDQACgCAAgFIAAghIgNAAIAAgPIAfAAIAAAyQAAAHgCAGQgDAFgFADQgFACgGABIgHAAg");
	this.shape_28.setTransform(28.6,49.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B5B5B5").s().p("AgDAVIAAgZIgLAAIAAgQIAdAAIAAApg");
	this.shape_29.setTransform(24,47.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B5B5B5").s().p("AgiAPQgEAAgDgDQgDgEAAgEIAAgIQAAgEADgDQADgDAEAAIBEAAQAFAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgFAAg");
	this.shape_30.setTransform(39.4,22.1,0.464,0.473);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B5B5B5").s().p("AghAPQgEAAgEgDQgDgEAAgEIAAgIQAAgEADgDQAEgDAEAAIBEAAQAEAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgEAAg");
	this.shape_31.setTransform(13.4,21.6,0.464,0.473);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#5B5B5B").p("AB7AAQAAAygkAkQgkAjgzAAQgyAAgkgjQgkgkAAgyQAAgxAkgkQAkgjAyAAQAzAAAkAjQAkAkAAAxg");
	this.shape_32.setTransform(50.7,35.6,0.464,0.473);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A5A5A5").s().p("AhWBWQgkgkAAgyQAAgxAkgkQAkgjAyAAQAzAAAkAjQAkAkAAAxQAAAygkAkQgkAjgzAAQgyAAgkgjg");
	this.shape_33.setTransform(50.7,35.6,0.464,0.473);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5B5B5B").s().p("Ah5B4QgzgxAAhHQAAhFAzgyQAygyBHAAQBHAAAzAyQAyAyABBFQgBBHgyAxQgzAyhHAAQhHAAgygygAhUhXQgkAjAAAzQAAAxAkAjQAkAkAyAAQAzAAAkgkQAkgjAAgxQAAgzgkgjQgkgkgzAAQgyAAgkAkg");
	this.shape_34.setTransform(50.6,35.7,0.464,0.473);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AiJCIQg5g4AAhQQAAhPA5g4QA5g5BQAAQBRAAA6A5QA4A4AABPQAABQg4A4Qg6A5hRAAQhQAAg5g5gAhfhjQgpAoAAA5QAAA4ApApQAoAoA5AAQA6AAApgoQAogpAAg4QAAg5gogoQgpgog6AAQg5AAgoAog");
	this.shape_35.setTransform(50.6,35.7,0.464,0.473);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#5B5B5B").p("AB5AAQAAAygkAjQgjAjgyAAQgxAAgkgjQgjgjAAgyQAAgwAjgjQAkgjAxAAQAyAAAjAjQAkAjAAAwg");
	this.shape_36.setTransform(15.8,36,0.464,0.473);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A5A5A5").s().p("AhVBVQgjgjAAgyQAAgxAjgjQAkgiAxgBQAyABAjAiQAkAjAAAxQAAAygkAjQgjAigyABQgxgBgkgig");
	this.shape_37.setTransform(15.8,36,0.464,0.473);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5B5B5B").s().p("Ah3B2QgygwAAhGQAAhEAygyQAxgxBGABQBGgBAzAxQAxAyAABEQAABGgxAwQgzAyhGAAQhGAAgxgygAhThWQgjAjAAAxQAAAxAjAjQAkAjAxAAQAyAAAjgjQAkgjAAgxQAAgxgkgjQgjgjgyAAQgxAAgkAjg");
	this.shape_38.setTransform(15.7,36.1,0.464,0.473);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiHCGQg5g3AAhPQAAhOA5g4QA4g3BPAAQBQAAA4A3QA5A4AABOQAABPg5A3Qg4A4hQAAQhPAAg4g4gAhehiQgoAoAAA4QAAA3AoAoQAoAnA4AAQA5AAAognQAogoAAg3QAAg4gogoQgogng5AAQg4AAgoAng");
	this.shape_39.setTransform(15.8,36.1,0.464,0.473);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#B3B3B3").ss(2).p("ADRhzIAADkQAAATgPAOQgOAOgWAAIk5AAQgYAAgQgQQgQgRAEgUQAWhjBhhHQBghICKgXQAZgEATANQATAMAAAWg");
	this.shape_40.setTransform(19.7,11.9,0.464,0.473);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A5A5A5").s().p("AibCgQgYAAgQgQQgQgRAEgUQAWhjBhhHQBghICKgXQAZgEATANQATAMAAAWIAADkQAAATgPAOQgOAOgWAAg");
	this.shape_41.setTransform(19.7,11.9,0.464,0.473);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#B3B3B3").ss(2).p("ACiChIkqAAQgbAAgZgOQgcgQAAgSIAAjiQAAgXAdgPQAcgOAdAGQCFAeBdBGQBgBHAXBbQAGAXgPARQgQASgcAAg");
	this.shape_42.setTransform(42.7,11.8,0.464,0.473);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A5A5A5").s().p("AiIChQgbAAgZgOQgcgQAAgSIAAjiQAAgXAdgPQAcgOAdAGQCFAeBdBGQBgBHAXBbQAGAXgPARQgQASgcAAg");
	this.shape_43.setTransform(42.7,11.8,0.464,0.473);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B5B5B5").s().p("ACwGOQi/AAiygBIgaABIgjgCIgSgBIkLgDIgSgBQgVgDgQgEIgDAAIgagIQg3gSggglQghgnAAg1QAAg0AdgtQAdgsAxgaQgBgOAAgQQAAixCth+QCth/D1AAQDBAACnCAQCVBzA3CYQA+AIA5AfQAZAOAPAMQATAQANAUIgLAAQgPAAgKAJQgJAIAAAOIAAABQAAAPAJALQAKAMAPAAIAoAAQAGAOAAAwQgFA6gnAoQgkAlg9ATIghAHIhVAIg");
	this.shape_44.setTransform(34.8,19.1,0.464,0.473);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69,59);


(lib.purple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5B5B5B").ss(5).p("ACBAAQAAA1gmAlQgmAmg1AAQg1AAgmgmQgmglAAg1QAAg0AmglQAmglA1AAQA1AAAmAlQAmAlAAA0g");
	this.shape.setTransform(22.8,34.2,0.462,0.461);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A5A5A5").s().p("AhaBaQgmglAAg1QAAg0AmglQAmglA0AAQA1AAAmAlQAmAlAAA0QAAA1gmAlQgmAlg1AAQg0AAgmglg");
	this.shape_1.setTransform(22.8,34.2,0.462,0.461);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5B5B5B").p("AAAjWQhZAAhAA/QhAA/AABYQAABaBAA+QBAA/BZAAQBbAAA/g/QBAg/AAhZQAAhYhAg/Qg/g/hbAAgAADCWQhAAAgtgtQgugsAAg/QAAg/AugtQAtgtBAAAQBAAAAuAtQAtAtAAA/QAAA/gtAsQguAthAAAg");
	this.shape_2.setTransform(22.7,34.4,0.462,0.461);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5B5B5B").s().p("AiZCYQhAg+AAhaQAAhYBAg/QBAg/BZAAQBbAAA/A/QBAA/AABYQAABZhAA/Qg/A/hbAAQhZAAhAg/gAhqhuQguAtAAA/QAAA/AuAsQAtAtBAAAQBAAAAugtQAtgsAAg/QAAg/gtgtQgugthAAAQhAAAgtAtg");
	this.shape_3.setTransform(22.7,34.4,0.462,0.461);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AinCmQhGhFAAhhQAAhhBGhEQBFhFBiAAQBjAABGBFQBFBEAABhQAABhhFBFQhGBFhjAAQhiAAhFhFgAh0h5QgyAxAABFQAABFAyAxQAyAwBFAAQBGAAAygwQAxgxAAhFQAAhFgxgxQgygwhGAAQhFAAgyAwg");
	this.shape_4.setTransform(22.7,34.1,0.462,0.461);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5B5B5").s().p("AgHA3QgXAAgRgQQgRgRABgWQAAgXARgQQASgPAXAAIBBAAIAFBtg");
	this.shape_5.setTransform(90,20.2,0.462,0.461);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B5B5B5").s().p("AgXAjQgLgCgJgFIAAhAIASAAIAAA1QAFADAGABIALABQAMAAAJgGQAHgFAAgLIAAgkIATAAIAAAmQAAALgHAJQgGAHgKAEQgKAEgMAAQgLAAgLgCgAgMAMIADgHIAAgIIAAghIASAAIAAAdQAAAGgBAFQgCAFgDADg");
	this.shape_6.setTransform(53.9,49.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5B5B5").s().p("AgQAhQgHgEgEgHQgEgHABgJIAAgpIATAAIAAArQAAAEABAEQACADACABQADACADAAQAEAAADgCQACgBABgDQACgEAAgEIAAgTQAAgFgCgCQgCgCgEAAIgFAAIgCgMIAHgDIAHgBQAGAAAFADQAEACADAGQADAFAAAHIAAATQAAAJgFAHQgDAHgIAEQgHAEgJAAQgIAAgIgEg");
	this.shape_7.setTransform(44.7,49.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5B5B5").s().p("AALAkIAAguQAAgKgKAAIgLAAIAAA4IgTAAIAAhHIAeAAQAPAAAHAGQAHAIAAANIAAAsg");
	this.shape_8.setTransform(36.7,49.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B3B3B3").ss(2).p("AEkBYIjzjVQgIgHgOAAIj2AAQghAAgYAXQgYAYAAAiIAABnQAAAiAYAXQAYAYAhAAIHoAAQAVAAAIgRQAIgQgOgMg");
	this.shape_9.setTransform(56,9.1,0.462,0.461);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A5A5A5").s().p("AjbCFQghAAgYgYQgYgXAAgiIAAhnQAAgiAYgXQAYgYAhAAID2AAQAOAAAIAHIDzDVQAOAMgIAQQgIARgVAAg");
	this.shape_10.setTransform(56,9.1,0.462,0.461);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B3B3B3").ss(2).p("AEGgjQAAgogcgdQgdgcgoAAIlBAAQgKAAgJAFQgIAFgDAIIhKDVQgFANAKALQAJAKAQAAIGLAAQAoAAAdgcQAcgdAAgog");
	this.shape_11.setTransform(25.2,9.1,0.462,0.461);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A5A5A5").s().p("AjmCFQgQAAgJgKQgKgLAFgNIBKjVQADgIAIgFQAJgFAKAAIFBAAQAoAAAdAdQAcAcAAAoIAABGQAAApgcAdQgdAcgoAAg");
	this.shape_12.setTransform(25.2,9.1,0.462,0.461);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#5B5B5B").ss(5).p("ACBAAQAAA1glAlQgnAmg1AAQg0AAgngmQglglAAg1QAAg0AlglQAnglA0AAQA1AAAnAlQAlAlAAA0g");
	this.shape_13.setTransform(68.6,35.1,0.462,0.461);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A5A5A5").s().p("AhaBaQgmglAAg1QAAg0AmglQAmgmA0AAQA1AAAmAmQAmAlAAA0QAAA1gmAlQgmAmg1gBQg0ABgmgmg");
	this.shape_14.setTransform(68.6,35.1,0.462,0.461);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#5B5B5B").p("AAAjWQhZAAhAA/QhAA/AABYQAABaBAA+QBAA/BZAAQBbAAA/g/QBAg/AAhZQAAhYhAg/Qg/g/hbAAgAADCWQhAAAgtgtQgugsAAg/QAAg/AugtQAtgtBAAAQBAAAAuAtQAtAtAAA/QAAA/gtAsQguAthAAAg");
	this.shape_15.setTransform(68.5,35.3,0.462,0.461);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5B5B5B").s().p("AiZCYQhAg+AAhaQAAhYBAg/QBAg/BZAAQBbAAA/A/QBAA/AABYQAABZhAA/Qg/A/hbAAQhZAAhAg/gAhqhuQguAtAAA/QAAA/AuAsQAtAtBAAAQBAAAAugtQAtgsAAg/QAAg/gtgtQgugthAAAQhAAAgtAtg");
	this.shape_16.setTransform(68.5,35.3,0.462,0.461);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AinCmQhGhFAAhhQAAhhBGhEQBFhFBiAAQBjAABGBFQBFBEAABhQAABhhFBFQhGBFhjAAQhiAAhFhFgAh0h4QgyAwAABGQAABEAyAxQAyAwBFAAQBGAAAygwQAxgxAAhEQAAhGgxgwQgygyhGAAQhFAAgyAyg");
	this.shape_17.setTransform(68.5,35,0.462,0.461);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5B5B5B").p("AAADsQghAAgYgYQgYgYAAgiIAAkzQAAgiAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAiIAAEzQAAAigYAYQgYAYgiAAg");
	this.shape_18.setTransform(3.8,20.1,0.462,0.461);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5B5B5B").s().p("Ag5DUQgYgYAAgiIAAkzQAAgiAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAiIAAEzQAAAigYAYQgYAYgiAAQghAAgYgYg");
	this.shape_19.setTransform(3.8,20.1,0.462,0.461);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").p("AAsgEIhXB1IAAjrIBUAGg");
	this.shape_20.setTransform(8.7,23.1,0.462,0.461);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("Agrh1IBUAGIADBvIhXB2g");
	this.shape_21.setTransform(8.7,22.8,0.462,0.461);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5B5B5").s().p("AghAPQgEAAgDgDQgEgEAAgEIAAgIQAAgEAEgDQADgDAEAAIBDAAQAFAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgFAAg");
	this.shape_22.setTransform(16.1,19.8,0.462,0.461);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B5B5B5").s().p("AghAPQgFAAgDgDQgDgEAAgEIAAgIQAAgEADgDQADgDAFAAIBEAAQAEAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgEAAg");
	this.shape_23.setTransform(47.1,19.8,0.462,0.461);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B5B5B5").s().p("As8F2QgpgIgdgfQgegggFgqIgBgRIAAjjQAAgKACgIQABgMAGgMIAAAAQgGgOADgKIBYkpQAEgMAKgIQAKgJAMAAIQxAAQANAAAPAPID4D+IAAABID5AAQAyAAAnAeQAmAeAKAyIgBgBIhDAAQgXAAgRAQQgSAPAAAXQAAAYARAQQAQAQAXAAIBJAAIABAFIAAB3QAAA5gpAoQgpAng6AAI49AAIgDACIgXgCgAOjAFIAAAAIAAAAg");
	this.shape_24.setTransform(49.8,17.5,0.462,0.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA3QgXAAgRgQQgRgRABgWQAAgXARgQQASgPAXAAIBBAAIAFBtg");
	this.shape_25.setTransform(90.2,20.6,0.462,0.461);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAjQgKgDgKgFIAAg/IASAAIAAA1QAFADAGAAIAMACQALAAAJgFQAHgGAAgLIAAgkIATAAIAAAmQAAAMgHAHQgFAIgLAFQgKADgMAAQgLAAgLgCgAgLALIACgGIAAgIIAAghIASAAIAAAdQAAAGgBAEQgCAGgDACg");
	this.shape_26.setTransform(54,49.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPAhQgIgEgEgHQgEgHAAgJIAAgpIAUAAIAAArQAAAEACAEQABADACABQADACADAAQAEAAADgCQACgBABgDQACgEAAgEIAAgTQAAgFgCgCQgCgCgEAAIgFAAIgCgMIAGgDIAIgBQAGAAAFADQAEACADAGQACAFAAAHIAAATQAAAJgDAHQgEAHgHAEQgIAEgJAAQgIAAgHgEg");
	this.shape_27.setTransform(44.9,49.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AALAkIAAgtQAAgLgKAAIgLAAIAAA4IgTAAIAAhHIAeAAQAPAAAHAHQAHAGAAAOIAAAsg");
	this.shape_28.setTransform(36.9,49.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D3D3D3").s().p("AguAjIgBgBQgEgFAGgDIBTg+QAFgDAEAFIABABQAEAFgGADIhTA9IgEACQgDAAgCgDg");
	this.shape_29.setTransform(22,7.8,0.462,0.461);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D3D3D3").s().p("AhAAwIAAgBQgEgEAFgEIB3hXQAFgEAEAFIAAABQAEAFgFADIh3BYIgEABQgCAAgDgDg");
	this.shape_30.setTransform(20.7,6.9,0.462,0.461);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#666666").ss(2).p("AEkBYIjzjVQgIgHgOAAIj2AAQghAAgYAXQgYAYAAAiIAABnQAAAiAYAXQAYAYAhAAIHoAAQAVAAAIgRQAIgQgOgMg");
	this.shape_31.setTransform(56.2,9.5,0.462,0.461);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A5A5A5").s().p("AjbCFQghAAgYgYQgYgXAAgiIAAhnQAAgiAYgXQAYgYAhAAID2AAQAOAAAIAHIDzDVQAOAMgIAQQgIARgVAAg");
	this.shape_32.setTransform(56.2,9.5,0.462,0.461);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#666666").ss(2).p("AEGgjQAAgogcgdQgdgcgoAAIlBAAQgKAAgJAFQgIAFgDAIIhKDVQgFANAKALQAJAKAQAAIGLAAQAoAAAdgcQAcgdAAgog");
	this.shape_33.setTransform(25.4,9.5,0.462,0.461);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A5A5A5").s().p("AjmCFQgQAAgJgKQgKgLAFgNIBKjVQADgIAIgFQAJgFAKAAIFBAAQAoAAAdAdQAcAcAAAoIAABGQAAApgcAdQgdAcgoAAg");
	this.shape_34.setTransform(25.4,9.5,0.462,0.461);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(5).p("ACCAAQAAA1gnAlQglAmg2AAQg1AAglgmQgmglAAg1QAAg0AmglQAlgmA1AAQA2AAAlAmQAnAlAAA0g");
	this.shape_35.setTransform(23,35.1,0.462,0.461);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A5A5A5").s().p("AhaBaQgmglAAg1QAAg0AmglQAmglA0AAQA1AAAmAlQAmAlAAA0QAAA1gmAlQgmAmg1AAQg0AAgmgmg");
	this.shape_36.setTransform(23,35.1,0.462,0.461);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(2).p("AADCWQhAAAgtgtQgugtAAg+QAAhAAugsQAtgtBAAAQBAAAAuAtQAtAsAABAQAAA+gtAtQguAthAAAgAAAjWQhZAAhAA/QhAA/AABYQAABZBAA/QBAA/BZAAQBbAAA/g/QBAg/AAhZQAAhYhAg/Qg/g/hbAAg");
	this.shape_37.setTransform(22.9,35.3,0.462,0.461);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AiZCYQhAg/AAhZQAAhYBAg/QBAg/BZAAQBbAAA/A/QBAA/AABYQAABZhAA/Qg/A/hbAAQhZAAhAg/gAhqhuQguAsAABAQAAA+AuAtQAtAtBAAAQBAAAAugtQAtgtAAg+QAAhAgtgsQgugthAAAQhAAAgtAtg");
	this.shape_38.setTransform(22.9,35.3,0.462,0.461);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5).p("ACBAAQAAA1glAlQgnAmg1AAQg0AAgngmQglglAAg1QAAg0AlglQAnglA0AAQA1AAAnAlQAlAlAAA0g");
	this.shape_39.setTransform(68.8,35.5,0.462,0.461);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A5A5A5").s().p("AhaBaQgmglAAg1QAAg0AmglQAmgmA0AAQA1AAAmAmQAmAlAAA0QAAA1gmAlQgmAmg1gBQg0ABgmgmg");
	this.shape_40.setTransform(68.8,35.5,0.462,0.461);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2).p("AAAjWQhZAAhAA/QhAA/AABYQAABaBAA+QBAA/BZAAQBbAAA/g/QBAg/AAhZQAAhYhAg/Qg/g/hbAAgAADCWQhAAAgtgtQgugsAAg/QAAg/AugtQAtgtBAAAQBAAAAuAtQAtAtAAA/QAAA/gtAsQguAthAAAg");
	this.shape_41.setTransform(68.6,35.7,0.462,0.461);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AiZCYQhAg+AAhaQAAhYBAg/QBAg/BZAAQBbAAA/A/QBAA/AABYQAABZhAA/Qg/A/hbAAQhZAAhAg/gAhqhuQguAtAAA/QAAA/AuAsQAtAtBAAAQBAAAAugtQAtgsAAg/QAAg/gtgtQgugthAAAQhAAAgtAtg");
	this.shape_42.setTransform(68.6,35.7,0.462,0.461);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#666666").p("AAADsQghAAgYgYQgYgYAAgiIAAkzQAAgiAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAiIAAEzQAAAigYAYQgYAYgiAAg");
	this.shape_43.setTransform(4,20.5,0.462,0.461);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag5DUQgYgYAAgiIAAkzQAAgiAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAiIAAEzQAAAigYAYQgYAYgiAAQghAAgYgYg");
	this.shape_44.setTransform(4,20.5,0.462,0.461);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFFFFF").p("AAsgEIhXB1IAAjrIBUAGg");
	this.shape_45.setTransform(8.9,23.5,0.462,0.461);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("Agrh1IBUAGIADBvIhXB2g");
	this.shape_46.setTransform(8.9,23.2,0.462,0.461);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AghAPQgEAAgDgDQgEgEAAgEIAAgIQAAgEAEgDQADgDAEAAIBDAAQAFAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgFAAg");
	this.shape_47.setTransform(16.3,20.2,0.462,0.461);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AghAPQgFAAgDgDQgDgEAAgEIAAgIQAAgEADgDQADgDAFAAIBEAAQAEAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgEAAg");
	this.shape_48.setTransform(47.3,20.2,0.462,0.461);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AinCmQhHhFABhhQgBhgBHhFQBGhFBhAAQBiAABGBFQBGBFABBgQgBBhhGBFQhGBFhiAAQhhAAhGhFgAh1h5QgxAxAABGQAABEAxAxQAyAxBGAAQBGAAAygxQAxgxABhEQgBhGgxgxQgygxhGAAQhGAAgyAxg");
	this.shape_49.setTransform(22.8,35.2,0.462,0.461);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AinCmQhGhFAAhhQAAhhBGhEQBFhFBiAAQBjAABGBFQBFBEAABhQAABhhFBFQhGBFhjAAQhiAAhFhFgAh0h4QgyAwAABGQAABEAyAxQAyAwBFAAQBGAAAygwQAxgxAAhEQAAhGgxgwQgygyhGAAQhFAAgyAyg");
	this.shape_50.setTransform(68.6,35.4,0.462,0.461);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#697CA3").s().p("As8F2QgpgIgdgfQgegggFgqIgBgRIAAjjQAAgKACgIQABgMAGgMIAAAAQgGgOADgKIBYkpQAEgMAKgIQAKgJAMAAIQxAAQANAAAPAPID4D+IAAABID5AAQAyAAAnAeQAmAeAKAyIgBgBIhDAAQgXAAgRAQQgSAPAAAXQAAAYARAQQAQAQAXAAIBJAAIABAFIAAB3QAAA5gpAoQgpAng6AAI49AAIgDACIgXgCgAOjAFIAAAAIAAAAg");
	this.shape_51.setTransform(50,17.9,0.462,0.461);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,0.6,94,59);


(lib.passenger1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_1_2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.passenger1, new cjs.Rectangle(0,0,26.7,26.7), null);


(lib.parking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.alpha = 1;
	}
	this.frame_1 = function() {
		this.stop();
		this.alpha = 0.5;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Parking
	this.instance = new lib.Image_4();
	this.instance.parent = this;
	this.instance.setTransform(5.2,4.8,0.621,0.621);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36D1DC","#39CBDD","#41BADF","#4F9FE2","#5B86E5"],[0,0.204,0.471,0.78,1],-21.1,0,21.1,0).s().p("AiUCVQg+g+AAhXQAAhWA+g+QA9g+BXAAQBXAAA+A+QA+A9AABXQAABXg+A+Qg+A+hXAAQhXAAg9g+g");
	this.shape.setTransform(21.1,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAhIAAgpQAAgIgFgEQgDgEgIAAIgOAAIgBA5IgKAAIAAhBIAZAAQAMAAAHAGQAGAGABANIAAAog");
	this.shape_1.setTransform(28.4,51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAhIAAgJIAIABQAFAAABgDQACgCAAgGIAAgnIgMAAIAAgIIAXAAIAAAwQAAAJgFAFQgEAFgIAAIgKgBg");
	this.shape_2.setTransform(22.4,51.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABATIAAgdIgLAAIAAgIIAVAAIAAAlg");
	this.shape_3.setTransform(18.6,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgHAAIgYAAIAAgIIAYAAQAMAAAHAGQAHAGAAANIAAAogAgYAhIAAgXIABgIIABgFIAJAAIgBAFIgBAIIAAAXg");
	this.shape_4.setTransform(13.7,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5B5B5").s().p("AiUCVQg+g+AAhXQAAhWA+g+QA9g+BXAAQBXAAA+A+QA+A9AABXQAABXg+A+Qg+A+hXAAQhXAAg9g+g");
	this.shape_5.setTransform(21.1,21.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#93A49C").s().p("AAQAhIAAgpQAAgIgFgEQgDgEgIAAIgOAAIgBA5IgKAAIAAhBIAZAAQAMAAAHAGQAGAGABANIAAAog");
	this.shape_6.setTransform(28.4,51.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#93A49C").s().p("AgNAhIAAgJIAIABQAFAAABgDQACgCAAgGIAAgnIgMAAIAAgIIAXAAIAAAwQAAAJgFAFQgEAFgIAAIgKgBg");
	this.shape_7.setTransform(22.4,51.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#93A49C").s().p("AABATIAAgdIgLAAIAAgIIAVAAIAAAlg");
	this.shape_8.setTransform(18.6,50.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#93A49C").s().p("AAPAhIAAgpQAAgIgEgEQgEgEgHAAIgYAAIAAgIIAYAAQAMAAAHAGQAHAGAAANIAAAogAgYAhIAAgXIABgIIABgFIAJAAIgBAFIgBAIIAAAXg");
	this.shape_9.setTransform(13.7,51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.3,60.9);


(lib.MiniVan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAyQgWAAgPgOQgPgPAAgVQAAgUAPgOQAPgPAWAAIAwAAIACAAQARAnADATIAFAjQgLAGgQAAg");
	this.shape.setTransform(99.6,23.1,0.472,0.472);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AACAmIAAgPIANAAIAAgdQAAgGgDgFQgDgDgFAAQgJgBgCARIgEAqIgUAAIAFgoQAAgFACgEQACgFADgDIABAAIgGAAIgGACIgEgOQAHgCAKgCQAJgCAIAAQARAAAJAJQAJAJAAARIAAAog");
	this.shape_1.setTransform(66.9,47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAVIAAgaIgMAAIAAgPIAfAAIAAApg");
	this.shape_2.setTransform(60.3,45.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAlIgIgBIAAgPIAJAAQAFAAACgCQACgCAAgFIAAghIgNAAIAAgPIAgAAIAAAyQAAAHgDAGQgDAFgFADQgFACgGAAIgHAAg");
	this.shape_3.setTransform(55.5,47.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDAVIAAgaIgMAAIAAgPIAfAAIAAApg");
	this.shape_4.setTransform(50.8,45.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAlIAAg5IgGAAIAAgQIAZAAIAABJg");
	this.shape_5.setTransform(43.5,47.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOAlIgagmQgBACgBADIAAAhIgTAAIAAgYQAAgLADgEQADgHAHgDIgQgYIAWAAIAQAZIAMgZIAXAAIgWAqIAVAfg");
	this.shape_6.setTransform(37.6,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGAyIAAhTIgGAAIAAgQIAZAAIAABjg");
	this.shape_7.setTransform(30.9,48.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3D3D3").s().p("Ag+AzIgEgGQAAgBgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBIB8haQABgBABAAQAAAAABAAQAAAAABABQAAAAABABIAEAGQABAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIh8BaIgCABIgCgBg");
	this.shape_8.setTransform(20.9,8.2,0.472,0.472);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3D3D3").s().p("AguAjIgBgBQgDgFAEgEIBUg8QAFgEAEAFIAAABQAEAFgFAEIhTA8IgFACQgCAAgCgDg");
	this.shape_9.setTransform(22.9,8.9,0.472,0.472);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgiAPQgEAAgDgDQgDgDAAgEIAAgJQAAgEADgDQADgDAEAAIBFAAQAEAAADADQADADAAAEIAAAJQAAAEgDADQgDADgEAAg");
	this.shape_10.setTransform(15.7,21.5,0.472,0.472);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAPQgEAAgDgDQgDgDAAgEIAAgJQAAgEADgDQADgDAEAAIBEAAQAFAAADADQADADAAAEIAAAJQAAAEgDADQgDADgFAAg");
	this.shape_11.setTransform(55.8,21.5,0.472,0.472);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3).p("ACIAAQAAA4goAnQgoAng4AAQg4AAgngnQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3g");
	this.shape_12.setTransform(86.5,35.2,0.472,0.472);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A5A5A5").s().p("AhfBfQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3QAAA4goAnQgoAng4AAQg4AAgngng");
	this.shape_13.setTransform(86.5,35.2,0.472,0.472);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiHCGQg4g4AAhOQAAhNA4g3QA5g4BOAAQBPAAA5A4QA4A3AABNQAABOg4A4Qg5A3hPAAQhOAAg5g3gAhdhgQgoAnAAA3QAAA3AoAnQAnAoA4AAQA4AAAogoQAognABg3QgBg3gognQgogog4AAQg4AAgnAog");
	this.shape_14.setTransform(86.4,35.3,0.472,0.472);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiTCSQg9g9AAhVQAAhUA9g8QA9g9BWAAQBWAAA+A9QA9A8AABUQAABVg9A9Qg+A8hWAAQhVAAg+g8gAhmhpQgrAqAAA9QAAA7ArAsQAsArA8AAQA+AAAsgrQArgsAAg7QAAg9grgqQgsgrg+gBQg8ABgsArg");
	this.shape_15.setTransform(86.5,35.3,0.472,0.472);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3).p("ACJAAQAAA4gpAnQgoAng4AAQg3AAgognQgpgnAAg4QAAg3ApgnQAognA3AAQA4AAAoAnQApAnAAA3g");
	this.shape_16.setTransform(16.6,35.2,0.472,0.472);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A5A5A5").s().p("AhgBfQgognABg4QgBg3AognQAognA4AAQA5AAAoAnQAoAngBA3QABA4goAnQgoAng5AAQg4AAgogng");
	this.shape_17.setTransform(16.6,35.2,0.472,0.472);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AiGCGQg4g4AAhOQAAhNA4g3QA3g4BPAAQBPAAA5A4QA3A3AABNQAABOg3A4Qg5A3hPAAQhPAAg3g3gAhehgQgoAnABA3QgBA3AoAnQAoAoA4AAQA5AAAogoQAogngBg3QABg3gognQgogog5AAQg4AAgoAog");
	this.shape_18.setTransform(16.5,35.3,0.472,0.472);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiTCSQg9g9AAhVQAAhUA9g8QA+g9BVAAQBWAAA+A9QA9A8AABUQAABVg9A9Qg+A8hWAAQhVAAg+g8gAhlhpQgtAqABA9QgBA7AtAsQArArA8AAQA+AAArgrQAsgsAAg7QAAg9gsgqQgrgrg+gBQg8ABgrArg");
	this.shape_19.setTransform(16.6,35.3,0.472,0.472);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#666666").ss(2).p("AFbh6QAAgPgKgLQgJgKgOAAImdAAQgzAAgpAWQgoAVgUAnIhaC1QgKASAKASQAJASATAAIJzAAQAOAAAJgKQAKgLAAgPg");
	this.shape_20.setTransform(29.1,11.2,0.472,0.472);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A5A5A5").s().p("Ak5CfQgTAAgJgSQgKgSAKgSIBai1QAUgnAogVQApgWAzAAIGdAAQAOAAAJAKQAKALAAAPIAAD1QAAAPgKALQgJAKgOAAg");
	this.shape_21.setTransform(29.1,11.2,0.472,0.472);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#666666").ss(2).p("AlpCfILSAAQAbAAAJgcQAJgcgWgSQgzgrg6gjIgmgVQhmhAhwgpQhsgnhCAAIjSAAQgPAAgLAMQgLAMAAARIAADrQAAARALAMQALAMAPAAg");
	this.shape_22.setTransform(71.7,11.2,0.472,0.472);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A5A5A5").s().p("AlpCfQgPAAgLgMQgLgMAAgRIAAjrQAAgRALgMQALgMAPAAIDSAAQBCAABsAnQBwApBmBAIAmAVQA6AjAzArQAWASgJAcQgJAcgbAAg");
	this.shape_23.setTransform(71.7,11.2,0.472,0.472);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0FA588").s().p("AvqGVQgtAAgcgvQgbguAHhBIARiYQACgOAHgaIAIgYIC2lUQAZgtAsgZQAsgZA2AAIQHAAQBGAAB4AuQB9AvB2BLIAsAZQDGB+AmBQQADAEAQAkIgyAAQgWAAgPAPQgPAOAAAVQAAAVAPAPQAPAOAWAAIAxAAQAQAAALgGIASB3QAKBAgaAuQgaAvgtAAg");
	this.shape_24.setTransform(51.8,19.1,0.472,0.472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MiniVan, new cjs.Rectangle(0,-0.8,103.6,57.9), null);


(lib._long = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.alpha = 1;
	}
	this.frame_1 = function() {
		this.stop();
		this.alpha = 0.5;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(17.5,2.2,0.715,0.715);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36D1DC","#39CBDD","#41BADF","#4F9FE2","#5B86E5"],[0,0.204,0.471,0.78,1],-58,0,58.1,0).s().p("AmZGaQiqipAAjxQAAjvCqiqQCqiqDvAAQDwAACqCqQCqCqAADvQAADxiqCpQiqCqjwAAQjvAAiqiqg");
	this.shape.setTransform(35.2,22.5,0.387,0.387);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAhIAAgJIAIABQAFAAABgDQACgCAAgGIAAgnIgMAAIAAgIIAXAAIAAAwQAAAJgFAFQgEAFgIAAIgKgBg");
	this.shape_1.setTransform(67.1,52.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMAfQgGgEgEgHQgDgHAAgJIAAgGQgBgEACgFIADgHIAFgFIABgBIgMADIgCgIIAPgDIAOgBQAKAAAGADQAHAEAEAGQADAIAAAJIAAAHQAAAJgDAHQgEAHgGAEQgHAEgIgBQgIABgGgEgAgHgWQgEADgCAFQgBAFgBAHIAAAGQAAAHACAEQACAFAEADQAEADAFAAQAFAAAEgDQAEgDADgFQACgEAAgHIAAgHQAAgGgCgFQgDgFgEgDQgEgCgGAAQgEAAgEACg");
	this.shape_2.setTransform(61.5,52.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AABASIAAgcIgLAAIAAgIIAVAAIAAAkg");
	this.shape_3.setTransform(55.9,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAdIADgHQAKADAHAAQgEgEgBgHIgLgvIAKAAIALAwIABAGIACAEQAGgCAEgEQAEgFAAgIIAAgnIALAAIAAAnQAAAJgEAGQgEAHgGADQgHADgIAAQgLAAgNgFg");
	this.shape_4.setTransform(50.7,52.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_5.setTransform(45.8,52.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAhIAAgIIAEAAQAFAAACgDQADgDAAgEIAAgVIABgKQABgFADgEIgNAAIAAgIIAeAAQAOAAAGAHQAHAGAAANIAAAoIgLAAIAAgpQAAgIgEgEQgDgFgJAAIgIAAIgDAIIgBAKIAAAWQAAAJgFAFQgEAFgIAAIgHgBg");
	this.shape_6.setTransform(40.3,52.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASAhIgdgoQgGAEAAAIIAAAcIgKAAIAAgYQAAgJADgEQADgGAGgCIgOgUIAMAAIATAcIAQgcIAMAAIgVAkIAVAdg");
	this.shape_7.setTransform(30.6,52.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMAhIAAgtQAAgGgEgDQgDgDgFAAIgVAAIAAgIIAVAAQAHAAAFACQAFADACAEQAEAFAAAGIAAAtg");
	this.shape_8.setTransform(23.7,52.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_9.setTransform(19.1,52.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXAfIACgIQAJACAHAAQAIAAAFgEQAFgFAAgJIAAggIghAAIAAgIIAsAAIAAAmQAAAOgIAIQgHAHgNAAQgIAAgLgDg");
	this.shape_10.setTransform(14.2,52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_11.setTransform(9.5,52.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAhIAAgIIAEAAQAFAAACgDQADgDAAgEIAAgVIABgKQABgFADgEIgNAAIAAgIIAeAAQAOAAAGAHQAHAGAAANIAAAoIgLAAIAAgpQAAgIgEgEQgDgFgJAAIgIAAIgDAIIgBAKIAAAWQAAAJgFAFQgEAFgIAAIgHgBg");
	this.shape_12.setTransform(4,52.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AieCfQhBhCAAhdQAAhcBBhCQBChCBcAAQBdAABCBCQBBBCAABcQAABdhBBCQhCBBhdABQhcgBhChBg");
	this.shape_13.setTransform(36.4,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape_13},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.4,61.6);


(lib.gas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.alpha = 1;
	}
	this.frame_1 = function() {
		this.stop();
		this.alpha = 0.5;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(15.9,5.4,0.514,0.514);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36D1DC","#39CBDD","#41BADF","#4F9FE2","#5B86E5"],[0,0.204,0.471,0.78,1],-58,0,58.1,0).s().p("AmZGaQiqipAAjxQAAjvCqiqQCpiqDwAAQDwAACrCqQCpCqABDvQgBDxipCpQirCqjwAAQjwAAipiqg");
	this.shape.setTransform(32,22.4,0.387,0.387);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAhIAAgpQAAgIgEgEQgDgEgIAAIgOAAIgBA5IgJAAIAAhBIAYAAQANAAAGAGQAHAGAAANIAAAog");
	this.shape_1.setTransform(56.5,51.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABATIAAgdIgLAAIAAgIIAVAAIAAAlg");
	this.shape_2.setTransform(50.8,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAfQgGgEgEgHQgDgHAAgJIAAgGIABgJIADgHIAFgFIABgBIgMADIgCgIIAPgDIAOgBQAJgBAHAEQAHAEAEAGQADAIAAAJIAAAHQAAAJgDAHQgEAHgHAEQgGADgIAAQgHAAgHgDgAgGgWQgFADgCAFQgCAFAAAGIAAAHQAAAGACAFQACAFAFADQAEADAEAAQAFAAAEgDQAEgDADgFQACgFAAgGIAAgHQAAgHgCgEQgDgFgEgDQgEgDgGABQgEgBgDADg");
	this.shape_3.setTransform(45.6,51.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAfIACgIQAJACAHAAQAIAAAFgEQAFgFAAgJIAAggIghAAIAAgIIAsAAIAAAmQAAAOgIAIQgHAHgNAAQgIAAgLgDg");
	this.shape_4.setTransform(38.5,51.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_5.setTransform(33.8,51.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAtIAAhRIgIAAIAAgIIARAAIAABZg");
	this.shape_6.setTransform(30.4,52.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAhIAAgIIAjAAIAAghQAAgIgEgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAGAGQAHAGAAANIAAAfIAJABIAAAIg");
	this.shape_7.setTransform(23.1,51.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAFAhIAAg5IgfAAIAAgIIA1AAIAAAIIgMAAIAAA5g");
	this.shape_8.setTransform(16.9,51.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKArIAYg5IgnAAIAAgcIALAAIAAAUIAoAAIAAAHIgZA6g");
	this.shape_9.setTransform(11,50.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAtIAAgvIABgIIACgHIAJAAIgBAGIgBAIIAAAwgAgDANQAFAAAFgDQAEgCACgEQADgEAAgFIAAgfIgpAAIAAgIIAzAAIAAAnQAAAHgEAHQgEAFgGAEQgHAEgIgBg");
	this.shape_10.setTransform(4.4,52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5B5B5").s().p("AmZGaQiqipAAjxQAAjvCqiqQCpiqDwAAQDwAACrCqQCpCqABDvQgBDxipCpQirCqjwAAQjwAAipiqg");
	this.shape_11.setTransform(32,22.4,0.387,0.387);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5B5B5").s().p("AAPAhIAAgpQAAgIgEgEQgDgEgIAAIgOAAIgBA5IgJAAIAAhBIAYAAQANAAAGAGQAHAGAAANIAAAog");
	this.shape_12.setTransform(56.5,51.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B5B5").s().p("AABATIAAgdIgLAAIAAgIIAVAAIAAAlg");
	this.shape_13.setTransform(50.8,50);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B5B5").s().p("AgMAfQgGgEgEgHQgDgHAAgJIAAgGIABgJIADgHIAFgFIABgBIgMADIgCgIIAPgDIAOgBQAJgBAHAEQAHAEAEAGQADAIAAAJIAAAHQAAAJgDAHQgEAHgHAEQgGADgIAAQgHAAgHgDgAgGgWQgFADgCAFQgCAFAAAGIAAAHQAAAGACAFQACAFAFADQAEADAEAAQAFAAAEgDQAEgDADgFQACgFAAgGIAAgHQAAgHgCgEQgDgFgEgDQgEgDgGABQgEgBgDADg");
	this.shape_14.setTransform(45.6,51.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5B5B5").s().p("AgXAfIACgIQAJACAHAAQAIAAAFgEQAFgFAAgJIAAggIghAAIAAgIIAsAAIAAAmQAAAOgIAIQgHAHgNAAQgIAAgLgDg");
	this.shape_15.setTransform(38.5,51.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B5B5B5").s().p("AAAAhIAAg5IgIAAIAAgIIARAAIAABBg");
	this.shape_16.setTransform(33.8,51.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B5B5B5").s().p("AAAAtIAAhRIgIAAIAAgIIARAAIAABZg");
	this.shape_17.setTransform(30.4,52.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B5B5B5").s().p("AgaAhIAAgIIAjAAIAAghQAAgIgEgEQgEgEgIAAIgQAAIAAgIIARAAQAMAAAGAGQAHAGAAANIAAAfIAJABIAAAIg");
	this.shape_18.setTransform(23.1,51.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5B5B5").s().p("AAFAhIAAg5IgfAAIAAgIIA1AAIAAAIIgMAAIAAA5g");
	this.shape_19.setTransform(16.9,51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5B5B5").s().p("AgKArIAYg5IgnAAIAAgcIALAAIAAAUIAoAAIAAAHIgZA6g");
	this.shape_20.setTransform(11,50.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B5B5B5").s().p("AgYAtIAAgvIABgIIACgHIAJAAIgBAGIgBAIIAAAwgAgDANQAFAAAFgDQAEgCACgEQADgEAAgFIAAgfIgpAAIAAgIIAzAAIAAAnQAAAHgEAHQgEAFgGAEQgHAEgIgBg");
	this.shape_21.setTransform(4.4,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.8,60.5);


(lib.FamilyCarr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFBQIAAghIAaAAIAAg8QAAgPgGgIQgGgJgLAAQgUAAgDAiIgJBbIgqAAIAKhWQABgKAEgKQAEgJAFgGIACgBIAAgBIgMADIgMAEIgJgfQAPgGAVgDQAUgDARAAQAkAAATASQATASAAAkIAABXg");
	this.shape.setTransform(129.1,89.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyBLQgYgFgUgKIAAiMIAoAAIAAB1QALAFAOADQAMADALAAQAbAAARgMQAQgMAAgYIAAhQIApAAIAABUQABAZgOARQgNARgXAJQgXAJgbAAQgWAAgYgGgAgZAZIAEgOIABgTIAAhIIAoAAIAAA/QgBAOgDAKQgCAMgGAGg");
	this.shape_1.setTransform(108.8,89.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgjBNQgQgCgNgFIAHgfQANADANACQANACAJABQASAAAJgJQAKgIAAgQIAAg8IgtAAIgEAOQgBAHAAAHIAAAIIAOABIAAAbQgJACgIAAQgLAAgJgDQgKgDgIgEIAAgNQAAgNADgLQACgMAFgHIgQAAIAAghICLAAIAABXQAAAZgKAQQgKAQgSAHQgQAIgWAAQgNAAgQgDg");
	this.shape_2.setTransform(88.1,89.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYBOIgBhkQAAgWgUAAIgZAAIAAB6IgrAAIABibIBDAAQAfAAAQAPQAQAPAAAdIAABgg");
	this.shape_3.setTransform(71.1,89.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhMBNIAAggIAIAAQATAAAAgTIAAgkQAAgJACgKQACgKAEgGIgYAAIAAgiIBQAAQAeABAQAPQAQAOAAAeIAABgIgqAAIAAhkQAAgWgUAAIgTAAIgDAPIgBAPIAAAsQAAAQgGALQgFALgLAGQgLAGgPABQgJAAgLgDg");
	this.shape_4.setTransform(53,89.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAtIAAg4IgYAAIAAghIBBAAIAABZg");
	this.shape_5.setTransform(39.8,85.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("ACJAAQAAA4goAnQgoAng5AAQg3AAgognQgpgnAAg4QAAg3ApgnQAognA3AAQA5AAAoAnQAoAnAAA3g");
	this.shape_6.setTransform(36.1,58.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A5A5A5").s().p("AhgBfQgognABg4QgBg3AognQAognA4AAQA5AAAoAnQAoAngBA3QABA4goAnQgoAng5AAQg4AAgogng");
	this.shape_7.setTransform(36.1,58.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiGCGQg4g4AAhOQAAhNA4g3QA3g4BPAAQBPAAA5A4QA3A3AABNQAABOg3A4Qg5A3hPAAQhPAAg3g3gAhehgQgoAnABA3QgBA3AoAnQAoAoA4AAQA5AAAogoQAogngBg3QABg3gognQgogog5AAQg4AAgoAog");
	this.shape_8.setTransform(35.9,59);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiTCSQg9g9AAhVQAAhUA9g9QA+g8BVAAQBWAAA+A8QA9A9AABUQAABVg9A9Qg+A8hWAAQhVAAg+g8gAhmhpQgrAqAAA9QAAA8ArArQAsArA8AAQA+AAArgrQAsgsAAg7QAAg9gsgqQgrgrg+gBQg8ABgsArg");
	this.shape_9.setTransform(36.1,59.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("ACIAAQAAA4goAnQgoAng4AAQg4AAgngnQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3g");
	this.shape_10.setTransform(143.8,58.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A5A5A5").s().p("AhfBfQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3QAAA4goAnQgoAng4AAQg4AAgngng");
	this.shape_11.setTransform(143.8,58.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiHCGQg4g4AAhOQAAhNA4g3QA5g4BOAAQBPAAA5A4QA4A3AABNQAABOg4A4Qg5A3hPAAQhOAAg5g3gAhdhgQgoAnAAA3QAAA3AoAnQAnAoA4AAQA4AAAogoQAognABg3QgBg3gognQgogog4AAQg4AAgnAog");
	this.shape_12.setTransform(143.6,59);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiTCSQg9g9AAhVQAAhUA9g9QA+g8BVAAQBXAAA9A8QA9A9AABUQAABVg9A9Qg9A8hXAAQhVAAg+g8gAhmhpQgrAqAAA9QAAA7ArAsQAsArA9AAQA9AAAsgrQArgsABg7QgBg9grgqQgsgrg9gBQg9ABgsArg");
	this.shape_13.setTransform(143.8,59.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3D3D3").s().p("AgxAlQgCgCAAgDQABgDACgCIBZhBQACgBADAAQADABABACQACACAAADQgBADgCABIhZBBIgEACQgDAAgCgDg");
	this.shape_14.setTransform(49.7,13.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3D3D3").s().p("Ag8AyQgDAAgBgDQgEgFAGgEIB1hWQAGgEAEAFQAEAGgFAEIh2BWQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgCgBg");
	this.shape_15.setTransform(47.1,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpAPQgFAAgEgEQgEgEAAgFIAAgEQAAgEAEgEQADgEAGAAIBUAAQAFAAAEAEQADAEAAAEIAAAEQAAAFgDAEQgFAEgEAAg");
	this.shape_16.setTransform(108.3,29.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpAPQgFAAgEgEQgEgEAAgFIAAgEQAAgEAEgEQADgEAGAAIBUAAQAFAAAEAEQADAEAAAEIAAAEQAAAFgDAEQgFAEgEAAg");
	this.shape_17.setTransform(37.3,29.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#666666").ss(2).p("ADrBfImeAAQgYAAgRgTQgSgSAAgZIAAhBQAAgaASgSQARgSAYAAIClAAQARAACABeQCBBfgZAAg");
	this.shape_18.setTransform(114.9,13.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A5A5A5").s().p("AizBfQgYgBgRgSQgSgRAAgaIAAhBQAAgaASgRQARgSAYgBIClAAQARAACABeQCBBfgZAAg");
	this.shape_19.setTransform(114.9,13.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#666666").ss(2).p("ADwgoIAABRQAAAUgOAPQgOAPgUAAImqAAQgWAABDhGQAigiAmgjQAQgRAWgMQAXgNASAAIDmAAQAUAAAOAPQAOAOAAAVg");
	this.shape_20.setTransform(55.1,13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A5A5A5").s().p("AjqBbQgWgBBDhFQAigiAmgjQAQgRAWgMQAXgNASAAIDmAAQAUAAAOAPQAOAPAAAUIAABRQAAAUgOAPQgOAPgUAAg");
	this.shape_21.setTransform(55.1,13.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAoQgSAAgMgMQgNgLAAgRQAAgRANgLQAMgLASAAIAsAAQABAegCAbIABAWg");
	this.shape_22.setTransform(178.6,34);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3772F7").s().p("AtHE2QgRgBgRgJQghgRgGgmIgCj8IACgFQAOgcAZgTQAcgUAdAAIBxAAIAeghQAXgXAKgNIBWhwQASgXAegNQAbgNAZAAILfAAQAUAACFBVQCNBaA3A3ICqAAQA2gHAfASQAYAOAEAWQACAOAAAJIgtAAQgSAAgMAKQgNALAAASQAAARANALQAMAMASAAIAtAAIgEByQAAAtgdAhQgdAhgtAEImRALg");
	this.shape_23.setTransform(91.5,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.FamilyCarr, new cjs.Rectangle(0,0,183.1,110.4), null);


(lib.Engine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.342,0.342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Engine, new cjs.Rectangle(0,0,32.8,32.8), null);


(lib.close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("Ah5h5IDzDz");
	this.shape.setTransform(14.4,14.4,0.64,0.64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3).p("AB6h5IjzDz");
	this.shape_1.setTransform(14.4,14.6,0.64,0.64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C3B4F").s().p("AieCfQhChCAAhdQAAhcBChCQBChCBcAAQBdAABCBCQBCBCAABcQAABdhCBCQhCBChdAAQhcAAhChCg");
	this.shape_2.setTransform(14.4,14.4,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.close, new cjs.Rectangle(0,0,28.8,28.8), null);


(lib.green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B5B5").s().p("AgLAyQgWAAgPgOQgPgPAAgVQAAgUAPgOQAPgPAWAAIAwAAIACAAQARAnADATIAFAjQgLAGgQAAg");
	this.shape.setTransform(84.5,20.2,0.378,0.378);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B5").s().p("AACAeIAAgMIAKAAIAAgWQAAgGgDgDQgCgDgEAAQgHAAgBAMIgEAiIgQAAIAFggIABgHIAEgGIABgBIgFABIgEACIgEgMIAOgDIANgBQAOAAAHAGQAHAHAAAOIAAAgg");
	this.shape_1.setTransform(58.3,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5B5B5").s().p("AgDARIAAgVIgJAAIAAgMIAYAAIAAAhg");
	this.shape_2.setTransform(53,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5B5B5").s().p("AgIAdIgGgBIAAgLIAHAAQAEAAABgCQACgBAAgFIAAgaIgKAAIAAgMIAZAAIAAAoQAAAGgCAEQgCAEgEACQgFADgEAAIgGgBg");
	this.shape_3.setTransform(49.2,39.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5B5B5").s().p("AgCARIAAgVIgJAAIAAgMIAXAAIAAAhg");
	this.shape_4.setTransform(45.4,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5B5B5").s().p("AgEAeIAAguIgGAAIAAgNIAVAAIAAA7g");
	this.shape_5.setTransform(39.5,39.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B5B5B5").s().p("AALAeIgUgfQgCABAAADIAAAbIgPAAIAAgUQAAgIACgEQADgFAFgDIgNgTIASAAIANAVIAKgVIASAAIgSAhIARAag");
	this.shape_6.setTransform(34.8,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5B5B5").s().p("AgEAoIAAhDIgFAAIAAgMIAUAAIAABPg");
	this.shape_7.setTransform(29.5,40.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B5B5B5").s().p("AgiAPQgEAAgDgDQgDgDAAgEIAAgJQAAgEADgDQADgDAEAAIBFAAQAEAAADADQADADAAAEIAAAJQAAAEgDADQgDADgEAAg");
	this.shape_8.setTransform(17.3,18.9,0.378,0.378);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B5B5B5").s().p("AgiAPQgEAAgDgDQgDgDAAgEIAAgJQAAgEADgDQADgDAEAAIBEAAQAFAAADADQADADAAAEIAAAJQAAAEgDADQgDADgFAAg");
	this.shape_9.setTransform(49.5,18.9,0.378,0.378);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5B5B5B").ss(3).p("ACIAAQAAA4goAnQgoAng4AAQg4AAgngnQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3g");
	this.shape_10.setTransform(74.1,29.9,0.378,0.378);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A5A5A5").s().p("AhfBfQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3QAAA4goAnQgoAng4AAQg4AAgngng");
	this.shape_11.setTransform(74.1,29.9,0.378,0.378);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5B5B5B").s().p("AiHCGQg4g4AAhOQAAhNA4g3QA5g4BOAAQBPAAA5A4QA4A3AABNQAABOg4A4Qg5A3hPAAQhOAAg5g3gAhdhgQgoAnAAA3QAAA3AoAnQAnAoA4AAQA4AAAogoQAognABg3QgBg3gognQgogog4AAQg4AAgnAog");
	this.shape_12.setTransform(74,30,0.378,0.378);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiTCSQg9g9AAhVQAAhUA9g8QA9g9BWAAQBWAAA+A9QA9A8AABUQAABVg9A9Qg+A8hWAAQhVAAg+g8gAhmhpQgrAqAAA9QAAA7ArAsQAsArA8AAQA+AAAsgrQArgsAAg7QAAg9grgqQgsgrg+gBQg8ABgsArg");
	this.shape_13.setTransform(74.1,30,0.378,0.378);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#5B5B5B").ss(3).p("ACJAAQAAA4gpAnQgoAng4AAQg3AAgognQgpgnAAg4QAAg3ApgnQAognA3AAQA4AAAoAnQApAnAAA3g");
	this.shape_14.setTransform(18,29.9,0.378,0.378);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A5A5A5").s().p("AhgBfQgognABg4QgBg3AognQAognA4AAQA5AAAoAnQAoAngBA3QABA4goAnQgoAng5AAQg4AAgogng");
	this.shape_15.setTransform(18,29.9,0.378,0.378);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5B5B5B").s().p("AiGCGQg4g4AAhOQAAhNA4g3QA3g4BPAAQBPAAA5A4QA3A3AABNQAABOg3A4Qg5A3hPAAQhPAAg3g3gAhehgQgoAnABA3QgBA3AoAnQAoAoA4AAQA5AAAogoQAogngBg3QABg3gognQgogog5AAQg4AAgoAog");
	this.shape_16.setTransform(18,30,0.378,0.378);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiTCSQg9g9AAhVQAAhUA9g8QA+g9BVAAQBWAAA+A9QA9A8AABUQAABVg9A9Qg+A8hWAAQhVAAg+g8gAhlhpQgtAqABA9QgBA7AtAsQArArA8AAQA+AAArgrQAsgsAAg7QAAg9gsgqQgrgrg+gBQg8ABgrArg");
	this.shape_17.setTransform(18,30,0.378,0.378);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B3B3B3").ss(2).p("AFbh6QAAgPgKgLQgJgKgOAAImdAAQgzAAgpAWQgoAVgUAnIhaC1QgKASAKASQAJASATAAIJzAAQAOAAAJgKQAKgLAAgPg");
	this.shape_18.setTransform(28.1,10.7,0.378,0.378);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A5A5A5").s().p("Ak5CfQgTAAgJgSQgKgSAKgSIBai1QAUgnAogVQApgWAzAAIGdAAQAOAAAJAKQAKALAAAPIAAD1QAAAPgKALQgJAKgOAAg");
	this.shape_19.setTransform(28.1,10.7,0.378,0.378);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#B3B3B3").ss(2).p("AlpCfILSAAQAbAAAJgcQAJgcgWgSQgzgrg6gjIgmgVQhmhAhwgpQhsgnhCAAIjSAAQgPAAgLAMQgLAMAAARIAADrQAAARALAMQALAMAPAAg");
	this.shape_20.setTransform(62.2,10.7,0.378,0.378);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A5A5A5").s().p("AlpCfQgPAAgLgMQgLgMAAgRIAAjrQAAgRALgMQALgMAPAAIDSAAQBCAABsAnQBwApBmBAIAmAVQA6AjAzArQAWASgJAcQgJAcgbAAg");
	this.shape_21.setTransform(62.2,10.7,0.378,0.378);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5B5B5").s().p("AvqGVQgtAAgcgvQgbguAHhBIARiYQACgOAHgaIAIgYIC2lUQAZgtAsgZQAsgZA2AAIQHAAQBGAAB4AuQB9AvB2BLIAsAZQDGB+AmBQQADAEAQAkIgyAAQgWAAgPAPQgPAOAAAVQAAAVAPAPQAPAOAWAAIAxAAQAQAAALgGIASB3QAKBAgaAuQgaAvgtAAg");
	this.shape_22.setTransform(46.3,17,0.378,0.378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.instance = new lib.MiniVan();
	this.instance.parent = this;
	this.instance.setTransform(46.4,24.1,0.806,0.806,0,0,0,51.9,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.6,0.7,83.4,46.6);


(lib.FamilyCar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.FamilyCarr();
	this.instance.parent = this;
	this.instance.setTransform(91.5,54.9,1,0.997,0,0,0,91.5,55.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.FamilyCar2, new cjs.Rectangle(0,0,183,110), null);


(lib.blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5B5B5").s().p("AACApIAAgRIAOAAIAAgeQAAgIgEgEQgDgEgFAAQgKAAgCARIgEAuIgWAAIAGgrIACgLQADgFACgCIABgBIgGABIgGACIgEgQIASgEIASgCQATAAAJAKQAJAJAAASIAAAsg");
	this.shape.setTransform(65.7,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B5B5").s().p("AgYAnQgMgEgMgEIAAhHIAVAAIAAA7QAGACAHACIALABQAOAAAJgGQAIgGAAgMIAAgoIAVAAIAAAqQgBAMgGAKQgHAIgMAEQgLAFgOAAQgLAAgLgCgAgMANIABgIIABgIIAAglIAUAAIAAAgQAAAHgCAFQgBAFgCAEg");
	this.shape_1.setTransform(55.3,45.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5B5B5").s().p("AgRAnIgPgEIAEgPIANACIALABQAIAAAGgEQAEgEAAgIIAAgeIgWAAIgCAHIgBAIIAAADIAHABIAAANIgIABQgGAAgFgCQgEgBgEgCIgBgGQABgHABgFQACgGACgEIgIAAIAAgRIBGAAIAAAsQgBAMgFAJQgEAIgJAEQgJAEgKAAIgPgCg");
	this.shape_2.setTransform(44.8,45.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5B5B5").s().p("AAMAoIAAgzQAAgLgKAAIgNAAIAAA+IgVAAIAAhPIAiAAQAPAAAIAIQAIAHAAAPIAAAxg");
	this.shape_3.setTransform(36.1,45.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B5B5B5").s().p("AgmAoIAAgRIAEAAQAKAAAAgKIAAgSIABgJQABgFACgEIgMAAIAAgQIAoAAQAPAAAIAHQAIAIAAAPIAAAwIgVAAIAAgyQAAgMgKAAIgJAAIgCAIIAAAIIAAAWQAAAIgDAGQgDAFgGADQgFADgIAAIgKAAg");
	this.shape_4.setTransform(26.9,45.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5B5B5").s().p("AgEAXIAAgcIgMAAIAAgRIAhAAIAAAtg");
	this.shape_5.setTransform(20.2,43.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5B5B5B").p("ACJAAQAAA4goAnQgoAng5AAQg3AAgognQgpgnAAg4QAAg3ApgnQAognA3AAQA5AAAoAnQAoAnAAA3g");
	this.shape_6.setTransform(18.3,29.9,0.508,0.508);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A5A5A5").s().p("AhgBfQgognABg4QgBg3AognQAognA4AAQA5AAAoAnQAoAngBA3QABA4goAnQgoAng5AAQg4AAgogng");
	this.shape_7.setTransform(18.3,29.9,0.508,0.508);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5B5B5B").s().p("AiGCGQg4g4AAhOQAAhNA4g3QA3g4BPAAQBPAAA5A4QA3A3AABNQAABOg3A4Qg5A3hPAAQhPAAg3g3gAhehgQgoAnABA3QgBA3AoAnQAoAoA4AAQA5AAAogoQAogngBg3QABg3gognQgogog5AAQg4AAgoAog");
	this.shape_8.setTransform(18.2,30,0.508,0.508);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiTCSQg9g9AAhVQAAhUA9g9QA+g8BVAAQBWAAA+A8QA9A9AABUQAABVg9A9Qg+A8hWAAQhVAAg+g8gAhmhpQgrAqAAA9QAAA8ArArQAsArA8AAQA+AAArgrQAsgsAAg7QAAg9gsgqQgrgrg+gBQg8ABgsArg");
	this.shape_9.setTransform(18.3,30,0.508,0.508);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#5B5B5B").p("ACIAAQAAA4goAnQgoAng4AAQg4AAgngnQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3g");
	this.shape_10.setTransform(73,29.9,0.508,0.508);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A5A5A5").s().p("AhfBfQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3QAAA4goAnQgoAng4AAQg4AAgngng");
	this.shape_11.setTransform(73,29.9,0.508,0.508);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5B5B5B").s().p("AiHCGQg4g4AAhOQAAhNA4g3QA5g4BOAAQBPAAA5A4QA4A3AABNQAABOg4A4Qg5A3hPAAQhOAAg5g3gAhdhgQgoAnAAA3QAAA3AoAnQAnAoA4AAQA4AAAogoQAognABg3QgBg3gognQgogog4AAQg4AAgnAog");
	this.shape_12.setTransform(72.9,30,0.508,0.508);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiTCSQg9g9AAhVQAAhUA9g9QA+g8BVAAQBXAAA9A8QA9A9AABUQAABVg9A9Qg9A8hXAAQhVAAg+g8gAhmhpQgrAqAAA9QAAA7ArAsQAsArA9AAQA9AAAsgrQArgsABg7QgBg9grgqQgsgrg9gBQg9ABgsArg");
	this.shape_13.setTransform(73,30,0.508,0.508);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B5B5B5").s().p("AgpAPQgFAAgEgEQgEgEAAgFIAAgEQAAgEAEgEQADgEAGAAIBUAAQAFAAAEAEQADAEAAAEIAAAEQAAAFgDAEQgFAEgEAAg");
	this.shape_14.setTransform(55,15,0.508,0.508);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B5B5B5").s().p("AgpAPQgFAAgEgEQgEgEAAgFIAAgEQAAgEAEgEQADgEAGAAIBUAAQAFAAAEAEQADAEAAAEIAAAEQAAAFgDAEQgFAEgEAAg");
	this.shape_15.setTransform(19,15,0.508,0.508);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B3B3B3").ss(2).p("ADrBfImeAAQgYAAgRgTQgSgSAAgZIAAhBQAAgaASgSQARgSAYAAIClAAQARAACABeQCBBfgZAAg");
	this.shape_16.setTransform(58.4,6.6,0.508,0.508);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A5A5A5").s().p("AizBfQgYgBgRgSQgSgRAAgaIAAhBQAAgaASgRQARgSAYgBIClAAQARAACABeQCBBfgZAAg");
	this.shape_17.setTransform(58.4,6.6,0.508,0.508);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B3B3B3").ss(2).p("ADwgoIAABRQAAAUgOAPQgOAPgUAAImqAAQgWAABDhGQAigiAmgjQAQgRAWgMQAXgNASAAIDmAAQAUAAAOAPQAOAOAAAVg");
	this.shape_18.setTransform(28,6.6,0.508,0.508);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A5A5A5").s().p("AjqBbQgWgBBDhFQAigiAmgjQAQgRAWgMQAXgNASAAIDmAAQAUAAAOAPQAOAPAAAUIAABRQAAAUgOAPQgOAPgUAAg");
	this.shape_19.setTransform(28,6.6,0.508,0.508);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5B5B5").s().p("AAAAoQgSAAgMgMQgNgLAAgRQAAgRANgLQAMgLASAAIAsAAQABAegCAbIABAWg");
	this.shape_20.setTransform(90.8,17.3,0.508,0.508);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B5B5B5").s().p("AtHE2QgRgBgRgJQghgRgGgmIgCj8IACgFQAOgcAZgTQAcgUAdAAIBxAAIAeghQAXgXAKgNIBWhwQASgXAegNQAbgNAZAAILfAAQAUAACFBVQCNBaA3A3ICqAAQA2gHAfASQAYAOAEAWQACAOAAAJIgtAAQgSAAgMAKQgNALAAASQAAARANALQAMAMASAAIAtAAIgEByQAAAtgdAhQgdAhgtAEImRALg");
	this.shape_21.setTransform(46.5,15.7,0.508,0.508);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.instance = new lib.FamilyCar2();
	this.instance.parent = this;
	this.instance.setTransform(46.7,28.2,0.508,0.509,0,0,0,91.8,55.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,93,56);


// stage content:
(lib._12_6__Cars_NEW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this;
		stage.enableMouseOver(24);
		
		self.main_txt.text = ":בכדי לגלות איזה סוג רכב מתאים לכם" + "\n" + "עברו על ההעדפות שלכם או" + "\n" + "!לחצו על סוג הרכב שמעניין אתכם בכדי לגלות עוד";
		self.main_txt.font = "40px Heebo";
		
		self.close.visible = false;
		self.engine.visible = false;
		self.passenger1.visible = false;
		self.passenger2.visible = false;
		self.passenger3.visible = false;
		self.passenger4.visible = false;
		self.passenger5.visible = false;
		self.passenger6.visible = false;
		self.passenger7.visible = false;
		
		var x = true;
		
		self.red.addEventListener("click", clickRed);
		self.yellow.addEventListener("click", clickYellow);
		self.green.addEventListener("click", clickGreen);
		self.blue.addEventListener("click", clickblue);
		self.purple.addEventListener("click", clickjeep);
		self.close.addEventListener("click", clickClose);
		
		self.safe.addEventListener("mouseover", safe_MouseOver);
		self.safe.addEventListener("mouseout", safe_MouseOut);
		self.parking.addEventListener("mouseover", parking_MouseOver);
		self.parking.addEventListener("mouseout", parking_MouseOut);
		self.storage.addEventListener("mouseover", storage_MouseOver);
		self.storage.addEventListener("mouseout", storage_MouseOut);
		self.seat.addEventListener("mouseover", seats_MouseOver);
		self.seat.addEventListener("mouseout", seats_MouseOut);
		self.gas.addEventListener("mouseover", gas_MouseOver);
		self.gas.addEventListener("mouseout", gas_MouseOut);
		self.Long.addEventListener("mouseover", long_MouseOver);
		self.Long.addEventListener("mouseout", long_MouseOut);
		
		function clickClose() {
			showAll();
			self.engine_txt.text = "";
			self.passenger_txt.text = "";
		}
		
		function safe_MouseOver() {
			if(x==true){
			self.seat.gotoAndPlay(1);
			self.parking.gotoAndPlay(1);
			self.storage.gotoAndPlay(1);
			self.gas.gotoAndPlay(1);
			self.Long.gotoAndPlay(1);
			self.red.gotoAndPlay(1);
			
		
			self.main_txt.text = ":רכבים בטיחותיים הם" + "\n " + "מיני ואן, מסחרי, משפחתי, שטח" + "\n" + "רוצים לדעת עוד? לחצו על אייקון הרכב שברצונכם לחקור";
			self.main_txt.font = "40px Heebo";
			}
		}
		function safe_MouseOut() {
			if(x==true){
			self.seat.gotoAndStop(0);
			self.parking.gotoAndStop(0);
			self.storage.gotoAndStop(0);
			self.gas.gotoAndStop(0);
			self.Long.gotoAndStop(0);
			self.red.gotoAndStop(0);
			showAll();
			}
			
		}
		function seats_MouseOver() {
			if(x==true){
			self.safe.gotoAndPlay(1);
			self.parking.gotoAndPlay(1);
			self.storage.gotoAndPlay(1);
			self.gas.gotoAndPlay(1);
			self.Long.gotoAndPlay(1);
			self.red.gotoAndPlay(1);
			self.blue.gotoAndPlay(1);
			self.main_txt.text = ":רכבים בעלי הרבה מושבים הם" + "\n" + "מיני ואן, מסחרי, ושטח" + "\n " + "רוצים לדעת עוד? לחצו על אייקון הרכב שברצונכם לחקור";
			self.main_txt.font = "40px Heebo";
			}
		}
		function seats_MouseOut() {
			if(x==true){
			self.safe.gotoAndStop(0);
			self.parking.gotoAndStop(0);
			self.storage.gotoAndStop(0);
			self.gas.gotoAndStop(0);
			self.Long.gotoAndStop(0);
			self.red.gotoAndStop(0);
			self.blue.gotoAndStop(0);
			showAll();
			}
		}
		
		function storage_MouseOver() {
			if(x==true){
			self.safe.gotoAndPlay(1);
			self.parking.gotoAndPlay(1);
			self.seat.gotoAndPlay(1);
			self.Long.gotoAndPlay(1);
			self.gas.gotoAndPlay(1);
			self.red.gotoAndPlay(1);
			
			self.main_txt.text = ":רכבים בעלי מקום אחסון הם" + "\n" + "מיני ואן, מסחרי, משפחתי, שטח" + "\n" + "רוצים לדעת עוד? לחצו על אייקון הרכב שברצונכם לחקור";
			self.main_txt.font = "40px Heebo";
			}
		}
		function storage_MouseOut() {
			if(x==true){
			self.safe.gotoAndStop(0);
			self.parking.gotoAndStop(0);
			self.seat.gotoAndStop(0);
			self.gas.gotoAndStop(0);
			self.Long.gotoAndStop(0);
			self.red.gotoAndStop(0);
			showAll();
			}
		}
		
		function parking_MouseOver() {
			if(x==true){
			self.seat.gotoAndPlay(1);
			self.safe.gotoAndPlay(1);
			self.storage.gotoAndPlay(1);
			self.gas.gotoAndPlay(1);
			self.Long.gotoAndPlay(1);
			self.yellow.gotoAndPlay(1);
			self.green.gotoAndPlay(1);
			self.purple.gotoAndPlay(1);
			self.blue.gotoAndPlay(1);
			self.main_txt.text = ":רכבים בעלי נוחות חניה הם" + "\n" + "מיני" + "\n" + "רוצים לדעת עוד? לחצו על אייקון הרכב שברצונכם לחקור";
			self.main_txt.font = "40px Heebo";
			}
		}
		
		function parking_MouseOut() {
			if(x==true){
			self.seat.gotoAndStop(0);
			self.safe.gotoAndStop(0);
			self.storage.gotoAndStop(0);
			self.Long.gotoAndStop(0);
			self.gas.gotoAndStop(0);
			self.yellow.gotoAndStop(0);
			self.green.gotoAndStop(0);
			self.purple.gotoAndStop(0);
			self.blue.gotoAndStop(0);
			showAll();
			}
		}
		
		function gas_MouseOver() {
			if(x==true){
			self.seat.gotoAndPlay(1);
			self.safe.gotoAndPlay(1);
			self.storage.gotoAndPlay(1);
			self.Long.gotoAndPlay(1);
			self.parking.gotoAndPlay(1);
			
			self.yellow.gotoAndPlay(1);
			self.green.gotoAndPlay(1);
			self.purple.gotoAndPlay(1);
			self.main_txt.text = ":רכבים בעלי חסכון בדלק הם" + "\n" + "מיני, משפחתי" + "\n" + "רוצים לדעת עוד? לחצו על אייקון הרכב שברצונכם לחקור";
			self.main_txt.font = "40px Heebo";
			}
		}
		
		function gas_MouseOut() {
			if(x==true){
			self.seat.gotoAndStop(0);
			self.safe.gotoAndStop(0);
			self.storage.gotoAndStop(0);
			self.parking.gotoAndStop(0);
			self.Long.gotoAndStop(0);
			self.yellow.gotoAndStop(0);
			self.green.gotoAndStop(0);
			self.purple.gotoAndStop(0);
			showAll();
			}
		}
		
		function long_MouseOver() {
			if(x==true){
			self.seat.gotoAndPlay(1);
			self.safe.gotoAndPlay(1);
			self.storage.gotoAndPlay(1);
			self.gas.gotoAndPlay(1);
			self.parking.gotoAndPlay(1);
			self.red.gotoAndPlay(1);
			self.main_txt.text = ":רכבים המיועדים לנסיעות ארוכות הם" + "\n" + "מיני ואן, מסחרי, משפחתי, ושטח" + "\n" + "רוצים לדעת עוד? לחצו על אייקון הרכב שברצונכם לחקור";
			self.main_txt.font = "40px Heebo";
			}
		}
		
		function long_MouseOut() {
			if(x==true){
			self.seat.gotoAndStop(0);
			self.safe.gotoAndStop(0);
			self.storage.gotoAndStop(0);
			self.parking.gotoAndStop(0);
			self.gas.gotoAndStop(0);
			self.red.gotoAndStop(0);
			showAll();
			}
		}
		
		function clickRed() {
			
			showAll();
			x = false;
			self.Long.disabled = true;
			self.close.visible = true;
			self.yellow.gotoAndPlay(1);
			self.blue.gotoAndPlay(1);
			self.green.gotoAndPlay(1);
			self.purple.gotoAndPlay(1);
			
			self.seat.gotoAndPlay(1);
			self.safe.gotoAndPlay(1);
			self.storage.gotoAndPlay(1);
			self.Long.gotoAndPlay(1);
			
			self.main_txt.text = ":רכב במיימדים קטנים אשר מיועד בעיקר לשימוש במרחב העירוני" +"\n"+".מתאים לך אם אתה נוסע בעיקר לבד או עם נוסע נוסף"
			self.main_txt.font = "30px Heebo";
			self.passenger1.visible = true;
			self.passenger2.visible = true;
			self.engine.visible = true;
			self.engine_txt.text = "מנוע 1 - 1.4 סמק";
			self.passenger_txt.text = "מתאים ל2 נוסעים";
		}
		
		function clickYellow() {
			
			showAll();
			x = false;
			self.close.visible = true;
			
			self.red.gotoAndPlay(1);
			self.blue.gotoAndPlay(1);
			self.green.gotoAndPlay(1);
			self.purple.gotoAndPlay(1);
			
			self.gas.gotoAndPlay(1);
			self.parking.gotoAndPlay(1);
		
			self.main_txt.text = ":רכב מאוד גדול אשר מיועד בעיקר לשימוש בין-עירוני" +"\n"+".מתאים לך אם אתה בעל עסק וצריך לשנע סחורה"+ "\n"+".מאופיין במרחב, ובאופציה להורדת הכסאות והרחבת מקום האחסון"
			self.main_txt.font = "30px Heebo";
			self.passenger1.visible = true;
			self.passenger2.visible = true;
			self.passenger3.visible = true;
			self.passenger4.visible = true;
			self.passenger5.visible = true;
			self.passenger6.visible = true;
			self.passenger7.visible = true;
			self.engine.visible = true;
			self.engine_txt.text = "מנוע 1.6 עד 6.5 סמק";
			self.passenger_txt.text = "מתאים ל7 נוסעים";
		}
		function clickGreen() {
			
			showAll();
			x = false;
			self.close.visible = true;
			
			self.red.gotoAndPlay(1);
			self.blue.gotoAndPlay(1);
			self.yellow.gotoAndPlay(1);
			self.purple.gotoAndPlay(1);
			
			self.gas.gotoAndPlay(1);
			self.parking.gotoAndPlay(1);
			
			self.main_txt.text = "רכב גדול וארוך אשר מיועד לשימוש בעיקר במרחב עירוני ובין-עירוני" +"\n"+".בדרך כלל מאופיין במרחב פנים רחב ומטען יחסית גדול";
			self.main_txt.font = "30px Heebo";
			self.passenger1.visible = true;
			self.passenger2.visible = true;
			self.passenger3.visible = true;
			self.passenger4.visible = true;
			self.passenger5.visible = true;
			self.passenger6.visible = true;
			self.passenger7.visible = true;
			self.engine.visible = true;
			self.engine_txt.text = "מנוע 1.6 עד 2 סמק";
			self.passenger_txt.text = "מתאים ל7 נוסעים";
		}
		function clickblue() {
			
			showAll();
			x = false;
			self.close.visible = true;
			
			self.red.gotoAndPlay(1);
			self.green.gotoAndPlay(1);
			self.yellow.gotoAndPlay(1);
			self.purple.gotoAndPlay(1);
			
			self.parking.gotoAndPlay(1);
			
			self.main_txt.text = ":רכב בגודל בינוני אשר מיועד לשימוש עירוני ובין-עירוני" +"\n"+".בדרך כלל מאופיין בבטיחות גבוהה ומקום אחסון נוח";
			self.main_txt.font = "30px Heebo";
			self.passenger1.visible = true;
			self.passenger2.visible = true;
			self.passenger3.visible = true;
			self.passenger4.visible = true;
			self.passenger5.visible = true;
			self.engine.visible = true;
			self.engine_txt.text = "מנוע 1.4 עד 2 סמק";
			self.passenger_txt.text = "מתאים ל5 נוסעים";
		}
		function clickjeep() {
			
			showAll();
			x = false;
			self.close.visible = true;
			
			self.red.gotoAndPlay(1);
			self.green.gotoAndPlay(1);
			self.yellow.gotoAndPlay(1);
			self.blue.gotoAndPlay(1);
			
			self.parking.gotoAndPlay(1);
			self.gas.gotoAndPlay(1);
			
			self.main_txt.text = ":רכב גדול ורחב אשר מיועד לשימוש בעיקר במרחב בין-עירוני ושטח" +"\n"+".מתאים לך אם אתה חובב טיולי שטח ואקסטרים"+ "\n"+".בדרך כלל מאופיין בבטיחות גבוהה ושליטה טובה ברכב";
			self.main_txt.font = "30px Heebo";
			self.passenger1.visible = true;
			self.passenger2.visible = true;
			self.passenger3.visible = true;
			self.passenger4.visible = true;
			self.passenger5.visible = true;
			self.engine.visible = true;
			self.engine_txt.text = "מנוע 1.4 עד 6 סמק";
			self.passenger_txt.text = "מתאים ל5 נוסעים";
		}
		
		function showAll() {
			x = true;
			self.seat.gotoAndStop(0);
			self.safe.gotoAndStop(0);
			self.storage.gotoAndStop(0);
			self.parking.gotoAndStop(0);
			self.Long.gotoAndStop(0);
			self.gas.gotoAndStop(0);
			
			self.yellow.gotoAndStop(0);
			self.blue.gotoAndStop(0);
			self.green.gotoAndStop(0);
			self.purple.gotoAndStop(0);
			self.red.gotoAndStop(0);
			
			self.close.visible = false;
			self.engine.visible = false;
			self.passenger1.visible = false;
			self.passenger2.visible = false;
			self.passenger3.visible = false;
			self.passenger4.visible = false;
			self.passenger5.visible = false;
			self.passenger6.visible = false;
			self.passenger7.visible = false;
			
			
			self.main_txt.text = ":בכדי לגלות איזה סוג רכב מתאים לכם" + "\n" + "עברו על ההעדפות שלכם או" + "\n" + "!לחצו על סוג הרכב שמעניין אתכם בכדי לגלות עוד";
			self.main_txt.font = "40px Heebo";
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.passenger7 = new lib.passenger1();
	this.passenger7.name = "passenger7";
	this.passenger7.parent = this;
	this.passenger7.setTransform(193.1,105,0.776,0.776,0,0,0,13.3,13.3);

	this.passenger6 = new lib.passenger1();
	this.passenger6.name = "passenger6";
	this.passenger6.parent = this;
	this.passenger6.setTransform(180.5,119.6,0.776,0.776,0,0,0,13.3,13.3);

	this.passenger5 = new lib.passenger1();
	this.passenger5.name = "passenger5";
	this.passenger5.parent = this;
	this.passenger5.setTransform(167.7,119.6,0.776,0.776,0,0,0,13.3,13.3);

	this.passenger4 = new lib.passenger1();
	this.passenger4.name = "passenger4";
	this.passenger4.parent = this;
	this.passenger4.setTransform(154.7,119.6,0.776,0.776,0,0,0,13.3,13.3);

	this.passenger3 = new lib.passenger1();
	this.passenger3.name = "passenger3";
	this.passenger3.parent = this;
	this.passenger3.setTransform(180.5,105.8,0.776,0.776,0,0,0,13.3,13.3);

	this.passenger2 = new lib.passenger1();
	this.passenger2.name = "passenger2";
	this.passenger2.parent = this;
	this.passenger2.setTransform(167.7,105.8,0.776,0.776,0,0,0,13.3,13.3);

	this.passenger1 = new lib.passenger1();
	this.passenger1.name = "passenger1";
	this.passenger1.parent = this;
	this.passenger1.setTransform(154.7,105.8,0.776,0.776,0,0,0,13.3,13.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.passenger1},{t:this.passenger2},{t:this.passenger3},{t:this.passenger4},{t:this.passenger5},{t:this.passenger6},{t:this.passenger7}]}).wait(1));

	// Layer 1
	this.engine = new lib.Engine();
	this.engine.name = "engine";
	this.engine.parent = this;
	this.engine.setTransform(160.1,71.5,0.784,0.784,0,0,0,16.4,16.4);

	this.timeline.addTween(cjs.Tween.get(this.engine).wait(1));

	// Layer 1
	this.close = new lib.close();
	this.close.name = "close";
	this.close.parent = this;
	this.close.setTransform(32.6,60.3,0.646,0.646,0,0,0,14.3,14.3);

	this.timeline.addTween(cjs.Tween.get(this.close).wait(1));

	// Layer 1
	this.passenger_txt = new cjs.Text("", "12px 'Heebo'", "#1C3B4F");
	this.passenger_txt.name = "passenger_txt";
	this.passenger_txt.textAlign = "right";
	this.passenger_txt.lineHeight = 21;
	this.passenger_txt.lineWidth = 119;
	this.passenger_txt.parent = this;
	this.passenger_txt.setTransform(143.8,99.5);

	this.engine_txt = new cjs.Text("", "12px 'Heebo'", "#1C3B4F");
	this.engine_txt.name = "engine_txt";
	this.engine_txt.textAlign = "right";
	this.engine_txt.lineHeight = 14;
	this.engine_txt.lineWidth = 104;
	this.engine_txt.parent = this;
	this.engine_txt.setTransform(143.5,63.8);

	this.Long = new lib._long();
	this.Long.name = "Long";
	this.Long.parent = this;
	this.Long.setTransform(239.1,232.4,1,1,0,0,0,35.1,30.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ECGrAIVUgg+gCLghgAAsIoWANIoYATQlcANjGADQkzAEj+gOQkbgRkXgmQjbgelIg6IoRhhQktg1jZgcIh/gPIiAgNQhzgLiOgIQjngOkmgEQiNgCmKgBIobgCQuBgCznABUggnAACgiOAALQm1gECuglQCBgcG/gqQhLAGhNgMQhQgMhSAIQAAgkDygnQEcgtG9gNInmAFQhggHAjgWQAKgGAcgNQAWgMAAgJQCigBA9gCQBlgEAAgJIAAg3InhAFIA3gCQBlgEAAgJIAAg3QCkgIGUADQGXADCggIIAAgpQjGgHlyAHQmVAJijABQBwgKAegNQAUgJAAgYQCpgGIxADQHFADEVgaInnAEQDBgqItADIHLAFQEIACCVgFQIigRLKgDQIDgCMvAGIKdAFIKXAEQGqACDkAGQFoAKEaAZQE1AaG4BHQD4AoHnBSQGDA9FNAVQEsATGtgKQCEgEDzgJIF9gNIF8gLQB/gDD9gEQLOgMMIAMQAAAJgXANQgcAQgLAHQglAbBiAKQGnAhCRAxQA2ASAQAXQAKANgBAbQAAANjfgFQi3gEBRAPQh4gDkZgCQkNABhmADQimAFgVAHQgZAJCsAKQAYAEA5AEIB0AGQBWADDLADQDaAHBHAEQCQAKA1APQA1APgIARQgGAKgpATQgpAUgFAKQgJAQA2APQFiAJElAMQA1ALgJAPQgGAKgpAPQgqAQgEAEQgIAJA1ACQEZAaIhAdQJ0AiE+AXQAAAHATAPQATAOAAAGQgBAKgpAEQgbACgxAAIhVgBg");
	this.shape.setTransform(990.9,293.6,0.426,0.413);

	this.gas = new lib.gas();
	this.gas.name = "gas";
	this.gas.parent = this;
	this.gas.setTransform(46.5,232.9,1,1,0,0,0,30.4,30.2);

	this.seat = new lib.seats();
	this.seat.name = "seat";
	this.seat.parent = this;
	this.seat.setTransform(141.9,233.3,1,1,0,0,0,33.5,30.2);

	this.storage = new lib.storage();
	this.storage.name = "storage";
	this.storage.parent = this;
	this.storage.setTransform(341.1,233.9,1,1,0,0,0,32.2,31.8);

	this.safe = new lib.safety();
	this.safe.name = "safe";
	this.safe.parent = this;
	this.safe.setTransform(437,232.8,1,1,0,0,0,33.3,30.7);

	this.parking = new lib.parking();
	this.parking.name = "parking";
	this.parking.parent = this;
	this.parking.setTransform(519,232.6,1,1,0,0,0,21.1,30.4);

	this.text = new cjs.Text("", "26px 'Heebo-Regular'");
	this.text.lineHeight = 45;
	this.text.parent = this;
	this.text.setTransform(778.3,173,0.387,0.387);

	this.text_1 = new cjs.Text("", "26px 'Heebo-Regular'");
	this.text_1.lineHeight = 44;
	this.text_1.parent = this;
	this.text_1.setTransform(634.5,339.4,0.387,0.387);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOgiQAHAHAJARQAPAagCATg");
	this.shape_1.setTransform(836.4,513.6,0.387,0.387);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAjQgPAAgKgMQgJgLAAgOIAAgCQAAgNAJgIQAKgJAPAAIAKAAIAdBFg");
	this.shape_2.setTransform(835.5,513.6,0.387,0.387);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AACAfIAAgNIAKAAIAAgWQAAgGgCgDQgDgEgEAAQgHAAgBANIgEAjIgQAAIAEghIACgIIADgFIABgBIgFABIgEACIgEgNIAOgDIAOgBQAOAAAHAHQAIAHAAAOIAAAhg");
	this.shape_3.setTransform(814.6,533.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDARIAAgVIgJAAIAAgMIAZAAIAAAhg");
	this.shape_4.setTransform(809.2,532.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAeIgGgBIAAgMIAHABQAEAAABgCQACgCAAgEIAAgbIgLAAIAAgNIAaAAIAAApQAAAGgCAFQgCAEgEACQgFADgEAAIgGgBg");
	this.shape_5.setTransform(805.3,533.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDARIAAgVIgJAAIAAgMIAZAAIAAAhg");
	this.shape_6.setTransform(801.5,532.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3D3D3").s().p("AgoAgIgEgHQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIBQg1QABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAIAEAGQABABAAABQAAABAAAAQAAABgBAAQAAABgBAAIhQA0IgCABIgCgBg");
	this.shape_7.setTransform(795.8,503.3,0.387,0.387);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3D3D3").s().p("Ag+AyIgEgFQgBgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIB8haQABgBABAAQAAAAABAAQAAAAABABQAAAAABAAIAEAGQABABAAABQAAAAAAABQAAAAgBABQAAAAgBABIh8BaIgBABQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBg");
	this.shape_8.setTransform(794.8,501.7,0.387,0.387);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAPQgEAAgDgDQgDgEAAgEIAAgIQAAgEADgDQADgDAEAAIBEAAQAFAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgFAAg");
	this.shape_9.setTransform(812.2,510.9,0.387,0.387);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghAPQgEAAgEgDQgDgEAAgEIAAgIQAAgEADgDQAEgDAEAAIBEAAQAEAAADADQADADAAAEIAAAIQAAAEgDAEQgDADgEAAg");
	this.shape_10.setTransform(790.5,510.5,0.387,0.387);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3).p("ACHAAQAAA3gnAnQgoAng4AAQg3AAgognQgngnAAg3QAAg2AngnQAognA3AAQA4AAAoAnQAnAnAAA2g");
	this.shape_11.setTransform(823.3,522.1,0.387,0.387);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A5A5A5").s().p("AhfBeQgngnAAg3QAAg2AngnQAognA3AAQA4AAAoAnQAnAnAAA2QAAA3gnAnQgoAng4AAQg3AAgogng");
	this.shape_12.setTransform(823.3,522.1,0.387,0.387);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiFCEQg4g3AAhNQAAhNA4g3QA3g2BOAAQBPAAA4A2QA3A3AABNQAABNg3A3Qg4A3hPAAQhOAAg3g3gAhdhgQgnAnAAA3QAAA2AnAnQAoAnA3AAQA4AAAognQAngnAAg2QAAg3gngnQgogng4AAQg3AAgoAng");
	this.shape_13.setTransform(823.2,522.2,0.387,0.387);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3).p("ACHAAQAAA3gnAnQgoAog4AAQg3AAgogoQgngnAAg3QAAg2AngoQAognA3AAQA4AAAoAnQAnAoAAA2g");
	this.shape_14.setTransform(792.7,522.7,0.387,0.387);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A5A5A5").s().p("AhfBeQgngnAAg3QAAg2AngoQAognA3ABQA4gBAoAnQAnAoAAA2QAAA3gnAnQgoAog4AAQg3AAgogog");
	this.shape_15.setTransform(792.7,522.7,0.387,0.387);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiFCFQg4g3AAhOQAAhMA4g3QA3g3BOAAQBOAAA4A3QA4A2AABNQAABOg4A3Qg3A2hPAAQhOAAg3g2gAhdhgQgnAnAAA3QAAA2AnAoQAoAnA3AAQA4AAAognQAngoAAg2QAAg3gngnQgogng4AAQg3AAgoAng");
	this.shape_16.setTransform(792.6,522.9,0.387,0.387);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiXCWQg/g+AAhYQAAhXA/g+QA/g+BYAAQBZAAA/A+QA/A+AABXQAABYg/A+Qg/A+hZAAQhYAAg/g+gAhphtQgtAsAAA/QAAA9AtAtQAtAsA+AAQBAAAAtgsQAtgtAAg9QAAg/gtgsQgtgshAAAQg+AAgtAsg");
	this.shape_17.setTransform(792.6,522.9,0.387,0.387);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiXCWQhAg+ABhYQgBhXBAg+QA/g+BYAAQBZAAA/A+QBAA+AABXQAABYhAA+Qg/A+hZAAQhYAAg/g+gAhphtQgtAtAAA+QAAA+AtAsQAtAsA+AAQBAAAAsgsQAtgsAAg+QAAg+gtgtQgsgshAAAQg+AAgtAsg");
	this.shape_18.setTransform(823.4,522.5,0.387,0.387);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiFCFQg4g4AAhNQAAhMA4g4QA3g3BOAAQBPAAA3A3QA4A4AABMQAABNg4A4Qg3A2hPAAQhOAAg3g2gAhdhgQgnAnAAA3QAAA2AnAnQAoAoA3AAQA4AAAogoQAngnAAg2QAAg3gngnQgogng4AAQg3AAgoAng");
	this.shape_19.setTransform(792.6,521.9,0.387,0.387);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#666666").ss(2).p("ADRhzIAADkQAAATgPAOQgOAOgWAAIk5AAQgYAAgQgQQgQgRAEgUQAWhjBhhHQBghICKgXQAZgEATANQATAMAAAWg");
	this.shape_20.setTransform(795.8,502.6,0.387,0.387);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A5A5A5").s().p("AibCgQgYAAgQgQQgQgRAEgUQAWhjBhhHQBghICKgXQAZgEATANQATAMAAAWIAADkQAAATgPAOQgOAOgWAAg");
	this.shape_21.setTransform(795.8,502.6,0.387,0.387);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#666666").ss(2).p("ACiChIkqAAQgaAAgagOQgcgQAAgSIAAjiQAAgXAdgPQAcgOAdAGQCFAeBdBGQBgBHAXBbQAGAXgPARQgQASgcAAg");
	this.shape_22.setTransform(815,502.5,0.387,0.387);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A5A5A5").s().p("AiIChQgaAAgagOQgcgQAAgSIAAjiQAAgXAdgPQAcgOAdAGQCFAeBdBGQBgBHAXBbQAGAXgPARQgQASgcAAg");
	this.shape_23.setTransform(815,502.5,0.387,0.387);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AA153F").s().p("AjBGNIgaABIgjgCIgSgBIkdgEQgVgDgQgDIgDgBIgagIQg3gSgggkQghgoAAg1QAAg0AdgtQAdgsAxgaQgBgOAAgPQAAiyCth+QCth+D1AAQDBAACnB/QCVBzA3CYQA+AIA5AfQAZAOAPAMQATAQANAUIgLAAQgPAAgKAJQgJAIAAAOIAAACQAAAOAJAMQAKALAPABIAoAAQAGANAAAxQgFA6gnAoQgkAkg9ATIghAIIgfAEIgaACIlRAAQi/AAiygBg");
	this.shape_24.setTransform(808.4,508.5,0.387,0.387);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgHA3QgXAAgRgQQgRgQABgXQAAgXARgQQASgPAXAAIBBAAIAFBtg");
	this.shape_25.setTransform(667.9,513.6,0.387,0.387);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTAfIAAgQIAEABQAMAAADgKIAAgXIgNAAIAAgNIAdAAIAAAeIABAKIADAUIgOAAIgFgPQAAAEgCAEQgDADgDADQgEACgFAAIgDAAg");
	this.shape_26.setTransform(635,538.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHAOIAAgJQAAgEADgEQACgGADgDIAHADIgDAHIgBAHIAAAJg");
	this.shape_27.setTransform(631.8,534.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgDARIAAgVIgJAAIAAgMIAZAAIAAAhg");
	this.shape_28.setTransform(628.4,536.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMAeIgMgDIADgMIAKACIAJABQAFAAAEgDQAEgEAAgFIAAgXIgRAAIgBAGIgBAFIAAACIAGABIAAAKIgHABIgIgBIgHgEIAAgDIABgKIAEgHIgHAAIAAgNIA1AAIAAAhQAAAJgDAHQgFAGgGADQgHADgHAAIgLgBg");
	this.shape_29.setTransform(623.3,538.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D3D3D3").s().p("AguAjIAAgBQgFgFAGgDIBTg9QAFgEAEAFIAAABQAFAFgGAEIhTA9IgEABQgDAAgCgDg");
	this.shape_30.setTransform(610.8,502.9,0.387,0.387);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D3D3D3").s().p("AhAAwIAAgBQgEgFAFgEIB3hWQAFgEAEAFIAAABQAEAFgFAEIh3BXIgEABQgCAAgDgDg");
	this.shape_31.setTransform(609.8,502.2,0.387,0.387);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#666666").ss(2).p("AEkBYIjzjVQgIgHgOAAIj2AAQghAAgYAXQgYAZAAAhIAABnQAAAhAYAYQAYAYAhAAIHoAAQAVAAAIgRQAIgQgOgMg");
	this.shape_32.setTransform(639.5,504.3,0.387,0.387);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A5A5A5").s().p("AjbCFQghAAgYgYQgYgXAAgiIAAhnQAAgiAYgXQAYgYAhAAID2AAQAOAAAIAHIDzDVQAOAMgIARQgIAQgVAAg");
	this.shape_33.setTransform(639.5,504.3,0.387,0.387);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#666666").ss(2).p("AEGgjQAAgogcgdQgdgcgoAAIlBAAQgKAAgJAFQgIAFgDAIIhKDVQgFANAKALQAJAKAQAAIGLAAQAoAAAdgcQAcgdAAgpg");
	this.shape_34.setTransform(613.7,504.3,0.387,0.387);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A5A5A5").s().p("AjmCFQgQAAgJgLQgKgKAFgNIBKjVQADgIAIgFQAJgFAKAAIFBAAQAoAAAdAcQAcAdAAAoIAABHQAAAogcAcQgdAdgoAAg");
	this.shape_35.setTransform(613.7,504.3,0.387,0.387);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5).p("ACCAAQAAA1gnAlQgmAmg1AAQg1AAgmgmQgmglAAg1QAAg0AmglQAmgmA1AAQA1AAAmAmQAnAlAAA0g");
	this.shape_36.setTransform(611.7,525.8,0.387,0.387);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A5A5A5").s().p("AhbBaQglglgBg1QABg0AlglQAmgmA1AAQA2AAAmAmQAlAlABA0QgBA1glAlQgmAmg2AAQg1AAgmgmg");
	this.shape_37.setTransform(611.7,525.8,0.387,0.387);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2).p("AAAjWQhZAAhAA/QhAA/AABYQAABZBAA/QBAA/BZAAQBbAAA/g/QBAg/AAhZQAAhYhAg/Qg/g/hbAAgAADCWQhAAAgtgtQgugtAAg+QAAhAAugsQAtgtBAAAQBAAAAuAtQAtAsAABAQAAA+gtAtQguAthAAAg");
	this.shape_38.setTransform(611.6,525.9,0.387,0.387);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AiZCYQhAg/AAhZQAAhYBAg/QBAg/BZAAQBbAAA/A/QBAA/AABYQAABZhAA/Qg/A/hbAAQhZAAhAg/gAhqhuQguAsAABAQAAA+AuAtQAtAtBAAAQBAAAAugtQAtgtAAg+QAAhAgtgsQgugthAAAQhAAAgtAtg");
	this.shape_39.setTransform(611.6,525.9,0.387,0.387);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(5).p("ACBAAQAAA1gmAlQgmAmg1AAQg1AAgmgmQgmglAAg1QAAg0AmglQAmgmA1AAQA1AAAmAmQAmAlAAA0g");
	this.shape_40.setTransform(650,526.1,0.387,0.387);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A5A5A5").s().p("AhbBaQglglgBg1QABg0AlglQAmglA1AAQA1AAAnAlQAmAlgBA0QABA1gmAlQgnAlg1AAQg1AAgmglg");
	this.shape_41.setTransform(650,526.1,0.387,0.387);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2).p("AAAjWQhZAAhAA/QhAA/AABYQAABaBAA+QBAA/BZAAQBbAAA/g/QBAg/AAhZQAAhYhAg/Qg/g/hbAAgAADCWQhAAAgtgtQgugsAAg/QAAg/AugtQAtgtBAAAQBAAAAuAtQAtAtAAA/QAAA/gtAsQguAthAAAg");
	this.shape_42.setTransform(649.9,526.3,0.387,0.387);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AiZCYQhAg+AAhaQAAhYBAg/QBAg/BZAAQBbAAA/A/QBAA/AABYQAABZhAA/Qg/A/hbAAQhZAAhAg/gAhqhuQguAtAAA/QAAA/AuAsQAtAtBAAAQBAAAAugtQAtgsAAg/QAAg/gtgtQgugthAAAQhAAAgtAtg");
	this.shape_43.setTransform(649.9,526.3,0.387,0.387);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#666666").p("AAADsQghAAgYgYQgYgYAAgiIAAkzQAAgiAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAiIAAEzQAAAigYAYQgYAYgiAAg");
	this.shape_44.setTransform(595.7,513.5,0.387,0.387);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag5DUQgYgYAAgiIAAkzQAAgiAYgYQAYgYAhAAQAiAAAYAYQAYAYAAAiIAAEzQAAAigYAYQgYAYgiAAQghAAgYgYg");
	this.shape_45.setTransform(595.7,513.5,0.387,0.387);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").p("AAsgEIhXB1IAAjrIBUAGg");
	this.shape_46.setTransform(599.8,516,0.387,0.387);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("Agrh1IBUAGIADBvIhXB2g");
	this.shape_47.setTransform(599.8,515.8,0.387,0.387);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AghAPQgEAAgEgDQgDgDAAgFIAAgHQAAgFADgDQAEgDAEAAIBEAAQAEAAADADQADADAAAFIAAAHQAAAFgDADQgDADgEAAg");
	this.shape_48.setTransform(606.1,513.2,0.387,0.387);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AghAPQgEAAgDgDQgEgDAAgFIAAgHQAAgFAEgDQADgDAEAAIBDAAQAFAAADADQADADAAAFIAAAHQAAAFgDADQgDADgFAAg");
	this.shape_49.setTransform(632,513.2,0.387,0.387);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AioCmQhGhFAAhhQAAhgBGhFQBGhFBiAAQBiAABHBFQBFBFAABgQAABhhFBFQhHBFhiAAQhiAAhGhFgAh0h5QgyAxAABGQAABEAyAxQAyAxBEAAQBHAAAygxQAygxgBhEQABhGgygxQgygxhHAAQhEAAgyAxg");
	this.shape_50.setTransform(611.5,525.8,0.387,0.387);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AinCmQhGhFAAhhQAAhgBGhFQBFhFBiAAQBjAABGBFQBFBFAABgQAABhhFBFQhGBFhjAAQhiAAhFhFgAh0h5QgyAxAABFQAABFAyAwQAyAyBFAAQBGAAAygyQAxgwAAhFQAAhFgxgxQgygwhGAAQhFAAgyAwg");
	this.shape_51.setTransform(649.9,526.1,0.387,0.387);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#363F5B").s().p("As8F2QgqgIgdgfQgdgggFgqIgBgRIAAjjQAAgKACgIQABgMAGgMIAAAAQgGgOADgKIBZkpQADgMAKgIQAKgJANAAIQwAAQANAAAPAPID4D+IAAABID4AAQAzAAAmAeQAnAeAKAyIgCgBIhBAAQgYAAgSAQQgRAPAAAXQAAAYAQAQQARAQAYAAIBIAAIABAFIAAB3QAAA5gqAoQgoAng7AAI48AAIgDACgAOjAFIAAAAIAAAAg");
	this.shape_52.setTransform(634.3,511.3,0.387,0.387);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AACAfIAAgNIAKAAIAAgXQAAgFgCgEQgDgDgEAAQgHAAgBANIgEAjIgQAAIAEggIACgIIADgGIABgBIgFABIgEABIgEgMIAOgDIAOgBQAOAAAHAHQAIAHAAAOIAAAhg");
	this.shape_53.setTransform(742.9,537.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTAdQgJgCgIgEIAAg1IAQAAIAAAsIAJADIAKABQAJAAAHgEQAGgFAAgJIAAgeIAQAAIAAAfQAAAKgFAHQgGAGgIAEQgJADgKAAQgIAAgKgCgAgJAKIABgGIABgGIAAgcIAPAAIAAAYIgBAJQgCAEgCADg");
	this.shape_54.setTransform(735,538);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMAeIgMgDIADgMIAKACIAJABQAFAAAEgEQAEgCAAgHIAAgWIgQAAIgCAFIgBAGIAAACIAGABIAAAKIgHABIgIgCIgGgDIAAgDIABgKIADgHIgHAAIAAgNIA1AAIAAAhQAAAJgDAHQgEAGgHADQgHADgIAAIgKgBg");
	this.shape_55.setTransform(727,538);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAJAeIAAgmQAAgJgHAAIgKAAIAAAvIgQAAIAAg7IAaAAQALAAAHAGQAFAFAAAMIAAAkg");
	this.shape_56.setTransform(720.5,537.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAeIAAgNIAEAAQAHAAAAgHIAAgNIABgIQAAgDACgDIgJAAIAAgNIAeAAQAMAAAGAGQAGAGAAALIAAAlIgQAAIAAgmQAAgJgIAAIgHAAIgBAGIAAAGIAAAQQAAAGgCAFQgDAEgEACQgEADgGAAIgIgBg");
	this.shape_57.setTransform(713.4,537.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgCARIAAgVIgKAAIAAgMIAZAAIAAAhg");
	this.shape_58.setTransform(708.4,536.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(3).p("ACIAAQAAA4goAnQgoAng4AAQg3AAgognQgognAAg4QAAg3AognQAognA3AAQA4AAAoAnQAoAnAAA3g");
	this.shape_59.setTransform(706.9,526.1,0.387,0.387);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A5A5A5").s().p("AhgBfQgognABg4QgBg3AognQAognA4AAQA5AAAoAnQAnAnAAA3QAAA4gnAnQgoAng5AAQg4AAgogng");
	this.shape_60.setTransform(706.9,526.1,0.387,0.387);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AiGCGQg4g4AAhOQAAhNA4g3QA4g4BOAAQBPAAA5A4QA3A3AABNQAABOg3A4Qg5A3hPAAQhOAAg4g3gAhehgQgoAnABA3QgBA3AoAnQAoAoA4AAQA5AAAogoQAngnAAg3QAAg3gngnQgogog5AAQg4AAgoAog");
	this.shape_61.setTransform(706.8,526.2,0.387,0.387);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AiTCRQg9g8AAhVQAAhVA9g7QA9g9BWAAQBXAAA9A9QA9A7AABVQAABVg9A8Qg9A9hXAAQhWAAg9g9gAhmhqQgrArAAA9QAAA8ArAqQArAsA9gBQA+ABArgsQAsgqAAg8QAAg9gsgrQgrgqg+AAQg9AAgrAqg");
	this.shape_62.setTransform(706.9,526.2,0.387,0.387);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(3).p("ACIAAQAAA4goAnQgoAng4AAQg4AAgngnQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3g");
	this.shape_63.setTransform(748.6,526.1,0.387,0.387);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A5A5A5").s().p("AhfBfQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3QAAA4goAnQgoAng4AAQg4AAgngng");
	this.shape_64.setTransform(748.6,526.1,0.387,0.387);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AiGCGQg5g4AAhOQAAhNA5g3QA3g4BPAAQBPAAA5A4QA4A3AABNQAABOg4A4Qg5A3hPAAQhPAAg3g3gAhdhgQgoAnAAA3QAAA3AoAnQAoAoA3AAQA5AAAogoQAognAAg3QAAg3gognQgogog5AAQg3AAgoAog");
	this.shape_65.setTransform(748.5,526.2,0.387,0.387);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AiTCRQg9g8AAhVQAAhVA9g7QA+g9BVAAQBXAAA9A9QA9A7AABVQAABVg9A8Qg9A9hXAAQhVAAg+g9gAhmhqQgrArAAA9QAAA8ArAqQAsAsA8gBQA+ABAsgsQAsgqAAg8QAAg9gsgrQgsgqg+AAQg8AAgsAqg");
	this.shape_66.setTransform(748.6,526.2,0.387,0.387);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D3D3D3").s().p("AgxAlQgCgCAAgDQABgDACgCIBZhBQACgBADAAQADABABACQACACAAADQgBADgCABIhZBBIgEACQgDAAgCgDg");
	this.shape_67.setTransform(712.2,508.4,0.387,0.387);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D3D3D3").s().p("Ag8AyQgDAAgBgDQgEgFAGgEIB1hWQAGgEAEAFQAEAGgGAEIh1BWQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgCgBg");
	this.shape_68.setTransform(711.2,507.8,0.387,0.387);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgpAPQgFAAgEgEQgEgEAAgFIAAgDQAAgGAEgDQADgEAGAAIBUAAQAFAAAEAEQADADAAAGIAAADQAAAFgDAEQgFAEgEAAg");
	this.shape_69.setTransform(734.9,514.8,0.387,0.387);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgpAPQgFAAgEgEQgEgEAAgFIAAgDQAAgGAEgDQADgEAGAAIBUAAQAFAAAEAEQADADAAAGIAAADQAAAFgDAEQgFAEgEAAg");
	this.shape_70.setTransform(707.4,514.8,0.387,0.387);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#666666").ss(2).p("ADrBfImeAAQgYAAgRgSQgSgSAAgaIAAhBQAAgZASgSQARgSAYAAIClAAQARAACABdQCBBfgZAAg");
	this.shape_71.setTransform(737.4,508.4,0.387,0.387);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A5A5A5").s().p("AizBfQgYAAgRgSQgSgTAAgZIAAhBQAAgaASgRQARgTAYABIClAAQARAACABdQCBBfgZAAg");
	this.shape_72.setTransform(737.4,508.4,0.387,0.387);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#666666").ss(2).p("ADwgoIAABRQAAAVgOAOQgOAPgUAAImqAAQgWAABDhGIBIhFQAQgRAWgMQAXgMASAAIDmAAQAUAAAOAOQAOAPAAAUg");
	this.shape_73.setTransform(714.3,508.4,0.387,0.387);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A5A5A5").s().p("AjqBaQgWAABDhFIBIhFQAQgRAWgMQAXgMASAAIDmAAQAUgBAOAPQAOAOAAAVIAABRQAAAVgOAOQgOAOgUAAg");
	this.shape_74.setTransform(714.3,508.4,0.387,0.387);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAAAoQgSAAgMgMQgNgLAAgRQAAgQANgMQAMgLASAAIAsAAQABAegCAcIABAVg");
	this.shape_75.setTransform(762.1,516.5,0.387,0.387);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3772F7").s().p("AtHE2QgRgBgRgIQghgSgGglIgCj9IACgFQAOgcAZgSQAcgVAeAAIBwAAIAeghQAXgWAKgOIBWhvQASgXAegOQAbgNAZAAILfAAQAUAACFBVQCNBaA3A3ICqAAQA2gGAfARQAYAOAEAXQACAMAAAKIgtAAQgSAAgMAKQgNAMAAARQAAARANALQAMAMASAAIAtAAIgEByQAAAugdAgQgdAhgtAEImRALg");
	this.shape_76.setTransform(728.4,515.4,0.387,0.387);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgLAyQgVAAgPgOQgQgPAAgVQAAgUAQgOQAPgPAVAAIAwAAIACAAQARAnADATIAFAjQgLAGgQAAg");
	this.shape_77.setTransform(1049.9,490.6,0.387,0.387);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AACAfIAAgNIAKAAIAAgWQAAgGgCgDQgDgEgEAAQgHAAgBANIgEAjIgQAAIAEggIACgJIADgFIABgBIgFABIgEACIgEgNIAOgDIAOgBQAOAAAHAHQAIAHAAAOIAAAhg");
	this.shape_78.setTransform(1023.1,510.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgCARIAAgVIgKAAIAAgMIAZAAIAAAhg");
	this.shape_79.setTransform(1017.7,508.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgIAeIgGgBIAAgMIAHABQAEAAABgCQACgCAAgEIAAgbIgLAAIAAgNIAaAAIAAApQAAAGgCAFQgCAEgEACQgFADgEAAIgGgBg");
	this.shape_80.setTransform(1013.8,510.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgCARIAAgVIgKAAIAAgMIAZAAIAAAhg");
	this.shape_81.setTransform(1010,508.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgEAeIAAgvIgGAAIAAgMIAVAAIAAA7g");
	this.shape_82.setTransform(1004,510.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAMAeIgWgfQgBABAAADIAAAbIgPAAIAAgUQAAgIACgEQACgFAGgDIgOgTIATAAIAOAUIAJgUIATAAIgTAiIASAZg");
	this.shape_83.setTransform(999.1,510.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgEApIAAhEIgGAAIAAgNIAVAAIAABRg");
	this.shape_84.setTransform(993.6,511.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D3D3D3").s().p("Ag+AzIgEgGQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIB9haQAAgBABAAQAAAAABAAQAAAAABABQABAAAAABIAEAGQAAAAABABQAAAAAAABQAAAAgBABQAAAAAAABIh8BaIgDABIgCgBg");
	this.shape_85.setTransform(985.4,478.4,0.387,0.387);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D3D3D3").s().p("AguAjIgBgBQgDgFAEgEIBUg8QAFgEAEAFIAAABQAEAFgFAEIhTA8IgFACQgCAAgCgDg");
	this.shape_86.setTransform(987.1,479,0.387,0.387);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgiAPQgEAAgDgDQgDgEAAgDIAAgJQAAgEADgDQADgDAEAAIBEAAQAFAAADADQADADAAAEIAAAJQAAADgDAEQgDADgFAAg");
	this.shape_87.setTransform(981.2,489.3,0.387,0.387);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgiAPQgEAAgDgDQgDgEAAgDIAAgJQAAgEADgDQADgDAEAAIBEAAQAEAAAEADQADADAAAEIAAAJQAAADgDAEQgEADgEAAg");
	this.shape_88.setTransform(1014.1,489.3,0.387,0.387);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(3).p("ACIAAQAAA4goAnQgoAng4AAQg4AAgngnQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3g");
	this.shape_89.setTransform(1039.2,500.5,0.387,0.387);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A5A5A5").s().p("AhfBfQgognAAg4QAAg3AognQAngnA4AAQA4AAAoAnQAoAnAAA3QAAA4goAnQgoAng4AAQg4AAgngng");
	this.shape_90.setTransform(1039.2,500.5,0.387,0.387);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AiHCGQg4g4AAhOQAAhNA4g3QA5g4BOAAQBPAAA4A4QA4A3ABBNQgBBOg4A4Qg4A3hPAAQhOAAg5g3gAhdhgQgoAnAAA3QAAA3AoAnQAoAoA3AAQA4AAAogoQApgnAAg3QAAg3gpgnQgogog4AAQg3AAgoAog");
	this.shape_91.setTransform(1039.2,500.6,0.387,0.387);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AiTCRQg9g8AAhVQAAhVA9g8QA9g8BWAAQBWAAA+A8QA9A8AABVQAABVg9A8Qg+A9hWAAQhVAAg+g9gAhmhqQgrArAAA9QAAA8ArAqQAsArA8AAQA+AAAsgrQArgqAAg8QAAg9grgrQgsgqg+AAQg8AAgsAqg");
	this.shape_92.setTransform(1039.2,500.6,0.387,0.387);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(3).p("ACIAAQAAA4goAnQgoAng4AAQg4AAgognQgognAAg4QAAg3AognQAognA4AAQA4AAAoAnQAoAnAAA3g");
	this.shape_93.setTransform(981.9,500.5,0.387,0.387);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A5A5A5").s().p("AhgBfQgognABg4QgBg3AognQAognA4AAQA4AAApAnQAnAnAAA3QAAA4gnAnQgpAng4AAQg4AAgogng");
	this.shape_94.setTransform(981.9,500.5,0.387,0.387);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AiGCGQg5g4AAhOQAAhNA5g3QA3g4BPAAQBPAAA5A4QA4A3AABNQAABOg4A4Qg5A3hPAAQhPAAg3g3gAhehgQgnAnAAA3QAAA3AnAnQAoAoA4AAQA4AAApgoQAngnAAg3QAAg3gngnQgpgog4AAQg4AAgoAog");
	this.shape_95.setTransform(981.9,500.6,0.387,0.387);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AiTCRQg9g8AAhVQAAhVA9g8QA9g8BWAAQBWAAA+A8QA9A8AABVQAABVg9A8Qg+A9hWAAQhWAAg9g9gAhmhqQgrArAAA9QAAA8ArAqQAsArA8AAQA+AAAsgrQArgqAAg8QAAg9grgrQgsgqg+AAQg8AAgsAqg");
	this.shape_96.setTransform(981.9,500.6,0.387,0.387);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#666666").ss(2).p("AFbh6QAAgPgKgLQgJgKgOAAImdAAQgzAAgpAWQgoAVgUAnIhaC1QgKASAKASQAJASATAAIJzAAQAOAAAJgKQAKgLAAgPg");
	this.shape_97.setTransform(992.2,480.9,0.387,0.387);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A5A5A5").s().p("Ak5CfQgTAAgJgSQgKgSAKgSIBai1QAUgnAogVQApgWAzAAIGdAAQAOAAAJAKQAKALAAAPIAAD1QAAAPgKALQgJAKgOAAg");
	this.shape_98.setTransform(992.2,480.9,0.387,0.387);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#666666").ss(2).p("AlpCfILSAAQAbAAAJgcQAJgcgWgSQgzgrg6gjIgmgVQhmhAhwgpQhsgnhCAAIjSAAQgPAAgLAMQgLAMAAARIAADrQAAARALAMQALAMAPAAg");
	this.shape_99.setTransform(1027.1,480.9,0.387,0.387);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#A5A5A5").s().p("AlpCfQgPAAgLgMQgLgMAAgRIAAjrQAAgRALgMQALgMAPAAIDSAAQBCAABsAnQBwApBmBAIAmAVQA6AjAzArQAWASgJAcQgJAcgbAAg");
	this.shape_100.setTransform(1027.1,480.9,0.387,0.387);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0FA588").s().p("AvqGVQgtAAgcguQgbgvAHhBIARiXQACgPAHgaIAIgYIC2lUQAZgtAsgZQAsgZA2AAIQHAAQBGAAB4AtQB9AwB2BLIAsAZQDGB9AmBQQADAGAQAjIgyAAQgWAAgPAOQgPAPAAAVQAAAVAPAOQAPAPAWAAIAxAAQAQAAALgHIASB3QAKBBgaAvQgaAugtAAg");
	this.shape_101.setTransform(1010.8,487.3,0.387,0.387);

	this.main_txt = new cjs.Text("", "bold 46px 'Heebo'", "#1C3B4F");
	this.main_txt.name = "main_txt";
	this.main_txt.textAlign = "right";
	this.main_txt.lineHeight = 90;
	this.main_txt.lineWidth = 816;
	this.main_txt.parent = this;
	this.main_txt.setTransform(499.1,61.3,0.387,0.387);

	this.text_2 = new cjs.Text("", "26px 'Heebo-Regular'");
	this.text_2.lineHeight = 44;
	this.text_2.parent = this;
	this.text_2.setTransform(967.7,260.2,0.387,0.387);

	this.text_3 = new cjs.Text("", "26px 'Heebo-Regular'");
	this.text_3.lineHeight = 44;
	this.text_3.parent = this;
	this.text_3.setTransform(710.3,330.4,0.387,0.387);

	this.text_4 = new cjs.Text("", "26px 'Heebo-Regular'");
	this.text_4.lineHeight = 44;
	this.text_4.parent = this;
	this.text_4.setTransform(647.7,347,0.387,0.387);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AACAfIAAgMIAKAAIAAgXQAAgGgCgDQgDgDgEAAQgHAAgBAMIgEAjIgQAAIAEghIACgIIADgFIABgBIgFABIgEACIgEgMIAOgEIAOgBQAOAAAHAHQAIAHAAAOIAAAhg");
	this.shape_102.setTransform(910.8,509);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgLAcQgGgEgEgGQgDgHAAgIIAAgDIACgIIADgIIABgBIgHACIgEgMIAPgCIAOgBQAPgBAHAIQAIAHAAAPIAAAEQAAAIgEAHQgDAGgHAEQgGAEgHAAQgHAAgHgEgAgFgNQgDAEAAAJIAAADQAAAFACADQABAEACACQADABADAAQADAAACgBQACgCACgEIABgIIAAgEQAAgIgCgEQgEgEgFAAQgEAAgDAEg");
	this.shape_103.setTransform(904,509);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAJAeIAAgmQAAgJgIAAIgJAAIAAAvIgRAAIAAg7IAaAAQAMAAAGAGQAHAFgBAMIAAAkg");
	this.shape_104.setTransform(897.6,509);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAFAeIAAgnQAAgDgCgDQgCgCgEAAIgRAAIAAgMIATAAQAGAAAGACQAFADADAFQACAFABAGIAAAmg");
	this.shape_105.setTransform(891.4,509);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgCARIAAgVIgKAAIAAgMIAZAAIAAAhg");
	this.shape_106.setTransform(887,507.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D3D3D3").s().p("Ag+AyIgEgGQgBAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIB8haQABgBABAAQAAAAABAAQABAAAAAAQABABAAAAIAEAGQAAABABABQAAAAAAABQAAAAAAABQgBAAgBABIh8BaIgCABIgCgCg");
	this.shape_107.setTransform(873.4,471.9,0.387,0.387);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D3D3D3").s().p("AguAjIAAgBQgFgFAGgEIBTg9QAFgDAEAFIAAABQAEAFgFADIhTA9IgEACQgDAAgCgDg");
	this.shape_108.setTransform(875.1,472.5,0.387,0.387);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#666666").ss(2).p("AFDhxQAAgTgNgOQgNgOgTgBQgUgCgSAAInTAAQglAAgcAOQgeAOAAAUIAADiQAAAUAeAQQAdARAkAAIH2AAQAUAAAOgOQAOgOAAgUg");
	this.shape_109.setTransform(880.9,474.3,0.387,0.387);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A5A5A5").s().p("AjjCkQgjAAgegRQgegQAAgUIAAjiQAAgUAegOQAdgOAkAAIHTAAIAmACQATABANAOQANAOAAATIAADlQAAAUgOAOQgOAOgUAAg");
	this.shape_110.setTransform(880.9,474.3,0.387,0.387);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#666666").ss(2).p("AkWCjIIsAAQAhAAALgiQAKghgagVIkHjTQgggagmAAIj7AAQgTAAgNAPQgOAOAAAUIAADjQAAAUAOAOQANAPATAAg");
	this.shape_111.setTransform(910.1,474.2,0.387,0.387);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A5A5A5").s().p("AkWCjQgTAAgNgPQgOgOAAgVIAAjiQAAgTAOgPQANgOATAAID7AAQAmgBAgAaIEHDSQAaAWgKAhQgLAhghABg");
	this.shape_112.setTransform(910.1,474.2,0.387,0.387);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(3).p("ACWAAQAAA9gsAsQgsArg+AAQg+AAgsgrQgsgsAAg9QAAg8AsgsQAtgrA9AAQA+AAAsArQAsAsAAA8g");
	this.shape_113.setTransform(879.1,499.3,0.387,0.387);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#A5A5A5").s().p("AhqBpQgrgsAAg9QAAg8ArgsQAtgrA9AAQA+AAAsArQAsAsABA8QgBA9gsAsQgsArg+AAQg9AAgtgrg");
	this.shape_114.setTransform(879.1,499.3,0.387,0.387);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AiUCTQg+g9AAhWQAAhVA+g9QA9g9BXAAQBYAAA9A9QA+A9AABVQAABWg+A9Qg+A9hXAAQhXAAg9g9gAhnhrQgsAsAAA9QAAA8AsAsQAsArA9AAQA/AAAsgrQAsgsAAg8QAAg9gsgsQgtgrg+AAQg9AAgsArg");
	this.shape_115.setTransform(879,499.5,0.387,0.387);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AiiChQhDhDAAheQAAhdBDhDQBEhCBeAAQBgAABDBCQBEBDAABdQAABehEBDQhDBChgAAQheAAhEhCgAhwh1QgxAwAABDQAABCAxAvQAvAvBEAAQBDAAAxgvQAwgvAAhCQAAhDgwgwQgxgvhDAAQhEAAgvAvg");
	this.shape_116.setTransform(879.1,499.5,0.387,0.387);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(3).p("ACWAAQAAA9gsAsQgrArg/AAQg+AAgrgrQgsgsAAg9QAAg8AsgsQAsgrA9AAQA+AAAsArQAsAsAAA8g");
	this.shape_117.setTransform(921.5,499.3,0.387,0.387);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A5A5A5").s().p("AhqBpQgrgsgBg9QABg8ArgsQAtgrA9AAQA+AAAtArQAsAsAAA8QAAA9gsAsQgtArg+AAQg9AAgtgrg");
	this.shape_118.setTransform(921.5,499.3,0.387,0.387);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AiUCTQg+g9AAhWQAAhVA+g9QA9g9BXAAQBXAAA+A9QA+A9AABVQAABWg+A9Qg+A9hXAAQhXAAg9g9gAhnhrQgsAsAAA9QAAA8AsAsQAsArA9AAQA/AAAsgrQAsgsAAg8QAAg9gsgsQgtgrg+AAQg9AAgsArg");
	this.shape_119.setTransform(921.5,499.5,0.387,0.387);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AiiChQhEhDAAheQAAhdBEhDQBDhCBfAAQBgAABDBCQBEBDAABdQAABehEBDQhDBChgAAQhfAAhDhCgAhxh1QgvAwgBBDQABBCAvAvQAxAvBDAAQBEAAAwgvQAwgvAAhCQAAhDgwgwQgwgvhEAAQhDAAgxAvg");
	this.shape_120.setTransform(921.4,499.5,0.387,0.387);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgiAPQgEAAgDgDQgDgDAAgFIAAgIQAAgEADgDQADgDAEAAIBFAAQAEAAADADQADADAAAEIAAAIQAAAFgDADQgDADgEAAg");
	this.shape_121.setTransform(901.5,483.1,0.387,0.387);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgHAyQgYAAgPgOQgQgOgBgWQABgWAQgOQAPgNAYAAIBCAAQACAAABAEQACAFAAAGIAABUg");
	this.shape_122.setTransform(936.4,487.1,0.387,0.387);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FBB03B").s().p("ArTHrQhsAAhNg9QhMg+AAhXIAAqMQAAgxArgjQAsgjA9AAIQrAAQA6AAAqAgIJcHCQAgAVAMAYQAGAOAAAQIAADYQAABWhLA9QhMA9hrAAg");
	this.shape_123.setTransform(900.7,482.8,0.387,0.387);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#F26321").p("ABVAiIB4CuIh9AAIiXjbQgKAMAAAVIAAC6IhtAAIAAiJQAAg6ASghQARgjAogTIhciFIB+AAIBhCOIBEiOIB+AAg");
	this.shape_124.setTransform(489.8,19.3,0.387,0.387);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#F26321").p("AgXgeIhBAAIAAhYICxAAIAADtIhwAAg");
	this.shape_125.setTransform(474.9,15.8,0.387,0.387);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#F26321").p("Ahdh0IgXgGIAAhVIDpAAIAABXIhlAAIA0FIIhzAAg");
	this.shape_126.setTransform(465.4,19.3,0.387,0.387);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#F26321").p("AA/g8QAAg8g/AAIitAAIAAhXIC1AAQA1AAAlASQAlARAVAjQATAiAAAwIAAEHIhwAAgAivBBQAAg+AagaIBaAAQgHAdAAAvIAACbIhtAAg");
	this.shape_127.setTransform(451.5,19.3,0.387,0.387);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#F26321").p("AhRDBQgqgZgYgrQgXgsgBg7IgBgXQAAgeAMggQALghAQgRIAGgGIgBgBQgOACgmAKIgVhSQAqgMA3gHQA4gIAwAAQBiAAA1AzQA0AzAABiIAAAnQAAA6gXAtQgYAsgqAYQgrAZg4AAQg1AAgrgZgAA2BwQARgMAKgYQAJgYAAgdIAAgmQAAg1gTgdQgTgcgmAAQgiAAgUAeQgSAegBA5IAAAfQAAAdAJAYQAKAYARAMQAQANAWAAQAWAAARgNg");
	this.shape_128.setTransform(426.7,19.2,0.387,0.387);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#F26321").p("Agmh4IgjAAIAAhXICTAAIAAGfIhwAAg");
	this.shape_129.setTransform(413.1,19.3,0.387,0.387);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#F26321").p("AiMDRIAAhmQASADAQAAQBKAAAbhCIAAimIhaAAIAAhYIDIAAIAADSQAAAgAHAjIAcCLIhoAAIgZhoIgCAAQgFAfgQAYQgRAZgbAOQgaAPgfAAQgJAAgSgCg");
	this.shape_130.setTransform(402.6,19.4,0.387,0.387);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#F26321").p("AAjhBQAAgagPgOQgQgPgbAAIh8AAIAAhXICEAAQAzAAAkASQAlARAUAiQATAhAAAuIAAELIhxAAg");
	this.shape_131.setTransform(382.6,19.3,0.387,0.387);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#F26321").p("AidDDIARhSQA2AMAjAAQAxAAAXgWQAYgVAAgsIAAihIi6AAIAAhYIErAAIAADmQAABjgzAvQgzAvhbAAQg5AAhBgRg");
	this.shape_132.setTransform(368.2,19.4,0.387,0.387);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#F26321").p("AC0B8IAABUIlnAAIAAhXIDGAAIAAi1QAAg8g/AAIhwAAIAAhXIB5AAQAzAAAmASQAlARAVAjQAUAjAAAvIAACsg");
	this.shape_133.setTransform(353.9,19.3,0.387,0.387);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#F26321").p("AiXgRQADgcALgZQAKgZAPgQIAFgEIgBgBQgOACgSAFQgSAGgNAFIgYhSQAogPA2gJQA2gJAwAAQBhAAAxAxQAyAwAABgIAADpIi3AAIAAhXIBGAAIAAiiQAAgogQgXQgQgWgdAAQg4AAgJBZIgYD1IhvAAg");
	this.shape_134.setTransform(330.1,19.1,0.387,0.387);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#F26321").p("ACjirQAqAoAABPIAAEBIhwAAIgBkLQAAg9g0AAIg1AAQgDAOgEAcQgDAWAAAUIAAB0QAAAqgPAfQgQAegcAPQgdARgoAAQgWAAgfgFIAAhXIAWAAQAxAAAAg0IAAhhQAAgXAGgaQAGgaAMgTIhAAAIAAhYIDUAAQBRAAArAog");
	this.shape_135.setTransform(311.4,19.4,0.387,0.387);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#F26321").p("ABUAiIB5CuIh9AAIiYjbQgJAMAAAVIAAC6IhtAAIAAiJQAAg5ASgiQARgjAogTIhciFIB+AAIBhCOIBDiOIB/AAg");
	this.shape_136.setTransform(294.3,19.3,0.387,0.387);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#F26321").p("AgXgeIhBAAIAAhYICwAAIAADtIhvAAg");
	this.shape_137.setTransform(279.4,15.8,0.387,0.387);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#F26321").p("AixjPIFjAAIAAGfIljAAgABCB5IAAjxIiDAAIAADxg");
	this.shape_138.setTransform(266.2,19.3,0.387,0.387);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#F26321").p("ACrhNIiJFXIh2AAICGlIIjcAAIAAjLIBwAAIAAB0IDlAAg");
	this.shape_139.setTransform(242.8,17,0.387,0.387);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#F26321").p("AgXgeIhBAAIAAhYICxAAIAADtIhwAAg");
	this.shape_140.setTransform(229.8,15.8,0.387,0.387);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#F26321").p("AgpASQAMgcAcgZQAagWANgTQAOgSAAgVQAAg2gyAAQgVAAgPAOQgPAOgBAdIhsAAQABgxAUggQAVggAkgQQAkgQAuAAQAxAAAkAQQAjAQATAeQATAfAAAsQAAAagKAWQgKAVgPARQgPARgcAYIgHAHQgTAQgHATQgHASgBAcIhdAAQAAgvALgegAAbCYQANAHAIANQAIANAAAQQAAAQgIANQgIAOgNAHQgOAHgRAAQgQAAgPgHQgOgIgHgNQgIgNAAgQQAAgQAIgNQAHgNAOgHQAOgIARAAQARAAAOAIg");
	this.shape_141.setTransform(218.6,17.5,0.387,0.387);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F26321").s().p("ABPDQIiXjbQgKAMAAAVIAAC6IhtAAIAAiJQAAg6ASghQARgjAogTIhciFIB+AAIBhCOIBEiOIB+AAIh9DxIB4Cug");
	this.shape_142.setTransform(489.8,20.5,0.387,0.387);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F26321").s().p("AgXB3IAAiVIhBAAIAAhYICxAAIAADtg");
	this.shape_143.setTransform(474.8,17.1,0.387,0.387);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F26321").s().p("AgvDQIgulEIgXgGIAAhVIDpAAIAABXIhlAAIA0FIg");
	this.shape_144.setTransform(465.4,20.5,0.387,0.387);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F26321").s().p("AA/DQIAAkMQAAg8g/AAIitAAIAAhXIC1AAQA1AAAmASQAkARAVAjQATAiABAwIAAEHgAiuDQIAAiPQAAg+AZgaIBaAAQgHAdABAvIAACbg");
	this.shape_145.setTransform(451.4,20.5,0.387,0.387);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F26321").s().p("AhRDBQgrgZgXgrQgYgsgBg7IAAgXQAAgeALggQAMghAPgRIAGgGIgBgBIg0AMIgVhSQAqgMA4gHQA3gIAxAAQBiAAA0AzQA1AzAABiIAAAnQAAA6gYAtQgXAsgrAYQgqAZg4AAQg1AAgrgZgAgohfQgTAegBA5IAAAfQAAAdAKAYQAKAYAQAMQAQANAWAAQAWAAASgNQAQgMAKgYQAKgYAAgdIAAgmQAAg1gUgdQgTgcglAAQgjAAgTAeg");
	this.shape_146.setTransform(426.7,20.5,0.387,0.387);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F26321").s().p("AgmDQIAAlIIgjAAIAAhXICTAAIAAGfg");
	this.shape_147.setTransform(413.1,20.5,0.387,0.387);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#F26321").s().p("AiMDRIAAhmQATADAPAAQBLAAAbhCIAAimIhbAAIAAhYIDJAAIAADSQAAAgAHAjIAcCLIhoAAIgZhoIgCAAQgFAfgRAYQgRAZgaAOQgbAPgeAAIgcgCg");
	this.shape_148.setTransform(402.5,20.6,0.387,0.387);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#F26321").s().p("AAjDQIAAkRQAAgagPgOQgQgPgbAAIh8AAIAAhXICEAAQAyAAAlASQAlARATAiQAUAhAAAuIAAELg");
	this.shape_149.setTransform(382.6,20.5,0.387,0.387);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F26321").s().p("AidDEIARhSQA2ALAjAAQAyAAAXgWQAXgWAAgrIAAihIi6AAIAAhYIErAAIAADmQAABjgzAvQgzAuhbAAQg4AAhCgPg");
	this.shape_150.setTransform(368.2,20.7,0.387,0.387);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F26321").s().p("AizDQIAAhXIDGAAIAAi1QAAg8g/AAIhwAAIAAhXIB5AAQAzAAAmASQAlARAVAjQAUAjAAAvIAACsIAwAHIAABUg");
	this.shape_151.setTransform(353.9,20.5,0.387,0.387);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#F26321").s().p("AANDVIAAhXIBGAAIAAiiQAAgogQgXQgQgVgdgBQg3ABgJBYIgYD1IhwAAIAbjmQADgbAKgaQALgZAOgQIAFgDIAAgCQgPACgRAFIggALIgXhSQAngPA3gIQA2gKAwABQBggBAxAxQAyAwAABgIAADpg");
	this.shape_152.setTransform(330.1,20.3,0.387,0.387);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#F26321").s().p("AjMDPIAAhXIAWAAQAyAAAAg0IAAhhQAAgZAFgYQAGgaAMgTIhAAAIAAhYIDVAAQBRAAAqApQAqAnAABPIAAEBIhwAAIgBkLQAAg9g0AAIg1AAQgDAOgEAcQgDAWAAATIAAB1QAAAqgPAfQgQAegcAQQgdAPgnAAQgXABgfgFg");
	this.shape_153.setTransform(311.4,20.7,0.387,0.387);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F26321").s().p("ABPDQIiYjbQgIAMgBAVIAAC6IhtAAIAAiJQAAg5ASgiQARgjAogTIhciFIB+AAIBhCOIBEiOIB+AAIh9DxIB4Cug");
	this.shape_154.setTransform(294.3,20.5,0.387,0.387);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#F26321").s().p("AgXB3IAAiVIhAAAIAAhYICvAAIAADtg");
	this.shape_155.setTransform(279.4,17.1,0.387,0.387);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F26321").s().p("AixDQIAAmfIFjAAIAAGfgAhBB5ICDAAIAAjxIiDAAg");
	this.shape_156.setTransform(266.2,20.5,0.387,0.387);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F26321").s().p("AhUEKICGlIIjcAAIAAjLIBxAAIAAB0IDkAAIAABIIiJFXg");
	this.shape_157.setTransform(242.7,18.3,0.387,0.387);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F26321").s().p("AgXB3IAAiVIhBAAIAAhYICxAAIAADtg");
	this.shape_158.setTransform(229.8,17.1,0.387,0.387);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F26321").s().p("AgkD7QgNgIgIgNQgHgNAAgQQAAgQAHgNQAIgNANgHQAPgIARAAQARAAANAIQAOAHAIANQAIANAAAQQAAAQgIANQgIAOgOAHQgNAHgRAAQgQAAgQgHgAg0BfQAAgvALgeQALgcAcgZQAagWAOgTQANgSAAgVQAAg2gxAAQgVAAgPAOQgPAOgBAdIhsAAQAAgxAVggQAVggAkgQQAkgQAuAAQAxAAAjAQQAkAQASAeQAUAfgBAsQABAagLAWQgIAUgQASQgPARgcAYIgHAHQgTAQgHATQgIASgBAcg");
	this.shape_159.setTransform(218.6,18.8,0.387,0.387);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("EhZ7AOqIAsgcQAUgPgNgHQgNgHhHAAQhZACiagDQhfgChTgFQiQgJhHgQQg9gOgUgVQgMgNgBgbQgBgOD2gNQBrgGAZgEQApgFg9gFIDXgNQCcgKBLgJQBEgIAwgLQA9gMA1gTQBAgXAsgjQAZgUATgaQAOgTAPggIAHgRIAQgyQAIgaANgVIAGgIIAegjQADgEgFABIgIACIgMAHQgWAOgNARQgRAVgSAtIgRAiQgRAfgQASQgXAagdASQgXAPgsARQhBAXhZAOQhDAKhkAHQiUAKisAEQiaADhBgLQg9gKAJgRQAFgLArgXQAsgXAFgKQAJgSg9gKIrNAoQg9gGAJgPQAGgLArgTQAtgUAEgEQAJgKg8AEQlSACpFAgQlQATrNAsQAAgHgXgMQgYgMAAgGQgBgUDfgVMAuHgC0QBpgIAggDQBJgIAsgJIAYgGIALgCIAAgBQAPgpAMgYQAdg9Awg1QAsgxA/goQAxgfBMgeQA+gWA/gOQAogJA1gJQBQgNBZgIQBogJDOgLIErgNQSXg0TFgIQJLgEJmAIIJYAKQC+AEBmABQCCAABrgDQgjhBgNhFQgHgnAAgsQABgdADgWQAEgdAHgZQAIgcAJgVQAIgSANgZQAOgaAhgsIA8g8IAqgeIAxgeQA0gbBEgVIBCgQQAogKAYgHICCgiQANgDAVgDIAkgFIDcgUIBKgEIAsgCQCmgHCKgDQR3gfT6BeQIUAnKXBHQDoAYFpApIJMBDQLOBQG6AbQEmARERgDQE2gEDsgiIC+gbQBDgKAfgBQAfgCgHAJQgDAEgNAHIgdAOQgdANhCAZIiKApIhSATIkFAwIAqgEQAagDATAAQAbgBArADIAhACQAPAAAWgBQAsgDA4gMQABARg8AaQgsASgiAKQgtANhDAQIhFANQggAGgtAHQgjAGgzAFIhfAKQgZAChPAFIhwAFIj6AAIGQAIIBCgBIBDgCQA+AEANAHQAKAFgSALIgpAVQgZAMAAAIIhCACIhBABIhzABIhRADQgeACgBAFIgBA3IFpgBQAqAAA8gDIBggFIAlgCIgGAAIhzAIIhSAHQgfAEAAAFIABA2IiRAGQhmABg3gBIimgGIipgJQhagGjzgUQjGgQhlgFIgEAoQEfAlFaAPICrAGIHWgBQg8AGguAHQgnAGgQAGQgPAFgFAIQgDAGAAAMQi8AFjigNQiegJj7gWQlsghgqgDQjngTivgFQD4AbEjAbQjlAVpchKIn4g/QkggjilgNQuYhJnOgeQsEgwqpgHIi4gBIi3AAIluAGIkVAJIgoAEQgIABgLADIgTAGIgTAFQgLADgGAFQgJAGAAAKQAAAJAJAJQAJAJAXANIAyAcIAEAEIAGAIQAOAUAJAQIAMAWQAGAMAGARIAKAgQAFAYABANQADAQAAAZQAAAUgDAVQgDATgGAWQgGAVgHAQQgLAagWAhIgEAHIgOARIgHAIQgIAKgNAMIggAcIgNAJQgkAZguAVQgwAWhIAWQhcAahrASQhWAPhlAKQhmALhzAHQhrAGhpABQiOADkSgCQp+gCi6AAQmfABmiAEQn2AFlOAHQnAAJmFALQnPAOlxAPIjOAJIjLAJQh2AIhEAIQgrAEgnAHIgkAIIgBAAIgEABIgDABIAAAAIgDABIAAABIgdBBIgRAeIgUAfQgUAcgcAeIgaAZIg1AqIgZARQgOAIgjATQguAXgpAOQgVAHgSAFIhqAaQguAKhPAKQg7AHg3ADQgBgIAbgQg");
	this.shape_160.setTransform(794.4,527.7,0.387,0.387);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("ECGrAIVUgg+gCLghgAAsIoWANIoYATQlcANjGADQkzAEj+gOQkbgRkXgmQjbgelIg6IoRhhQktg1jZgcIh/gPIiAgNQhzgLiOgIQjngOkmgEQiNgCmKgBIobgCQuBgCznABUggnAACgiOAALQm1gECuglQCBgcG/gqQhLAGhNgMQhQgMhSAIQAAgkDygnQEcgtG9gNInmAFQhggHAjgWQAKgGAcgNQAWgMAAgJQCigBA9gCQBlgEAAgJIAAg3InhAFIA3gCQBlgEAAgJIAAg3QCkgIGUADQGXADCggIIAAgpQjGgHlyAHQmVAJijABQBwgKAegNQAUgJAAgYQCpgGIxADQHFADEVgaInnAEQDBgqItADIHLAFQEIACCVgFQIigRLKgDQIDgCMvAGIKdAFIKXAEQGqACDkAGQFoAKEaAZQE1AaG4BHQD4AoHnBSQGDA9FNAVQEsATGtgKQCEgEDzgJIF9gNIF8gLQB/gDD9gEQLOgMMIAMQAAAJgXANQgcAQgLAHQglAbBiAKQGnAhCRAxQA2ASAQAXQAKANgBAbQAAANjfgFQi3gEBRAPQh4gDkZgCQkNABhmADQimAFgVAHQgZAJCsAKQAYAEA5AEIB0AGQBWADDLADQDaAHBHAEQCQAKA1APQA1APgIARQgGAKgpATQgpAUgFAKQgJAQA2APQFiAJElAMQA1ALgJAPQgGAKgpAPQgqAQgEAEQgIAJA1ACQEZAaIhAdQJ0AiE+AXQAAAHATAPQATAOAAAGQgBAKgpAEQgbACgxAAIhVgBg");
	this.shape_161.setTransform(475.6,28.3,0.387,0.478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.main_txt},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text_1},{t:this.text},{t:this.parking},{t:this.safe},{t:this.storage},{t:this.seat},{t:this.gas},{t:this.shape},{t:this.Long},{t:this.engine_txt},{t:this.passenger_txt}]}).wait(1));

	// Layer 1
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("EgqMAGBQgPg7APgzQANgrAng0IBVhpQA7hJAphAQARgagkg0Qg0hEgbgpQhpikB1iQQBnh/CygrQCbglFBAHQDJAEI2AaQJRAVIxgKQFPgGISgOQGcgJDKAIQEEAKCWAsQCgAuBbBkQA5A9AjBYQANAgAPAwIAbBWQAjBsAtBPQA/BtBoBmIAFAFQAgAfAHAqQAGAmgSAkQgRAlgiAUQglAVgtgEQkegekdgFQkFgFjvARQjJAPjfAgQh9ATkVAwQkPAvinAYQl1A7kfAnQoZBJmWASQiLAGh9AAQvHAAhdl2g");
	this.shape_162.setTransform(276.6,117.4,1,1.109);

	this.timeline.addTween(cjs.Tween.get(this.shape_162).wait(1));

	// Layer 1
	this.text_5 = new cjs.Text("", "12px 'Heebo-Regular'");
	this.text_5.lineHeight = 20;
	this.text_5.parent = this;
	this.text_5.setTransform(31.4,183.8,0.444,0.444);

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(1));

	// Layer 1
	this.green = new lib.green();
	this.green.name = "green";
	this.green.parent = this;
	this.green.setTransform(438,322.1);

	this.timeline.addTween(cjs.Tween.get(this.green).wait(1));

	// Layer 1
	this.yellow = new lib.yellow();
	this.yellow.name = "yellow";
	this.yellow.parent = this;
	this.yellow.setTransform(340.6,303.1);

	this.timeline.addTween(cjs.Tween.get(this.yellow).wait(1));

	// Layer 1
	this.red = new lib.red();
	this.red.name = "red";
	this.red.parent = this;
	this.red.setTransform(245.3,299.1);

	this.timeline.addTween(cjs.Tween.get(this.red).wait(1));

	// Layer 1
	this.purple = new lib.purple();
	this.purple.name = "purple";
	this.purple.parent = this;
	this.purple.setTransform(10,334.3);

	this.timeline.addTween(cjs.Tween.get(this.purple).wait(1));

	// Layer 1
	this.blue = new lib.blue();
	this.blue.name = "blue";
	this.blue.parent = this;
	this.blue.setTransform(175.5,365.6,1,1,0,0,0,47,28.3);

	this.timeline.addTween(cjs.Tween.get(this.blue).wait(1));

	// Layer 1
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("EhZ7AOqIAsgcQAUgPgNgHQgNgHhHAAQhZACiagDQhfgChTgFQiQgJhHgQQg9gOgUgVQgMgNgBgbQgBgOD2gNQBrgGAZgEQApgFg9gFIDXgNQCcgKBLgJQBEgIAwgLQA9gMA1gTQBAgXAsgjQAZgUATgaQAOgTAPggIAHgRIAQgyQAIgaANgVIAGgIIAegjQADgEgFABIgIACIgMAHQgWAOgNARQgRAVgSAtIgRAiQgRAfgQASQgXAagdASQgXAPgsARQhBAXhZAOQhDAKhkAHQiUAKisAEQiaADhBgLQg9gKAJgRQAFgLArgXQAsgXAFgKQAJgSg9gKIrNAoQg9gGAJgPQAGgLArgTQAtgUAEgEQAJgKg8AEQlSACpFAgQq2ArlnAUQAAgHgXgMQgYgMAAgGQgBgUDfgVMAuHgC0QBpgIAggDQBJgIAsgJIAYgGIALgCIAAgBQAPgpAMgYQAdg9Awg1QAsgxA/goQAxgfBMgeQA+gWA/gOQAogJA1gJQBQgNBZgIQBogJDOgLIErgNQSXg0TFgIQJLgEJmAIIJYAKQC+AEBmABQCCAABrgDQgjhBgNhFQgHgnAAgsQABgdADgWQAEgdAHgZQAIgcAJgVQAIgSANgZQAOgaAhgsIAcgeIA+g1IA9glQA0gbBEgVIBCgQQAogKAYgHICCgiQANgDAVgDIAkgFIDcgUIBKgEIAsgCQCmgHCKgDQR3gfT6BeQIUAnKXBHQDoAYFpApIJMBDQFXAmDxAXQE6AeEGAQQEmARERgDQE2gEDsgiIC+gbQBDgKAfgBQAfgCgHAJQgDAEgNAHIgdAOQgdANhCAZIiKApIiqAmIitAdIAqgEQAagDATAAQAbgBArADIAhACQAPAAAWgBQAsgDA4gMQABARg8AaQgsASgiAKQgtANhDAQIhFANQggAGgtAHQgjAGgzAFIhfAKQgZAChPAFIhwAFIivABIhLgBIBLABIFFAHIBCgBIBDgCQA+AEANAHQAKAFgSALIgpAVQgZAMAAAIIhCACIhBABIhzABIhRADQgeACgBAFIgBA3IFpgBQAqAAA8gDIBggFIAlgCIgGAAIhzAIIhSAHQgfAEAAAFIABA2IiRAGQhmABg3gBIimgGIipgJQhagGjzgUQjGgQhlgFIgEAoQEfAlFaAPICrAGIHWgBQg8AGguAHQgnAGgQAGQgPAFgFAIQgDAGAAAMQi8AFjigNQiegJj7gWQlsghgqgDQjngTivgFQD4AbEjAbQjlAVpchKIn4g/QkggjilgNQuYhJnOgeQsEgwqpgHIi4gBIi3AAIluAGIkBAIIgUABIgoAEQgIABgLADIgTAGIgTAFQgLADgGAFQgJAGAAAKQAAAJAJAJQAJAJAXANIAyAcIAEAEIAGAIQAOAUAJAQIAMAWQAGAMAGARIAKAgQAFAYABANQADAQAAAZQAAAUgDAVQgDATgGAWQgGAVgHAQQgLAagWAhIgEAHIgOARIgHAIQgIAKgNAMIgSARIgbAUQgkAZguAVQgwAWhIAWQhcAahrASQhWAPhlAKQhmALhzAHQhrAGhpABQiOADkSgCQp+gCi6AAQmfABmiAEQn2AFlOAHQnAAJmFALQnPAOlxAPIjOAJIjLAJQh2AIhEAIQgrAEgnAHIgkAIIgBAAIgEABIgDABIAAAAIgDABIAAABIgdBBIgRAeIgUAfQgUAcgcAeIgaAZIg1AqIgZARQgOAIgjATQguAXgpAOQgVAHgSAFIhqAaQguAKhPAKQg7AHg3ADQgBgIAbgQg");
	this.shape_163.setTransform(215,372.5,0.384,0.464);

	this.timeline.addTween(cjs.Tween.get(this.shape_163).wait(1));

	// Layer 1
	this.text_6 = new cjs.Text("", "12px 'TimesNewRomanPSMT'");
	this.text_6.lineHeight = 19;
	this.text_6.parent = this;
	this.text_6.setTransform(682.1,230.1);

	this.text_7 = new cjs.Text("", "12px 'TimesNewRomanPSMT'");
	this.text_7.lineHeight = 19;
	this.text_7.parent = this;
	this.text_7.setTransform(16.5,414.4);

	this.text_8 = new cjs.Text("", "12px 'TimesNewRomanPSMT'");
	this.text_8.lineHeight = 19;
	this.text_8.parent = this;
	this.text_8.setTransform(-145.5,454.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#FFFFFF").p("AMZAAQAAChg+CUQg9CNhtBuQhuBuiPA8QiSA/iiAAQigAAiUg/QiOg8huhuQhthug8iNQg/iUAAihQAAigA/iUQA8iOBthuQBuhtCOg8QCUg/CgAAQCiAACSA/QCPA8BuBtQBtBuA9COQA+CUAACgg");
	this.shape_164.setTransform(-242.2,534.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#9BC6F9").s().p("Ak0LaQiOg8huhuQhthtg8iPQg/iTABihQgBigA/iTQA8iPBthtQBuhuCOg8QCUg+CgAAQChAACUA+QCOA8BuBuQBtBtA9CPQA9CTABCgQgBChg9CTQg9CPhtBtQhuBuiOA8QiUA/ihAAQigAAiUg/g");
	this.shape_165.setTransform(-242.2,534.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#FFFFFF").p("AMZAAQAAChg+CUQg9CNhtBuQhuBuiOA8QiUA/ihAAQigAAiUg/QiOg8huhuQhthug8iNQg/iUAAihQAAigA/iUQA8iOBthuQBuhtCOg8QCUg/CgAAQChAACUA/QCOA8BuBtQBtBuA9COQA+CUAACgg");
	this.shape_166.setTransform(0.8,628.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#9BC6F9").s().p("Ak0LaQiOg8huhtQhthvg8iNQg/iUABihQgBigA/iUQA8iOBthuQBuhtCOg8QCUg/CgAAQChAACUA/QCOA8BuBtQBtBuA9COQA9CUABCgQgBChg9CUQg9CNhtBvQhuBtiOA8QiUA+ihAAQigAAiUg+g");
	this.shape_167.setTransform(0.8,628.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#FFFFFF").p("AMYAAQAAChg+CUQg8CNhuBuQhtBuiPA8QiTA/ihAAQigAAiUg/QiOg8hthuQhuhug8iNQg+iUAAihQAAigA+iUQA8iOBuhuQBthtCOg8QCUg/CgAAQChAACTA/QCPA8BtBtQBuBuA8COQA+CUAACgg");
	this.shape_168.setTransform(490.7,628.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#9BC6F9").s().p("Ak0LaQiOg8hthtQhuhvg8iNQg+iUAAihQAAigA+iUQA8iOBuhuQBthtCOg8QCUg/CgAAQChAACTA/QCPA8BtBtQBuBuA8COQA+CUAACgQAAChg+CUQg8CNhuBvQhtBtiPA8QiTA+ihAAQigAAiUg+g");
	this.shape_169.setTransform(490.7,628.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#FFFFFF").p("AMYAAQAAChg+CUQg8CNhuBuQhtBuiPA8QiTA/ihAAQigAAiUg/QiOg8hthuQhuhug8iNQg+iUAAihQAAigA+iUQA8iOBuhuQBthtCOg8QCUg/CgAAQChAACTA/QCPA8BtBtQBuBuA8COQA+CUAACgg");
	this.shape_170.setTransform(1005.7,628.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#9BC6F9").s().p("Ak0LaQiOg8hthtQhuhvg8iNQg+iUAAihQAAigA+iUQA8iOBuhuQBthtCOg8QCUg/CgAAQChAACTA/QCPA8BtBtQBuBuA8COQA+CUAACgQAAChg+CUQg8CNhuBvQhtBtiPA8QiTA+ihAAQigAAiUg+g");
	this.shape_171.setTransform(1005.7,628.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#FFFFFF").p("AMYAAQAAChg+CUQg8CNhuBuQhtBuiPA8QiTA/ihAAQigAAiUg/QiOg8hthuQhuhug8iNQg+iUAAihQAAigA+iUQA8iOBuhuQBthtCOg8QCUg/CgAAQChAACTA/QCPA8BtBtQBuBuA8COQA+CUAACgg");
	this.shape_172.setTransform(769.7,534.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#9BC6F9").s().p("Ak0LaQiOg8hthuQhuhtg8iPQg+iTAAihQAAigA+iTQA8iPBuhtQBthuCOg8QCUg+CgAAQChAACTA+QCPA8BtBuQBuBtA8CPQA+CTAACgQAAChg+CTQg8CPhuBtQhtBuiPA8QiTA/ihAAQigAAiUg/g");
	this.shape_173.setTransform(769.7,534.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#FFFFFF").p("AMYAAQAAChg+CUQg8CNhuBuQhtBuiOA8QiUA/ihAAQigAAiTg/QiOg8huhuQhuhug8iNQg+iUAAihQAAigA+iUQA8iOBuhuQBuhtCOg8QCTg/CgAAQChAACUA/QCOA8BtBtQBuBuA8COQA+CUAACgg");
	this.shape_174.setTransform(252.7,534.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#9BC6F9").s().p("AkzLaQiOg8huhuQhuhtg8iPQg+iTAAihQAAigA+iTQA8iPBuhtQBuhuCOg8QCTg+CgAAQChAACUA+QCOA8BtBuQBuBtA8CPQA+CTAACgQAAChg+CTQg8CPhuBtQhtBuiOA8QiUA/ihAAQigAAiTg/g");
	this.shape_175.setTransform(252.7,534.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#1C3B4F").s().p("EAixAgRMhPTAAAIAAiKIgDksIgBnNIAAgtIgBk0IADqSIgBjoIAAgZIAD3/IAAmsMBZKAAAMAAABAiIieABInZgBg");
	this.shape_176.setTransform(276,206.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.text_8},{t:this.text_7},{t:this.text_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,200,1688.9,709.2);
// library properties:
lib.properties = {
	id: '2030A7E771091F4985B1FA7BF5B26DBB',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/12_6__Cars_NEW_atlas_.png?1529490295899", id:"12_6__Cars_NEW_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2030A7E771091F4985B1FA7BF5B26DBB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;