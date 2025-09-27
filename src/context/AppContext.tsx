import React, { createContext, useState } from 'react'

export const AppContext = createContext<any>(null)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [selectedPet, setSelectedPet] = useState<any>(null)

  return (
    <AppContext.Provider value={{
      user, setUser,
      cartItems, setCartItems,
      selectedPet, setSelectedPet
    }}>
      {children}
    </AppContext.Provider>
  )
}
