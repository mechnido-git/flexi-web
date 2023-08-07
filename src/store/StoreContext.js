import { createContext, useRef, useState } from "react";
import video from '../assets/videos/file.mp4'

export const StoreContext = createContext(null)

const Store = ({children}) => {
    const [model, setModel] = useState(0)

    const slides = useRef()

    const models = [
        {
            name: "MODEL E",
            video: video
        },
        {
            name: 'MODEL C',
            video: video
        },
        {
            name: "MODEL O",
            video: video
        }
    ]

    return <StoreContext.Provider value={{model, setModel, models, slides}} >
        {children}
    </StoreContext.Provider>
}

export default Store