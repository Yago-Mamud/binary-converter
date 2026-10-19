//[CONVERSION HANDLER]
//converts binary to integer
const binaryArrayToNumber = arr => {
  let value = 0
  arr.reverse().forEach((current,index) => {
  current != 0 && (value += 2 ** index);
  });
  createOutput(value);
};
//html elements
const convertButton = document.getElementById("convertButton");
const outputContainer = document.getElementById("outputContainer");
const inputHTML = document.getElementById("input");
//gets the input value and turns it into an array
convertButton.addEventListener("click", () => {
	let str = inputHTML.value;
	//validation
	if (!str) {
		alert("ERROR: Please insert a real value.");
		return false;
	}
	binaryArrayToNumber(str.split(''));  
});
//adds the append child
const createOutput = created => {
	const newMark = document.createElement("p");
	newMark.textContent = String(created);
	newMark.classList.add("outputC");
	outputContainer.appendChild(newMark);
}
//removes every child
const cleanButton = document.getElementById("cleanButton");
cleanButton.addEventListener("click", () => {
	const cChild = document.querySelectorAll(".outputC");
	cChild.forEach ((childRemoved) => {
		outputContainer.removeChild(childRemoved);
	});
});
//prevents anything other than 0 and 1 from being typed
inputHTML.addEventListener("input", (currentCharacter) => {
	const notAllowed = /[^01]/g;
	currentCharacter.target.value = currentCharacter.target.value.replace(notAllowed, "");
});