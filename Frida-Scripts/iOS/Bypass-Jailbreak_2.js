function bypassJailbreakDetection() {
	try {
		var className = "JailbreakDetection";
        var funcName = "+ isJail";
        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');
        Interceptor.attach(hook.implementation, {
          onLeave: function(retval) {
            console.log("[*] Class Name: " + className);
            console.log("[*] Method Name: " + funcName);
            retval.replace("0x0");
            console.log("\t[-] Type of return value: " + typeof retval);
            console.log("\t[-] Return Value: " + retval);
          }
        });
        
	} catch(err) {
		console.log("[-] Error: " + err.message);
	}
}

if (ObjC.available) {
	bypassJailbreakDetection();
} else {
 	send("error: Objective-C Runtime is not available!");
}
