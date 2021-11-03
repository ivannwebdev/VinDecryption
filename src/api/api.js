import axios from "axios"

export const API = {
    getVariables: (code) => {

        const url = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${code}?format=json`
    
       return axios.get(url)
       .then(res => {
           const vin = res.data.SearchCriteria
           const data = res.data.Results.filter(el => el.Value != null && el.Value != '')
           const message = res.data.Message
           return {
               data,
               message,
               vin
           }
       })
    },
    getList: () => {
        const url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json'

        return axios.get(url)
        .then(res => {
           const data = res.data.Results
           return data
        })
    }
}