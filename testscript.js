function check() { 
 document.body.style.display="none";
  var results = {
        total: 0,
        bad: 0
    };
  var output="<pre>";
  function testWidth(then, expected) {
	var e = document.getElementById("selectedProgress");
    var strUser = e.options[e.selectedIndex].text;
        results.total++;
        move(then);
		var result =document.getElementById(strUser+"demo").innerHTML;
		var widthoutput="";
		if (result !== expected) {
            results.bad++;
			widthoutput="Expected Widtht" + expected + ", found " + result+"\n";
			output+=widthoutput.fontcolor("red");
        }else{
		    widthoutput="Expected Widtht" + expected + ", found " + result+"\n";
			output+=widthoutput.fontcolor("green");
		}
    }	
  function testValue(then, expected) {
	var e = document.getElementById("selectedProgress");
    var strUser = e.options[e.selectedIndex].text;    
        results.total++;
        move(then);
		var result =document.getElementById(strUser).getAttribute("value");
		if (parseInt(result) !== expected) {
            results.bad++;
            widthoutput="Expected Value" + expected + ", found " + result+"\n";
			output+=widthoutput.fontcolor("red");
        } else{
		    widthoutput="Expected Value" + expected + ", found " + result+"\n";
			output+=widthoutput.fontcolor("green");
		}
    }
	
	testWidth(38,"44%");
    testWidth(152,"110%");
    testValue(-20,232);
	document.getElementById("selectedProgress").selectedIndex=1;
    testWidth(-46,"0%");
    testValue(10,10);
	document.getElementById("selectedProgress").selectedIndex=2;
    testWidth(10,"32%");
	var tempst="\nOf " + results.total + " tests, " ;
	output+=tempst;
	var tempst1="" + results.bad + " failed, ";
	output+=tempst1.fontcolor("red");;
	var tempst2="" +(results.total - results.bad) + " passed.</pre>";
	output+=tempst2.fontcolor("green");
    document.write(output);
}