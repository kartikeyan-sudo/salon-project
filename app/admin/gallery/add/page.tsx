"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Upload, ImageIcon, Film, Check } from "lucide-react"

export default function AddGalleryItem() {
  const [itemType, setItemType] = useState("image")
  const [isUploading, setIsUploading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [previewUrl, setPreviewUrl] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // In a real app, you would upload to a server
      // Here we just create a local object URL for preview
      setIsUploading(true)
      setTimeout(() => {
        setPreviewUrl(URL.createObjectURL(file))
        setIsUploading(false)
      }, 1500)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // In a real app, you would redirect after successful submission
      alert("Gallery item added successfully!")
    }, 1500)
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/admin/gallery">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Add Gallery Item</h1>
          <p className="text-muted-foreground">Upload a new image or video to your gallery.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter a title for this gallery item" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Provide a brief description of this gallery item" rows={4} />
              </div>

              <div className="space-y-2">
                <Label>Item Type</Label>
                <RadioGroup defaultValue="image" className="flex gap-4" onValueChange={setItemType}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="image" id="image" />
                    <Label htmlFor="image" className="flex items-center gap-1 cursor-pointer">
                      <ImageIcon className="h-4 w-4" />
                      Image
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video" className="flex items-center gap-1 cursor-pointer">
                      <Film className="h-4 w-4" />
                      Video
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">Upload {itemType === "image" ? "Image" : "Video"}</Label>
                <div className="border rounded-md p-4">
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="file"
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="mb-2 text-sm text-muted-foreground">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {itemType === "image" ? "PNG, JPG or GIF" : "MP4, MOV or WEBM"} (max. 10MB)
                        </p>
                      </div>
                      <Input
                        id="file"
                        type="file"
                        className="hidden"
                        accept={itemType === "image" ? "image/*" : "video/*"}
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input id="tags" placeholder="Enter tags separated by commas" />
                <p className="text-xs text-muted-foreground">
                  Tags help clients find your work when browsing the gallery.
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline" type="button" asChild>
                  <Link href="/admin/gallery">Cancel</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting || !previewUrl}>
                  {isSubmitting ? "Saving..." : "Save Gallery Item"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-4">Preview</h3>
            {previewUrl ? (
              <div className="aspect-square relative rounded-md overflow-hidden border">
                {itemType === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={previewUrl || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black/10">
                    <Film className="h-10 w-10 text-muted-foreground" />
                    <span className="sr-only">Video preview</span>
                  </div>
                )}
              </div>
            ) : isUploading ? (
              <div className="aspect-square flex items-center justify-center border rounded-md bg-muted/30">
                <div className="text-center">
                  <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p className="text-sm text-muted-foreground">Uploading...</p>
                </div>
              </div>
            ) : (
              <div className="aspect-square flex items-center justify-center border rounded-md bg-muted/30">
                <div className="text-center text-muted-foreground">
                  <p className="text-sm">No file selected</p>
                  <p className="text-xs mt-1">Preview will appear here</p>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-4">
              <h3 className="font-medium">Upload Tips</h3>
              <ul className="space-y-2">
                {[
                  "Use high-quality images to showcase your work",
                  "Keep file sizes under 10MB for optimal performance",
                  "Square images work best for the gallery grid",
                  "Add descriptive tags to improve discoverability",
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
