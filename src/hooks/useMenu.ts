import { useState } from "react";
import { fakeMenu } from "@/fakeData/fakeMenu";
import { deepClone } from "@/utils/array";
import { syncBothMenus } from "@/api/product";
import { MenuProduct } from "@/types/Product";

export const useMenu = () => {
  const [menu, setMenu] = useState<MenuProduct[] | undefined>(undefined);

  // comportements (gestionnaire de state ou "state handlers")
  const handleAdd = (newProduct: MenuProduct, username: string) => {
    if (menu) {
      // 1. copie du tableau
      const menuCopy = deepClone<MenuProduct>(menu);
      // 2. manip de la copie du tableau
      const menuUpdated = [newProduct, ...menuCopy];

      // 3. update du state
      setMenu(menuUpdated);
      syncBothMenus(username, menuUpdated);
    }
  };

  const handleDelete = (idOfProductToDelete: string, username: string) => {
    if (menu) {
      //1. copy du state
      const menuCopy = deepClone<MenuProduct>(menu);
      //2. manip de la copie state
      const menuUpdated: MenuProduct[] = menuCopy.filter(
        (product) => product.id !== idOfProductToDelete
      );

      //3. update du state
      setMenu(menuUpdated);
      syncBothMenus(username, menuUpdated);
    }
  };

  const handleEdit = (productBeingEdited: MenuProduct, username: string) => {
    if (menu) {
      // 1. copie du state (deep clone)
      const menuCopy = deepClone<MenuProduct>(menu);

      // 2. manip de la copie du state
      const indexOfProductToEdit: number = menu.findIndex(
        (menuProduct: MenuProduct) => menuProduct.id === productBeingEdited.id
      );
      menuCopy[indexOfProductToEdit] = productBeingEdited;

      // 3. update du state
      setMenu(menuCopy);
      syncBothMenus(username, menuCopy);
    }
  };

  const resetMenu = (username: string) => {
    setMenu(fakeMenu.LARGE);
    syncBothMenus(username, fakeMenu.LARGE);
  };

  return { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu };
};
