import "./App.css";
import {
  LayoutDashboard,
  Bell,
  Settings,
  Activity,
  Database,
  AlertTriangle,
  Menu,
} from "lucide-react";

function MiniGraph({ color }) {
  return (
    <svg
      viewBox="0 0 100 30"
      className="mini-graph"
      preserveAspectRatio="none"
    >
      <path
        d="M0 25 C10 20, 20 5, 30 10 S50 28, 60 15 S80 5, 100 12"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Card({ title, value, color }) {
  return (
    <div className="card">
      <div className="card-top">
        <p>{title}</p>
      </div>

      <h1 style={{ color }}>{value}</h1>

      <MiniGraph color={color} />
    </div>
  );
}

function PieChart() {
  return (
    <div className="pie-wrapper">
      <div className="pie-chart"></div>

      <div className="pie-center">
        <h2>128</h2>
        <span>Total</span>
      </div>

      <div className="pie-labels">
        <div><span className="dot green"></span> Running</div>
        <div><span className="dot blue"></span> Pending</div>
        <div><span className="dot orange"></span> Completed</div>
        <div><span className="dot red"></span> Failed</div>
      </div>
    </div>
  );
}

function RiskScore() {
  return (
    <div className="risk-card">
      <h2>Cluster Risk Score</h2>

      <div className="risk-chart">
        <div className="risk-circle">
          <div className="risk-inner">
            <h1>78</h1>
            <span>/100</span>
          </div>
        </div>
      </div>

      <p className="risk-text">High Risk</p>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="logo-section">
          <div className="logo-box">AI</div>

          <div>
            <h2>KubeMind AI</h2>
            <p>AI Kubernetes Intelligence</p>
          </div>
        </div>

        <div className="menu-items">
          <div className="menu active">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </div>

          <div className="menu">
            <Database size={20} />
            <span>Pod Analytics</span>
          </div>

          <div className="menu">
            <Activity size={20} />
            <span>AI Insights</span>
          </div>

          <div className="menu">
            <AlertTriangle size={20} />
            <span>Alerts</span>
          </div>

          <div className="menu">
            <Settings size={20} />
            <span>Settings</span>
          </div>
        </div>
      </div>

      <div className="cluster-box">
        <h3>Cluster Status</h3>
        <p>Healthy</p>
        <span>3 Nodes • 3 Pods</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <div className="topbar">
          <div className="left-topbar">
            <Menu size={22} />
            <h1>Dashboard</h1>
          </div>

          <div className="right-topbar">
            <Bell size={22} />

            <div className="profile">
              <div className="avatar">AD</div>
              <span>Admin</span>
            </div>
          </div>
        </div>

        <div className="cards-grid">
          <Card title="Total Pods" value="128" color="#3b82f6" />
          <Card title="CPU Usage" value="63%" color="#22c55e" />
          <Card title="Memory Usage" value="71%" color="#a855f7" />
          <Card title="Active Alerts" value="12" color="#ef4444" />
        </div>

        <div className="charts-section">
          <div className="chart-card large">
            <div className="chart-header">
              <h2>CPU Usage</h2>
              <button>Last 5 mins</button>
            </div>

            <div className="fake-chart">
              <div className="line blue"></div>
              <div className="line red"></div>
              <div className="line green"></div>
            </div>
          </div>

          <div className="chart-card">
            <h2>Pods Status</h2>

            <PieChart />
          </div>
        </div>

        <div className="bottom-grid">
          <div className="table-card">
            <div className="table-header">
              <h2>Pod Status</h2>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Pod</th>
                  <th>Status</th>
                  <th>CPU</th>
                  <th>Memory</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>frontend-pod</td>
                  <td>
                    <span className="status running">Running</span>
                  </td>
                  <td>34%</td>
                  <td>220MB</td>
                </tr>

                <tr>
                  <td>backend-pod</td>
                  <td>
                    <span className="status warning-status">Warning</span>
                  </td>
                  <td>87%</td>
                  <td>702MB</td>
                </tr>

                <tr>
                  <td>mongodb-pod</td>
                  <td>
                    <span className="status running">Running</span>
                  </td>
                  <td>20%</td>
                  <td>1.1GB</td>
                </tr>
              </tbody>
            </table>
          </div>

          <RiskScore />
        </div>
      </div>
    </div>
  );
}

export default App;