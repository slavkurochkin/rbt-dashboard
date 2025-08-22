import React, { useState } from 'react';
import { DashboardOverview } from './components/DashboardOverview';
import { RiskBasedTesting } from './components/RiskBasedTesting';
import { RequirementBasedTesting } from './components/RequirementBasedTesting';
import { CoverageBasedTesting } from './components/CoverageBasedTesting';
import { ExploratoryTesting } from './components/ExploratoryTesting';
import { ModelBasedTesting } from './components/ModelBasedTesting';
import { ChecklistBasedTesting } from './components/ChecklistBasedTesting';
import { UsageBasedTesting } from './components/UsageBasedTesting';
import { DefectBasedTesting } from './components/DefectBasedTesting';
import { TimeConstrainedTesting } from './components/TimeConstrainedTesting';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { 
  BarChart3,
  Target,
  FileText,
  Activity,
  Search,
  Workflow,
  CheckSquare,
  Users,
  Bug,
  Clock
} from 'lucide-react';

const navigationItems = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'risk-based', label: 'Risk-Based Testing', icon: Target },
  { id: 'requirement-based', label: 'Requirement-Based', icon: FileText },
  { id: 'coverage-based', label: 'Coverage-Based', icon: Activity },
  { id: 'exploratory', label: 'Exploratory Testing', icon: Search },
  { id: 'model-based', label: 'Model-Based', icon: Workflow },
  { id: 'checklist-based', label: 'Checklist-Based', icon: CheckSquare },
  { id: 'usage-based', label: 'Usage-Based', icon: Users },
  { id: 'defect-based', label: 'Defect-Based', icon: Bug },
  { id: 'time-constrained', label: 'Time-Constrained', icon: Clock },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview />;
      case 'risk-based':
        return <RiskBasedTesting />;
      case 'requirement-based':
        return <RequirementBasedTesting />;
      case 'coverage-based':
        return <CoverageBasedTesting />;
      case 'exploratory':
        return <ExploratoryTesting />;
      case 'model-based':
        return <ModelBasedTesting />;
      case 'checklist-based':
        return <ChecklistBasedTesting />;
      case 'usage-based':
        return <UsageBasedTesting />;
      case 'defect-based':
        return <DefectBasedTesting />;
      case 'time-constrained':
        return <TimeConstrainedTesting />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <h1 className="text-xl font-medium text-foreground">Testing Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Risk-Based & Alternative Testing</p>
        </div>
        
        <nav className="px-4 space-y-1">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "ghost"}
              className="w-full justify-start gap-3 h-10"
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}