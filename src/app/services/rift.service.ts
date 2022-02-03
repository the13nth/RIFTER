import { RIFT } from './rift';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RIFTService {
    rIFTCollection: AngularFirestoreCollection <RIFT>;

    constructor(private afs: AngularFirestore) {
        this.rIFTCollection = this.afs.collection<RIFT>('rIFTs');
    }

    addRIFT(item: RIFT) {
        item.createdAt = serverTimestamp();
        return this.rIFTCollection.add(item);
    }

    updateRIFTById(id, item: RIFT) {
        return this.rIFTCollection.doc(id).set(item);
    }

    getRIFTs(): Observable<RIFT[]> {
        return this.rIFTCollection.valueChanges({idField: 'id'});
    }

    getRIFTById(id): Observable<RIFT>{
        return this.rIFTCollection.doc<RIFT>(id).valueChanges().pipe(take(1));
    }

    deleteRIFTById(id) {
        return this.afs.doc<RIFT>(`rIFTs/${id}`).delete();
    }
}

