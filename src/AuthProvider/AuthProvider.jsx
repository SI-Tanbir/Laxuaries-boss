

import React, { createContext, useContext, useEffect } from 'react'
import auth from './firebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const AuthContext=createContext()

const AuthProvider = ({children}) => {




  const CreateUser=(email,password)=>{

    return createUserWithEmailAndPassword(auth, email, password);

  }

  const Signin=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)

  }

  useEffect(()=>{

    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log('it observing ',uid)
        
        // ...
      } else {
        // User is signed out
        console.log("it observing",user)
        // ...
      }


    })

    return () =>unsubscribe();




  },[])


    const hello='iam testing'
    const authInfo={ hello,Signin,CreateUser

    }
  return (
    <div>

        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>



    </div>
  )
}

export default AuthProvider