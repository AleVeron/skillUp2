import "../src/App.css"
import { Routes, Route, useLocation } from 'react-router-dom'
import Login from "./components/Pages/Login/LogIn"
import Error from "./components/Pages/Error/Error"
import Task from "./components/Pages/Task/Task"
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useEffect } from 'react'



function App() {


  //Cheking user

  const [user, setUser] = useState()

  useEffect(() => {
    const user = localStorage.getItem("logged")
    setUser(user)
  }, [])

  //Transitions 

  const pageTransition = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  }


  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>


        {!user ? <>
          <Route path="/login" element={<motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}><Login /></motion.div>} />

          <Route path="/" element={<motion.div className="page task" initial="out" animate="in" exit="out" variants={pageTransition}><Task /></motion.div>} />

          <Route path="*" element={<motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}><Error /></motion.div>} />
        </> :
          <>
            <Route path="/" element={<motion.div className="page task" initial="out" animate="in" exit="out" variants={pageTransition}><Task /></motion.div>} />

            <Route path="*" element={<motion.div className="page" initial="out" animate="in" exit="out" variants={pageTransition}><Error /></motion.div>} />
          </>

        }





      </Routes>
    </AnimatePresence>
  )
}

export default App
