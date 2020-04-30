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
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed', 'createdDate', 'deadlineDate'];
  dataSource: any;

  constructor(
    private todoService: TodosService,
    public db: AngularFirestore
  ) {}

  ngOnInit() {
    this.dataSource = this.db.collection('/todos').valueChanges();
  }

  checkTodo(todo) {
    console.log(todo);
    this.todoService.checkTodo();
  }


}


