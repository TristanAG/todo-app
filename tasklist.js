TaskList = new Mongo.Collection('tasks');


if(Meteor.isClient){

	Template.todolist.helpers({
		'task' : function(){
			return TaskList.find();
		},
		'currentTask' : function(){
			
			var taskId = this._id;
			var currentTask = Session.get('selectedTask');

			if(taskId == currentTask){
				return "selected";
			}
		}
	});

	Template.todolist.events({
		'click .btns' : function(){
			TaskList.remove(this._id);
		}
	});

	Template.addTaskForm.events({
		'submit form' : function(){
			event.preventDefault();
			var taskVar = event.target.newTask.value;
			if(taskVar == ''){
				alert("try writing something first...");
			}else{
				TaskList.insert({
					desc: taskVar
				});
			}
			event.target.newTask.value = '';
		}
	});
}

if(Meteor.isServer){
	
}

