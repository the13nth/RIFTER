import { Drivers } from './drivers';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DriversService {
    driversCollection: AngularFirestoreCollection <Drivers>;

    constructor(private afs: AngularFirestore) {
        this.driversCollection = this.afs.collection<Drivers>('driverses');
    }

    addDrivers(item: Drivers) {
        item.createdAt = serverTimestamp();
        return this.driversCollection.add(item);
    }

    updateDriversById(id, item: Drivers) {
        return this.driversCollection.doc(id).set(item);
    }

    getDriverss(): Observable<Drivers[]> {
        return this.driversCollection.valueChanges({idField: 'id'});
    }

    getDriversById(id): Observable<Drivers>{
        return this.driversCollection.doc<Drivers>(id).valueChanges().pipe(take(1));
    }

    deleteDriversById(id) {
        return this.afs.doc<Drivers>(`driverses/${id}`).delete();
    }
}

