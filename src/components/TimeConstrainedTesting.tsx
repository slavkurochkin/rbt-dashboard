import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Clock, Zap, Target, AlertTriangle, Info, CheckCircle2, Timer } from 'lucide-react';

const timeMetrics = [
  { name: 'Time Remaining', value: '3.2d', description: 'Until release' },
  { name: 'Tests Executed', value: '287', description: 'Of 450 planned' },
  { name: 'Efficiency Rate', value: '85%', description: 'Tests per hour' },
  { name: 'Risk Mitigation', value: '72%', description: 'High-risk covered' },
];

const prioritizedTests = [
  { category: 'Critical Path', planned: 45, executed: 42, time: '8.5h', priority: 'P0' },
  { category: 'Core Features', planned: 85, executed: 78, time: '16.2h', priority: 'P1' },
  { category: 'Integration', planned: 32, executed: 28, time: '7.8h', priority: 'P1' },
  { category: 'Edge Cases', planned: 28, executed: 15, time: '4.2h', priority: 'P2' },
  { category: 'Nice to Have', planned: 45, executed: 8, time: '2.1h', priority: 'P3' },
];

export function TimeConstrainedTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Time-Constrained Testing</h2>
        <p className="text-muted-foreground">
          Testing selected based on available resources and time constraints, prioritizing maximum impact
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-yellow-600" />
            What is Time-Constrained Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            Time-Constrained Testing occurs when test selection is primarily driven by available time and budget rather than risk assessment or requirements coverage. 
            Common in startups, agile sprints, or late project phases where speed matters more than comprehensive coverage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-yellow-600" />
                When to Use
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Tight release deadlines</li>
                <li>• Limited testing resources</li>
                <li>• Agile sprint constraints</li>
                <li>• Emergency bug fixes</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Timer className="h-4 w-4 text-yellow-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Meets tight deadlines</li>
                <li>• Maximizes limited resources</li>
                <li>• Focuses on critical areas</li>
                <li>• Balances speed and quality</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {timeMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                {index === 0 && <Clock className="h-4 w-4" />}
                {index === 1 && <Zap className="h-4 w-4" />}
                {index === 2 && <Target className="h-4 w-4" />}
                {index === 3 && <AlertTriangle className="h-4 w-4" />}
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
          <CardTitle>Prioritized Test Execution</CardTitle>
          <CardDescription>Test categories ordered by priority and time investment</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {prioritizedTests.map((test) => (
              <div key={test.category} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{test.category}</h4>
                    <Badge variant={test.priority === 'P0' ? 'destructive' : test.priority === 'P1' ? 'default' : 'secondary'}>
                      {test.priority}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {test.time} invested
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress: {test.executed}/{test.planned} tests</span>
                    <span>{Math.round((test.executed / test.planned) * 100)}% complete</span>
                  </div>
                  <Progress value={(test.executed / test.planned) * 100} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}