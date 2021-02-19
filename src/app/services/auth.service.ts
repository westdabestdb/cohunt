import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState: Observable<firebase.User>
  private currentUser: firebase.User = null;

  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore) {
    this.authState = this.auth.authState;

    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        // this.localStorage.storeSimple('userData', user)
        // this.openSnackBar('Successfully authenticated');
        console.log('AUTHSTATE USER', user)
        // this.router.navigate(['home']);
      } else {
        console.log('AUTHSTATE USER EMPTY', user)
        this.currentUser = null;
      }
    },
      err => {
        // this.openSnackBar(`${err.status} ${err.statusText} (${err.error.message})`, 'Please try again')
      });
  }

  get user() {
    return this.currentUser;
  }

  loginWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  registerWithEmail(username: string, email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.user.updateProfile({
          displayName: username,
          photoURL: `https://avatars.dicebear.com/4.5/api/gridy/${username}.svg`
        })
        user.additionalUserInfo.username = username;
      })
      .catch(error => {
        console.log(error);
        throw error
      });
  }

}