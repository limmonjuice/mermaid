import UnderwaterScene from '../components/UnderwaterScene'
import AuthForm from '../components/AuthForm'

export default function AuthPage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-navy-900">
      {/* Left panel — underwater illustration */}
      <div className="lg:w-1/2 min-h-[340px] lg:min-h-screen">
        <UnderwaterScene />
      </div>

      {/* Right panel — auth form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 sm:p-10 lg:p-16
        bg-gradient-to-br from-navy-800 to-navy-900">
        <AuthForm />
      </div>
    </div>
  )
}
