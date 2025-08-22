import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Users, TrendingUp, Clock, Activity, Info, CheckCircle2, BarChart3 } from 'lucide-react';

const usageMetrics = [
  { name: 'High-Usage Features', value: '12', description: '80%+ user adoption' },
  { name: 'Test Coverage', value: '91%', description: 'Usage-weighted' },
  { name: 'Critical Paths', value: '8', description: 'Most frequent flows' },
  { name: 'User Sessions', value: '2.3M', description: 'Analyzed monthly' },
];

const featureUsage = [
  { feature: 'User Login', usage: 95, tests: 25, coverage: 92, criticality: 'Critical' },
  { feature: 'Dashboard View', usage: 88, tests: 18, coverage: 85, criticality: 'High' },
  { feature: 'Search Function', usage: 82, tests: 22, coverage: 90, criticality: 'High' },
  { feature: 'Profile Management', usage: 65, tests: 12, coverage: 78, criticality: 'Medium' },
  { feature: 'Data Export', usage: 35, tests: 8, coverage: 70, criticality: 'Low' },
];

export function UsageBasedTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Usage-Based Testing</h2>
        <p className="text-muted-foreground">
          Testing driven by how end-users use the system in production, weighted by feature usage probability
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-emerald-50 border-emerald-200 dark:bg-emerald-950 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-emerald-600" />
            What is Usage-Based Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            Usage-Based Testing (also known as Operational Profile Testing) allocates testing effort based on how end-users actually use the system in production. 
            Test frequency is weighted by feature usage probability rather than risk assessment, focusing on the most commonly used scenarios.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                When to Use
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• User behavior data available</li>
                <li>• Need to optimize for real usage</li>
                <li>• Improve user experience</li>
                <li>• Production-like testing scenarios</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-emerald-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Tests real user scenarios</li>
                <li>• Optimizes testing ROI</li>
                <li>• Improves user satisfaction</li>
                <li>• Data-driven prioritization</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {usageMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                {index === 0 && <TrendingUp className="h-4 w-4" />}
                {index === 1 && <Activity className="h-4 w-4" />}
                {index === 2 && <Clock className="h-4 w-4" />}
                {index === 3 && <Users className="h-4 w-4" />}
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
          <CardTitle>Feature Usage vs Test Coverage</CardTitle>
          <CardDescription>Testing allocation based on actual user behavior patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {featureUsage.map((feature) => (
              <div key={feature.feature} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{feature.feature}</h4>
                    <Badge variant={
                      feature.criticality === 'Critical' ? 'destructive' :
                      feature.criticality === 'High' ? 'default' :
                      'secondary'
                    }>
                      {feature.criticality}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {feature.tests} test cases
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>User Adoption</span>
                      <span>{feature.usage}%</span>
                    </div>
                    <Progress value={feature.usage} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Test Coverage</span>
                      <span>{feature.coverage}%</span>
                    </div>
                    <Progress value={feature.coverage} className="h-2" />
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