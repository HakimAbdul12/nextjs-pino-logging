'use client'
// import { log } from "@/lib/serverLogger";
import { motion } from "framer-motion";

export default function Home() {
  const user = {
    name: "John",
    age: 30,
    phone: "555-555-5555",
    email: "l4Tn8@example.com",
    card_number: "123456789",
  }
  // log.fatal({user},"Hello from Home");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div
      className="h-24 w-24 rounded-3xl cursor-pointer bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
          rotate:90
        }}
      />
    </main>
  );
}
