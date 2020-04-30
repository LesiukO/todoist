import { Injectable } from '@angular/core';

import { ITodo } from './ITodo';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private dbPath = '/todos';

  todosRef: AngularFirestoreCollection<ITodo> = null;

  constructor(private db: AngularFirestore) {
    this.todosRef = db.collection(this.dbPath);
  }

  createTodo(todo: ITodo): void {
    this.todosRef.add(todo);
  }

  getTodos():AngularFirestoreCollection<ITodo> {
    return this.todosRef;
  }

  // checkTodo(key: string, value: any): Promise<void> {
  //   return this.todosRef.doc(key).update(value);
  // }
  checkTodo() {
    console.log(this.getTodos());

  }


}
