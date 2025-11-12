// src/utils/getAllProducts.js
import { products } from "../data/mock";

/**
 * Returns a flat array of all products across categories (phones, audio, cmf).
 */
export const getAllProducts = () => {
    return Object.values(products).flat();
};
