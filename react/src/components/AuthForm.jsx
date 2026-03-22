import { useState } from 'react'
import { login, register } from '../services/auth'

const TABS = { LOGIN: 'login', SIGNUP: 'signup' }

function InputField({ id, label, type = 'text', value, onChange, placeholder, minLength }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ocean-100/80">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minLength={minLength}
        required
        className="w-full rounded-lg border border-navy-500/50 bg-navy-800/60 px-4 py-3 text-white
          placeholder:text-ocean-200/30 focus:outline-none focus:ring-2 focus:ring-ocean-400/50
          focus:border-ocean-400/50 transition-all text-sm backdrop-blur-sm"
      />
    </div>
  )
}

function RoleSelector({ value, onChange }) {
  const roles = [
    { id: 'FISHERMAN', label: 'Fisherman', icon: '🎣' },
    { id: 'VENDOR', label: 'Vendor', icon: '🏪' },
  ]

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-ocean-100/80">I am a</span>
      <div className="grid grid-cols-2 gap-3">
        {roles.map(role => (
          <button
            key={role.id}
            type="button"
            onClick={() => onChange(role.id)}
            className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium
              transition-all cursor-pointer
              ${value === role.id
                ? 'border-ocean-400 bg-ocean-400/15 text-ocean-300 ring-1 ring-ocean-400/30'
                : 'border-navy-500/40 bg-navy-800/40 text-ocean-100/50 hover:border-navy-500/70 hover:text-ocean-100/70'
              }`}
          >
            <span className="text-lg">{role.icon}</span>
            {role.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function AuthForm() {
  const [tab, setTab] = useState(TABS.LOGIN)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [role, setRole] = useState('FISHERMAN')

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setFullName('')
    setRole('FISHERMAN')
    setError('')
    setSuccess('')
  }

  const switchTab = (newTab) => {
    resetForm()
    setTab(newTab)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      if (tab === TABS.LOGIN) {
        const data = await login(email, password)
        setSuccess(`Welcome back, ${data.user?.fullName || 'user'}!`)
      } else {
        await register(fullName, email, password, role)
        setSuccess('Account created! You can now log in.')
        setTimeout(() => switchTab(TABS.LOGIN), 1500)
      }
    } catch (err) {
      const message = err.response?.data?.message
        || err.response?.data?.error
        || err.message
        || 'Something went wrong'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  const isLogin = tab === TABS.LOGIN

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tab toggle */}
      <div className="flex rounded-xl bg-navy-800/80 p-1.5 mb-8 border border-navy-600/30">
        {[
          { key: TABS.LOGIN, label: 'Sign In' },
          { key: TABS.SIGNUP, label: 'Sign Up' },
        ].map(t => (
          <button
            key={t.key}
            type="button"
            onClick={() => switchTab(t.key)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all cursor-pointer
              ${tab === t.key
                ? 'bg-ocean-400/20 text-ocean-300 shadow-sm'
                : 'text-ocean-100/40 hover:text-ocean-100/60'
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Heading */}
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-white">
          {isLogin ? 'Welcome back' : 'Create account'}
        </h2>
        <p className="text-ocean-100/50 text-sm mt-1">
          {isLogin
            ? 'Enter your credentials to access the marketplace'
            : 'Join the underwater marketplace today'}
        </p>
      </div>

      {/* Error / Success */}
      {error && (
        <div className="mb-4 rounded-lg bg-coral-500/15 border border-coral-500/30 px-4 py-3 text-coral-400 text-sm">
          {error}
        </div>
      )}
      {success && (
        <div className="mb-4 rounded-lg bg-seafoam-400/15 border border-seafoam-400/30 px-4 py-3 text-seafoam-300 text-sm">
          {success}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {!isLogin && (
          <InputField
            id="fullName"
            label="Full Name"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            placeholder="Captain Ahab"
            minLength={1}
          />
        )}

        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@ocean.com"
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Min. 6 characters"
          minLength={6}
        />

        {!isLogin && (
          <RoleSelector value={role} onChange={setRole} />
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-lg bg-coral-500 py-3.5 text-sm font-semibold text-white
            hover:bg-coral-600 active:bg-coral-600 transition-colors cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            shadow-lg shadow-coral-500/25"
        >
          {loading
            ? (isLogin ? 'Signing in...' : 'Creating account...')
            : (isLogin ? 'Sign In' : 'Create Account')
          }
        </button>
      </form>

      {/* Footer link */}
      <p className="mt-6 text-center text-sm text-ocean-100/40">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <button
          type="button"
          onClick={() => switchTab(isLogin ? TABS.SIGNUP : TABS.LOGIN)}
          className="text-ocean-300 hover:text-ocean-200 font-medium transition-colors cursor-pointer"
        >
          {isLogin ? 'Sign up' : 'Sign in'}
        </button>
      </p>
    </div>
  )
}
