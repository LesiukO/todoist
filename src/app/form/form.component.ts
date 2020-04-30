import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title: string;

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
  }

  createTodo () {
    this.todosService.createTodo({
      userId: 1,
      id: this.generateId(),
      title: this.title,
      completed: false,
      createdDate: new Date().toDateString(),
      deadlineDate: new Date().toDateString()
    });
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  clearForm() {
    this.title = '';
  }

}
