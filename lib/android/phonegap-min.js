if(typeof(DeviceInfo)!="object"){DeviceInfo={}}PhoneGap={queue:{ready:true,commands:[],timer:null},_constructors:[]};PhoneGap.available=DeviceInfo.uuid!=undefined;PhoneGap.addConstructor=function(a){var b=document.readyState;if(b!="loaded"&&b!="complete"){PhoneGap._constructors.push(a)}else{a()}};(function(){var a=setInterval(function(){var c=document.readyState;if(c!="loaded"&&c!="complete"){return}clearInterval(a);while(PhoneGap._constructors.length>0){var b=PhoneGap._constructors.shift();try{b()}catch(d){if(typeof(debug.log)=="function"){debug.log("Failed to run constructor: "+d.message)}else{alert("Failed to run constructor: "+d.message)}}}},1)})();PhoneGap.exec=function(){PhoneGap.queue.commands.push(arguments);if(PhoneGap.queue.timer==null){PhoneGap.queue.timer=setInterval(PhoneGap.run_command,10)}};PhoneGap.run_command=function(){};function Device(){this.available=PhoneGap.available;this.model=null;this.version=null;this.gap=null;this.uuid=null;try{if(window.DroidGap!=undefined&&window.DroidGap.exists()){this.available=true;this.isAndroid=true;this.uuid=window.DroidGap.getUuid();this.gapVersion=window.DroidGap.getVersion()}else{this.model=DeviceInfo.platform;this.version=DeviceInfo.version;this.gap=DeviceInfo.gap;this.uuid=DeviceInfo.uuid}}catch(a){this.available=false}}PhoneGap.addConstructor(function(){navigator.device=window.device=new Device()});var Device={platform:"",version:"",uuid:"",init:function(){Device.platform=DroidGap.getPlatform();Device.version=Droidap.getVersion();Device.uuid=DroidGap.getUuid()},vibrate:function(a){DroidGap.vibrate(a)},beep:function(){DroidGap.beep()}};function Acceleration(a,c,b){this.x=a;this.y=c;this.z=b;this.timestamp=new Date().getTime()}function AccelerationOptions(){this.timeout=10000}function Accelerometer(){this.lastAcceleration=null}Accelerometer.prototype.getCurrentAcceleration=function(a,b,c){if(typeof a=="function"){var d=new Acceleration(_accel.x,_accel.y,_accel.z);Accelerometer.lastAcceleration=d;a(d)}};Accelerometer.prototype.watchAcceleration=function(a,b,c){this.getCurrentAcceleration(a,b,c);var d=(c!=undefined)?c.frequency:10000;return setInterval(function(){navigator.accelerometer.getCurrentAcceleration(a,b,c)},d)};Accelerometer.prototype.clearWatch=function(a){clearInterval(a)};PhoneGap.addConstructor(function(){if(typeof navigator.accelerometer=="undefined"){navigator.accelerometer=new Accelerometer()}});function Media(a){this.src=a}Media.prototype.play=function(){};Media.prototype.pause=function(){};Media.prototype.stop=function(){};function MediaError(){this.code=null,this.message=""}MediaError.MEDIA_ERR_ABORTED=1;MediaError.MEDIA_ERR_NETWORK=2;MediaError.MEDIA_ERR_DECODE=3;MediaError.MEDIA_ERR_NONE_SUPPORTED=4;function Camera(){}Camera.prototype.getPicture=function(a,b,c){};PhoneGap.addConstructor(function(){if(typeof navigator.camera=="undefined"){navigator.camera=new Camera()}});function Contact(){this.name="";this.phone="";this.address=""}Contact.prototype.get=function(a,b,c){};function ContactManager(){this.contacts=[];this.timestap=new Date().getTime()}ContactManager.prototype.get=function(a,b,c){};PhoneGap.addConstructor(function(){if(typeof navigator.ContactManager=="undefined"){navigator.ContactManager=new ContactManager()}});function UIControls(){this.tabBarTag=0;this.tabBarCallbacks={}}UIControls.prototype.createTabBar=function(){};UIControls.prototype.showTabBar=function(a){};UIControls.prototype.hideTabBar=function(a){};UIControls.prototype.createTabBarItem=function(c,b,d,a){};UIControls.prototype.updateTabBarItem=function(b,a){};UIControls.prototype.showTabBarItems=function(b,a){};UIControls.prototype.selectTabBarItem=function(a){};UIControls.prototype.tabBarItemSelected=function(a){if(typeof(this.tabBarCallbacks[a])=="function"){this.tabBarCallbacks[a]()}};UIControls.prototype.createToolBar=function(){};UIControls.prototype.setToolBarTitle=function(a){};PhoneGap.addConstructor(function(){window.uicontrols=new UIControls()});function DebugConsole(){}DebugConsole.prototype.processMessage=function(b){if(typeof(b)!="object"){return encodeURIComponent(b)}else{function a(d){return d.replace(/^/mg,"    ")}function c(g){var h="";for(var d in g){try{if(typeof(g[d])=="object"){h+=d+":\n"+a(c(g[d]))+"\n"}else{h+=d+" = "+a(String(g[d])).replace(/^    /,"")+"\n"}}catch(f){h+=d+" = EXCEPTION: "+f.message+"\n"}}return h}return encodeURIComponent("Object:\n"+c(b))}};DebugConsole.prototype.log=function(a){};DebugConsole.prototype.warn=function(a){};DebugConsole.prototype.error=function(a){};PhoneGap.addConstructor(function(){window.debug=new DebugConsole()});function File(){this.data="";this.name=""}File.prototype.read=function(c,a,b){};File.prototype.write=function(a){};PhoneGap.addConstructor(function(){if(typeof navigator.file=="undefined"){navigator.file=new File()}});function Geolocation(){this.lastPosition=null;this.lastError=null;this.callbacks={onLocationChanged:[],onError:[]}}Geolocation.prototype.getCurrentPosition=function(c,f,i){var g=0;if(this.lastPosition){g=this.lastPosition.timeout}else{this.start(i)}var h=20000;var b=500;if(typeof(i)=="object"&&i.interval){b=i.interval}if(typeof(c)!="function"){c=function(){}}if(typeof(f)!="function"){f=function(){}}var d=this;var e=0;var a=setInterval(function(){e+=b;if(typeof(d.lastPosition)=="object"&&d.lastPosition.timestamp>g){c(d.lastPosition);clearInterval(a)}else{if(e>=h){f();clearInterval(a)}}},b)};Geolocation.prototype.watchPosition=function(a,b,c){this.getCurrentPosition(a,b,c);var e=10000;if(typeof(c)=="object"&&c.frequency){e=c.frequency}var d=this;return setInterval(function(){d.getCurrentPosition(a,b,c)},e)};Geolocation.prototype.clearWatch=function(a){clearInterval(a)};Geolocation.prototype.setLocation=function(a){this.lastPosition=a;for(var b=0;b<this.callbacks.onLocationChanged.length;b++){var c=this.callbacks.onLocationChanged.shift();c(a)}};Geolocation.prototype.setError=function(b){this.lastError=b;for(var a=0;a<this.callbacks.onError.length;a++){var c=this.callbacks.onError.shift();c(b)}};PhoneGap.addConstructor(function(){if(typeof navigator.geolocation=="undefined"){navigator.geolocation=new Geolocation()}});Geolocation.prototype.getCurrentPosition=function(b,c,d){var a=Geo.getCurrentPosition();this.global_success=b;this.fail=c};Geolocation.prototype.gotCurrentPosition=function(c,a){if(c==0||a==0){this.fail()}else{var b={lat:c,lng:a};this.global_success(b)}};Geolocation.prototype.watchPosition=function(a,b,c){var e=(c!=undefined)?c.frequency:10000;if(!this.listeners){this.listeners=[]}var d=this.listeners.push({success:a,fail:failCallback})-1;return Geolocation.start(e,d)};Geolocation.prototype.success(key,lat,lng);this.listeners[key].success(lat,lng);Geolocation.prototype.fail(key);this.listeners[key].fail();Geolocation.prototype.clearWatch=function(a){Geo.stop(a)};function Map(){}Map.prototype.show=function(a){};PhoneGap.addConstructor(function(){if(typeof navigator.map=="undefined"){navigator.map=new Map()}});function Notification(){}Notification.prototype.alert=function(a,c,b){alert(a)};Notification.prototype.activityStart=function(){};Notification.prototype.activityStop=function(){};Notification.prototype.blink=function(a,b){};Notification.prototype.vibrate=function(a){};Notification.prototype.beep=function(b,a){};PhoneGap.addConstructor(function(){if(typeof navigator.notification=="undefined"){navigator.notification=new Notification()}});Notification.prototype.vibrate=function(a){Device.vibrate(a)};Notification.prototype.beep=function(b,a){Device.notify()};function Orientation(){this.lastOrientation=null}Orientation.prototype.getCurrentOrientation=function(a,b){};Orientation.prototype.watchOrientation=function(a,b){this.getCurrentPosition(a,b);return setInterval(function(){navigator.orientation.getCurrentOrientation(a,b)},10000)};Orientation.prototype.clearWatch=function(a){clearInterval(a)};PhoneGap.addConstructor(function(){if(typeof navigator.orientation=="undefined"){navigator.orientation=new Orientation()}});function Position(g,b,e,f,a,c,d){this.latitude=g;this.longitude=b;this.accuracy=e;this.altitude=f;this.altitudeAccuracy=a;this.heading=c;this.velocity=d;this.timestamp=new Date().getTime()}function PositionOptions(){this.enableHighAccuracy=true;this.timeout=10000}function PositionError(){this.code=null;this.message=""}PositionError.UNKNOWN_ERROR=0;PositionError.PERMISSION_DENIED=1;PositionError.POSITION_UNAVAILABLE=2;PositionError.TIMEOUT=3;function Sms(){}Sms.prototype.send=function(e,d,a,b,c){};PhoneGap.addConstructor(function(){if(typeof navigator.sms=="undefined"){navigator.sms=new Sms()}});function Telephony(){}Telephony.prototype.call=function(a){};PhoneGap.addConstructor(function(){if(typeof navigator.telephony=="undefined"){navigator.telephony=new Telephony()}});