import { useState } from 'react';
import { recentTransactions } from '../data/mockData';
import { Search } from 'lucide-react';
import StatusChart from '../components/StatusChart';
import TransactionsTable from '../components/TransactionsTable';
import './details.css';

const Details = () => {


    const [category, setCategory] = useState('All Categories');
    const [searchTerm, setSearchTerm] = useState('');

    const filtereddata = recentTransactions.filter(transaction => {

        const selectedCategory = category;
        const transactionCategory = transaction.category;

        const isCategoryMatch = (selectedCategory === 'All Categories') || (selectedCategory === transactionCategory);

        const customerName = transaction.customer.toLowerCase();
        const searchInput = searchTerm.toLowerCase();

        const isSearchMatch = customerName.includes(searchInput);

        return isCategoryMatch && isSearchMatch;
    });

    
    const statusCounts = filtereddata.reduce((acc, curr) => {
        const status = curr.status;
        acc[status] = (acc[status] || 0) + 1;

        return acc;
    }, {});


    const chartData = Object.keys(statusCounts).map(status => ({
        name: status,
        count: statusCounts[status]
    }));

    return (
        <div className="details-container">
            <div className="details-header">
                <div>
                    <h1>Transaction Details</h1>
                    <p>View and manage all your orders</p>
                </div>
            </div>

  
            <div className="filters-bar">
                <div className="search-wrapper">
                    <Search size={18} color="#6B7280" />
                    <input
                        type="text"
                        placeholder="Search by customer..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="category-select"
                >
                    <option value="All Categories">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                </select>
            </div>

    
            <StatusChart distributionData={chartData} />

       
            <div className="details-table-wrapper">
                <TransactionsTable transactions={filtereddata} showCategory={true} />
            </div>
        </div>
    )
}

export default Details;