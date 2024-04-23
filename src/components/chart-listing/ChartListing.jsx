import React, { useState, useCallback } from 'react'
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
} from 'recharts';
import BarChartButtons from './BarChartButtons';
import { Form } from 'react-bootstrap';

export default function ChartListing  () {
    const [opacity, setOpacity] = useState({
        uv: 1,
        pv: 1
    });

    const handleMouseEnter = useCallback(
        (o) => {
            const { dataKey } = o;

            setOpacity({ ...opacity, [dataKey]: 0.5 });
        },
        [opacity, setOpacity]
    );

    const handleMouseLeave = useCallback(
        (o) => {
            const { dataKey } = o;
            setOpacity({ ...opacity, [dataKey]: 1 });
        },
        [opacity, setOpacity]
    );

    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: -3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: -2000,
            pv: -9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: -1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: -3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    return (
        <>
            <div className='container d-flex flex-xl-row flex-lg-row flex-md-row flex-column flex-wrap gap-3 mt-5'>
                <Form className='border rounded-2'>
                <BarChart
                    width={350}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        // left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="0.2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="pv" fill="red" />
                    <Bar dataKey="uv" fill="blue" />
                </BarChart>
                <BarChartButtons/>
                </Form>
                <Form className='border rounded-2'>
                <LineChart
                    width={350}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        // left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="0.2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <Line
                        dataKey="pv"
                        strokeOpacity={opacity.pv}
                        stroke="red"
                        fill="red"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        dataKey="uv"
                        strokeOpacity={opacity.uv}
                        fill="blue"
                        stroke="blue"
                    />
                </LineChart>
                <BarChartButtons/>
                </Form>
                <Form className='border rounded-2'>
                <LineChart
                    width={350}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        // left: 0,
                        bottom: 20
                    }}
                >
                    <CartesianGrid strokeDasharray="0.2" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line dot={false} connectNulls type="step" dataKey="uv" stroke="red" />
                </LineChart>
                <BarChartButtons/>
                </Form>
            </div>
        </>

    )
}