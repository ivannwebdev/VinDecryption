import React, { useEffect, useState }  from "react"
import { Route } from "react-router"
import { API } from "../../api/api"
import VariableInfo from "../VariableInfo/VariableInfo"
import VinVariables from "../VinVariables/VinVariables"
import styles from './content.module.css'
import CodeDecryption from "../CodeDecryption/CodeDecryption"
import { useInput } from "../../hooks/useInput"

const Content = () => {
    const [historyData, setHistoryData] = useState({
        vinKeys: null,
        vinData: null
    })
    
    const [state, setState] = useState({
        list: null,
        data: null,
        message: null,
        isLoading: null
    })

    const input = useInput('', {isEmpty: true, maxLength: 17, hasBannedSymbols: false})

    const getHistory = () => {
        const storageKeys =  JSON.parse(localStorage.getItem('vinKeys')) || []
        const storageData = JSON.parse(localStorage.getItem('vinData')) || []
        const storageMessages= JSON.parse(localStorage.getItem('vinMessages')) || []

        setHistoryData({vinData: storageData, vinKeys: storageKeys, vinMessages: storageMessages})
    }

    const setHistory = (data, key) => {

        const storageKeys =  JSON.parse(localStorage.getItem('vinKeys')) || []
        const storageData = JSON.parse(localStorage.getItem('vinData')) || []
        for( let i of storageKeys){
            if(i === key) return
        }
        
        if(storageKeys.length > 4) {
            storageKeys.pop()
            storageData.pop()
            storageKeys.unshift(key)
            storageData.unshift(data)

        }
        else {
            storageKeys.unshift( key)
            storageData.unshift( data)
        }
        
        localStorage.setItem('vinKeys', JSON.stringify(storageKeys))
        localStorage.setItem('vinData', JSON.stringify(storageData))
        setHistoryData({vinKeys: storageKeys, vinData: storageData})
    }

    const getData = async (code) => {

        if(input.isEmpty) return
        if(input.isMaxLength) return
        if(input.hasBannedSymbols) return
        setState({...state, isLoading: true})

        await API.getVariables(code)
        
        .then(res => {
            setState({
                ...state,
                data: res.data,
                message: res.message,
                isLoading: false
            })
            setHistory(res.data, res.vin)
        }
        ) 
    }
   
    const getStorageData = (id) => {

        const data = JSON.parse(localStorage.getItem('vinData'))
        const currentData = data.find((el, i) => i === id)
        setState({...state, data: currentData, message: null})
    }

    const getList = async () => {

        const list = await API.getList()
        setState( {...state, list} )
    }

    useEffect( () => {
        getHistory()
    }, [])

    return <main className= {styles.content}>

        <Route 
            exact
            path= '/' 
            render= {() => <CodeDecryption
                state= {state}
                historyData= {historyData}
                getStorageData= {getStorageData}
                getData= {getData}
                input= {input}
                onInputChange= {input.onChange}
            />}
        />

        <Route 
            exact 
            path= '/variables/:id' 
            render= {
                (props) => <VariableInfo {...props} target={ (state.list || []).find( e => `${e.ID}` === props.match.params.id )}/>
            }  
        />

        <Route 
            exact 
            path= '/variables' 
            render= {() => <VinVariables 
                
                list= {state.list}
                getList= {getList}
            />}
        />
        
    </main>
}

export default Content 