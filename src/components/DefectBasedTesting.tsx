import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Bug, TrendingDown, AlertCircle, History, Info, CheckCircle2, Target } from 'lucide-react';

const defectMetrics = [
  { name: 'Historical Defects', value: '156', description: 'Last 6 months' },
  { name: 'Hot Spots', value: '7', description: 'High-defect areas' },
  { name: 'Prevented Issues', value: '23', description: 'This sprint' },
  { name: 'Trend Accuracy', value: '87%', description: 'Prediction rate' },
];

const defectHotspots = [
  { area: 'Authentication Module', defects: 23, severity: 'High', trend: 'Increasing', tests: 15 },
  { area: 'Payment Processing', defects: 18, severity: 'Critical', trend: 'Stable', tests: 12 },
  { area: 'Data Validation', defects: 14, severity: 'Medium', trend: 'Decreasing', tests: 8 },
  { area: 'API Gateway', defects: 12, severity: 'High', trend: 'Stable', tests: 10 },
  { area: 'User Interface', defects: 9, severity: 'Low', trend: 'Decreasing', tests: 6 },
];

export function DefectBasedTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Defect-Based Testing</h2>
        <p className="text-muted-foreground">
          Testing guided by historical defect data and experience of common failure points
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-red-600" />
            What is Defect-Based Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            Defect-Based Testing (also known as Error Guessing) prioritizes testing effort based on historical defect data and tester experience of common failure points. 
            Instead of formal risk analysis, past issues and error patterns drive the prioritization of test cases.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-red-600" />
                When to Use
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Rich historical defect data</li>
                <li>• Experienced testing team</li>
                <li>• Similar system versions</li>
                <li>• Pattern-based issues</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4 text-red-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Leverages past experience</li>
                <li>• Targets known problem areas</li>
                <li>• Prevents recurring issues</li>
                <li>• Efficient resource allocation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {defectMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                {index === 0 && <History className="h-4 w-4" />}
                {index === 1 && <AlertCircle className="h-4 w-4" />}
                {index === 2 && <TrendingDown className="h-4 w-4" />}
                {index === 3 && <Bug className="h-4 w-4" />}
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
          <CardTitle>Defect Hot Spots</CardTitle>
          <CardDescription>Areas with high defect density requiring focused testing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {defectHotspots.map((hotspot) => (
              <div key={hotspot.area} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{hotspot.area}</h4>
                    <Badge variant={hotspot.severity === 'Critical' ? 'destructive' : hotspot.severity === 'High' ? 'default' : 'secondary'}>
                      {hotspot.severity}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={hotspot.trend === 'Increasing' ? 'destructive' : hotspot.trend === 'Stable' ? 'default' : 'secondary'}>
                      {hotspot.trend}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{hotspot.tests} tests</span>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {hotspot.defects} defects found in this area over the last 6 months
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}