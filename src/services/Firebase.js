import { initializeApp } from "firebase/app";
import { getFirestore , collection, getDocs, doc, getDoc ,query , where, addDoc, orderBy} from "firebase/firestore";
import espacios from "../data/espacios";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm0wvLiDabRFHqC_lYwzhCzvpwsBPmP2o",
  authDomain: "aloha-152.firebaseapp.com",
  projectId: "aloha-152",
  storageBucket: "aloha-152.appspot.com",
  messagingSenderId: "1073540384409",
  appId: "1:1073540384409:web:591d8c20a2ae5a8efe9a08",
  measurementId: "G-Y3P00MH46Q"
};


// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);


//Funcion para order los items
function ordenar(a,b) {
    const titleA = a.title.toUpperCase();
    const titleB = b.title.toUpperCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
}

// Funcion para los datos 
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

//Funcion para los datos de los cuartos individuales
export async function getRoomData(idURL) {
  const docRef = doc(db, "Rooms", idURL);
  const docSnap = await getDoc(docRef);
  return {id: docSnap.id , ...docSnap.data()}
}

// Funcion para los datos de los scuartos filtrado
export async function getCategoryData(categoryId) {
  const roomsCollectionRef = collection(db, "Rooms");
  const q = query(roomsCollectionRef, where("category" , "==" , categoryId));
  const roomsSnapshot = await getDocs(q);
  const arrayDocs = roomsSnapshot.docs;
  const dataDocs = arrayDocs.map(doc => {
    return {...doc.data(), id : doc.id}
  }) ;
  dataDocs.sort(ordenar);
  
  return dataDocs;
}

//Funcion para traer los datos de los espacios desde un documento interno
export async function getEspaciosData() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(espacios);
    },2000)
  })
}

// Funcion para enviar los datos del formulario
export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "solicitudes");
  const response = await addDoc(ordersCollectionRef, data);
  return response.id;
}
