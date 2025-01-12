import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import { MenuProduct } from "@/types/Product";

// 1. D'abord, définir l'alias de type pour le type de retour de getUser()
type UserData = {
  username: string;
  menu: MenuProduct[];
};

// 2. Typer la fonction getUser avec un retour explicite
export const getUser = async (
  userId: string
): Promise<UserData | undefined> => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data() as UserData;
    return userReceived;
  }
  return undefined;
};

export const createUser = async (userId: string) => {
  // CACHETTE
  const docRef = doc(db, "users", userId);

  // NOURRITURE
  const newUserToCreate = {
    username: userId,
    menu: fakeMenu.SMALL,
  };

  //setDoc(CACHETTE, NOURRITURE)
  await setDoc(docRef, newUserToCreate);
  return newUserToCreate;
};

// 3. Utiliser Awaited pour obtenir le type de retour
type ExistingUser = Awaited<ReturnType<typeof getUser>>;
// ExistingUser sera égal à UserData | undefined

export const authenticateUser = async (
  userId: string
): Promise<ExistingUser> => {
  const existingUser = await getUser(userId);

  if (!existingUser) {
    return await createUser(userId);
  }
  return existingUser;
};
