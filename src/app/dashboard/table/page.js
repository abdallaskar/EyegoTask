'use client';
import { useState, useMemo } from 'react';

const dummyData = [
    { id: '#12345', date: 'Aug 15, 2023', customer: 'Sophia Clark', total: 150, status: 'Shipped' },
    { id: '#12346', date: 'Aug 16, 2023', customer: 'Liam Carter', total: 200, status: 'Processing' },
    { id: '#12347', date: 'Aug 17, 2023', customer: 'Olivia Bennett', total: 100, status: 'Delivered' },
    { id: '#12348', date: 'Aug 18, 2023', customer: 'Noah Foster', total: 250, status: 'Shipped' },
    { id: '#12349', date: 'Aug 19, 2023', customer: 'Ava Harper', total: 180, status: 'Processing' },
    { id: '#12350', date: 'Aug 20, 2023', customer: 'Mason Lee', total: 175, status: 'Delivered' },
    { id: '#12351', date: 'Aug 21, 2023', customer: 'Emma Scott', total: 160, status: 'Shipped' },
    { id: '#12352', date: 'Aug 22, 2023', customer: 'Lucas Hall', total: 210, status: 'Processing' },
    { id: '#12353', date: 'Aug 15, 2023', customer: 'Sophia Clark', total: 150, status: 'Shipped' },
    { id: '#12354', date: 'Aug 16, 2023', customer: 'Liam Carter', total: 200, status: 'Processing' },
    { id: '#12355', date: 'Aug 17, 2023', customer: 'Olivia Bennett', total: 100, status: 'Delivered' },
    { id: '#12356', date: 'Aug 18, 2023', customer: 'Noah Foster', total: 250, status: 'Shipped' },
    { id: '#12357', date: 'Aug 19, 2023', customer: 'Ava Harper', total: 180, status: 'Processing' },
    { id: '#12358', date: 'Aug 20, 2023', customer: 'Mason Lee', total: 175, status: 'Delivered' },
    { id: '#12359', date: 'Aug 21, 2023', customer: 'Emma Scott', total: 160, status: 'Shipped' },
    { id: '#12360', date: 'Aug 22, 2023', customer: 'Lucas Hall', total: 210, status: 'Processing' },
];

export default function TablePage() {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [sortKey, setSortKey] = useState('id');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredData = useMemo(() => {
        return dummyData
            .filter(item =>
                (statusFilter === 'All' || item.status === statusFilter) &&
                (item.id.toLowerCase().includes(search.toLowerCase()) ||
                    item.customer.toLowerCase().includes(search.toLowerCase()))
            )
            .sort((a, b) => {
                if (sortKey === 'total') {
                    return sortOrder === 'asc' ? a.total - b.total : b.total - a.total;
                } else {
                    const valueA = a[sortKey].toLowerCase();
                    const valueB = b[sortKey].toLowerCase();
                    return sortOrder === 'asc'
                        ? valueA.localeCompare(valueB)
                        : valueB.localeCompare(valueA);
                }
            });
    }, [search, sortKey, sortOrder, statusFilter]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleSort = (key) => {
        if (key === sortKey) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };

    return (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50">
            <h1 className="text-3xl font-bold mb-6 text-gray-900">Orders Table</h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by ID or Customer..."
                    className="p-2 border text-black border-gray-300 rounded-md w-full sm:w-1/2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="p-2 border text-black border-gray-300 rounded-md w-full sm:w-1/4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                >
                    <option value="All">All Statuses</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Processing">Processing</option>
                    <option value="Delivered">Delivered</option>
                </select>
            </div>
            <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-gray-100 text-xs uppercase font-semibold text-gray-600">
                        <tr>
                            <th className="p-4 cursor-pointer hover:bg-gray-200" onClick={() => handleSort('id')}>
                                Order ID
                            </th>
                            <th className="p-4 cursor-pointer hover:bg-gray-200" onClick={() => handleSort('date')}>
                                Date
                            </th>
                            <th className="p-4">Customer</th>
                            <th className="p-4 cursor-pointer hover:bg-gray-200 text-right" onClick={() => handleSort('total')}>
                                Total ($)
                            </th>
                            <th className="p-4 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-200">
                        {paginatedData.length > 0 ? (
                            paginatedData.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors text-black">
                                    <td className="p-4 font-medium">{order.id}</td>
                                    <td className="p-4">{order.date}</td>
                                    <td className="p-4">{order.customer}</td>
                                    <td className="p-4 text-right">${order.total.toFixed(2)}</td>
                                    <td className="p-4 text-center">
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Shipped'
                                                ? 'bg-blue-100 text-blue-800'
                                                : order.status === 'Processing'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-green-100 text-green-800'
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="p-4 text-center text-gray-500">
                                    No orders found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col text-black sm:flex-row justify-between items-center mt-4 gap-4">
                <p className="text-sm text-gray-600">
                    Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of{' '}
                    {filteredData.length} results
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-1 border text-black border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx + 1)}
                            className={`px-3 py-1 rounded-md ${currentPage === idx + 1 ? 'bg-blue-600 text-white' : 'border border-gray-300 hover:bg-gray-100'
                                }`}
                        >
                            {idx + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}