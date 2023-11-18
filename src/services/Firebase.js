import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore , collection, getDocs, doc, getDoc ,query , where, addDoc, orderBy, /* writeBatch  */} from "firebase/firestore";
import espacios from "../data/espacios";

const firebaseConfig = {
  apiKey: "AIzaSyAm0wvLiDabRFHqC_lYwzhCzvpwsBPmP2o",
  authDomain: "aloha-152.firebaseapp.com",
  projectId: "aloha-152",
  storageBucket: "aloha-152.appspot.com",
  messagingSenderId: "1073540384409",
  appId: "1:1073540384409:web:591d8c20a2ae5a8efe9a08",
  measurementId: "G-Y3P00MH46Q"
};

const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);
const db = getFirestore(FirebaseApp)

export async function getData() {
  const roomsCollectionRef = collection(db , "Rooms")
  const q = query(roomsCollectionRef, orderBy("index"));
  const roomsSnapshot = await getDocs(q);
  const arrayDocs = roomsSnapshot.docs;
  const dataDocs = arrayDocs.map(doc => {
    return {...doc.data(), id : doc.id}
  }) ;
  return dataDocs;
}

export async function getRoomData(idURL) {
  const docRef = doc(db, "Rooms", idURL);
  const docSnap = await getDoc(docRef);
  return {id: docSnap.id , ...docSnap.data()}
}

export async function getCategoryData(categoryId) {
  const roomsCollectionRef = collection(db, "Rooms");
  const q = query(roomsCollectionRef, where("category" , "==" , categoryId));
  const roomsSnapshot = await getDocs(q);
  const arrayDocs = roomsSnapshot.docs;
  const dataDocs = arrayDocs.map(doc => {
    return {...doc.data(), id : doc.id}
  }) ;
  return dataDocs;
}

export async function getEspaciosData() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(espacios);
    },2000)
  })
}

export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "solicitudes");
  const response = await addDoc(ordersCollectionRef, data);
  return response.id;
}
