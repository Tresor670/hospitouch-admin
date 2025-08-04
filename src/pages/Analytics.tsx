import { TrendingUp, Users, Calendar, Activity, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StatsCard } from "@/components/ui/stats-card"

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h2>
        <p className="text-muted-foreground">
          Hospital performance metrics and insights
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Monthly Patients"
          value="1,847"
          description="Patients treated this month"
          icon={Users}
          trend={{ value: 15, positive: true }}
        />
        <StatsCard
          title="Appointments"
          value="487"
          description="Total appointments this month"
          icon={Calendar}
          trend={{ value: 8, positive: true }}
        />
        <StatsCard
          title="Average Wait Time"
          value="12 min"
          description="Average patient wait time"
          icon={Clock}
          trend={{ value: 5, positive: false }}
        />
        <StatsCard
          title="Patient Satisfaction"
          value="94.2%"
          description="Based on patient feedback"
          icon={TrendingUp}
          trend={{ value: 3, positive: true }}
        />
      </div>

      {/* Charts and Detailed Analytics */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              Patient Flow by Department
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm">Emergency Medicine</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-destructive h-2 rounded-full w-4/5"></div>
                  </div>
                  <span className="text-sm font-medium">312</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Cardiology</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-3/5"></div>
                  </div>
                  <span className="text-sm font-medium">245</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Pediatrics</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full w-2/5"></div>
                  </div>
                  <span className="text-sm font-medium">189</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Dermatology</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-muted rounded-full h-2">
                    <div className="bg-warning h-2 rounded-full w-1/3"></div>
                  </div>
                  <span className="text-sm font-medium">156</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Appointment Status Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                  <span className="text-sm">Completed</span>
                </div>
                <span className="text-sm font-medium">68%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-warning rounded-full"></div>
                  <span className="text-sm">Pending</span>
                </div>
                <span className="text-sm font-medium">18%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-sm">In Progress</span>
                </div>
                <span className="text-sm font-medium">10%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="text-sm">Cancelled</span>
                </div>
                <span className="text-sm font-medium">4%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Monthly Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Patient Registration</span>
                  <span className="text-sm font-medium text-success">+12%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-success h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Appointment Bookings</span>
                  <span className="text-sm font-medium text-success">+8%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-2/3"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Emergency Cases</span>
                  <span className="text-sm font-medium text-destructive">-5%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-warning h-2 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Doctor Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Dr. James Smith</p>
                  <p className="text-xs text-muted-foreground">Cardiology</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">⭐ 4.8</p>
                  <p className="text-xs text-muted-foreground">245 patients</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Dr. Maria Rodriguez</p>
                  <p className="text-xs text-muted-foreground">Pediatrics</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">⭐ 4.9</p>
                  <p className="text-xs text-muted-foreground">189 patients</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium">Dr. David Kim</p>
                  <p className="text-xs text-muted-foreground">Emergency</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">⭐ 4.7</p>
                  <p className="text-xs text-muted-foreground">312 patients</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}