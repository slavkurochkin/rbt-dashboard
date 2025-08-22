import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { CheckSquare, Shield, Eye, Globe, Info, CheckCircle2, Award } from 'lucide-react';

const checklistMetrics = [
  { name: 'Security Checks', value: '42/48', description: 'OWASP compliance' },
  { name: 'Accessibility', value: '18/22', description: 'WCAG guidelines' },
  { name: 'Performance', value: '15/18', description: 'Best practices' },
  { name: 'Usability', value: '12/15', description: 'UX standards' },
];

const standards = [
  { name: 'OWASP Security', total: 48, completed: 42, compliance: 88, priority: 'High' },
  { name: 'WCAG Accessibility', total: 22, completed: 18, compliance: 82, priority: 'High' },
  { name: 'Performance Best Practices', total: 18, completed: 15, compliance: 83, priority: 'Medium' },
  { name: 'Usability Guidelines', total: 15, completed: 12, compliance: 80, priority: 'Medium' },
];

export function ChecklistBasedTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Checklist-Based Testing</h2>
        <p className="text-muted-foreground">
          Testing based on compliance standards, regulations, and organizational checklists
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-indigo-50 border-indigo-200 dark:bg-indigo-950 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-indigo-600" />
            What is Checklist-Based Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed">
            Checklist-Based Testing follows predefined compliance standards, regulations, or internal checklists (like OWASP for security or WCAG for accessibility). 
            The focus is on meeting external or organizational standards rather than assessing risk exposure.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                When to Use
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Regulatory compliance required</li>
                <li>• Industry standards to meet</li>
                <li>• Security and accessibility needs</li>
                <li>• Certification requirements</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4 text-indigo-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Ensures compliance</li>
                <li>• Systematic coverage</li>
                <li>• Industry best practices</li>
                <li>• Audit trail documentation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {checklistMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                {index === 0 && <Shield className="h-4 w-4" />}
                {index === 1 && <Eye className="h-4 w-4" />}
                {index === 2 && <CheckSquare className="h-4 w-4" />}
                {index === 3 && <Globe className="h-4 w-4" />}
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
          <CardTitle>Standards Compliance Status</CardTitle>
          <CardDescription>Progress on various compliance standards and checklists</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {standards.map((standard) => (
              <div key={standard.name} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{standard.name}</h4>
                    <Badge variant={standard.priority === 'High' ? 'destructive' : 'default'}>
                      {standard.priority} Priority
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {standard.completed}/{standard.total} checks
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Compliance: {standard.compliance}%</span>
                    <span>{standard.total - standard.completed} remaining</span>
                  </div>
                  <Progress value={standard.compliance} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}