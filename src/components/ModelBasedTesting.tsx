import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Workflow, Zap, CheckCircle, AlertTriangle, Info, CheckCircle2, Cog } from 'lucide-react';

const modelMetrics = [
  { name: 'State Models', value: '8', description: 'Active models' },
  { name: 'Generated Tests', value: '342', description: 'Auto-generated' },
  { name: 'Model Coverage', value: '87%', description: 'States covered' },
  { name: 'Execution Rate', value: '94%', description: 'Success rate' },
];

const modelStatus = [
  { model: 'User Authentication Flow', states: 12, transitions: 28, coverage: 95, status: 'Complete' },
  { model: 'Order Processing', states: 18, transitions: 42, coverage: 82, status: 'Active' },
  { model: 'Payment Gateway', states: 8, transitions: 16, coverage: 88, status: 'Active' },
  { model: 'Inventory Management', states: 15, transitions: 35, coverage: 73, status: 'In Progress' },
];

export function ModelBasedTesting() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-2">Model-Based Testing</h2>
        <p className="text-muted-foreground">
          Using formal models of system behavior to generate tests and prioritize based on model coverage
        </p>
      </div>

      {/* Explanation Card */}
      <Card className="bg-cyan-50 border-cyan-200 dark:bg-cyan-950 dark:border-cyan-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-cyan-600" />
            What is Model-Based Testing?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm leading-relaxed">
            Model-based testing is a software testing approach that uses formal models of system behavior to automatically generate test cases. 
            Instead of manually writing tests, you create abstract models (state machines, flowcharts, decision trees) that represent the system's expected behavior, and tools generate test cases from these models.
          </p>
          
          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
              <Cog className="h-4 w-4 text-cyan-600" />
              Key Idea
            </h4>
            <p className="text-sm">
              Create abstract models that represent system behavior, then use automated tools to generate comprehensive test cases that cover all possible paths, states, and transitions defined in the model.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">How Model-Based Testing Works:</h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center text-xs font-medium text-cyan-600">1</div>
                <div>
                  <p className="text-sm font-medium">Create behavioral models</p>
                  <p className="text-xs text-muted-foreground">Build state machines, flow diagrams, or decision trees that represent how the system should behave.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center text-xs font-medium text-cyan-600">2</div>
                <div>
                  <p className="text-sm font-medium">Generate test cases</p>
                  <p className="text-xs text-muted-foreground">Use automated tools to create test cases that cover all paths, states, and transitions in the model.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center text-xs font-medium text-cyan-600">3</div>
                <div>
                  <p className="text-sm font-medium">Execute and validate</p>
                  <p className="text-xs text-muted-foreground">Run generated tests against the system and compare actual behavior with model predictions.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center text-xs font-medium text-cyan-600">4</div>
                <div>
                  <p className="text-sm font-medium">Refine models</p>
                  <p className="text-xs text-muted-foreground">Update models based on test results and system changes to maintain accuracy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background/50 p-4 rounded-lg border">
            <h4 className="text-sm font-medium mb-3">Example: ATM State Machine</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Workflow className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">States: Idle → Card Inserted → PIN Entry → Menu → Transaction</p>
                  <p className="text-xs text-muted-foreground">Model defines all possible states the ATM can be in during operation.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Zap className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Auto-generated tests: 200+ test cases</p>
                  <p className="text-xs text-muted-foreground">Tool generates tests for all valid transitions, invalid transitions, and edge cases automatically.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Coverage: 100% of modeled behavior</p>
                  <p className="text-xs text-muted-foreground">Every state transition and condition in the model is tested systematically.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                When to Use
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Complex system behaviors</li>
                <li>• State-dependent applications</li>
                <li>• Need for systematic coverage</li>
                <li>• Automated test generation</li>
                <li>• Formal verification requirements</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Cog className="h-4 w-4 text-cyan-600" />
                Key Benefits
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Automated test generation</li>
                <li>• Comprehensive coverage</li>
                <li>• Formal verification possible</li>
                <li>• Reduces manual effort</li>
                <li>• Maintains test consistency</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {modelMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                {index === 0 && <Workflow className="h-4 w-4" />}
                {index === 1 && <Zap className="h-4 w-4" />}
                {index === 2 && <CheckCircle className="h-4 w-4" />}
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
          <CardTitle>Model Coverage Status</CardTitle>
          <CardDescription>State machine models and their test coverage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {modelStatus.map((model) => (
              <div key={model.model} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h4 className="font-medium">{model.model}</h4>
                    <Badge variant={model.status === 'Complete' ? 'default' : model.status === 'Active' ? 'secondary' : 'destructive'}>
                      {model.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {model.coverage}% coverage
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">States: </span>
                    <span className="font-medium">{model.states}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Transitions: </span>
                    <span className="font-medium">{model.transitions}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Coverage: </span>
                    <span className="font-medium">{model.coverage}%</span>
                  </div>
                </div>
                
                <Progress value={model.coverage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}