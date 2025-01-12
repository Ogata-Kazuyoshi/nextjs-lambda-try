import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className="flex h-8 justify-between items-center bg-gray-800 text-white border-b border-gray-700">
            <Link href="/">デプロイテスト</Link>
            <button>Menu</button>
        </div>
    )
}

export default Header
