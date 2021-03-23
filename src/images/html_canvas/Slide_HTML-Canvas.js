(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.PlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOBBIAAg7IgjhGIAiAAIAPArIAQgrIAiAAIgjBGIAAA7g");
	this.shape.setTransform(53.175,24.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUBBIgEgWIgfAAIgFAWIgeAAIAiiBIAhAAIAiCBgAgJAUIATAAQgHgcgDgaIAAAAQgDAbgGAbg");
	this.shape_1.setTransform(43.95,24.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZBBIAAiBIAcAAIAABjIAYAAIAAAeg");
	this.shape_2.setTransform(35.3,24.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBBIAAiBIAlAAQASAAAMALQAMALAAASQAAATgMAKQgMALgUAAIgFAAIAAAxgAgJgIQAJgBAFgDQAEgEAAgIQAAgIgEgDQgFgEgJAAg");
	this.shape_3.setTransform(26.425,24.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AmQDrIAAnVIMgAAIAAHVg");
	this.shape_4.setTransform(40.05,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,47);


(lib.Circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AjqDrQhihhAAiKQAAiIBihiQBihiCIAAQCKAABhBiQBiBiAACIQAACKhiBhQhhBiiKAAQiIAAhihig");
	this.shape.setTransform(33.25,33.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,66.5);


// stage content:
(lib.ВОССТАНОВИТЬ_Безымянный2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {animation1:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,59,119];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		function playAnimation() {
			//this.play();
			window.open("http://localhost:8080/?slideIndex=0&stepIndex=1", "noopener");
		}
		
		this.play_btn.addEventListener("click", playAnimation.bind(this));
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_119 = function() {
		this.stop();
		
		function replayAnimation() {
			this.gotoAndPlay("animation1");
		}
		
		this.play2_btn.addEventListener("click", replayAnimation.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(60).call(this.frame_119).wait(1));

	// buttons
	this.play_btn = new lib.PlayButton();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(464.05,354.55,1,1,0,0,0,40.1,23.5);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.play2_btn = new lib.PlayButton();
	this.play2_btn.name = "play2_btn";
	this.play2_btn.setTransform(464.05,354.55,1,1,0,0,0,40.1,23.5);
	new cjs.ButtonHelper(this.play2_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.play_btn}]}).to({state:[{t:this.play2_btn}]},119).wait(1));

	// Слой_2
	this.instance = new lib.Circle("synched",0);
	this.instance.setTransform(266.05,200.05,1,1,0,0,0,33.3,33.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({scaleX:2.4737,scaleY:2.6541,x:266.15,y:200.2},29).to({scaleX:1,scaleY:1,x:266.05,y:200.05},30).wait(1));

	// Слой_1
	this.instance_1 = new lib.Circle("synched",0);
	this.instance_1.setTransform(53.3,217.3,1,1,0,0,0,33.3,33.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:495.3},59).to({_off:true},1).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(320,361.8,208.5,16.30000000000001);
// library properties:
lib.properties = {
	id: 'F4E2C01A80476443A57A89FB788DC75F',
	width: 600,
	height: 500,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['F4E2C01A80476443A57A89FB788DC75F'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;