import React from 'react'
import DashboardBox from '../../components/DashboardBox'
import { useGetKpisQuery } from '../../state/api'

const Row1 = () => {
    const {data} = useGetKpisQuery();
    console.log("data:", data) // This will log the data from the API call 
  return (
    <>
    <DashboardBox gridArea="a" ></DashboardBox>
    <DashboardBox gridArea="b" ></DashboardBox>
    <DashboardBox gridArea="c" ></DashboardBox>
</>
)
}

export default Row1;