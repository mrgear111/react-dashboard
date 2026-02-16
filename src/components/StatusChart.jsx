import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const StatusChart = ({ distributionData }) => {

   
    const chartColor = "#4F46E5";

    return (
        
        <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            marginBottom: '24px',
            border: '1px solid #E5E7EB'
        }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '16px', color: '#374151' }}>
                Order Status Distribution
            </h3>

            <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={distributionData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        
                        <XAxis type="number" hide />

                        <YAxis
                            type="category"
                            dataKey="name"
                            tick={{ fontSize: 12 }}
                            width={80}
                        />

                        <Tooltip
                            contentStyle={{ borderRadius: '8px' }}
                            cursor={{ fill: 'transparent' }}
                        />

                        <Bar
                            dataKey="count"
                            fill={chartColor}
                            radius={[0, 4, 4, 0]}
                            barSize={20}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

StatusChart.propTypes = {

    distributionData: PropTypes.array.isRequired
    
};

export default StatusChart;
