import { useState } from 'react';
import { dashboardData, recentTransactions } from '../data/mockData';
import KPICard from '../components/KPICard';
import RevenueChart from '../components/RevenueChart';
import TransactionsTable from '../components/TransactionsTable';
import './dashboard.css';

const Dashboard = () => {
    const [category, setCategory] = useState('all');

    const data = dashboardData[category];

    console.log(data)

    const { stats, chartData } = data;


    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div>
                    <h1>Overview</h1>
                    <p style={{ color: '#666', marginTop: '4px' }}>Welcome back, User</p>
                </div>

                <div className="controls">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="filter-dropdown"
                    >
                        <option value="all">All Categories</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                    </select>
                </div>
            </div>

            <div className="kpi-grid">
                <KPICard
                    label="Total Revenue"
                    value={`$${stats.revenue.toLocaleString()}`}

                    color="blue"
                    // trend={stats.revenueTrend}
               
                />

                <KPICard
                    label="Completed Orders"
                    value={stats.completedOrders}
                    color="green"
                />

                <KPICard
                    label="Pending Orders"
                    value={stats.pendingOrders}
                    color="yellow"

                />

                <KPICard
                    label="Cancelled"
                    value={stats.cancelledOrders}
                    color="red"

                />
            </div>

            <div className="charts-section">

                <RevenueChart data={chartData} />
            </div>

            <TransactionsTable transactions={recentTransactions} />
        </div>
    );
};

export default Dashboard;