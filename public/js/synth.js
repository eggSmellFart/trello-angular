var oSynth = {
	context: new window.AudioContext(),
	
	init: function (duration) {
		var osc = oSynth.context.createOscillator();
		osc.frequency.value = 440;
		osc.connect(oSynth.context.destination);
		osc.start(0);
		osc.stop(duration);

		var gain = oSynth.context.createGain();
		gain.gain.value = 100;
		gain.connect(osc.frequency);

		var lfo = oSynth.context.createOscillator();
		lfo.frequency.value = 1;
		lfo.connect(gain);
		lfo.start(0);
		lfo.stop(duration); 

		// return 'done';
		
	},
	start: function () {
		$('.play').click(function (ev) {
			console.log(ev);
			$(this).toggleClass('fa-pause','fa-play', 'inactive');
			oSynth.init(2);

		})
	}

}
// oSynth.init(1);
oSynth.start();
console.log(oSynth.context);

