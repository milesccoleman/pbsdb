(function(e){function t(t){for(var i,a,r=t[0],l=t[1],c=t[2],m=0,h=[];m<r.length;m++)a=r[m],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&h.push(n[a][0]),n[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],i=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=o[0]))}return e}var i={},n={app:0},s=[];function a(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=i,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(o,i,function(t){return e[t]}.bind(null,i));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/pbsdb/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"04db":function(e,t,o){},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,o){"use strict";o.r(t);var i=o("2b0e"),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("PublicSpeakingDashboard")],1)},s=[],a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard",attrs:{id:"body"}},[t("h1",{attrs:{id:"mainTitle"}},[t("img",{attrs:{id:"talking",alt:"image of voice waves leaving someone's mouth. Attribution: Speak Icon, by Voysla, 'https://www.flaticon.com/free-icons/speak'",src:"talking.png"}}),e._v(" "+e._s(e.msg)+" ")]),t("p",{attrs:{id:"messageTwo"}},[e._v(" "+e._s(e.msg2)+" ")]),t("p",{attrs:{id:"messageThree"}},[e._v(" "+e._s(e.msg3)+" ")]),t("span",{attrs:{id:"timeHolder"}},[e._v("Time: ")]),t("span",[e.show3?e._e():t("span",{attrs:{id:"dropdownWrapper"}},[t("label",{attrs:{for:"speakingTime",alt:"Choose Desired Speech Length:"}}),e._m(0)]),e.show3?t("button",{attrs:{id:"begin"},on:{click:function(t){e.begin(),e.selectWPM(),e.selectTextEmotion(),e.selectVoiceEmotion(),e.selectFaceEmotion()}}},[e._v("Begin")]):e._e(),e.show3?e._e():t("button",{attrs:{id:"start"},on:{click:e.initiateVoiceControl}},[e._v("Start")]),e.show3?e._e():t("button",{attrs:{id:"stop"},on:{click:e.stopVoiceControl}},[e._v("Stop")]),e.show3?e._e():t("button",{attrs:{id:"reset"},on:{click:e.reset}},[e._v("Reset")])]),t("br"),t("span",{attrs:{id:"rawData"}}),e.showTime?e._e():t("button",{staticClass:"title",attrs:{id:"timer"}},[e._v(e._s(e.time))]),e.show3?e._e():t("span",{attrs:{id:"volume-visualizer-wrapper"}},[t("button",{attrs:{id:"volume-visualizer"}})]),e.show3?e._e():t("ul",{attrs:{id:"output"}}),t("span",[e.show3?e._e():t("button",{attrs:{id:"dataShowButton"},on:{click:e.unhideData}},[e._v("View Raw Data")]),e.show3?e._e():t("button",{attrs:{id:"dataHideButton"},on:{click:e.hideData}},[e._v("Hide Raw Data")])]),e._m(1),e._m(2),e.showWPM?e._e():t("span",{attrs:{id:"wpmChart"}}),e.showVolume?e._e():t("span",{attrs:{id:"volumeChart"}}),e.showTextEmotion?e._e():t("span",{attrs:{id:"textEmotionChart"}})])},r=[function(){var e=this,t=e._self._c;return t("select",{attrs:{name:"speakingTime",id:"speakingTime"}},[t("option",{attrs:{value:"nope",selected:""}},[e._v("Choose Target Speaking Time - (Gives 30 and 15 Sec Warnings Before Selected Time)")]),t("option",{attrs:{value:"60000"}},[e._v("1 Min")]),t("option",{attrs:{value:"180000"}},[e._v("3 Min")]),t("option",{attrs:{value:"300000"}},[e._v("5 Min")]),t("option",{attrs:{value:"600000"}},[e._v("10 Min")]),t("option",{attrs:{value:"900000"}},[e._v("15 Min")]),t("option",{attrs:{value:"1200000"}},[e._v("20 Min")]),t("option",{attrs:{value:"1500000"}},[e._v("25 Min")]),t("option",{attrs:{value:"1800000"}},[e._v("30 Min")]),t("option",{attrs:{value:"2700000"}},[e._v("45 Min")]),t("option",{attrs:{value:"3600000"}},[e._v("60 Min")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"container",attrs:{id:"container"}},[t("video",{attrs:{id:"video",height:"500",width:"500",autoplay:""}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"result-container"},[t("div",{attrs:{id:"emotion"}},[e._v("Emotion")]),t("div",{attrs:{id:"gender"}},[e._v("Gender")]),t("div",{attrs:{id:"age"}},[e._v("Age ")])])}],l=(o("907a"),o("986a"),o("1d02"),o("3c5d"),o("1b3b"),o("3d71"),o("c6e3"),o("13d5"),o("14d9"),o("1da6"),o("61cc")),c=o.n(l),d=o("ab39"),m={name:"publicSpeakingDashboard",props:{},data(){return{msg:"Public Speaking Dashboard",msg2:"An AI-powered tool to help you hone your public speaking skills.",msg3:"",wordsSpoken:"START",output:"Recognized Text",workingOutput:"",workingTime:0,grabTimeInterval:"",registerWPMInterval:"",getEmotionStatsInterval:"",initialTime:0,time:"00:00",timeElapsed:0,timeDifference:0,wordCount:0,totalWords:0,wordCountDividedByTime:0,stop:!1,wpm:0,anger:0,fear:0,excitement:0,boredom:0,sadness:0,happiness:0,continuous:!0,show:!0,show2:!0,show3:!0,show4:!0,showWPM:!0,showTEXTEMOTION:!0,showTime:!0,showData:!0,WPMSelected:!1,WPMColor:"#CBC3E3",showTextEmotion:!0,textEmotionSelected:!1,textEmotionColor:"#CBC3E3",showVoiceEmotion:!0,voiceEmotionSelected:!1,voiceEmotionColor:"#CBC3E3",showFaceEmotion:!0,faceEmotionSelected:!1,faceEmotionColor:"#CBC3E3",textEmotionData:"",overallDataObject:"",currentDataObject:"",dataNamer:0,time1:!0,time2:!1,placeHolderForTimeCheck:0,volumeCallback:null,volumeInterval:null,volumeValue:0,volumeNumber:0,showVolume:!0}},created:function(){console.log("Landing page loaded")},methods:{begin:function(){this.analyzeFace(),window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;let e=new window.SpeechRecognition;e.start(),this.show=!1,this.show3=!1,this.msg2="",this.msg3="Choose a desired speech length. Click start. Then, click stop when finished.",console.log("Dashboard page loaded")},startVolumeMeter:function(){(async()=>{const e=document.getElementById("volume-visualizer");try{const t=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0}}),o=new AudioContext,i=o.createMediaStreamSource(t),n=o.createAnalyser();n.fftSize=512,n.minDecibels=-127,n.maxDecibels=0,n.smoothingTimeConstant=.4,i.connect(n);const s=new Uint8Array(n.frequencyBinCount);this.volumeCallback=()=>{n.getByteFrequencyData(s);let t=0;for(const e of s)t+=e;const o=t/s.length;e.style.setProperty("--volume",100*o/127+"%"),this.volumeNumber=o,this.showVolume=!1}}catch(t){console.error("Failed to initialize volume visualizer, simulating instead...",t);let o=50;this.volumeCallback=()=>{const t=Math.min(Math.max(100*Math.random(),.8*o),1.2*o);o=t,e.style.setProperty("--volume",t+"%")}}null!==this.volumeCallback&&null===this.volumeInterval&&(this.volumeInterval=setInterval(this.volumeCallback,100))})()},setVolume:function(){this.volumeValue=Math.round(this.volumeNumber)},selectWPM:function(){0==this.WPMSelected?(this.msg2="",this.WPMSelected=!0,this.WPMColor="#f48d79",1==this.WPMSelected&&(this.showWPM=!1)):(this.WPMSelected=!1,this.WPMColor="#CBC3E3",0==this.WPMSelected&&(this.showWPM=!0))},selectTextEmotion:function(){0==this.textEmotionSelected?(this.msg2="",this.textEmotionSelected=!0,this.textEmotionColor="#f48d79",1==this.textEmotionSelected&&(this.showTextEmotion=!1)):(this.textEmotionSelected=!1,this.textEmotionColor="#CBC3E3",0==this.textEmotionSelected&&(this.showTextEmotion=!0))},selectVoiceEmotion:function(){0==this.voiceEmotionSelected?(this.msg2="",this.voiceEmotionSelected=!0,this.voiceEmotionColor="#f48d79",1==this.voiceEmotionSelected&&(this.showVoiceEmotion=!1)):(this.voiceEmotionSelected=!1,this.voiceEmotionColor="#CBC3E3",0==this.voiceEmotionSelected&&(this.showVoiceEmotion=!0))},selectFaceEmotion:function(){0==this.faceEmotionSelected?(this.msg2="",this.faceEmotionSelected=!0,this.faceEmotionColor="#f48d79",1==this.faceEmotionSelected&&(this.showFaceEmotion=!1)):(this.faceEmotionSelected=!1,this.faceEmotionColor="#CBC3E3",0==this.faceEmotionSelected&&(this.showFaceEmotion=!0))},initiateVoiceControl:function(){console.log("voice recognition initiated"),window.SpeechRecognition=window.webkitSpeechRecognition||window.SpeechRecognition;let e="",t=new window.SpeechRecognition;t.interimResults=!0,t.maxAlternatives=10,t.continuous=this.continuous,t.onresult=t=>{let o="";for(let s=t.resultIndex,a=t.results.length;s<a;s++){let a=t.results[s][0].transcript;if(t.results[s].isFinal){if(e+=a,this.workingTime){this.workingOutput=a;var i=document.createElement("li");i.appendChild(document.createTextNode(" "+this.workingTime+": "+this.workingOutput)),document.querySelector("ul").appendChild(i);var n=document.getElementById("output");n.scrollTop=n.scrollHeight,console.log(this.workingOutput),this.renderData()}}else o+=a}this.wordsSpoken=e,this.output=this.wordsSpoken+=o,this.wordCount=this.countWords(this.output),this.totalWords=this.wordCount},t.start(),1==this.textEmotionSelected||1==this.WPMSelected||1==this.voiceEmotionSelected||1==this.faceEmotionSelected?(this.msg3="",0==this.stop&&(this.showTime=!1,this.initialTime=Date.now(),this.grabTimeInterval=window.setInterval(this.grabTime,1e3),this.startVolumeMeter(),console.log("app started")),1==this.stop&&(clearInterval(this.grabTimeInterval),this.showTime=!1,this.continuous=!0,console.log("app stopped"),t.stop(),this.stop=!1)):this.msg2="No input data selected. Try selecting words per minute or another parameter."},analyzeFace:function(){const e=document.querySelector("video");let t=[];function o(){var t={audio:!1,video:!0};navigator.mediaDevices.getUserMedia(t).then((function(t){e.srcObject=t})).catch((function(e){console.log(e.name+": "+e.message)}))}function i(e){t=[e].concat(t).slice(0,30);const o=t.reduce((e,t)=>e+t)/t.length;return o}Promise.all([d["f"].tinyFaceDetector.loadFromUri("./public/models"),d["f"].faceLandmark68Net.loadFromUri("./public/models/models"),d["f"].faceRecognitionNet.loadFromUri("./public/models/models"),d["f"].faceExpressionNet.loadFromUri("./public/models/models"),d["f"].ageGenderNet.loadFromUri("./public/models/models")]).then(o),e.addEventListener("playing",()=>{console.log("playing called");const t=d["b"](e);let o=document.querySelector(".container");o.append(t);const n={width:e.width,height:e.height};d["e"](t,n),setInterval(async()=>{const o=await d["c"](e,new d["a"]).withFaceLandmarks().withFaceExpressions().withAgeAndGender(),s=d["g"](o,n);if(console.log(s),t.getContext("2d").clearRect(0,0,t.width,t.height),d["d"].drawDetections(t,s),d["d"].drawFaceLandmarks(t,s),s&&Object.keys(s).length>0){const e=s.age,t=i(e),o=s.gender,n=s.expressions,a=Math.max(...Object.values(n)),r=Object.keys(n).filter(e=>n[e]===a);document.getElementById("age").innerText="Age - "+t,document.getElementById("gender").innerText="Gender - "+o,document.getElementById("emotion").innerText="Emotion - "+r[0]}},10)})},grabTime:function(){if(1==this.time1){this.timeDifference=Date.now()-this.initialTime,this.dataNamer=this.timeDifference;var e=document.getElementById("timeHolder");e.innerHTML=this.dataNamer,console.log(this.dataNamer)}if(0==this.time1){this.timeDifference=Date.now()-this.initialTime;var t=parseInt(document.getElementById("timeHolder").innerHTML);console.log(t),this.timeDifference=this.timeDifference+t,this.time2=!0}var o=r(this.timeDifference);document.getElementById("timer").innerHTML=""+o,this.workingTime=o,console.log(o),this.timeElapsed=this.timeDifference,this.placeHolderForTimeCheck=this.timeDifference;var i=document.getElementById("speakingTime").value,n=i-15e3,s=i-3e4,a=document.getElementById("timer");function r(e){var t=Math.floor(e/1e3),o=Math.floor(t/60),i=t-60*o;return i<10&&(i="0"+i),o<10&&(o="0"+o),o+":"+i}this.placeHolderForTimeCheck>=s&&(a.style.backgroundColor="green"),this.placeHolderForTimeCheck>=n&&(a.style.backgroundColor="yellow"),this.placeHolderForTimeCheck>=i&&(a.style.backgroundColor="red")},countWords:function(e){const t=e.split(" ");return t.filter(e=>""!==e).length},registerWPM:function(){this.wpm=Math.round(this.wordCount/(this.timeElapsed/1e3)*60)},getEmotionStats:function(){const e=o("1da6");e.apiKey="hL7rOIhghKLZtrI6w04cFjxVvAOHQ7BiNhjMLAVnMPw",e.emotion(this.workingOutput,"en").then(e=>{let t=JSON.parse(e);this.textEmotionData=e.slice(1),this.anger=Math.round(100*t.emotion.Angry),this.fear=Math.round(100*t.emotion.Fear),this.excitement=Math.round(100*t.emotion.Excited),this.boredom=Math.round(100*t.emotion.Bored),this.sadness=Math.round(100*t.emotion.Sad),this.happiness=Math.round(100*t.emotion.Happy),console.log("emotion data retrieved"+e)}).catch(e=>{console.log(e)})},stopVoiceControl:function(){if(this.continuous=!1,this.stop=!0,this.time1=!1,1==this.time2){this.dataNamer=this.timeDifference;var e=document.getElementById("timeHolder");e.innerHTML=this.dataNamer,console.log(this.dataNamer)}null!==this.volumeInterval&&(clearInterval(this.volumeInterval),this.volumeInterval=null),this.visualizeData(),this.initiateVoiceControl(),clearInterval(this.grabTimeInterval)},reset:function(){location.reload()},unhideData:function(){document.getElementById("rawData").style.display="inline-block"},hideData:function(){document.getElementById("rawData").style.display="none"},renderData:function(){const e=new Promise((e,t)=>{this.setVolume(),this.getEmotionStats(),this.registerWPM(),e("Data rendered!"),t("Data render failed")});e.then(()=>{this.constructJSON(),this.visualizeData(),console.log("JSON and charts constructed")})},constructJSON:function(){this.currentDataObject='{"time":"'+this.workingTime+'","wpm":"'+this.wpm+'","content":"'+this.workingOutput+'","Angry":'+this.anger+',"Fear":'+this.fear+',"Excited":'+this.excitement+',"Bored":'+this.boredom+',"Sad":'+this.sadness+',"Happy":'+this.happiness+',"volume":'+this.volumeValue+"},";var e=document.getElementById("rawData");e.innerHTML+=this.currentDataObject,this.overallDataObject=document.getElementById("rawData").innerHTML,console.log(this.overallDataObject)},visualizeData:function(){var e=document.getElementById("rawData").innerHTML,t="["+e.slice(0,-1)+"]",o=JSON.parse(t);if(0==this.showWPM){let e={x:[],y:[],mode:"lines",name:"Words Per Minute",line:{color:"#f48d79",width:2}};o.forEach((function(t){e.x.push(t["time"]),e.y.push(t["wpm"])}));var i={paper_bgcolor:"#222831",plot_bgcolor:"#222831",title:{text:"Rate of Speech",font:{family:"Arial, sans-serif",size:20,color:"#71c68b"},xref:"paper",automargin:!0,x:.5,xanchor:"center",y:.88,yanchor:"top"},autosize:!0,xaxis:{tickfont:{size:18,color:"#71c68b"},tickcolor:"#36454f",title:{text:"Time",font:{family:"Arial, sans-serif",size:18,color:"#71c68b"}}},yaxis:{margin:{autoexpand:!0},automargin:!0,tickfont:{size:18,color:"#71c68b"},tickcolor:"#36454f",title:{text:"Words Per Minute",font:{family:"Arial, sans-serif",size:18,color:"#71c68b"}}}},n=document.getElementById("wpmChart");c.a.newPlot(n,[e],i)}if(0==this.showVolume){let e={x:[],y:[],mode:"lines",name:"Volume",line:{color:"#40D0E0",width:2}};o.forEach((function(t){e.x.push(t["time"]),e.y.push(t["volume"])}));var s={paper_bgcolor:"#222831",plot_bgcolor:"#222831",title:{text:"Voice Projection",font:{family:"Arial, sans-serif",size:20,color:"#c300ff"},xref:"paper",automargin:!0,x:.5,xanchor:"center",y:.88,yanchor:"top"},autosize:!0,xaxis:{tickfont:{size:18,color:"#c300ff"},tickcolor:"#c300ff",title:{text:"Time",font:{family:"Arial, sans-serif",size:18,color:"#c300ff"}}},yaxis:{margin:{autoexpand:!0},automargin:!0,tickfont:{size:18,color:"#c300ff"},tickcolor:"#c300ff",title:{text:"Volume",font:{family:"Arial, sans-serif",size:18,color:"#c300ff"}}}},a=document.getElementById("volumeChart");c.a.newPlot(a,[e],s)}if(1==this.textEmotionSelected){let e={x:[],y:[],mode:"lines",name:"Anger",line:{color:"#ff6961",width:2}},t={x:[],y:[],mode:"lines",name:"Fear",line:{color:"#fdfd96",width:2}},i={x:[],y:[],mode:"lines",name:"Excitement",line:{color:"#ffb347",width:2}},n={x:[],y:[],mode:"lines",name:"Boredom",line:{color:"#cfcfc4",width:2}},s={x:[],y:[],mode:"lines",name:"Sadness",line:{color:"#85A1F2",width:2}},a={x:[],y:[],mode:"lines",name:"Happiness",line:{color:"#77dd77",width:2}};o.forEach((function(o){e.x.push(o["time"]),e.y.push(o["Angry"]),t.x.push(o["time"]),t.y.push(o["Fear"]),i.x.push(o["time"]),i.y.push(o["Excited"]),n.x.push(o["time"]),n.y.push(o["Bored"]),s.x.push(o["time"]),s.y.push(o["Sad"]),a.x.push(o["time"]),a.y.push(o["Happy"])}));var r={paper_bgcolor:"#222831",plot_bgcolor:"#222831",title:{text:"  Emotions in Words Spoken",font:{family:"Arial, sans-serif",size:20,color:"#fdfd96"},xref:"paper",automargin:!0,x:.6,xanchor:"center",y:.88,yanchor:"top"},autosize:!0,xaxis:{tickfont:{size:16,color:"#fdfd96"},tickcolor:"#36454f",title:{text:"Time",font:{family:"Arial, sans-serif",size:18,color:"#fdfd96"}}},yaxis:{margin:{autoexpand:!0},automargin:!0,tickfont:{size:16,color:"#fdfd96"},tickcolor:"#fdfd96",title:{text:"Emotions",font:{family:"Arial, sans-serif",size:18,color:"#fdfd96"}}}},l=document.getElementById("textEmotionChart");c.a.newPlot(l,[e,t,i,n,s,a],r)}}}},h=m,u=(o("824f"),o("2877")),f=Object(u["a"])(h,a,r,!1,null,"e2f17bf6",null),p=f.exports,g={name:"App",components:{PublicSpeakingDashboard:p}},v=g,w=(o("9452"),Object(u["a"])(v,n,s,!1,null,null,null)),y=w.exports;i["a"].config.productionTip=!1,new i["a"]({render:e=>e(y)}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"824f":function(e,t,o){"use strict";o("04db")},9:function(e,t){},9452:function(e,t,o){"use strict";o("c3e9")},c3e9:function(e,t,o){}});
//# sourceMappingURL=app.2290337a.js.map