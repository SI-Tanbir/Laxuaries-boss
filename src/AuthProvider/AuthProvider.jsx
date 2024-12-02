

import React, { createContext, useContext } from 'react'

export const AuthContext=createContext()

const AuthProvider = ({children}) => {




    const hello='iam testing'
    const authInfo={ hello

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