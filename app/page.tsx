// Import necessary dependencies
import Link from 'next/link'

// Define and export the default page component
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Sports Prediction App
      </h1>
      
      <div className="space-y-4">
        <div className="flex gap-4">
          <Link 
            href="/auth/login"
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/register" 
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  )
}
