import axios from "axios"
import { useEffect, useState } from "react"

export const useMonsterList = () => {
    const [monsters, setMonsterts] = useState([{index: '', name: '', url: ''}])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchMonstertList() {
        try {
            setError('')
            setLoading(true)

            const getMonstertsList = await axios.get('https://www.dnd5eapi.co/api/monsters')
            setMonsterts(getMonstertsList.data.results)

            setLoading(false)

        } catch (e) {

            setLoading(false)
            setError('Error')

        }
    }

    useEffect(() => {
        fetchMonstertList()
    }, [])

    return { monsters, loading, error }
}