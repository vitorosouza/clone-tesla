import { useCallback, useContext, useEffect } from 'react'

import ModelContext from "./ModelsContext";

export default function useModel(modelName: string) {
    const { registerModel, unregisterModel, getModelByName} = useContext(
        ModelContext
    )

    useEffect(() => () => unregisterModel(modelName), [
        modelName,
        unregisterModel

    ])

    const getModel = useCallback(() => getModelByName(modelName), [
        getModelByName, 
        modelName
    ])

    return { registerModel, getModel }

}