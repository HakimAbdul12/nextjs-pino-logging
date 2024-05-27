'use client'
import { log } from "@/lib/clientLogger"
import { useEffect } from "react"

const Client = () => {
    useEffect(()=>{
        log.fatal("Hello from Client")
    })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      client
    </main>
  )
}

export default Client
