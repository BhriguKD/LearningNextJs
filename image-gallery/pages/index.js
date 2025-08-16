import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/random?count=12&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_KEY}`)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="relative w-full h-64">
            <Image
              src={photo.urls.regular}
              alt={photo.alt_description || "Unsplash Image"}
              fill
              className="object-cover rounded-lg"
              priority={false}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
