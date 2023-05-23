import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="h-screen w-screen snap-y snap-mandatory overflow-scroll">
        <div className="flex h-screen w-screen snap-start items-center justify-center bg-yellow-100 text-5xl">
          <div></div>
          <div>
            <Image
              width={300}
              height={300}
              src=""
              alt="A selfie of Jordan, well-lit, wearing a dress shirt and tie, eyebrow piercing, long hair, young, white, 24 years old."
            />
          </div>
        </div>
        <div className="flex h-screen w-screen snap-start items-center justify-center bg-yellow-500 text-5xl">
          2
        </div>
        <div className="flex h-screen w-screen snap-start items-center justify-center bg-yellow-900 text-5xl">
          3
        </div>
      </div>
    </main>
  )
}
