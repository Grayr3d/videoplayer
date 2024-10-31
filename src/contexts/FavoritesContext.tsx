import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { useAuth } from './AuthContext';

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (videoId: string) => Promise<void>;
  removeFavorite: (videoId: string) => Promise<void>;
  isFavorite: (videoId: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { currentUser } = useAuth();
  const db = getFirestore();

  useEffect(() => {
    const loadFavorites = async () => {
      if (currentUser) {
        const docRef = doc(db, 'favorites', currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFavorites(docSnap.data().videos || []);
        } else {
          setFavorites([]);
        }
      } else {
        setFavorites([]);
      }
    };

    loadFavorites();
  }, [currentUser]);

  const addFavorite = async (videoId: string) => {
    if (!currentUser) return;
    const newFavorites = [...favorites, videoId];
    const docRef = doc(db, 'favorites', currentUser.uid);
    await setDoc(docRef, { videos: newFavorites }, { merge: true });
    setFavorites(newFavorites);
  };

  const removeFavorite = async (videoId: string) => {
    if (!currentUser) return;
    const newFavorites = favorites.filter(id => id !== videoId);
    const docRef = doc(db, 'favorites', currentUser.uid);
    await setDoc(docRef, { videos: newFavorites }, { merge: true });
    setFavorites(newFavorites);
  };

  const isFavorite = (videoId: string) => favorites.includes(videoId);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};