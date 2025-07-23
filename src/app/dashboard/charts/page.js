'use client';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement, Tooltip, Legend);

export default function ChartsPage() {
    const barData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales ($)',
            data: [12000, 19000, 15000, 21000, 17000, 24000],
            backgroundColor: 'rgba(12, 119, 242, 0.5)',
            borderColor: 'rgba(12, 119, 242, 1)',
            borderWidth: 2,
            borderRadius: 6,
        }],
    };

    const pieData = {
        labels: ['Direct', 'Referral', 'Organic', 'Ads'],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: [
                'rgba(12, 119, 242, 1)',
                'rgba(22, 163, 74, 1)',
                'rgba(249, 115, 22, 1)',
                'rgba(239, 68, 68, 1)',
            ],
        }],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Revenue ($)',
            data: [50000, 52000, 60000, 58000, 65000, 72000],
            fill: true,
            backgroundColor: 'rgba(12, 119, 242, 0.2)',
            borderColor: 'rgba(12, 119, 242, 1)',
            tension: 0.4,
        }],
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Sales Performance</h3>
                        <p className="text-sm text-gray-500 mb-4">Total sales over the last 6 months.</p>
                        <div className="h-64 sm:h-72">
                            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">Customer Acquisition</h3>
                        <p className="text-sm text-gray-500 mb-4">Channels driving new customers.</p>
                        <div className="h-64 sm:h-72 flex items-center justify-center">
                            <Doughnut data={pieData} options={{ cutout: '70%', responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }} />
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Revenue Trend</h3>
                    <p className="text-sm text-gray-500 mb-4">Monthly recurring revenue (MRR) growth.</p>
                    <div className="h-72 sm:h-80">
                        <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }} />
                    </div>
                </div>
            </div>
        </div>
    );
}