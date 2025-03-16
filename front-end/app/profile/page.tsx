"use client"

import { User, Settings, CreditCard, Bell, Lock, HelpCircle, LogOut, ChevronRight, Globe, ChevronDown, Heart, Camera, MapPin, Calendar, Star, Edit, Mail, Phone, Share2, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { label: "Reviews", value: "128" },
  { label: "Photos", value: "84" },
  { label: "Followers", value: "2.1k" },
  { label: "Following", value: "346" },
]

const menuItems = [
  {
    title: "Account Settings",
    icon: Settings,
    notifications: 2,
    description: "Personal information and preferences"
  },
  {
    title: "Payment Methods",
    icon: CreditCard,
    notifications: 1,
    description: "Manage your payment options"
  },
  {
    title: "Notifications",
    icon: Bell,
    notifications: 5,
    description: "Control your notification settings"
  },
  {
    title: "Privacy & Security",
    icon: Lock,
    notifications: 0,
    description: "Protect your account and data"
  },
  {
    title: "Help Center",
    icon: HelpCircle,
    notifications: 0,
    description: "Get help and support"
  },
]

const recentTrips = [
  {
    title: "Desert Safari Adventure",
    location: "Merzouga Desert",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1565689478690-8ddf97b359b5",
    rating: 4.9
  },
  {
    title: "Atlas Mountains Trek",
    location: "High Atlas",
    date: "Feb 28, 2024",
    image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae",
    rating: 4.8
  }
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Cover Photo */}
      <div className="relative h-[200px] md:h-[280px] lg:h-[320px] bg-gradient-to-r from-gray-900 to-gray-600">
        <Image
          src="https://images.unsplash.com/photo-1489493887464-892be6d1daae"
          alt="Cover"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <button className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-black/60 transition-colors">
          <Camera className="w-4 h-4" />
          <span className="text-sm font-medium">Change Cover</span>
        </button>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-24 sm:-mt-32 pb-20">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header with Actions */}
            <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Avatar */}
                <div className="relative mx-auto md:mx-0">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
                    <Image
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>

                {/* User Info */}
                <div className="text-center md:text-left space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Ellison Parker</h1>
                    <span className="px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full inline-flex items-center justify-center">
                      Pro Member
                    </span>
                  </div>
                  <p className="text-gray-500 flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    Marrakech, Morocco
                  </p>
                  <p className="text-gray-500 text-sm">Joined March 2024</p>
                </div>
              </div>

              <div className="flex items-center justify-center md:justify-end gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share Profile
                </Button>
                <Button className="gap-2">
                  <Edit className="w-4 h-4" />
                  Edit Profile
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 border-b">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 py-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x">
              {/* Left Column - Menu Items */}
              <div className="lg:col-span-4 p-6 space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.title}
                    className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-50 group-hover:bg-white 
                      flex items-center justify-center text-gray-500 group-hover:text-primary 
                      transition-colors border border-gray-100">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{item.title}</span>
                        {item.notifications > 0 && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-primary text-white rounded-full">
                            {item.notifications}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </button>
                ))}

                <button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-red-50 text-red-600 transition-colors group mt-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 group-hover:bg-white 
                    flex items-center justify-center group-hover:text-red-600 
                    transition-colors border border-red-100">
                    <LogOut className="w-5 h-5" />
                  </div>
                  <span className="flex-1 text-left font-medium">Log Out</span>
                  <ChevronRight className="w-5 h-5 opacity-50" />
                </button>
              </div>

              {/* Right Column - Recent Activity */}
              <div className="lg:col-span-8 p-6">
                <div className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50 hover:bg-white transition-colors">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <div>
                          <div className="text-sm text-gray-500">Email</div>
                          <div className="font-medium">ellison@example.com</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg border bg-gray-50 hover:bg-white transition-colors">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <div>
                          <div className="text-sm text-gray-500">Phone</div>
                          <div className="font-medium">+212 612 345 678</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                        <Instagram className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                        <Twitter className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                        <Facebook className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Recent Trips */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Recent Trips</h3>
                      <Button variant="outline" size="sm">View All</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recentTrips.map((trip) => (
                        <div key={trip.title} className="group rounded-xl overflow-hidden border hover:shadow-lg transition-all">
                          <div className="aspect-video relative">
                            <Image
                              src={trip.image}
                              alt={trip.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                              {trip.title}
                            </h4>
                            <div className="flex items-center justify-between mt-2 text-sm">
                              <div className="flex items-center gap-1 text-gray-500">
                                <MapPin className="w-4 h-4" />
                                {trip.location}
                              </div>
                              <div className="flex items-center gap-1 text-yellow-500">
                                <Star className="w-4 h-4 fill-current" />
                                {trip.rating}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {trip.date}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 