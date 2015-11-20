function solve(){
	var id = 0,
		course = {
			init : function(title,presentations){
				this.title = title,
				this.presentations = presentations
				return this
			},
			addStudent : function(firstname,lastname){
				this.firstname = firstname,
				this.lastname = lastname
				id = id +=1;
			},
			getAllStudents : function(){
				// return students arr
			},
			submitHomework : function(studentId,homeworkID){
				
			},
			pushExamResults : function(studenIdScore){
				
			},
			getTopStudents : function(){
				
			}
		}
	
return course;
}

var course = solve();