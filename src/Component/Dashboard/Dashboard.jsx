import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            name: "Hasan",
            Ph: 82,
            Cha: 52,
            Math: 90
        },
        {
            name: "Ali",
            Ph: 56,
            Cha: 42,
            Math: 40
        },
        {
            name: "Masud",
            Ph: 77,
            Cha: 55,
            Math: 47
        },
        {
            name: "A.Salam",
            Ph: 88,
            Cha: 62,
            Math: 74

        },
        {
            name: "Minhaz",
            Ph: 65,
            Cha: 47,
            Math: 85
        },
        {
            name: "Monir",
            Ph: 85,
            Cha: 57,
            Math: 54
        }
    ]
    return (
        <div>
            <LineChart width={900} height={300} data={data}>
            <Line dataKey="Ph"></Line>
            <Line stroke='#8884d8' dataKey="Cha"></Line>
            <XAxis dataKey="name" />
            <YAxis/>
            <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;