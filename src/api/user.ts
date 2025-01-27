import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import { User } from "@/types/User";

// 1. Typer le retour de la fonction getUser() avec un retour explicite
export const getUser = async (userId: string): Promise<User | undefined> => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived as User;
  }
};

export const createUser = async (userId: string): Promise<User> => {
  // CACHETTE
  const docRef = doc(db, "users", userId);

  // NOURRITURE
  const newUserToCreate: User = {
    username: userId,
    menu: fakeMenu.SMALL,
  };

  //setDoc(CACHETTE, NOURRITURE)
  await setDoc(docRef, newUserToCreate);
  return newUserToCreate;
};

// 2. Utiliser Awaited pour obtenir le type de retour
type ExistingUser = Awaited<ReturnType<typeof getUser>>; // @TODO: à déployer pour les autres fonctions prochainement.
// ExistingUser sera égal à User | undefined

export const authenticateUser = async (
  userId: string
): Promise<ExistingUser> => {
  const existingUser = await getUser(userId);

  if (!existingUser) {
    return await createUser(userId);
  }
  return existingUser;
};
