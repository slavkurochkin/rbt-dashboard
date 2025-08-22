
# 🎯 Risk-Based Testing Dashboard

A comprehensive, modern dashboard for managing and visualizing various software testing methodologies with a focus on risk-based testing approaches. This interactive web application provides insights into testing coverage, progress tracking, and risk assessment across multiple testing strategies.

## 🌟 Live Demo

**View the live dashboard:** [https://slavkurochkin.github.io/rbt-dashboard/](https://slavkurochkin.github.io/rbt-dashboard/)

## ✨ Features

### 📊 **Dashboard Overview**
- Real-time testing metrics and KPIs
- Interactive charts and visualizations
- Progress tracking across all testing methodologies
- Risk distribution analysis
- Weekly testing progress trends

### 🧪 **Testing Methodologies Covered**
1. **Risk-Based Testing** - Prioritize testing based on risk assessment
2. **Requirement-Based Testing** - Validate against functional requirements
3. **Coverage-Based Testing** - Track code and functional coverage metrics
4. **Exploratory Testing** - Manage ad-hoc and investigative testing sessions
5. **Model-Based Testing** - Generate tests from behavioral models
6. **Checklist-Based Testing** - Systematic testing using predefined checklists
7. **Usage-Based Testing** - Test based on real user behavior patterns
8. **Defect-Based Testing** - Focus testing on areas with historical defects
9. **Time-Constrained Testing** - Optimize testing within limited time windows

### 🎨 **User Experience**
- Modern, responsive design with dark/light mode support
- Intuitive navigation between testing methodologies
- Interactive data visualizations using Recharts
- Clean, professional UI built with Tailwind CSS and Radix UI
- Mobile-friendly responsive layout

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### **UI & Styling**
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful, customizable icons
- **Custom Design System** - Consistent theming and components

### **Data Visualization**
- **Recharts** - Composable charting library for React
- **Interactive Charts** - Bar charts, pie charts, line graphs, and progress indicators

### **Development Tools**
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing and optimization
- **Git** - Version control

### **Deployment**
- **GitHub Pages** - Automated deployment via GitHub Actions
- **CI/CD** - Continuous integration and deployment pipeline

## 🚀 Getting Started

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/slavkurochkin/rbt-dashboard.git
   cd rbt-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the dashboard

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally

# Deployment
npm run deploy       # Deploy to GitHub Pages (manual)
```

## 📱 Usage

### Navigation
- Use the **sidebar navigation** to switch between different testing methodologies
- Each section provides detailed insights and metrics for that specific testing approach
- The **Overview** section provides a comprehensive view of all testing activities

### Dashboard Features
- **Interactive Charts** - Hover over data points for detailed information
- **Progress Tracking** - Monitor testing completion across all methodologies
- **Risk Assessment** - Visualize risk distribution and coverage
- **Historical Data** - Track trends and progress over time

## 🎯 Testing Methodologies Guide

### Risk-Based Testing
Focus testing efforts on the highest-risk areas of the application based on:
- Business impact analysis
- Technical complexity assessment
- Historical defect data
- User workflow criticality

### Coverage-Based Testing
Ensure comprehensive testing coverage through:
- Code coverage metrics
- Functional coverage tracking
- Requirement coverage analysis
- Test case coverage reporting

### Exploratory Testing
Manage unscripted testing activities:
- Session-based test management
- Bug advocacy and investigation
- Usability and user experience testing
- Edge case discovery

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages:

### Automatic Deployment
- **Trigger**: Every push to the `main` branch
- **Process**: GitHub Actions builds and deploys automatically
- **URL**: `https://yourusername.github.io/rbt-dashboard/`

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code formatting
- Add appropriate comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📊 Project Structure

```
rbt-dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── *Testing.tsx    # Testing methodology components
│   │   └── DashboardOverview.tsx
│   ├── styles/             # CSS and styling
│   ├── guidelines/         # Testing guidelines
│   └── main.tsx           # Application entry point
├── public/                 # Static assets
├── .github/workflows/      # GitHub Actions CI/CD
└── dist/                  # Production build output
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original Design**: Based on the Figma design at [Risk-Based Testing Dashboard](https://www.figma.com/design/6VihCWq4u2vcSzsh35Fc0g/Risk-Based-Testing-Dashboard)
- **UI Components**: Built with [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/) icon library
- **Charts**: [Recharts](https://recharts.org/) data visualization library

## 📧 Contact

For questions, suggestions, or issues, please open an issue on GitHub or contact the maintainer.

---

**⭐ If you find this project helpful, please consider giving it a star on GitHub!**