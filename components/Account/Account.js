import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'

export default function Account({ session }) {
  const [password, setPassword] = useState('')

  useEffect(() => {
    
  }, [session])

  const handlePasswordChange = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.update({ password })
    if (error) {
      alert(error.message)
      return
    }
    alert('Password updated')
  }

  return (
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" value={session.user.email} disabled />

      <div>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={(e) => handlePasswordChange(e)}>
        Update Password
      </button>
      <br />
      <button onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>
    </div>
  )
}
