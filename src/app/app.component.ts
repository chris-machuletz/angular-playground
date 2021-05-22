import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-playground';
  test: any;
  constructor(store: AngularFirestore) {
    this.test = store.collection('test').valueChanges({value: 'message'}) as Observable<any>;
  }
}
