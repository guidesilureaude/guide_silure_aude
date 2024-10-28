'use client'

import React, { useState } from 'react'
import { Calendar, MessageSquare, Settings, Home, Users, Fish, Menu, X } from 'lucide-react'
import { ContentEditor } from '@/components/dashboard/content-editor'
import { Messaging } from '@/components/dashboard/messaging'
import { BookingCalendar } from '@/components/dashboard/bookingCalendar'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarItem {
  id: string
  label: string
  icon: React.ElementType
  title: string; // Ajoutez le champ title
}

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('home')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const sidebarSections: SidebarItem[] = [
    { id: 'home', label: 'Accueil', icon: Home, title: 'Accueil' },
    { id: 'content', label: 'Modifier le contenu', icon: Settings, title: 'Modifier' },
    { id: 'messaging', label: 'Messagerie', icon: MessageSquare, title: 'Messagerie' },
    { id: 'calendar', label: 'Calendrier', icon: Calendar, title: 'Calendrier' },
    { id: 'clients', label: 'Clients', icon: Users, title: 'Gestion des Clients' },
    { id: 'fishing-spots', label: 'Spots de pêche', icon: Fish, title: 'Spots de Pêche' },
  ]

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen bg-background">
      <aside className={cn(
        "fixed left-0 top-0 z-40 h-screen w-64 transition-transform",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex h-[calc(100vh-4rem)] flex-col overflow-y-auto  bg-transparent px-3 py-4">

          <h2 className="text-xl font-bold px-4 py-2 mb-4">Guide de Pêche</h2>
          <nav className="space-y-1">
            {sidebarSections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => setActiveSection(section.id)}
              >
                <section.icon className="h-5 w-5 mr-2" />
                {section.label}
              </Button>
            ))}
          </nav>
        </div>
      </aside>

      <div className={cn(
        "flex flex-col flex-1 transition-all duration-300",
        isSidebarOpen ? "ml-64" : "ml-0"
      )}>
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <h1 className="text-2xl font-bold">
            {sidebarSections.find(section => section.id === activeSection)?.title}
          </h1>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {activeSection === 'home' && <HomeSection />}
          {activeSection === 'content' && <ContentEditor />}
          {activeSection === 'messaging' && <Messaging />}
          {activeSection === 'calendar' && <BookingCalendar />}
          {activeSection === 'clients' && <ClientsSection />}
          {activeSection === 'fishing-spots' && <FishingSpotsSection />}
        </main>
      </div>
    </div>
  )
}

function HomeSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Bienvenue sur votre dashboard</h2>
      <p>Ici, vous pouvez gérer votre site vitrine de guide de pêche.</p>
    </div>
  )
}

function ClientsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Gestion des clients</h2>
      <p>Ici, vous pourrez voir et gérer vos clients.</p>
    </div>
  )
}

function FishingSpotsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Spots de pêche</h2>
      <p>Gérez vos spots de pêche favoris ici.</p>
    </div>
  )
}
