/* eslint-disable import/no-unresolved */

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
   apiKey: 'AIzaSyBgIiqc4Suzn6foLLaALL0ndgGrrJo9uhY',
   authDomain: 'auth-368bd.firebaseapp.com',
   projectId: 'auth-368bd',
   storageBucket: 'auth-368bd.appspot.com',
   messagingSenderId: '130470050246',
   appId: '1:130470050246:web:fd33acc405e3b9afffdac7',
   measurementId: 'G-5TVW7XXBVE',
}

const app = initializeApp(firebaseConfig)
export const Auth = getAuth(app)
