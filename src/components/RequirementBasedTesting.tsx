import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { FileText, CheckCircle, AlertCircle, Clock, Info, CheckCircle2, Target } from 'lucide-react';

const requirementTypes = [
  { type: 'Functional', total: 145, tested: 132, passed: 128, failed: 4, coverage: 91 },
  { type: 'Performance', total: 32, tested: 28, passed: 25, failed: 3, coverage: 88 },
  { type: 'Security', total: 28, tested: 26, passed: 24, failed: 2, coverage: 93 },
  { type: 'Usability', total: 22, tested: 18, passed: 16, failed: 2, coverage: 82 },
  { type: 'Compatibility', total: 18, tested: 15, passed: 14, failed: 1, coverage: 83 },
];

const requirementStatus = [
  { name: 'Verified', value: 195, color: '#4ecdc4' },
  { name: 'Partially Tested', value: 25, color: '#ffeaa7' },
  { name: 'Not Tested', value: 25, color: '#ff6b6b' },
];

const traceabilityMatrix = [
  { requirement: 'REQ-001', feature: 'User Login', testCases: 8, status: 'Complete', priority: 'High' },
  { requirement: 'REQ-002', feature: 'Password Reset', testCases: 5, status: 'Complete', priority: 'High' },
  { requirement: 'REQ-003', feature: 'User Registration', testCases: 12, status: 'In Progress', priority: 'High' },
  { requirement: 'REQ-004', feature: 'Profile Management', testCases: 7, status: 'Complete', priority: 'Medium' },
  { requirement: 'REQ-005', feature: 'Data Export', testCases: 6, status: 'Pending', priority: 'Low' },
  { requirement: 'REQ-006', feature: 'Notifications', testCases: 4, status: 'Complete', priority: 'Medium' },
];

export function RequirementBasedTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Requirement-Based Testing</h2>
        <p className="text-muted-foreground">
          Tests derived directly from documented requirements to ensure all stated requirements are met
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-green-600" />
            What is Requirement-Based Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm leading-relaxed">
            Requirement-based testing is a systematic approach where test cases are derived directly from documented functional and non-functional requirements. 
            It ensures that every specified requirement is properly implemented and verified through targeted testing activities.
          </p>
          
          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-green-600" />
              Key Idea
            </h4>
            <p className="text-sm">
              Every requirement must have corresponding test cases that verify its implementation. The goal is to achieve 100% requirement coverage and maintain clear traceability between requirements and tests.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">How Requirement-Based Testing Works:</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-xs font-medium text-green-600">1</div>
                <div>
                  <p className="text-sm font-medium">Analyze requirements</p>
                  <p className="text-xs text-muted-foreground">Review functional and non-functional requirements documentation for clarity and testability.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-xs font-medium text-green-600">2</div>
                <div>
                  <p className="text-sm font-medium">Create test cases</p>
                  <p className="text-xs text-muted-foreground">Design test cases that directly validate each requirement, covering positive and negative scenarios.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-xs font-medium text-green-600">3</div>
                <div>
                  <p className="text-sm font-medium">Build traceability matrix</p>
                  <p className="text-xs text-muted-foreground">Map each requirement to its corresponding test cases for complete coverage tracking.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-xs font-medium text-green-600">4</div>
                <div>
                  <p className="text-sm font-medium">Execute and validate</p>
                  <p className="text-xs text-muted-foreground">Run tests and verify that the implementation meets all specified requirements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3">Example: E-commerce App Requirements</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">REQ-001: User must be able to add items to cart</p>
                  <p className="text-xs text-muted-foreground">Test cases: Valid item addition, quantity limits, cart persistence, item availability checks</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">REQ-002: Payment must be processed within 30 seconds</p>
                  <p className="text-xs text-muted-foreground">Test cases: Response time validation, timeout handling, performance under load</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">REQ-003: System must support 1000 concurrent users</p>
                  <p className="text-xs text-muted-foreground">Test cases: Load testing, stress testing, resource utilization monitoring</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                When to Use
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Well-documented, stable requirements</li>
                <li>• Compliance and regulatory projects</li>
                <li>• Contract-based development</li>
                <li>• Formal verification needed</li>
                <li>• Waterfall or V-model projects</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-green-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Complete requirement coverage</li>
                <li>• Clear traceability matrix</li>
                <li>• Systematic test approach</li>
                <li>• Compliance verification</li>
                <li>• Quality assurance alignment</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Requirements Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Total Requirements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">245</div>
            <p className="text-xs text-muted-foreground">Across all modules</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Verified
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">195</div>
            <p className="text-xs text-muted-foreground">79.6% completion rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Clock className="h-4 w-4 text-orange-500" />
              In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">25</div>
            <p className="text-xs text-muted-foreground">Currently being tested</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-destructive" />
              Not Tested
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">25</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Requirement Coverage by Type */}
        <Card>
          <CardHeader>
            <CardTitle>Coverage by Requirement Type</CardTitle>
            <CardDescription>Test coverage percentage for different requirement categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={requirementTypes}>
                  <XAxis dataKey="type" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="coverage" fill="#4ecdc4" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Overall Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Requirement Status Distribution</CardTitle>
            <CardDescription>Current status of all requirements</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={requirementStatus}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {requirementStatus.map((entry, index) => (
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

      {/* Detailed Requirements Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Requirements Test Summary</CardTitle>
          <CardDescription>Detailed breakdown of test results by requirement type</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {requirementTypes.map((req) => (
              <div key={req.type} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{req.type} Requirements</h4>
                    <Badge variant="secondary">{req.total} total</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {req.coverage}% coverage
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-2 bg-muted rounded">
                    <div className="text-lg font-medium">{req.tested}</div>
                    <div className="text-xs text-muted-foreground">Tested</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded">
                    <div className="text-lg font-medium text-green-600">{req.passed}</div>
                    <div className="text-xs text-muted-foreground">Passed</div>
                  </div>
                  <div className="text-center p-2 bg-red-50 rounded">
                    <div className="text-lg font-medium text-red-600">{req.failed}</div>
                    <div className="text-xs text-muted-foreground">Failed</div>
                  </div>
                  <div className="text-center p-2 bg-orange-50 rounded">
                    <div className="text-lg font-medium text-orange-600">{req.total - req.tested}</div>
                    <div className="text-xs text-muted-foreground">Pending</div>
                  </div>
                </div>
                
                <Progress value={req.coverage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Traceability Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Requirements Traceability Matrix</CardTitle>
          <CardDescription>Mapping of requirements to test cases and their current status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {traceabilityMatrix.map((item) => (
              <div key={item.requirement} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Badge variant="outline">{item.requirement}</Badge>
                  <div>
                    <div className="font-medium">{item.feature}</div>
                    <div className="text-sm text-muted-foreground">{item.testCases} test cases</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge 
                    variant={item.priority === 'High' ? 'destructive' : item.priority === 'Medium' ? 'default' : 'secondary'}
                  >
                    {item.priority}
                  </Badge>
                  <Badge 
                    variant={
                      item.status === 'Complete' ? 'default' :
                      item.status === 'In Progress' ? 'secondary' :
                      'destructive'
                    }
                  >
                    {item.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}