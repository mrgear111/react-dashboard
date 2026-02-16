

export const dashboardData = {
    all: {
        stats: {
            revenue: 45231.89,
            revenueTrend: 12.5,
            completedOrders: 356,
            pendingOrders: 42,
            cancelledOrders: 15,
        },
        


        chartData: [
            { date: 'Oct 01', revenue: 4200, orders: 45 },
            { date: 'Oct 02', revenue: 3150, orders: 32 },
            { date: 'Oct 03', revenue: 1200, orders: 12 }, 
            { date: 'Oct 04', revenue: 5890, orders: 68 }, 
            { date: 'Oct 05', revenue: 4100, orders: 48 },
            { date: 'Oct 06', revenue: 3800, orders: 39 },
            { date: 'Oct 07', revenue: 6200, orders: 72 },
        ]
    },
    electronics: {
        stats: {
            revenue: 28450.50,
            revenueTrend: 8.2,
            completedOrders: 145,
            pendingOrders: 12,
            cancelledOrders: 5,
        },
        chartData: [
            { date: 'Oct 01', revenue: 2500, orders: 20 },
            { date: 'Oct 02', revenue: 1800, orders: 15 },
            { date: 'Oct 03', revenue: 900, orders: 8 },
            { date: 'Oct 04', revenue: 3500, orders: 25 },
            { date: 'Oct 05', revenue: 2200, orders: 18 },
            { date: 'Oct 06', revenue: 2500, orders: 20 },
            { date: 'Oct 07', revenue: 4100, orders: 35 },
        ]
    },
    fashion: {
        stats: {
            revenue: 12100.20,
            revenueTrend: -2.4,
            completedOrders: 180,
            pendingOrders: 25,
            cancelledOrders: 9,
        },
        chartData: [
            { date: 'Oct 01', revenue: 1200, orders: 15 },
            { date: 'Oct 02', revenue: 1100, orders: 12 },
            { date: 'Oct 03', revenue: 200, orders: 3 }, 
            { date: 'Oct 04', revenue: 1800, orders: 35 },
            { date: 'Oct 05', revenue: 1500, orders: 22 },
            { date: 'Oct 06', revenue: 1100, orders: 15 },
            { date: 'Oct 07', revenue: 1600, orders: 28 },
        ]
    }
};


export const recentTransactions = [
    { id: '#ORD-2023-001', customer: 'Alex Johnson', amount: 120.55, status: 'Completed', date: 'Oct 07, 2023', category: 'Electronics' },
    { id: '#ORD-2023-002', customer: 'Maria Garcia', amount: 45.00, status: 'Pending', date: 'Oct 07, 2023', category: 'Fashion' },
    { id: '#ORD-2023-003', customer: 'James Smith', amount: 350.25, status: 'Completed', date: 'Oct 06, 2023', category: 'Electronics' },
    { id: '#ORD-2023-004', customer: 'Sophie L.', amount: 55.10, status: 'Cancelled', date: 'Oct 06, 2023', category: 'Fashion' },
    { id: '#ORD-2023-005', customer: 'Mike Ross', amount: 210.00, status: 'Completed', date: 'Oct 05, 2023', category: 'Electronics' },
    { id: '#ORD-2023-006', customer: 'Rachel Zane', amount: 89.99, status: 'Pending', date: 'Oct 05, 2023', category: 'Fashion' },
    { id: '#ORD-2023-007', customer: 'Chris Evans', amount: 299.00, status: 'Completed', date: 'Oct 04, 2023', category: 'Electronics' },
    { id: '#ORD-2023-008', customer: 'Natalie Portman', amount: 125.50, status: 'Completed', date: 'Oct 04, 2023', category: 'Fashion' },
    { id: '#ORD-2023-009', customer: 'Tom Holland', amount: 450.00, status: 'Pending', date: 'Oct 03, 2023', category: 'Electronics' },
    { id: '#ORD-2023-010', customer: 'Emma Stone', amount: 65.00, status: 'Cancelled', date: 'Oct 03, 2023', category: 'Fashion' },
];
