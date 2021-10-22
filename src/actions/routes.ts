import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { IRoute } from '../models/route'

const routesRef = collection(db, 'routes')

const routesAPI = {
  async getRoutes() {
    const data = await getDocs(routesRef)
    const routesList = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    console.log(routesList)
    return routesList
  },
  async addRoute(route: IRoute) {
    const res = await addDoc(routesRef, { ...route })
    return res.id
  },
  async updateRoute(id: string, newFields: any) {
    const routeDoc = doc(db, 'routes', id)
    await updateDoc(routeDoc, newFields)
  },
  async deleteRoute(id: string) {
    const routeDoc = doc(db, 'routes', id)
    await deleteDoc(routeDoc)
  },
}

export default routesAPI
