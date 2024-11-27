const add = document.getElementById("add");
const listContainer = document.getElementById("list-container");

function addTask() {
	if (add.value.trim() === "") {
		alert("You must write something!");
	} else {
		let li = document.createElement("li");
		li.innerHTML = add.value;
		listContainer.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}

	add.value = "";
	saveData();
}

listContainer.addEventListener(
	"click",
	function (e) {
		if (e.target.tagName === "LI") {
			e.target.classList.toggle("checked");
		} else if (e.target.tagName === "SPAN") {
			e.target.parentElement.remove();
			saveData();
		}
	},
	false
);
function saveData() {
	localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
	listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
