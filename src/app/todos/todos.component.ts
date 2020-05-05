import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { ITodo } from '../ITodo';

import { TodosService } from '../todos.service';

import { AngularFirestore } from 'angularfire2/firestore';

import { firestore } from 'firebase/app';
import Timestamp = firestore.Timestamp;



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  // displayedColumns: string[] = ['userId', 'id', 'title', 'createdDate', 'deadlineDate', 'completed', 'delete'];
  displayedColumns: string[] = ['title', 'createdDate', 'deadlineDate', 'completed', 'delete'];
  dataSource: any;


  constructor(
    private todoService: TodosService,
    public db: AngularFirestore
  ) {}

  ngOnInit() {
    this.dataSource = this.db.collection('/todos').valueChanges();
  }

  checkTodo(todo) {
    this.todoService.checkTodo(todo);
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}


