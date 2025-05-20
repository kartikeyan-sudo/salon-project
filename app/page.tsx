"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors, Clock, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-bold">CHROMA</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Gallery
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
            <Link href="/admin" className="text-sm font-medium transition-colors hover:text-primary">
              Admin
            </Link>
          </nav>
          <Button size="sm" className="hidden md:inline-flex">
            Book Now
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="fixed inset-y-0 right-0 z-50 w-64 bg-background shadow-lg transform translate-x-full transition-transform duration-200 ease-in-out md:hidden"
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <Scissors className="h-5 w-5" />
              <span className="font-bold">CHROMA</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex-1 overflow-auto p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#home"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
                >
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
                >
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
                >
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
                >
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors"
                  onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
                >
                  <span>Contact</span>
                </Link>
              </li>
              <li className="pt-4 border-t">
                <Link
                  href="/admin"
                  className="flex items-center gap-2 p-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  onClick={() => document.getElementById("mobile-menu")?.classList.toggle("translate-x-full")}
                >
                  <span>Admin Login</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Salon interior"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center text-white py-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
              Style Redefined – For Him, Her & Everyone
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8">
              Experience premium hair care in a welcoming space designed for all genders. Our expert stylists create
              looks that express your unique identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View Services
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive range of hair services for all genders, tailored to your individual style and
                needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Precision Cuts",
                  description: "Tailored haircuts designed to complement your face shape and personal style.",
                  price: "From $45",
                },
                {
                  title: "Color & Highlights",
                  description:
                    "From subtle highlights to bold transformations, our color services bring your vision to life.",
                  price: "From $85",
                },
                {
                  title: "Styling & Blowouts",
                  description: "Professional styling for everyday looks or special occasions.",
                  price: "From $35",
                },
                {
                  title: "Texture Services",
                  description:
                    "Perms, relaxers, and smoothing treatments to change or enhance your hair's natural texture.",
                  price: "From $120",
                },
                {
                  title: "Hair Treatments",
                  description: "Restorative treatments to repair damage and enhance the health of your hair.",
                  price: "From $40",
                },
                {
                  title: "Beard Grooming",
                  description: "Expert beard trims, shaping, and maintenance for a polished look.",
                  price: "From $25",
                },
              ].map((service, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="font-medium">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Style Gallery</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse our portfolio of styles and transformations to find inspiration for your next look.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=500&width=500&text=Style+${index + 1}`}
                    alt={`Hairstyle ${index + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline">View More</Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=Our+Team"
                  alt="Salon team"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About CHROMA</h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 2015, CHROMA was born from a vision to create a truly inclusive salon space where everyone
                  feels welcome and leaves looking and feeling their best.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of diverse stylists brings expertise from around the world, with specializations in all hair
                  types and textures. We're committed to ongoing education to stay at the forefront of techniques and
                  trends.
                </p>
                <p className="text-muted-foreground mb-6">
                  At CHROMA, we believe that great hair isn't gendered. Our pricing is based on hair length and service
                  complexity, not gender, reflecting our commitment to equality and inclusivity.
                </p>
                <p className="text-muted-foreground mb-6">
                  We use only premium, cruelty-free products that are gentle on your hair and on the planet.
                </p>
                <Button>Meet Our Team</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about their CHROMA experience.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  quote:
                    "I've never felt so comfortable in a salon before. The stylists really listen and the results are always amazing. CHROMA is my go-to place now!",
                },
                {
                  name: "Sam Rivera",
                  quote:
                    "As someone who's always been anxious about haircuts, finding CHROMA was a game-changer. The inclusive atmosphere and skilled stylists make every visit a pleasure.",
                },
                {
                  name: "Jordan Taylor",
                  quote:
                    "The color work at CHROMA is unmatched! My stylist understood exactly what I wanted and delivered a look that exceeded my expectations.",
                },
                {
                  name: "Morgan Lee",
                  quote:
                    "I appreciate that CHROMA prices services based on hair length, not gender. It's refreshing to find a salon that truly walks the talk when it comes to inclusivity.",
                },
                {
                  name: "Casey Wilson",
                  quote:
                    "The attention to detail is impressive. From the consultation to the finishing touches, every step of the service is thoughtful and thorough.",
                },
                {
                  name: "Riley Martinez",
                  quote:
                    "I've been to many salons, but CHROMA stands out for their technical skill and warm, welcoming environment. I recommend them to everyone!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-background rounded-lg p-6 shadow-sm border">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-10 w-10 text-muted-foreground/40"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground flex-1 mb-4">{testimonial.quote}</p>
                    <p className="font-medium">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Booking Section */}
        <section id="contact" className="py-20 bg-muted/50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Appointment</h2>
                <p className="text-muted-foreground mb-8">
                  Ready for a fresh look? Book your appointment online or contact us directly. We look forward to
                  welcoming you to CHROMA.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">123 Style Street, Fashion District, City, 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9am - 8pm</p>
                      <p className="text-muted-foreground">Saturday: 9am - 6pm</p>
                      <p className="text-muted-foreground">Sunday: 10am - 4pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">appointments@chromasalon.com</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <Button size="icon" variant="outline">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button size="icon" variant="outline">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm border">
                <h3 className="text-xl font-semibold mb-6">Request an Appointment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="haircut">Haircut</option>
                      <option value="color">Color</option>
                      <option value="highlights">Highlights</option>
                      <option value="styling">Styling</option>
                      <option value="treatment">Treatment</option>
                      <option value="beard">Beard Grooming</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-medium">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="time" className="text-sm font-medium">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 4pm)</option>
                      <option value="evening">Evening (4pm - 8pm)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us more about what you're looking for..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Request Appointment
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Scissors className="h-6 w-6" />
                <span className="text-xl font-bold">CHROMA</span>
              </div>
              <p className="text-sm text-muted-foreground">A modern, inclusive salon experience for everyone.</p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Haircuts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Color & Highlights
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Styling & Blowouts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Texture Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Hair Treatments
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                  <span className="text-muted-foreground">123 Style Street, Fashion District, City, 12345</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground mt-1" />
                  <span className="text-muted-foreground">(555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground mt-1" />
                  <span className="text-muted-foreground">info@chromasalon.com</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} CHROMA Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
