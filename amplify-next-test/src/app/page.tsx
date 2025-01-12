import Link from 'next/link'

export default function Home() {
    return (
        <div className="bg-gray-800 flex flex-col items-center justify-center h-full">
            <h1 className="text-white text-8xl font-bold">
                Nextjs with Amplify
            </h1>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-md">
                <Link href="/path">path</Link>
            </button>
        </div>
    )
}
