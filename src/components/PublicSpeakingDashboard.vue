<template>
  <div id="body" class="dashboard">
    <h1 id="mainTitle"> <img id="talking" alt="image of voice waves leaving someone's mouth. Attribution: Speak Icon, by Voysla, 'https://www.flaticon.com/free-icons/speak'" src="talking.png"> {{ msg }} </h1>
		<p id="messageTwo">
			{{ msg2 }} 
		</p>
		<p id="messageThree"> 
			{{ msg3 }} 
		</p>
		<span id="timeHolder">Time: </span>
		<!--<span><button  v-bind:style="{ backgroundColor: WPMColor}" v-if="!show" v-on:click="selectWPM" class="optionsButton" id="optionWPM"> Words Per Minute</button><button v-bind:style="{ backgroundColor: textEmotionColor}" v-if="!show" v-on:click="selectTextEmotion" class="optionsButton" id="optionEmotionsText"> Emotions in Text</button></span>
		<span><button v-bind:style="{ backgroundColor: voiceEmotionColor}" v-if="!show" v-on:click="selectVoiceEmotion" class="optionsButton" id="optionEmotionVoice"> Emotions in Voice</button><button v-bind:style="{ backgroundColor: faceEmotionColor}" v-if="!show" v-on:click="selectFaceEmotion" class="optionsButton" id="optionEmotionsFace"> Emotions in Face</button></span><br>-->
		<span><span v-if="!show3" id="dropdownWrapper">
		<label for="speakingTime" alt="Choose Desired Speech Length:"></label>
			<select name="speakingTime" id="speakingTime">
				<option value="nope" selected>Choose Target Speaking Time - (Gives 30 and 15 Sec Warnings Before Selected Time)</option> 
				<option value="60000">1 Min</option> 
				<option value="180000">3 Min</option> 
				<option value="300000">5 Min</option> 
				<option value="600000">10 Min</option> 
				<option value="900000">15 Min</option> 
				<option value="1200000">20 Min</option> 
				<option value="1500000">25 Min</option> 
				<option value="1800000">30 Min</option> 
				<option value="2700000">45 Min</option> 
				<option value="3600000">60 Min</option> 
			</select>
		</span>
		<button id="begin" v-if="show3" v-on:click="begin(); selectWPM(); selectTextEmotion(); selectVoiceEmotion(); selectFaceEmotion()">Begin</button><button id="start"  v-if="!show3" v-on:click="initiateVoiceControl">Start</button><button id="stop" v-if="!show3" v-on:click="stopVoiceControl">Stop</button><button id="reset"  v-if="!show3" v-on:click="reset">Reset</button></span>
		<!--<br><button id="next" v-if="!show" v-on:click="next">Next</button>--><br>
		<span id="rawData"></span>
		<button v-if="!showTime" class="title" id="timer">{{ time }}</button>
		<span v-if="!show3" id="volume-visualizer-wrapper"><button id="volume-visualizer"></button></span>
		<ul v-if="!show3" id="output"></ul>
		<span><button v-if="!show3" id="dataShowButton" v-on:click="unhideData">View Raw Data</button><button v-if="!show3" id="dataHideButton" v-on:click="hideData">Hide Raw Data</button></span>
<div id="container" class="container">
<video id="video" height="500" width="500" autoplay></video>
</div>
<div class="result-container">
<div id="emotion">Emotion</div>
<div id="gender">Gender</div>
<div id="age">Age </div>
</div>


		<!--FEEDBACK SECTION-->
		
		<!--WPM-->
		<span v-if="!showWPM" id="wpmChart"></span>
		<span v-if="!showVolume" id="volumeChart"></span>
		<span v-if="!showTextEmotion" id="textEmotionChart"></span>
		<!--<p v-if="!showWPM" id="wpm">{{ wpm }} <br><b>Overall Average Words Per Minute</b></p><br>-->
  </div>
</template>

<script>
import paralleldots from 'paralleldots'
import Plotly from 'plotly.js-dist'
import * as faceapi from 'face-api.js'
export default {
  name: 'publicSpeakingDashboard',
  props: {
  }, 
  data () {
		return {
			msg: 'Public Speaking Dashboard',
			msg2: "An AI-powered tool to help you hone your public speaking skills.",
			msg3: "",
			wordsSpoken: 'START', 
			output: 'Recognized Text',
			workingOutput: '',
			workingTime: 0, 
			grabTimeInterval: '', 
			registerWPMInterval: '',
			getEmotionStatsInterval: '',
			initialTime: 0,  
			time: "00:00",
			timeElapsed: 0, 
			timeDifference: 0, 
			wordCount: 0,
			totalWords: 0, 
			wordCountDividedByTime: 0,
			stop: false, 
			wpm: 0,
			anger: 0, 
			fear: 0, 
			excitement: 0, 
			boredom: 0, 
			sadness: 0, 
			happiness: 0, 
			continuous: true, 
			show: true, 
			show2: true, 
			show3: true, 
			show4: true,
			showWPM: true,
			showTEXTEMOTION: true, 
			showTime: true,
			showData: true,   
			WPMSelected: false,
			WPMColor: '#CBC3E3',  
			showTextEmotion: true, 
			textEmotionSelected: false, 
			textEmotionColor: '#CBC3E3', 
			showVoiceEmotion: true, 
			voiceEmotionSelected: false, 
			voiceEmotionColor: '#CBC3E3', 
			showFaceEmotion: true, 
			faceEmotionSelected: false, 
			faceEmotionColor: '#CBC3E3', 
			textEmotionData: '', 
			overallDataObject: '', 
			currentDataObject: '', 
			dataNamer: 0,
			time1: true,
			time2: false, 
			placeHolderForTimeCheck: 0,
			volumeCallback: null, 
			volumeInterval: null, 
			volumeValue: 0, 
			volumeNumber: 0, 
			showVolume: true, 
		}
	},
	
	created: function () {
	console.log("Landing page loaded")
	}, 

	methods: {
	
		begin: function () {
			//initiate speech recognition and ask for microphone permission
			this.analyzeFace()
			window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
			let recognition = new window.SpeechRecognition();
			recognition.start()
			this.show = false
			this.show3 = false
			this.msg2 = ''
			this.msg3 = 'Choose a desired speech length. Click start. Then, click stop when finished.'
			console.log("Dashboard page loaded")
		},
		
		startVolumeMeter: function () {
			(async () => {
				const volumeVisualizer = document.getElementById('volume-visualizer');
				// Initialize
				try {
					const audioStream = await navigator.mediaDevices.getUserMedia({
						audio: {
							echoCancellation: true
						}
			});

		const audioContext = new AudioContext();
		const audioSource = audioContext.createMediaStreamSource(audioStream);
		const analyser = audioContext.createAnalyser();
		analyser.fftSize = 512;
		analyser.minDecibels = -127;
		analyser.maxDecibels = 0;
		analyser.smoothingTimeConstant = 0.4;
		audioSource.connect(analyser);
		const volumes = new Uint8Array(analyser.frequencyBinCount);
		this.volumeCallback = () => {
			analyser.getByteFrequencyData(volumes);
			let volumeSum = 0;
				for(const volume of volumes)
					volumeSum += volume;
					const averageVolume = volumeSum / volumes.length;
					// Value range: 127 = analyser.maxDecibels - analyser.minDecibels;
					volumeVisualizer.style.setProperty('--volume', (averageVolume * 100 / 127) + '%');
					this.volumeNumber = averageVolume
					this.showVolume = false
		};
		} catch(e) {
			console.error('Failed to initialize volume visualizer, simulating instead...', e);
			let lastVolume = 50;
		this.volumeCallback = () => {
			const volume = Math.min(Math.max(Math.random() * 100, 0.8 * lastVolume), 1.2 * lastVolume);
			lastVolume = volume;
			volumeVisualizer.style.setProperty('--volume', volume + '%');
		};
		}
		// Use

		if(this.volumeCallback !== null && this.volumeInterval === null)
			this.volumeInterval = setInterval(this.volumeCallback, 100);

		})();
		},
		
		setVolume: function () {
			this.volumeValue = Math.round(this.volumeNumber)
		}, 	

		selectWPM: function () {
			
			if (this.WPMSelected == false) {
				this.msg2 = ""
				this.WPMSelected = true
				this.WPMColor = '#f48d79'
				if (this.WPMSelected == true)	 {
				this.showWPM = false
			}
			}
			
			else {
				this.WPMSelected = false
				this.WPMColor = '#CBC3E3'
				if (this.WPMSelected == false)	 {
				this.showWPM = true
			}
			}
		},
		
		selectTextEmotion: function () {
		
			if (this.textEmotionSelected == false) {
				this.msg2 = ""
				this.textEmotionSelected = true
				this.textEmotionColor = '#f48d79'
				if (this.textEmotionSelected == true)	 {
				this.showTextEmotion = false
			}	
			}
			
			else {
				this.textEmotionSelected = false
				this.textEmotionColor = '#CBC3E3'
				if (this.textEmotionSelected == false)	 {
				this.showTextEmotion = true
			}	
			}
		},
		
		selectVoiceEmotion: function () {
		
			if (this.voiceEmotionSelected == false) {
				this.msg2 = ""
				this.voiceEmotionSelected = true
				this.voiceEmotionColor = '#f48d79'
				if (this.voiceEmotionSelected == true)	 {
				this.showVoiceEmotion = false
			}	
			}
			
			else {
				this.voiceEmotionSelected = false
				this.voiceEmotionColor = '#CBC3E3'
				if (this.voiceEmotionSelected == false)	 {
				this.showVoiceEmotion = true
			}	
			}
		},
		
		selectFaceEmotion: function () {
		
			if (this.faceEmotionSelected == false) {
				this.msg2 = ""
				this.faceEmotionSelected = true
				this.faceEmotionColor = '#f48d79'
				if (this.faceEmotionSelected == true)	 {
				this.showFaceEmotion = false
			}
			}
			
			else {
				this.faceEmotionSelected = false
				this.faceEmotionColor = '#CBC3E3'
				if (this.faceEmotionSelected == false)	 {
				this.showFaceEmotion = true
			}
			}
		},
	
		initiateVoiceControl: function () {
		//start listening for words and making a transcript of detected words
			console.log('voice recognition initiated')
			window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
			let finalTranscript = '';
			let recognition = new window.SpeechRecognition();
			recognition.interimResults = true; 
			recognition.maxAlternatives = 10;
			recognition.continuous = this.continuous;
			recognition.onresult = (event) => {
				let interimTranscript = '';
				for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
					let transcript = event.results[i][0].transcript;
					if (event.results[i].isFinal) {
						finalTranscript += transcript;
						if (this.workingTime) {
						this.workingOutput = transcript
						var node = document.createElement('li');
						node.appendChild(document.createTextNode(" " + this.workingTime + ': ' + this.workingOutput));
						document.querySelector('ul').appendChild(node);
						var elem = document.getElementById('output');
						elem.scrollTop = elem.scrollHeight;
						console.log(this.workingOutput)
						this.renderData()
						
					}
				} else {
				interimTranscript += transcript;
				}
			}
				this.wordsSpoken = finalTranscript
				this.output =  this.wordsSpoken += interimTranscript
				this.wordCount = this.countWords(this.output)
				this.totalWords = this.wordCount
		},
			recognition.start()
			
				if ((this.textEmotionSelected == true || this.WPMSelected == true) || (this.voiceEmotionSelected == true || this.faceEmotionSelected == true))	 {
					this.msg3 = ""
					if (this.stop == false) {
						this.showTime = false
						this.initialTime = Date.now();
						this.grabTimeInterval = window.setInterval(this.grabTime, 1000)
						this.startVolumeMeter()
						console.log("app started")
					} 
					if (this.stop == true) {
						clearInterval(this.grabTimeInterval)
						this.showTime = false
						this.continuous = true
						console.log("app stopped")
						recognition.stop()
						this.stop = false
					}
					}
					else {
						this.msg2 = 'No input data selected. Try selecting words per minute or another parameter.'
					}

		},
		
		analyzeFace: function () {
const video = document.querySelector("video");
let predictedAges = [];

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
  faceapi.nets.ageGenderNet.loadFromUri("/models")
]).then(startVideo);

function startVideo() {
  var constraints = { audio: false, video: true }; 

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  video.srcObject = mediaStream;
})
.catch(function(err) { console.log(err.name + ": " + err.message); });
}

video.addEventListener("playing", () => {
  console.log("playing called");
  const canvas = faceapi.createCanvasFromMedia(video);
  let container = document.querySelector(".container");
  container.append(canvas);

  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);

  setInterval(async () => {
    const detections = await faceapi
      .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions()
      .withAgeAndGender();

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    console.log(resizedDetections);

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);

    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    if (resizedDetections && Object.keys(resizedDetections).length > 0) {
      const age = resizedDetections.age;
      const interpolatedAge = interpolateAgePredictions(age);
      const gender = resizedDetections.gender;
      const expressions = resizedDetections.expressions;
      const maxValue = Math.max(...Object.values(expressions));
      const emotion = Object.keys(expressions).filter(
        item => expressions[item] === maxValue
      );
      document.getElementById("age").innerText = `Age - ${interpolatedAge}`;
      document.getElementById("gender").innerText = `Gender - ${gender}`;
      document.getElementById("emotion").innerText = `Emotion - ${emotion[0]}`;
    }
  }, 10);
});

function interpolateAgePredictions(age) {
  predictedAges = [age].concat(predictedAges).slice(0, 30);
  const avgPredictedAge =
    predictedAges.reduce((total, a) => total + a) / predictedAges.length;
  return avgPredictedAge;
}

		},
	
		grabTime: function () {
		//keep  of time in both milliseconds as well as minutes and seconds
			
			if (this.time1 == true) {
			this.timeDifference = Date.now() - this.initialTime;
			this.dataNamer = this.timeDifference
			var div = document.getElementById('timeHolder');
			div.innerHTML = this.dataNamer
			console.log(this.dataNamer)
			}
			
			if (this.time1 == false){
				this.timeDifference = Date.now() - this.initialTime;
				var middleTime = parseInt(document.getElementById("timeHolder").innerHTML);
				console.log(middleTime)
				this.timeDifference = this.timeDifference + middleTime
				this.time2 = true
			}
			
			var formatted = convertTime(this.timeDifference);
			document.getElementById('timer').innerHTML = '' + formatted;
			this.workingTime = formatted; 
			console.log(formatted)
				this.timeElapsed = this.timeDifference
				this.placeHolderForTimeCheck = this.timeDifference
				var selectedTime = document.getElementById("speakingTime").value;
				var selectedTimeFifteen = selectedTime - 15000
				var selectedTimeThirty = selectedTime - 30000
				var element = document.getElementById("timer");
			if (this.placeHolderForTimeCheck >= selectedTimeThirty) {
				element.style.backgroundColor = "green";
			}
			if (this.placeHolderForTimeCheck >= selectedTimeFifteen) {
				element.style.backgroundColor = "yellow";
			}
			if (this.placeHolderForTimeCheck >= selectedTime) {
				element.style.backgroundColor = "red";
			}
			
			function convertTime(miliseconds) {
				var totalSeconds = Math.floor(miliseconds/1000);
				var minutes = Math.floor(totalSeconds/60);
				var seconds = totalSeconds - minutes * 60;
				if (seconds < 10) {
				seconds = "0" + seconds 
				}
				if (minutes < 10) {
				minutes = "0" + minutes 
				}
				return minutes + ':' + seconds;
			}
		},
		
		countWords: function (str){
		//count how many words are in the transcript of detected words
			const arr = str.split(' ');
			return arr.filter(word => word !== '').length;
		}, 
		
		registerWPM: function () {
		//calculate number of words per minute--at one second intervals
			this.wpm = Math.round(this.wordCount/(this.timeElapsed/1000) * 60) 
		},
		
		getEmotionStats: function () {
		//send transcript data to be evaluated as per emotional content
			const pd = require('paralleldots' || paralleldots)
			pd.apiKey = "hL7rOIhghKLZtrI6w04cFjxVvAOHQ7BiNhjMLAVnMPw";
			pd.emotion(this.workingOutput,"en")
			.then((response) => {
				let obj = JSON.parse(response)
				this.textEmotionData = response.slice(1)
				this.anger = Math.round(obj.emotion.Angry * 100) 
				this.fear = Math.round(obj.emotion.Fear * 100) 
				this.excitement = Math.round(obj.emotion.Excited * 100)
				this.boredom = Math.round(obj.emotion.Bored * 100)
				this.sadness = Math.round(obj.emotion.Sad * 100)
				this.happiness = Math.round(obj.emotion.Happy * 100)
				console.log("emotion data retrieved" + response)
			})
				.catch((error) => {
				console.log(error);
			})
		
		},  
		
		stopVoiceControl: function () {
		//reset speech recognition so it can stop and clear original timers
			this.continuous = false
			this.stop = true
			this.time1 = false
			if (this.time2 == true) {
				this.dataNamer = this.timeDifference
				var div2 = document.getElementById('timeHolder');
				div2.innerHTML = this.dataNamer 
				console.log(this.dataNamer)
			}
			if(this.volumeInterval !== null) {
				clearInterval(this.volumeInterval);
				this.volumeInterval = null;
			}
			this.visualizeData()
			this.initiateVoiceControl()
			clearInterval(this.grabTimeInterval)
		}, 
	
		reset: function () {
			location.reload()
		}, 
		
		unhideData: function () {
			document.getElementById("rawData").style.display="inline-block"
		}, 
		
		hideData: function () {
			document.getElementById("rawData").style.display="none"
		},
		
		renderData: function() {
		
			const promise1 = new Promise((resolve, reject) => {
				this.setVolume()
				this.getEmotionStats()
				this.registerWPM()
				resolve('Data rendered!');
				reject('Data render failed')
			});

			promise1.then(() => {
				this.constructJSON()
				this.visualizeData()
				console.log("JSON and charts constructed");
			});
		}, 
		
		constructJSON: function() {
						this.currentDataObject = '{"time":' + '"' + this.workingTime + '"' + "," + '"wpm":' + '"' + this.wpm + '"' + "," + '"content":' + '"' + this.workingOutput + '"' + "," + '"Angry":' + this.anger + "," + '"Fear":' + this.fear + "," + '"Excited":' + this.excitement + "," + '"Bored":' + this.boredom + "," + '"Sad":' + this.sadness + "," + '"Happy":' + this.happiness + "," + '"volume":' + this.volumeValue + "},"
						var div = document.getElementById('rawData');
						div.innerHTML += this.currentDataObject;
						this.overallDataObject = document.getElementById("rawData").innerHTML
						console.log(this.overallDataObject)
		},  
		
		visualizeData: function () {
				var overallRawData = document.getElementById("rawData").innerHTML
				var overallSlicedDataArray = "[" + overallRawData.slice(0, -1) + "]"
				var data = JSON.parse(overallSlicedDataArray)
			
			
			//Words Per Minute
			if (this.showWPM == false) {
				
				let wordsPerMinute = {
					x: [],
					y: [],
					mode: "lines",
					name: 'Words Per Minute', 
					line: {
						color: '#f48d79',
						width: 2
					}
				};
				
				data.forEach(function(val) {
				wordsPerMinute.x.push(val["time"]);
				wordsPerMinute.y.push(val["wpm"]);
				});
				
				var layout = {
				paper_bgcolor: "#222831",
				plot_bgcolor: "#222831",
				title: {
					text:'Rate of Speech',
					font: {
					family: 'Arial, sans-serif',
					size: 20, 
					color: '#71c68b', 
				},
					xref: 'paper',
					automargin: true,
					x: 0.5,
					xanchor: 'center', 
					y: 0.88, 
					yanchor: 'top'
				},
				autosize: true,
					xaxis: {
						tickfont : {
							size : 18,
							color : '#71c68b'
						},
						tickcolor: '#36454f',
						title: {
							text: 'Time',
							font: {
							family: 'Arial, sans-serif',
							size: 18,
							color: '#71c68b',
							}
						},
					},
					yaxis: {
						margin: {
							autoexpand: true,
						},
						automargin: true,
						tickfont : {
							size : 18,
							color : '#71c68b'
						},
						tickcolor: '#36454f',
						title: {
						text: 'Words Per Minute',
							font: {
							family: 'Arial, sans-serif',
							size: 18,
							color: '#71c68b' 
							}
						}
					}
				};

				var WPMChart = document.getElementById('wpmChart');
				Plotly.newPlot(WPMChart, [wordsPerMinute], layout);
			}
			
			//Volume
			if (this.showVolume == false) {
				
				let volume = {
					x: [],
					y: [],
					mode: "lines",
					name: 'Volume', 
					line: {
						color: '#40D0E0',
						width: 2
					}
				};
				
				data.forEach(function(val) {
				volume.x.push(val["time"]);
				volume.y.push(val["volume"]);
				});
				
				var layout3 = {
				paper_bgcolor: "#222831",
				plot_bgcolor: "#222831",
				title: {
					text:'Voice Projection',
					font: {
					family: 'Arial, sans-serif',
					size: 20, 
					color: '#c300ff', 
				},
					xref: 'paper',
					automargin: true,
					x: 0.5,
					xanchor: 'center', 
					y: 0.88, 
					yanchor: 'top'
				},
				autosize: true,
					xaxis: {
						tickfont : {
							size : 18,
							color : '#c300ff'
						},
						tickcolor: '#c300ff',
						title: {
							text: 'Time',
							font: {
							family: 'Arial, sans-serif',
							size: 18,
							color: '#c300ff',
							}
						},
					},
					yaxis: {
						margin: {
							autoexpand: true,
						},
						automargin: true,
						tickfont : {
							size : 18,
							color : '#c300ff'
						},
						tickcolor: '#c300ff',
						title: {
						text: 'Volume',
							font: {
							family: 'Arial, sans-serif',
							size: 18,
							color: '#c300ff' 
							}
						}
					}
				};

				var volumeChart = document.getElementById('volumeChart');
				Plotly.newPlot(volumeChart, [volume], layout3);
			}
			
			
			//Emotions in Text
			if (this.textEmotionSelected == true) {
				
				let Anger = {
					x: [],
					y: [],
					mode: "lines",
					name: 'Anger', 
					line: {
						color: '#ff6961',
						width: 2
					}
				};
				
				let Fear = {
					x: [],
					y: [],
					mode: "lines",
					name: 'Fear', 
					line: {
						color: '#fdfd96',
						width: 2
					}
				};
				
				let Excitement = {
					x: [],
					y: [],
					mode: "lines",
					name: 'Excitement', 
					line: {
						color: '#ffb347',
						width: 2
					}
				};
				
				let Boredom = {
					x: [],
					y: [],
					mode: "lines",
					name: 'Boredom', 
					line: {
						color: '#cfcfc4',
						width: 2
					}
				};
				
				let Sadness = {
					x: [],
					y: [],
					mode: "lines",
					name: 'Sadness', 
					line: {
						color: '#85A1F2',
						width: 2
					}
				};
				
				let Happiness = {
					x: [],
					y: [],
					mode: "lines",
					name: 'Happiness', 
					line: {
						color: '#77dd77',
						width: 2
					}
				};

				data.forEach(function(val) {
				Anger.x.push(val["time"]);
				Anger.y.push(val["Angry"]);
				Fear.x.push(val["time"]);
				Fear.y.push(val["Fear"]);
				Excitement.x.push(val["time"]);
				Excitement.y.push(val["Excited"]);
				Boredom.x.push(val["time"]);
				Boredom.y.push(val["Bored"]);
				Sadness.x.push(val["time"]);
				Sadness.y.push(val["Sad"]);
				Happiness.x.push(val["time"]);
				Happiness.y.push(val["Happy"]);
				});
				
				var layout2 = {
				paper_bgcolor: "#222831",
				plot_bgcolor: "#222831",
				title: {
					text:'  Emotions in Words Spoken',
					font: {
					family: 'Arial, sans-serif',
					size: 20, 
					color: '#fdfd96', 
				},
					xref: 'paper',
					automargin: true,
					x: 0.6,
					xanchor: 'center', 
					y: 0.88, 
					yanchor: 'top'
				},
				autosize: true,
					xaxis: {
						tickfont : {
							size : 16,
							color : '#fdfd96'
						},
						tickcolor: '#36454f',
						title: {
							text: 'Time',
							font: {
							family: 'Arial, sans-serif',
							size: 18,
							color: '#fdfd96',
							}
						},
					},
					yaxis: {
						margin: {
							autoexpand: true,
						},
						automargin: true,
						tickfont : {
							size : 16,
							color : '#fdfd96'
						},
						tickcolor: '#fdfd96',
						title: {
						text: 'Emotions',
							font: {
							family: 'Arial, sans-serif',
							size: 18,
							color: '#fdfd96' 
							}
						}
					}
				};

				var TEXTEMOTIONChart = document.getElementById('textEmotionChart');
				Plotly.newPlot(TEXTEMOTIONChart, [Anger, Fear, Excitement, Boredom, Sadness, Happiness], layout2);
			}
		
		}
		
	}//
}//	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.cdnfonts.com/css/lcd');
#textEmotion, #faceEmotion, #voiceEmotion, #wpm {
display: inline-block; 
}
div {
background-color: none; 
color: #71c68b; 

}
.chartWindow {
position: relative;
display: inline-block;
width: 80%;  

}
.optionsButton  {
height: 50px;
width: 75px; 
padding: 12px; 
font-size: 10px; 
margin: 5px;
border: none; 
font-weight: bold; 
color: black; 
font-family: Arial, sans-serif;
}

.title {
color: white; 
}

#messageTwo {
color: #f48d79; 
font-size: 25px; 
}

#messageThree {
color: white; 
font-size: 25px; 
}

#begin {
background-color: #c300ff;
border: none; 
height: 50px; 
width: 100px; 
font-weight: bold; 
color: black; 
font-family: Arial, sans-serif;
font-size: 20px; 
margin-top: 40px; 
margin-bottom: -20px; 
}

#begin:hover {
background-color: #fdfd96; 
}

#start {
background-color: #CBC3E3; 
border: none; 
height: 50px; 
width: 100px; 
font-weight: bold; 
color: black; 
font-family: Arial, sans-serif;
font-size: 20px; 
margin: 10px; 
}

#start:hover {
background-color: lightgreen; 
}

#stop {
background-color: #CBC3E3; 
border: none; 
height: 50px; 
width: 100px; 
font-weight: bold; 
color: black; 
font-family: Arial, sans-serif;
font-size: 20px; 
margin: 10px; 
}

#stop:hover {
background-color: #ff726f; 
}

#reset {
background-color: #CBC3E3; 
border: none; 
height: 50px; 
width: 100px; 
font-weight: bold; 
color: black; 
font-family: Arial, sans-serif;
font-size: 20px; 
margin: 10px; 
}

#reset:hover {
background-color: lightyellow; 
}

#next {
background-color: #7766c6; 
border: none; 
height: 50px; 
width: 100px; 
font-weight: bold; 
color: black; 
font-family: Arial, sans-serif;
font-size: 20px; 
margin-top: 40px; 
margin-bottom: -20px; 
}

#next:hover {
background-color: #FFC300; 
}

#output {
margin: auto; 
color: #f48d79; 
background-color: #222831; 
width: 80%;  
text-align: left; 
overflow: scroll; 
height: 170px; 
font-size: 25px;
margin-top: 0px;
margin-bottom: 0px
}

#wpmChart {
overflow: auto; 
width: 80%; 
display: inline-block;
margin-top: 3px;
margin-bottom: 0px; 
}

#volumeChart {
overflow: auto; 
width: 80%; 
display: inline-block;
margin-top: -3px; 
}

#textEmotionChart {
overflow: auto; 
width: 80%; 
display: inline-block;
margin-top: -3px; 
}

#rawData {
display: none; 
margin: auto; 
color: lawngreen; 
background-color: #222831; 
width: 80%;  
text-align: left; 
overflow: scroll; 
height: 100px; 
font-size: 25px;
margin: 0px;
}

#dataHideButton {
margin: auto; 
color:  #222831; 
background-color: #222831; 
width: 40%;  
text-align: center; 
height: 30px; 
font-size: 10px;
margin: 0px;
border: none; 
}

#dataShowButton {
margin: auto; 
color:  #222831; 
background-color: #222831; 
width: 40%;  
text-align: center; 
height: 30px; 
font-size: 10px;
margin: 0px;
border: none; 
}

h1 {
font-size: 50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#talking {
height: 100px; 
margin-bottom: -20px; 
-webkit-filter: invert(1);
   filter: invert(1);
}

#timer {
background: #222831; 
color: white; 
font-size: 50px; 
font-family: 'LCD', sans-serif;
height: 100px; 
width: 80%; 
border: none; 
font-weight: bold; 
text-align: center; 
margin-bottom: 0px;
}

#timeHolder {
background-color: #123b52; 
color: white; 
display: none; 
margin-bottom: 0px;
}

#speakingTime{
background-color: #00ffc3; 
outline: none;
scroll-behavior: smooth;
height: 50px; 
width: 100px; 
font-weight: bold; 
color: black; 
font-family: Arial, sans-serif;
font-size: 21px; 
margin: 10px; 
text-align: center; 
border: none; 
}

#speakingTime:hover {
background-color: #c300ff; 
}

#volume-visualizer-wrapper {
  background-color: #222831;
  margin-top: 0px;
  padding: 0px;
  margin-bottom: 0px;
  width: 80%;
  display: inline-block; 
  padding-bottom: 10px;
}

#volume-visualizer {
  --volume: 0%;
  position: relative;
  height: 10px;
  background-color: #222831;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 100%;
  border: none; 
  display: inline-block; 
  
}

#volume-visualizer::before {
   content: '';
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   width: var(--volume);
   background-color: #c300ff;
   transition: width 100ms linear;
}
canvas {
position: absolute; 
z-index: 10;
}
#container {
  width: 100%;
  justify-content: center;
  align-items: center;
  
top: 0;
   bottom: 0;
   left: 0;
   
}
.result-container {
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.result-container > div {
  font-size: 1.3rem;
  padding: 0.5rem;
  margin: 5px 0;
  color: white;
  text-transform: capitalize;
}
#age {
  background: #1e94be;
}
#emotion {
  background: #8a1025;
}
#gender {
  background: #62d8a5;
}
video {
  width: 100%;
}

</style>