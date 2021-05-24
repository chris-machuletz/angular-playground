import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-combine-widget',
  templateUrl: './combine-widget.component.html',
  styleUrls: ['./combine-widget.component.scss']
})
export class CombineWidgetComponent implements OnInit {

  substanceCount: number | undefined;

  constructor(private db: AngularFirestore) {
    db.collection('substances').get().subscribe(next => {
      this.substanceCount = next.size;
    });
  }

  ngOnInit(): void {
  }

}
