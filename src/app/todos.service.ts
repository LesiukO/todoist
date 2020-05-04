import { Injectable } from '@angular/core';

import { ITodo } from './ITodo';

import { BehaviorSubject, Observable, of } from 'rxjs';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private dbPath = '/todos';

  docRef;

  todosRef: AngularFirestoreCollection<ITodo> = null;

  constructor(private db: AngularFirestore) {
    this.todosRef = db.collection(this.dbPath);

    // this.docRef = db.collection('samples').doc('sandwich');
    this.docRef = db.doc('samples/sandwich');
  }

  createTodo(todo: ITodo): void {
    this.todosRef.doc(todo.id).set(todo);
  }

  checkTodo(todo: ITodo): void {
    // this.todosRef.add(todo);
    this.todosRef.doc(todo.id).update({
      title: todo.title,
      createdDate: todo.createdDate,
      deadlineDate: todo.deadlineDate,
      id: todo.id,
      userId: todo.userId,
      completed: !todo.completed
    });
  }

  deleteTodo(todo: ITodo): void {
    this.todosRef.doc(todo.id).delete();
  }


  getTodos():AngularFirestoreCollection<ITodo> {

    return this.todosRef;
  }

  // checkTodo(key: string, value: any): Promise<void> {
  //   return this.todosRef.doc(key).update(value);
  // }
  // checkTodo(todo: ITodo): void {
  //   this.db.doc(this.dbPath + '/ntBhWiRH7UrIzdMimOJp').delete();
  // }


}
