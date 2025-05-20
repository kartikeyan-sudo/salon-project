"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Plus, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function AddService() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [pricingOptions, setPricingOptions] = useState([{ id: 1, name: "Standard", price: "" }])

  const addPricingOption = () => {
    setPricingOptions([...pricingOptions, { id: Date.now(), name: "", price: "" }])
  }

  const removePricingOption = (id: number) => {
    setPricingOptions(pricingOptions.filter((option) => option.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // In a real app, you would redirect after successful submission
      alert("Service added successfully!")
    }, 1500)
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/admin/services">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Add New Service</h1>
          <p className="text-muted-foreground">Create a new service offering for your salon.</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Service Name</Label>
                <Input id="name" placeholder="e.g. Precision Haircut" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="haircuts">Haircuts</SelectItem>
                    <SelectItem value="color">Color</SelectItem>
                    <SelectItem value="styling">Styling</SelectItem>
                    <SelectItem value="treatments">Treatments</SelectItem>
                    <SelectItem value="mens">Men's Services</SelectItem>
                    <SelectItem value="special">Special Occasions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe the service in detail" rows={4} required />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Pricing Options</Label>
                <Button type="button" variant="outline" size="sm" onClick={addPricingOption}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Option
                </Button>
              </div>

              <div className="space-y-4">
                {pricingOptions.map((option, index) => (
                  <div key={option.id} className="flex items-start gap-4">
                    <div className="grid md:grid-cols-2 gap-4 flex-1">
                      <div className="space-y-2">
                        <Label htmlFor={`option-name-${option.id}`}>Option Name</Label>
                        <Input
                          id={`option-name-${option.id}`}
                          placeholder={index === 0 ? "e.g. Standard" : "e.g. Premium"}
                          required={index === 0}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`option-price-${option.id}`}>Price</Label>
                        <Input id={`option-price-${option.id}`} placeholder="e.g. $45" required={index === 0} />
                      </div>
                    </div>
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="mt-8"
                        onClick={() => removePricingOption(option.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove option</span>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" type="number" placeholder="e.g. 60" min="5" step="5" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Service Image URL (optional)</Label>
                <Input id="image" placeholder="https://example.com/image.jpg" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="active" defaultChecked />
              <Label htmlFor="active">Active (visible to clients)</Label>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" type="button" asChild>
                <Link href="/admin/services">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Service"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
