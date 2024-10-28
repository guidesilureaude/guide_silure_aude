import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContentEditor() {
  const [sections, setSections] = useState([
    { id: 'about', title: 'À propos', content: 'Contenu à propos du guide de pêche...' },
    { id: 'services', title: 'Services', content: 'Liste des services offerts...' },
    { id: 'contact', title: 'Contact', content: 'Informations de contact...' },
  ])

  const handleSectionUpdate = (id: string, field: 'title' | 'content', value: string) => {
    setSections(sections.map(section => 
      section.id === id ? { ...section, [field]: value } : section
    ))
  }

  const handleSave = () => {
    console.log('Sections sauvegardées:', sections)
    // Ici, vous implémenteriez la logique pour sauvegarder les modifications
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Modifier le contenu</h2>
      {sections.map(section => (
        <div key={section.id} className="space-y-2">
          <Input
            value={section.title}
            onChange={(e) => handleSectionUpdate(section.id, 'title', e.target.value)}
            placeholder="Titre de la section"
          />
          <Textarea
            value={section.content}
            onChange={(e) => handleSectionUpdate(section.id, 'content', e.target.value)}
            placeholder="Contenu de la section"
            rows={4}
          />
        </div>
      ))}
      <Button onClick={handleSave}>Sauvegarder les modifications</Button>
    </div>
  )
}