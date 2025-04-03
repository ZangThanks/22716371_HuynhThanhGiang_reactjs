import { createContext } from "react";

import pic1 from '../assets/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg';
import pic2 from '../assets/jordan-nix-CkCUvwMXAac-unsplash.jpeg';
import pic3 from '../assets/nature-zen-3Dn1BZZv3m8-unsplash.jpeg';

export const UseContext = createContext()

export const ItemProvider = ({children}) => {
    const data = [
        {image: pic1, alt: "Tree pot", detail: "Original package design from house", price: 25},
        {image: pic2, alt: "Fashion set", detail: "Costume package", price: 35},
        {image: pic3, alt: "Juice Drinks", detail: "Nature made another world", price: 45}
    ]

    return (
        <UseContext.Provider value={{data}}>
            {children}
        </UseContext.Provider>
    )
}