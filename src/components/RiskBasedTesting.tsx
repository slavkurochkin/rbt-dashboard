import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { BarChart, Bar, XAxis, YAxis, PieChart, Pie, Cell, ScatterChart, Scatter, ResponsiveContainer } from 'recharts';
import { AlertTriangle, Target, TrendingUp, Info, CheckCircle2, XCircle } from 'lucide-react';

const riskLevels = [
  { component: 'Authentication', probability: 0.8, impact: 0.9, riskScore: 7.2, tests: 45, coverage: 95 },
  { component: 'Payment Processing', probability: 0.7, impact: 0.95, riskScore: 6.65, tests: 32, coverage: 88 },
  { component: 'Data Validation', probability: 0.6, impact: 0.7, riskScore: 4.2, tests: 28, coverage: 82 },
  { component: 'User Management', probability: 0.5, impact: 0.8, riskScore: 4.0, tests: 22, coverage: 90 },
  { component: 'Reporting', probability: 0.4, impact: 0.6, riskScore: 2.4, tests: 18, coverage: 75 },
  { component: 'Configuration', probability: 0.3, impact: 0.5, riskScore: 1.5, tests: 12, coverage: 70 },
];

const riskCoverage = [
  { level: 'Critical (8-10)', covered: 45, total: 50, percentage: 90 },
  { level: 'High (6-8)', covered: 38, total: 42, percentage: 90 },
  { level: 'Medium (4-6)', covered: 35, total: 45, percentage: 78 },
  { level: 'Low (0-4)', covered: 28, total: 55, percentage: 51 },
];

const riskTrends = [
  { month: 'Jan', highRisk: 12, mediumRisk: 25, lowRisk: 8 },
  { month: 'Feb', highRisk: 8, mediumRisk: 22, lowRisk: 12 },
  { month: 'Mar', highRisk: 6, mediumRisk: 18, lowRisk: 15 },
  { month: 'Apr', highRisk: 4, mediumRisk: 15, lowRisk: 18 },
  { month: 'May', highRisk: 3, mediumRisk: 12, lowRisk: 20 },
];

export function RiskBasedTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Risk-Based Testing</h2>
        <p className="text-muted-foreground">
          Prioritize testing efforts based on risk assessment and potential impact
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-600" />
            What is Risk-Based Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm leading-relaxed">
            Risk-based testing (RBT) is a software testing approach that prioritizes testing activities based on the level of risk associated with different parts of the application. Instead of testing everything with the same intensity, you focus more effort on the areas that are most likely to fail or that would have the biggest business/technical impact if they did fail.
          </p>
          
          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-600" />
              Key Idea
            </h4>
            <p className="text-sm font-mono bg-muted px-3 py-2 rounded">
              Risk = Probability of Failure × Impact of Failure
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">How Risk-Based Testing Works:</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-medium text-blue-600">1</div>
                <div>
                  <p className="text-sm font-medium">Identify risks</p>
                  <p className="text-xs text-muted-foreground">What could go wrong in the system (technical risks, business risks, security risks, performance risks, etc.)?</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-medium text-blue-600">2</div>
                <div>
                  <p className="text-sm font-medium">Analyze and prioritize risks</p>
                  <p className="text-xs text-muted-foreground">Estimate how likely each risk is and how severe the consequences would be.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-medium text-blue-600">3</div>
                <div>
                  <p className="text-sm font-medium">Plan testing around risks</p>
                  <p className="text-xs text-muted-foreground">More testing for high-risk areas, lighter testing for low-risk areas.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs font-medium text-blue-600">4</div>
                <div>
                  <p className="text-sm font-medium">Continuously monitor risks</p>
                  <p className="text-xs text-muted-foreground">Update as the project evolves (new features, bug fixes, system changes).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3">Example: Banking App Testing</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-red-700 dark:text-red-400">High Risk: Money transfer feature</p>
                  <p className="text-xs text-muted-foreground">If it fails, customers lose money (high impact), and the code is complex (high probability). → Invest in detailed functional, security, and performance tests.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-yellow-700 dark:text-yellow-400">Medium Risk: User profile picture upload</p>
                  <p className="text-xs text-muted-foreground">If it fails, not a big business loss (low impact). → Minimal testing.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-700 dark:text-green-400">Low Risk: Help/FAQ page</p>
                  <p className="text-xs text-muted-foreground">If broken, only a minor inconvenience. → Very light or no testing.</p>
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
                <li>• Limited testing time and resources</li>
                <li>• Complex systems with many components</li>
                <li>• Need to focus on business-critical features</li>
                <li>• When failure impact varies significantly</li>
                <li>• Legacy systems with known problem areas</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-blue-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Maximizes testing ROI</li>
                <li>• Reduces overall project risk</li>
                <li>• Focuses effort on critical areas</li>
                <li>• Provides clear testing justification</li>
                <li>• Enables efficient resource allocation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              High Risk Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">8</div>
            <p className="text-xs text-muted-foreground">Requires immediate attention</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              Risk Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">84%</div>
            <p className="text-xs text-muted-foreground">High-risk scenarios covered</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Risk Mitigation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">67%</div>
            <p className="text-xs text-muted-foreground">Risks properly mitigated</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              Risk Reduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">-23%</div>
            <p className="text-xs text-muted-foreground">Since last quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Risk Assessment Alert */}
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>2 critical risk areas</strong> require immediate attention: Authentication and Payment Processing modules have high probability and impact scores.
        </AlertDescription>
      </Alert>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Matrix */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment Matrix</CardTitle>
            <CardDescription>Probability vs Impact for each component</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={riskLevels} margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
                  <XAxis 
                    dataKey="probability" 
                    name="Probability" 
                    domain={[0, 1]}
                    label={{ value: 'Probability', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    dataKey="impact" 
                    name="Impact" 
                    domain={[0, 1]}
                    label={{ value: 'Impact', angle: -90, position: 'insideLeft' }}
                  />
                  <ChartTooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-background border rounded-lg p-3 shadow-lg">
                            <p className="font-medium">{data.component}</p>
                            <p className="text-sm">Probability: {(data.probability * 100).toFixed(0)}%</p>
                            <p className="text-sm">Impact: {(data.impact * 100).toFixed(0)}%</p>
                            <p className="text-sm">Risk Score: {data.riskScore}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Scatter 
                    dataKey="riskScore" 
                    fill="#ff6b6b"
                    r={8}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Risk Coverage by Level */}
        <Card>
          <CardHeader>
            <CardTitle>Risk Coverage by Level</CardTitle>
            <CardDescription>Test coverage for different risk categories</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskCoverage}>
                  <XAxis 
                    dataKey="level" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <ChartTooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-background border rounded-lg p-3 shadow-lg">
                            <p className="font-medium">{data.level}</p>
                            <p className="text-sm">Coverage: {data.percentage}%</p>
                            <p className="text-sm">Tests: {data.covered}/{data.total}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar 
                    dataKey="percentage" 
                    fill="#45b7d1" 
                    radius={4}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Risk Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Risk Trend Analysis</CardTitle>
          <CardDescription>Monthly trend of identified risks by severity</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={riskTrends}>
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="highRisk" stackId="a" fill="#ff6b6b" name="High Risk" />
                <Bar dataKey="mediumRisk" stackId="a" fill="#ffeaa7" name="Medium Risk" />
                <Bar dataKey="lowRisk" stackId="a" fill="#55a3ff" name="Low Risk" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Detailed Risk Components */}
      <Card>
        <CardHeader>
          <CardTitle>Component Risk Assessment</CardTitle>
          <CardDescription>Detailed risk analysis for each system component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {riskLevels.map((component) => (
              <div key={component.component} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{component.component}</h4>
                    <Badge 
                      variant={
                        component.riskScore >= 6 ? 'destructive' :
                        component.riskScore >= 4 ? 'default' :
                        'secondary'
                      }
                    >
                      Risk: {component.riskScore.toFixed(1)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {component.tests} test cases
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Probability</span>
                      <span>{(component.probability * 100).toFixed(0)}%</span>
                    </div>
                    <Progress value={component.probability * 100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Impact</span>
                      <span>{(component.impact * 100).toFixed(0)}%</span>
                    </div>
                    <Progress value={component.impact * 100} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Test Coverage</span>
                      <span>{component.coverage}%</span>
                    </div>
                    <Progress value={component.coverage} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}