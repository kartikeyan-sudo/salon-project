import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Pencil, Trash2, Film, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function GalleryManagement() {
  // Sample gallery data
  const images = [
    { id: 1, title: "Short Bob Cut", type: "image", thumbnail: "/placeholder.svg?height=300&width=300&text=Style+1" },
    { id: 2, title: "Men's Fade", type: "image", thumbnail: "/placeholder.svg?height=300&width=300&text=Style+2" },
    {
      id: 3,
      title: "Balayage Highlights",
      type: "image",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Style+3",
    },
    { id: 4, title: "Pixie Cut", type: "image", thumbnail: "/placeholder.svg?height=300&width=300&text=Style+4" },
    { id: 5, title: "Long Layers", type: "image", thumbnail: "/placeholder.svg?height=300&width=300&text=Style+5" },
    {
      id: 6,
      title: "Color Transformation",
      type: "video",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Video+1",
    },
    {
      id: 7,
      title: "Styling Tutorial",
      type: "video",
      thumbnail: "/placeholder.svg?height=300&width=300&text=Video+2",
    },
    { id: 8, title: "Beard Grooming", type: "video", thumbnail: "/placeholder.svg?height=300&width=300&text=Video+3" },
  ]

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gallery Management</h1>
          <p className="text-muted-foreground">Manage your salon's gallery images and videos.</p>
        </div>
        <Link href="/admin/gallery/add">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Item
          </Button>
        </Link>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search gallery items..." className="pl-10" />
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="images" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images
              .filter((item) => item.type === "image")
              .map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images
              .filter((item) => item.type === "video")
              .map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function GalleryItem({ item }: { item: { id: number; title: string; type: string; thumbnail: string } }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Film className="h-10 w-10 text-white" />
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium truncate">{item.title}</h3>
            <p className="text-xs text-muted-foreground capitalize">{item.type}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Pencil className="h-4 w-4" />
              <span className="sr-only">Edit</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
              <Trash2 className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
