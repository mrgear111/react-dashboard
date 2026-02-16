import PropTypes from 'prop-types';

const TransactionsTable = ({ transactions, showCategory = false }) => {
    return (
        <div className="transactions-section">
            <h2>{showCategory ? "All Transactions" : "Recent Transactions"}</h2>
            <div className="table-wrapper">
                <table className="details-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #edf2f7', background: '#f7fafc', color: '#4a5568', fontWeight: 600, fontSize: '14px' }}>Order ID</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #edf2f7', background: '#f7fafc', color: '#4a5568', fontWeight: 600, fontSize: '14px' }}>Customer</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #edf2f7', background: '#f7fafc', color: '#4a5568', fontWeight: 600, fontSize: '14px' }}>Date</th>
                            {showCategory && <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #edf2f7', background: '#f7fafc', color: '#4a5568', fontWeight: 600, fontSize: '14px' }}>Category</th>}
                            <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #edf2f7', background: '#f7fafc', color: '#4a5568', fontWeight: 600, fontSize: '14px' }}>Amount</th>
                            <th style={{ textAlign: 'left', padding: '12px 16px', borderBottom: '1px solid #edf2f7', background: '#f7fafc', color: '#4a5568', fontWeight: 600, fontSize: '14px' }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length > 0 ? (
                            transactions.map((tx) => (
                                <tr key={tx.id}>
                                    <td className="tx-id" style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px' }}>{tx.id}</td>
                                    <td className="tx-customer" style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#111827', fontSize: '14px', fontWeight: 500 }}>
                                        {tx.customer}
                                    </td>
                                    <td style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px' }}>{tx.date}</td>
                                    {showCategory && (
                                        <td style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px' }}>
                                            {tx.category || '-'}
                                        </td>
                                    )}
                                    <td style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#111827', fontSize: '14px', fontWeight: 500 }}>${tx.amount.toFixed(2)}</td>
                                    <td style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', color: '#374151', fontSize: '14px' }}>
                                        {tx.status}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={showCategory ? 6 : 5} style={{ textAlign: 'center', padding: '40px', color: '#6B7280', fontStyle: 'italic' }}>No transactions found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

TransactionsTable.propTypes = {
    transactions: PropTypes.array.isRequired,
    showCategory: PropTypes.bool
};

export default TransactionsTable;
