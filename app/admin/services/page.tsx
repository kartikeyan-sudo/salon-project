import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Pencil, Trash2, Search, ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function ServicesManagement() {
  // Sample services data
  const services = [
    {
      id: 1,
      name: "Precision Cuts",
      description: "Tailored haircuts designed to complement your face shape and personal style.",
      price: "From $45",
      category: "Haircuts",
      status: "active",
    },
    {
      id: 2,
      name: "Color & Highlights",
      description: "From subtle highlights to bold transformations, our color services bring your vision to life.",
      price: "From $85",
      category: "Color",
      status: "active",
    },
    {
      id: 3,
      name: "Styling & Blowouts",
      description: "Professional styling for everyday looks or special occasions.",
      price: "From $35",
      category: "Styling",
      status: "active",
    },
    {
      id: 4,
      name: "Texture Services",
      description: "Perms, relaxers, and smoothing treatments to change or enhance your hair's natural texture.",
      price: "From $120",
      category: "Treatments",
      status: "active",
    },
    {
      id: 5,
      name: "Hair Treatments",
      description: "Restorative treatments to repair damage and enhance the health of your hair.",
      price: "From $40",
      category: "Treatments",
      status: "active",
    },
    {
      id: 6,
      name: "Beard Grooming",
      description: "Expert beard trims, shaping, and maintenance for a polished look.",
      price: "From $25",
      category: "Men's Services",
      status: "active",
    },
    {
      id: 7,
      name: "Bridal Hair",
      description: "Special occasion styling for your big day.",
      price: "From $150",
      category: "Special Occasions",
      status: "inactive",
    },
    {
      id: 8,
      name: "Hair Extensions",
      description: "Add length and volume with premium quality extensions.",
      price: "From $200",
      category: "Treatments",
      status: "inactive",
    },
  ]

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Services Management</h1>
          <p className="text-muted-foreground">Manage your salon's service offerings and pricing.</p>
        </div>
        <Link href="/admin/services/add">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Service
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Services</CardTitle>
              <CardDescription>Manage and update your salon services.</CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search services..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">
                  <div className="flex items-center gap-1">
                    Name
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="hidden md:table-cell">Price</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">
                    <div>
                      {service.name}
                      <p className="text-xs text-muted-foreground md:hidden mt-1">
                        {service.category} · {service.price}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{service.category}</TableCell>
                  <TableCell className="hidden md:table-cell">{service.price}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant={service.status === "active" ? "default" : "secondary"}>
                      {service.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 md:hidden">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Pencil className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hidden md:flex">
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hidden md:flex">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
