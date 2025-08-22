import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Chart, ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Activity, Code, GitBranch, Target, Info, CheckCircle2, Zap } from 'lucide-react';

const coverageMetrics = [
  { type: 'Line Coverage', current: 78, target: 85, status: 'Below Target' },
  { type: 'Branch Coverage', current: 72, target: 80, status: 'Below Target' },
  { type: 'Function Coverage', current: 88, target: 90, status: 'Near Target' },
  { type: 'Statement Coverage', current: 82, target: 85, status: 'Near Target' },
];

const modulesCoverage = [
  { module: 'Authentication', line: 92, branch: 88, function: 95, statement: 90 },
  { module: 'User Management', line: 85, branch: 78, function: 89, statement: 83 },
  { module: 'Payment', line: 88, branch: 82, function: 91, statement: 86 },
  { module: 'Reporting', line: 65, branch: 58, function: 72, statement: 68 },
  { module: 'Configuration', line: 72, branch: 68, function: 78, statement: 75 },
  { module: 'API Gateway', line: 82, branch: 76, function: 85, statement: 80 },
];

const coverageTrend = [
  { week: 'Week 1', line: 65, branch: 58, function: 72 },
  { week: 'Week 2', line: 68, branch: 62, function: 75 },
  { week: 'Week 3', line: 72, branch: 66, function: 78 },
  { week: 'Week 4', line: 75, branch: 69, function: 82 },
  { week: 'Week 5', line: 78, branch: 72, function: 88 },
];

const uncoveredAreas = [
  { file: 'auth/validator.js', lines: 45, percentage: 34, criticality: 'High' },
  { file: 'payment/processor.js', lines: 23, percentage: 42, criticality: 'High' },
  { file: 'reports/generator.js', lines: 67, percentage: 28, criticality: 'Medium' },
  { file: 'config/settings.js', lines: 18, percentage: 55, criticality: 'Low' },
  { file: 'utils/helpers.js', lines: 31, percentage: 38, criticality: 'Medium' },
];

export function CoverageBasedTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Coverage-Based Testing</h2>
        <p className="text-muted-foreground">
          Prioritize tests to maximize coverage and measure how much of the system has been exercised
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-purple-50 border-purple-200 dark:bg-purple-950 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-purple-600" />
            What is Coverage-Based Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm leading-relaxed">
            Coverage-based testing is a systematic approach that focuses on maximizing test coverage metrics to ensure thorough validation of the system. 
            It measures how much of the code, requirements, or system functionality has been exercised by tests, providing quantifiable insights into test completeness.
          </p>
          
          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Target className="h-4 w-4 text-purple-600" />
              Key Idea
            </h4>
            <p className="text-sm">
              Test effectiveness is measured by coverage metrics (line, branch, function, statement coverage). The goal is to identify and eliminate coverage gaps to increase confidence in the system's reliability.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">How Coverage-Based Testing Works:</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-xs font-medium text-purple-600">1</div>
                <div>
                  <p className="text-sm font-medium">Set coverage targets</p>
                  <p className="text-xs text-muted-foreground">Define minimum acceptable coverage percentages for different types (line, branch, function coverage).</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-xs font-medium text-purple-600">2</div>
                <div>
                  <p className="text-sm font-medium">Instrument code</p>
                  <p className="text-xs text-muted-foreground">Use coverage tools to monitor which parts of code are executed during test runs.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-xs font-medium text-purple-600">3</div>
                <div>
                  <p className="text-sm font-medium">Run tests and measure</p>
                  <p className="text-xs text-muted-foreground">Execute test suites while collecting coverage data to identify covered and uncovered areas.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-xs font-medium text-purple-600">4</div>
                <div>
                  <p className="text-sm font-medium">Analyze and improve</p>
                  <p className="text-xs text-muted-foreground">Review uncovered areas and create additional tests to reach coverage targets.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3">Example: Coverage Types in Action</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Code className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Line Coverage: 85%</p>
                  <p className="text-xs text-muted-foreground">85% of executable lines have been run by tests. Target missing 15% of code lines.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <GitBranch className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Branch Coverage: 72%</p>
                  <p className="text-xs text-muted-foreground">72% of decision branches (if/else, switch cases) tested. Need tests for remaining conditional paths.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Target className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Function Coverage: 95%</p>
                  <p className="text-xs text-muted-foreground">95% of functions called during testing. Only 5% of functions remain untested.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600" />
                When to Use
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Need measurable test quality</li>
                <li>• Regulatory compliance required</li>
                <li>• Code quality assurance</li>
                <li>• Identifying untested code areas</li>
                <li>• Safety-critical systems</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Zap className="h-4 w-4 text-purple-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Quantifiable test effectiveness</li>
                <li>• Identifies gaps in testing</li>
                <li>• Supports quality metrics</li>
                <li>• Improves code confidence</li>
                <li>• Enables targeted test creation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Coverage Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Code className="h-4 w-4" />
              Line Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">78%</div>
            <p className="text-xs text-muted-foreground">Target: 85%</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <GitBranch className="h-4 w-4" />
              Branch Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">72%</div>
            <p className="text-xs text-muted-foreground">Target: 80%</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Target className="h-4 w-4" />
              Function Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">88%</div>
            <p className="text-xs text-muted-foreground">Target: 90%</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Statement Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-medium">82%</div>
            <p className="text-xs text-muted-foreground">Target: 85%</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Coverage by Module */}
        <Card>
          <CardHeader>
            <CardTitle>Coverage by Module</CardTitle>
            <CardDescription>Different coverage types across system modules</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={modulesCoverage}>
                  <XAxis 
                    dataKey="module" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="line" fill="#45b7d1" name="Line Coverage" />
                  <Bar dataKey="branch" fill="#96ceb4" name="Branch Coverage" />
                  <Bar dataKey="function" fill="#ffeaa7" name="Function Coverage" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Coverage Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Coverage Trend</CardTitle>
            <CardDescription>Weekly progression of coverage metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{}} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={coverageTrend}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="line" 
                    stroke="#45b7d1" 
                    strokeWidth={2}
                    name="Line Coverage"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="branch" 
                    stroke="#96ceb4" 
                    strokeWidth={2}
                    name="Branch Coverage"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="function" 
                    stroke="#ffeaa7" 
                    strokeWidth={2}
                    name="Function Coverage"
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Coverage Metrics Detail */}
      <Card>
        <CardHeader>
          <CardTitle>Coverage Metrics vs Targets</CardTitle>
          <CardDescription>Current performance against coverage targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {coverageMetrics.map((metric) => (
              <div key={metric.type} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{metric.type}</h4>
                    <Badge 
                      variant={
                        metric.status === 'Below Target' ? 'destructive' :
                        metric.status === 'Near Target' ? 'default' :
                        'secondary'
                      }
                    >
                      {metric.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.current}% / {metric.target}%
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Current: {metric.current}%</span>
                    <span>Target: {metric.target}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={metric.current} className="h-3" />
                    <div 
                      className="absolute top-0 h-3 w-0.5 bg-destructive"
                      style={{ left: `${metric.target}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Uncovered Areas */}
      <Card>
        <CardHeader>
          <CardTitle>Areas Requiring Coverage Improvement</CardTitle>
          <CardDescription>Files with low coverage that need attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {uncoveredAreas.map((area, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Code className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">{area.file}</div>
                    <div className="text-sm text-muted-foreground">{area.lines} uncovered lines</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge 
                    variant={
                      area.criticality === 'High' ? 'destructive' :
                      area.criticality === 'Medium' ? 'default' :
                      'secondary'
                    }
                  >
                    {area.criticality} Priority
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm font-medium">{area.percentage}%</div>
                    <div className="text-xs text-muted-foreground">covered</div>
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