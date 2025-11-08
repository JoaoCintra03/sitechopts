"use client"
import { useEffect } from "react"

export default function Home() {

    useEffect (() => {
        console.log('iniciou a pagina')

    }, [])
    return (
        <h1>Hello World Home</h1>
    )
}