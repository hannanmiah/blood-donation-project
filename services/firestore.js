import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  getDocs,
} from '@firebase/firestore'

const db = getFirestore()

const addData = async (coll, data, id) => {
  let docRef
  if (id) {
    try {
      docRef = await setDoc(doc(db, coll, id), data)
    } catch (error) {
      console.error(error.message)
    }
  } else {
    try {
      await addDoc(collection(db, coll), data)
    } catch (error) {
      console.error(error.message)
    }
  }

  return docRef
}

const fetchAllData = async (coll) => {
  const data = []
  try {
    const dataSnapshot = await getDocs(collection(db, coll))
    dataSnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })
  } catch (error) {
    console.error(error.message)
  }

  return data
}

export default { addData, fetchAllData }
