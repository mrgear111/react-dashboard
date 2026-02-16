import PropTypes from 'prop-types';

const KPICard = ({ label, value, icon, color, trend, trendValue, subtext }) => {
    return (
        <div className="kpi-card">
            <div className="kpi-top">
                <span className="kpi-label">{label}</span>

                {icon && (
                    <div className={`icon-box ${color}`}>
                        {icon}
                    </div>
                )}
            </div>
            <div className="kpi-value">
                {value}
            </div>
            {trend !== undefined && (
                <div className={`kpi-trend ${trend >= 0 ? 'positive' : 'negative'}`}>
                    {trend > 0 ? '+' : ''}{trend}% {trendValue}
                </div>
            )}
            {subtext && (
                <div className={`kpi-subtext ${subtext.includes('return') ? 'kpi-trend negative' : ''}`}>
                    {subtext}
                </div>
            )}
        </div>
    );
};

KPICard.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.element,
    color: PropTypes.string.isRequired,
    trend: PropTypes.number,
    trendValue: PropTypes.string,
    subtext: PropTypes.string
};

export default KPICard;
