import React, { useReducer } from 'react'
import { supplierFormReducer } from './supplierFormReducer'
import initialContextStore from './initialContextStore'

const Context = React.createContext() 

const ContextProvider = ({children}) => {    

    const [store, dispatch]= useReducer(supplierFormReducer, initialContextStore)   

    return (
        <Context.Provider value={{store, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {Context as SupplierFormContext}
export {ContextProvider as SupplierFormContextProvider}

