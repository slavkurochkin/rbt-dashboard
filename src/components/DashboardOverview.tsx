import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';

const overallMetrics = [
  { name: 'Risk-Based', coverage: 85, status: 'Active', color: '#ff6b6b' },
  { name: 'Requirement-Based', coverage: 92, status: 'Complete', color: '#4ecdc4' },
  { name: 'Coverage-Based', coverage: 78, status: 'Active', color: '#45b7d1' },
  { name: 'Exploratory', coverage: 65, status: 'In Progress', color: '#96ceb4' },
  { name: 'Model-Based', coverage: 73, status: 'Active', color: '#ffeaa7' },
  { name: 'Checklist-Based', coverage: 88, status: 'Complete', color: '#fd79a8' },
  { name: 'Usage-Based', coverage: 70, status: 'Active', color: '#e17055' },
  { name: 'Defect-Based', coverage: 55, status: 'Planning', color: '#a29bfe' },
  { name: 'Time-Constrained', coverage: 45, status: 'Critical', color: '#fd6c6c' },
];

const riskDistribution = [
  { name: 'High Risk', value: 15, color: '#ff6b6b' },
  { name: 'Medium Risk', value: 35, color: '#ffeaa7' },
  { name: 'Low Risk', value: 50, color: '#55a3ff' },
];

const weeklyProgress = [
  { week: 'Week 1', testsExecuted: 45, defectsFound: 8 },
  { week: 'Week 2', testsExecuted: 62, defectsFound: 12 },
  { week: 'Week 3', testsExecuted: 78, defectsFound: 6 },
  { week: 'Week 4', testsExecuted: 85, defectsFound: 9 },
  { week: 'Week 5', testsExecuted: 92, defectsFound: 4 },
];

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Testing Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Comprehensive view of all testing methodologies and their current status
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Test Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">1,247</div>
            <p className="text-xs text-muted-foreground">+12% from last sprint</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Tests Executed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">892</div>
            <p className="text-xs text-muted-foreground">71.5% completion</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Defects Found</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">39</div>
            <p className="text-xs text-muted-foreground">8 critical, 15 high</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Risk Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">84%</div>
            <p className="text-xs text-muted-foreground">High-risk areas covered</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Testing Methodology Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Testing Methodology Progress</CardTitle>
            <CardDescription>Coverage percentage by testing approach</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={overallMetrics}>
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="coverage" fill="#45b7d1" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Risk Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Distribution</CardTitle>
            <CardDescription>Distribution of test cases by risk level</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Testing Progress</CardTitle>
          <CardDescription>Tests executed and defects found over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyProgress}>
                <XAxis dataKey="week" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="testsExecuted" 
                  stroke="#45b7d1" 
                  strokeWidth={2}
                  name="Tests Executed"
                />
                <Line 
                  type="monotone" 
                  dataKey="defectsFound" 
                  stroke="#ff6b6b" 
                  strokeWidth={2}
                  name="Defects Found"
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Testing Methodology Status */}
      <Card>
        <CardHeader>
          <CardTitle>Testing Methodology Status</CardTitle>
          <CardDescription>Current status and progress of each testing approach</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {overallMetrics.map((method) => (
              <div key={method.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: method.color }}
                  />
                  <span>{method.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Badge 
                    variant={
                      method.status === 'Complete' ? 'default' :
                      method.status === 'Critical' ? 'destructive' :
                      'secondary'
                    }
                  >
                    {method.status}
                  </Badge>
                  <div className="w-32">
                    <Progress value={method.coverage} className="h-2" />
                  </div>
                  <span className="text-sm text-muted-foreground w-12">{method.coverage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}