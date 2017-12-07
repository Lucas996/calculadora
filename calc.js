  function Num(n) {
		var visor = document.getElementById("visor");
		if (visor.value == 0)
			{visor.value = n;}
		else {visor.value += n;}
	}
	function apagar() {
		var visor = document.getElementById("visor");
		var num = document.getElementById("num");
		var oper = document.getElementById("op");
		visor.value = '0';
		num.value = '0';
		oper.value = '';
	}
	function Op(op) {
		var visor = document.getElementById("visor");
		var num = document.getElementById("num")
		var oper = document.getElementById("op")
		num.value = visor.value
		visor.value = ''
		oper.value = op
	}
 	function Equal() {
		var visor = document.getElementById("visor");
		var num = document.getElementById("num")
		var oper = document.getElementById("op")
		if (oper.value == "+")
			{result = parseFloat(visor.value) + parseFloat(num.value);}
		if (op.value == "-")
			{result = parseFloat(num.value) - parseFloat(visor.value);}
		if (op.value == "÷")
			{result = parseFloat(num.value) / parseFloat(visor.value);}
		if (op.value == "*")
			{result = parseFloat(num.value) * parseFloat(visor.value);}
		visor.value = result
	}
