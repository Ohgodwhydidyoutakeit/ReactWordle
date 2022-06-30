

import axios, { AxiosError, AxiosResponse } from 'axios'
import { FC, useEffect, useState } from 'react'
import { Loading } from '../Loading/Loading'
import './Main.css'

// for now without options
interface IApiResponse {
    word: string
}
export const Main: FC = () => {
    const URL = "http://localhost:7000/api/v1/random"
    // get some api stuff
    const [apiReponse, setApiResponse] = useState<IApiResponse>()
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<AxiosError | null>()
    useEffect(() => {
        axios.get<IApiResponse>(URL).then((data: AxiosResponse) => {
            setApiResponse(data.data)
            setLoading(__prevState => false)
        }).catch((error: AxiosError) => {
            setError(_prevState => error)
            setLoading(__prevState => true)

        })
    }, [])
    return (
        <div className="main-container">
            {
                loading && <Loading />
            }
            <p>{apiReponse?.word}</p>
        </div>
    )
}