import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { MenuProduct } from "@/types/Product";

export const syncBothMenus = (userId: string, menuUpdated: MenuProduct[]) => {
  const userMenuDoc = doc(db, "users", userId); // Cachette / référence au document dans la base de donnnée.

  const menuItemData = {
    // Nourriture / Objet contenant les donnée des élements du menu.
    username: userId,
    menu: menuUpdated,
  };
  setDoc(userMenuDoc, menuItemData);
};

export const getMenu = async (idUser: string) => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    return menu;
  }
};
