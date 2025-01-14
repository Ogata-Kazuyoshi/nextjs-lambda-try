import Link from 'next/link'
import React from 'react'
import UserButton from './UserButton'

const Header = async () => {
  return (
    <div className="flex h-8 justify-between items-center bg-gray-800 text-white border-b border-gray-700">
      <Link href="/">デプロイテスト</Link>
      <UserButton />
      <button>Menu</button>
    </div>
  )
}

export default Header
