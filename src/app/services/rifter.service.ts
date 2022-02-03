import { Rifter } from './rifter';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RifterService {
    rifterCollection: AngularFirestoreCollection <Rifter>;

    constructor(private afs: AngularFirestore) {
        this.rifterCollection = this.afs.collection<Rifter>('rifters');
    }

    addRifter(item: Rifter) {
        item.createdAt = serverTimestamp();
        return this.rifterCollection.add(item);
    }

    updateRifterById(id, item: Rifter) {
        return this.rifterCollection.doc(id).set(item);
    }

    getRifters(): Observable<Rifter[]> {
        return this.rifterCollection.valueChanges({idField: 'id'});
    }

    getRifterById(id): Observable<Rifter>{
        return this.rifterCollection.doc<Rifter>(id).valueChanges().pipe(take(1));
    }

    deleteRifterById(id) {
        return this.afs.doc<Rifter>(`rifters/${id}`).delete();
    }
}

