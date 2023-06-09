import { supabase } from "@/lib/Store"
import { useState } from "react"

const MessageHome = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (type:any, username:any, password:any) => {
    try {
      const { error, data: { user } } =
        type === 'LOGIN'
          ? await supabase.auth.signInWithPassword({ email: username, password })
          : await supabase.auth.signUp({ email: username, password })
      // If the user doesn't exist here and an error hasn't been raised yet,
      // that must mean that a confirmation email has been sent.
      // NOTE: Confirming your email address is required by default.
      if (error) {
        alert('Error with auth: ' + error.message)
      } else if (!user) alert('Signup successful, confirmation mail should be sent soon!')
    } catch (error:any) {
      console.log('error', error)
      alert(error.error_description || error)
    }
  }

  return (
    <div className="w-full h-full bg-sky-500 flex justify-center items-center p-4 bg-gray-300">
      <div className="w-full sm:w-1/2 xl:w-1/3">
        <form className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg bg-white">
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">Email</label>
            <input
              type="text"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">Password</label>
            <input
              type="password"
              autoComplete="false"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <a
              onClick={(e) => {
                e.preventDefault()
                handleLogin('SIGNUP', username, password)
              }}
              href={'/channels'}
              className="bg-indigo-700 hover:bg-teal text-white py-2 px-4 rounded text-center transition duration-150 hover:bg-indigo-600 hover:text-white"
            >
              Sign up
            </a>
            <a
              onClick={(e) => {
                e.preventDefault()
                handleLogin('LOGIN', username, password)
              }}
              href={'/channels'}
              className="border border-indigo-700 text-indigo-700 py-2 px-4 rounded w-full text-center transition duration-150 hover:bg-indigo-700 hover:text-white"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MessageHome


// learn from specialists
// classes ["online","live"]
// ∂å†´ /* ˇ´ */ BC ∫cCÇ
// cent item scent 
// scene T  S hirt
// pocket & heart
// body & heart
// :; Yantra 
// birth chart
// time samay dhArA 
// †ˆµ´ˇÂ´ mSilentM
// hiss -> lan1 lan2 nnnnnnnnnnnnn >>>>>SSSSS
// cricket noice ThShhhhh RRRRR
// 10 Trillion Company he said
// øµ om Ânothing
// ¥yÁY oøO A Big Anything
// Samay Yantra
