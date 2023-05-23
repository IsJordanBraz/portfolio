import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
  return (
    <nav className="fixed left-0 top-0 w-full">
      <ul className="grid grid-cols-2">
        <li className="p-6 text-center">
          <Link
            href="/"
            className="text-2xl font-bold transition-colors hover:text-blue-900"
          >
            Jordan Braz
          </Link>
        </li>
        <li>
          <div className="flex items-center justify-center p-6">
            <Link href="#">
              <Image
                className=""
                width={30}
                height={30}
                src="/github-mark.png"
                alt="github invertocat logo"
              />
            </Link>
            <Link href="#" className="ml-5">
              <Image
                width={30}
                height={30}
                className=""
                src="/linkedin-mark.png"
                alt="linkedin In logo"
              />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}
