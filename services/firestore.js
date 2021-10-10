import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
  onSnapshot
} from '@firebase/firestore'

const db = getFirestore()

const addData = async (coll, data, id) => {
  let docRef
  if (id) {
    try {
      await setDoc(doc(db, coll, id), data)
    } catch (error) {
      console.error(error.message)
    }
  } else {
    try {
      docRef = await addDoc(collection(db, coll), data)
    } catch (error) {
      console.error(error.message)
    }
  }

  return docRef
}

const fetchAllData = async (coll) => {
  const data = []
  try {
    const q = query(collection(db, coll), orderBy('createdAt','asc'), limit(10))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const storedData = {
        id: doc.id,
        ...doc.data()
      }

      data.push(storedData)
    })
  } catch (error) {
    console.error(error.message)
  }

  return data
}

const onCreated = function (col,callback) {
  onSnapshot(collection(db, col), (snapshot) => {
    snapshot.docChanges().forEach(change => {
      if (change.type === 'added') {
        callback(change.doc.data())
      }
    })
  }, (error) => {
    console.error('error',error.code,error.message)
  })
}

export default { addData, fetchAllData ,onCreated}
