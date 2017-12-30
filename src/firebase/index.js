import { initializeApp } from 'firebase'
import firebaseConfig from '../../env.json'

const app = initializeApp(firebaseConfig)

export const db = app.database()
export const teamsRef = db.ref('teams')
export const usersRef = db.ref('users')
export const badgesRef = db.ref('badges')
export const pingsRef = db.ref('pings')
export const logsRef = db.ref('logs')
