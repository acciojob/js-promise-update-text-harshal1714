//your JS code here. If required.

function delayHello(){
	return new Promise((resolve)=>{
		setTimeout(() => {
			resolve("Hello, world!")
		},1000);
	});
} 
//usage of Promise
 const updateContent = document.getElementById("output");

delayHello().then((message) => {
	updateContent.textContent = message;
}).catch((error) => {
	console.error("An error occurred:", error);
})