import { log } from "@/lib/serverLogger"

const Server = () => {
    log.fatal("Hello from Server") //use the server logger instance to log into a file and in the console during development
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Server component
    </main>
  )
}

export default Server
