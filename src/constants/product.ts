import { MenuProduct } from "@/types/Product";

export const EMPTY_PRODUCT: MenuProduct = {
  id: "",
  title: "Produit vide",
  imageSource: "",
  price: "0",
  isAvailable: true,
  isPublicised: false,
} as const;

export const IMAGE_COMING_SOON: string = "/images/coming-soon.png";
export const IMAGE_NO_STOCK: string = "/images/stock-epuise.png";

export const BASKET_MESSAGE = {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
  NOT_AVAILABLE: "Non disponible",
} as const;
