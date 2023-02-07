import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const dataContext = createContext()

export function DataProvider(props) {
    
    const [all, setAll] = useState([])

    const changeData = async (name) => {
        const { data } = await axios.get('http://localhost:9000/' + name)
        setAll(data)
    }

    useEffect(() => {
        axios.get('http://localhost:9000/xodimlar')
            .then(res => {
                setAll(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <dataContext.Provider value={[all, changeData]}>
            {props.children}
        </dataContext.Provider>
    )
}

