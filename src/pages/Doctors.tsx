import { useState } from "react"
import { Plus, Search, Edit, Eye, Phone, Mail, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock doctor data
const mockDoctors = [
  {
    id: 1,
    name: "Dr. James Smith",
    specialization: "Cardiology",
    experience: "12 years",
    phone: "+1 (555) 234-5678",
    email: "james.smith@hospital.com",
    status: "Available",
    patients: 245,
    rating: 4.8
  },
  {
    id: 2,
    name: "Dr. Maria Rodriguez",
    specialization: "Pediatrics",
    experience: "8 years",
    phone: "+1 (555) 345-6789",
    email: "maria.rodriguez@hospital.com",
    status: "In Surgery",
    patients: 189,
    rating: 4.9
  },
  {
    id: 3,
    name: "Dr. David Kim",
    specialization: "Emergency Medicine",
    experience: "15 years",
    phone: "+1 (555) 456-7890",
    email: "david.kim@hospital.com",
    status: "Available",
    patients: 312,
    rating: 4.7
  },
  {
    id: 4,
    name: "Dr. Sarah Wilson",
    specialization: "Dermatology",
    experience: "6 years",
    phone: "+1 (555) 567-8901",
    email: "sarah.wilson@hospital.com",
    status: "On Break",
    patients: 156,
    rating: 4.6
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Available":
      return "bg-success text-success-foreground"
    case "In Surgery":
      return "bg-destructive text-destructive-foreground"
    case "On Break":
      return "bg-warning text-warning-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const filteredDoctors = mockDoctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Doctors</h2>
          <p className="text-muted-foreground">
            Manage doctor profiles and schedules
          </p>
        </div>
        
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Doctor
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Doctor</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="specialization">Specialization</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="emergency">Emergency Medicine</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="oncology">Oncology</SelectItem>
                    <SelectItem value="psychiatry">Psychiatry</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" placeholder="Enter years of experience" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div>
                <Label htmlFor="licenseNumber">License Number</Label>
                <Input id="licenseNumber" placeholder="Enter medical license number" />
              </div>
              <Button className="w-full">Add Doctor</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search doctors by name or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {/* Doctors Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {doctor.specialization}
                  </p>
                </div>
                <Badge className={getStatusColor(doctor.status)}>
                  {doctor.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Phone className="h-3 w-3 mr-2 text-muted-foreground" />
                  {doctor.phone}
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-3 w-3 mr-2 text-muted-foreground" />
                  {doctor.email}
                </div>
                <div className="flex items-center text-sm">
                  <Award className="h-3 w-3 mr-2 text-muted-foreground" />
                  {doctor.experience} experience
                </div>
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground">Patients</p>
                    <p className="text-sm font-medium">{doctor.patients}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <p className="text-sm font-medium">⭐ {doctor.rating}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="h-3 w-3 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}