import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User, UserInterface } from '../models/user.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData$: Observable<firebase.User>;

  constructor(
    private afsAuth: AngularFireAuth,
    private afs: AngularFirestore) {
      this.userData$ = afsAuth.authState;
    }

    get uid(): string {
      return localStorage.getItem('uid');
    }

    registerUser(user: User) {
      return new Promise((resolve, reject) => {
        this.afsAuth.createUserWithEmailAndPassword(user.email, user.password)
          .then(userData => {
            resolve(userData),
              this.updateUserData(userData.user, user);
          }).catch(err => console.log(reject(err)));
      });
    }

    loginEmailUser(email: string, pass: string) {
      return new Promise((resolve, reject) => {
        this.afsAuth.signInWithEmailAndPassword(email, pass)
          .then(userData => resolve(userData),
          err => reject(err));
      });
    }

    logoutUser() {
      return this.afsAuth.signOut();
    }

    getUser() {
      return this.afs.doc(`users/${this.uid}`).valueChanges();
    }

    private updateUserData(user, userInfo) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`user/${user.uid}`);
      const data: UserInterface = {
        uid: user.uid,
        email: userInfo.email,
        name: userInfo.name,
        surname: userInfo.surname
      };

      return userRef.set(data, { merge: true });
    }
}
