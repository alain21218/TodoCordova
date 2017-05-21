// $("#create-todo").click(function(){
// 	addNewTodo();
// });

$("#new-todo").keyup(function(e){
	if(e.keyCode == 13){
		addNewTodo();
	}
});

$("#todo-table").on("change", ".todo-finished", function(e){
	closeTodo($(this));
});

function addNewTodo(){
	var tbody = $("#todo-table tbody");
	var title = $("#new-todo");
	var line = $("\
		<tr>\
			<td>"+ title.val() +"</td>\
			<td><input type='checkbox' class='todo-finished'/></td>\
		</tr>"
	);

	tbody.append(line);
	title.val("");
	title.focus();
}

function closeTodo(elem){
	var elem = $(elem);
	console.log(elem);
	if(elem !== undefined){
		var tr = elem.parents("tr");
		tr.toggleClass('todo-closed');
	}
}