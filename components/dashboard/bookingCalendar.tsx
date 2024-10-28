import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"

export function BookingCalendar() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([])

  const handleSelect = (dates: Date[] | undefined) => {
    if (dates) {
      setSelectedDates(dates)
    }
  }

  const handleSave = () => {
    console.log('Dates bloquées:', selectedDates)
    // Implement the logic to save blocked dates here
  }

  return (
    <div className="flex flex-col items-center space-y-6 lg:space-y-8 p-6 lg:p-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center">Calendrier des réservations</h2>
      <Calendar
        mode="multiple"
        selected={selectedDates}
        onSelect={handleSelect}
        className="w-full max-w-lg rounded-md border p-4"
      />
      <Button className="w-full max-w-md" onClick={handleSave}>Sauvegarder les dates bloquées</Button>
    </div>
  )
}
