import firebase from '../configs/firebase';


export const fbRegister = async (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      return response.user;
    })
    .catch(error=>{
      console.log(error);
    })
}

export const fbUpdateName = async (user, firstName, lastName) => {
  return user.updateProfile({displayName: `${firstName} ${lastName}`})
    .then(() => true)
    .catch(error => {
      console.log(error);
    })
}

export const fbLogin = async (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=> true)
    .catch(error => {
      console.log(error);
    })
}

export const fbLogout = async () => {
  return firebase.auth().signOut()
    .then(() => true)
}

export const fbCurrentUser = async () => {
  let userLoaded = false
  const getCurrentUser = (auth) => {
    return new Promise((resolve, reject) => {
      if (userLoaded) {
        resolve(firebase.auth.currentUser);
      }
      const unsubscribe = auth.onAuthStateChanged(user => {
        userLoaded = true
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }

  return getCurrentUser(firebase.auth())
}
