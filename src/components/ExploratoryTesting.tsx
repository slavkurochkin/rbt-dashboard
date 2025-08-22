import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Search, Brain, Clock, Bug, Info, CheckCircle2, Lightbulb } from 'lucide-react';

const exploratoryMetrics = [
  { name: 'Active Sessions', value: '12', description: 'Currently running' },
  { name: 'Bugs Found', value: '28', description: 'This sprint' },
  { name: 'Coverage Areas', value: '15', description: 'Modules explored' },
  { name: 'Time Invested', value: '45h', description: 'Total hours' },
];

const recentFindings = [
  { session: 'ES-001', tester: 'Alice Johnson', area: 'User Interface', findings: 3, severity: 'Medium', duration: '2.5h' },
  { session: 'ES-002', tester: 'Bob Smith', area: 'API Integration', findings: 5, severity: 'High', duration: '3.2h' },
  { session: 'ES-003', tester: 'Carol Davis', area: 'Performance', findings: 2, severity: 'Low', duration: '1.8h' },
  { session: 'ES-004', tester: 'David Wilson', area: 'Security', findings: 4, severity: 'High', duration: '2.1h' },
];

export function ExploratoryTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Exploratory Testing</h2>
        <p className="text-muted-foreground">
          Learning the system while testing, discovering defects beyond formalized test cases
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-orange-50 border-orange-200 dark:bg-orange-950 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-orange-600" />
            What is Exploratory Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm leading-relaxed">
            Exploratory testing is an investigative approach where testers simultaneously learn about the application, design tests, and execute them in real-time. 
            It's unscripted testing that relies on the tester's experience, creativity, and intuition to discover issues that formal test cases might miss.
          </p>
          
          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-orange-600" />
              Key Idea
            </h4>
            <p className="text-sm">
              Learn, test, and adapt simultaneously. Unlike scripted testing, exploratory testing uses human curiosity and domain knowledge to find bugs that automated or pre-written tests cannot discover.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">How Exploratory Testing Works:</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-xs font-medium text-orange-600">1</div>
                <div>
                  <p className="text-sm font-medium">Charter and time-box</p>
                  <p className="text-xs text-muted-foreground">Define a broad testing mission and allocate a specific time window (e.g., "Test user registration for 2 hours").</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-xs font-medium text-orange-600">2</div>
                <div>
                  <p className="text-sm font-medium">Explore and learn</p>
                  <p className="text-xs text-muted-foreground">Interact with the application, understand its behavior, and form mental models of how it should work.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-xs font-medium text-orange-600">3</div>
                <div>
                  <p className="text-sm font-medium">Design tests on-the-fly</p>
                  <p className="text-xs text-muted-foreground">Create test ideas based on observations, edge cases, and "what if" scenarios that emerge during exploration.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center text-xs font-medium text-orange-600">4</div>
                <div>
                  <p className="text-sm font-medium">Document findings</p>
                  <p className="text-xs text-muted-foreground">Record bugs, observations, and insights discovered during the session for follow-up and improvement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3">Example: E-commerce Checkout Exploration</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Search className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Charter: "Explore checkout process for unusual scenarios"</p>
                  <p className="text-xs text-muted-foreground">Discover: What happens if I add 999 items? Try invalid credit cards? Test on slow network?</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Brain className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Learning: Form validation seems weak</p>
                  <p className="text-xs text-muted-foreground">Findings: Empty form submits, no real-time validation, confusing error messages.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Bug className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Discovery: Found 3 critical bugs</p>
                  <p className="text-xs text-muted-foreground">Issues scripted tests missed: Payment processing hangs with special characters in address field.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange-600" />
                When to Use
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Limited or changing requirements</li>
                <li>• New or unfamiliar applications</li>
                <li>• User experience validation</li>
                <li>• Complement scripted testing</li>
                <li>• Time-constrained testing phases</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-orange-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Discovers unexpected issues</li>
                <li>• Flexible and adaptive</li>
                <li>• Tests real user scenarios</li>
                <li>• Provides valuable insights</li>
                <li>• Finds usability problems</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {exploratoryMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                {index === 0 && <Search className="h-4 w-4" />}
                {index === 1 && <Bug className="h-4 w-4" />}
                {index === 2 && <Brain className="h-4 w-4" />}
                {index === 3 && <Clock className="h-4 w-4" />}
                {metric.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-medium">{metric.value}</div>
              <p className="text-xs text-muted-foreground">{metric.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Exploratory Testing Sessions</CardTitle>
          <CardDescription>Latest findings from exploratory testing activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentFindings.map((session) => (
              <div key={session.session} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{session.session}</Badge>
                    <span className="font-medium">{session.tester}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={session.severity === 'High' ? 'destructive' : session.severity === 'Medium' ? 'default' : 'secondary'}>
                      {session.severity}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{session.duration}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{session.area}</div>
                    <div className="text-sm text-muted-foreground">{session.findings} findings discovered</div>
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