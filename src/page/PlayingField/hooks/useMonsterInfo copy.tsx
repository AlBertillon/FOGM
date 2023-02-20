import axios from "axios"
import { useEffect, useState } from "react"

export const useMonsterInfo = () => {
    const [monster, setMonstert] = useState({index: '', name: '', url: '', image: ''})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchMonstertList(nameMonster: string) {
        try {
            setError('')
            setLoading(true)

            const getMonstertsList = await axios.get(`https://www.dnd5eapi.co/api/monsters/${nameMonster}`)
            setMonstert(getMonstertsList.data)
            console.log(getMonstertsList)

            setLoading(false)

        } catch (e) {

            setLoading(false)
            setError('Error')

        }
    }

    // useEffect(() => {
    //     fetchMonstertList()
    // }, [])

    return { fetchMonstertList, monster }
}