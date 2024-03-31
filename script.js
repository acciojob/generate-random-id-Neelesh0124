function makeid(l) {
  // write your code here
	let result = ' '; 
        for(let i = 0; i < l; i++) { 
            result +=  
            String.fromCharCode(97 + Math.floor(Math.random() * 26)); 
        } 
	return result;
}
// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
