// ** MUI Imports
import Grid from '@mui/material/Grid'
import React, { useEffect, useState } from 'react'
// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from '../../components/admin/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from '../../components/admin/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from '../../components/admin/views/dashboard/Table'
import Trophy from '../../components/admin/views/dashboard/Trophy'
import TotalEarning from '../../components/admin/views/dashboard/TotalEarning'
import StatisticsCard from '../../components/admin/views/dashboard/StatisticsCard'
import WeeklyOverview from '../../components/admin/views/dashboard/WeeklyOverview'
import DepositWithdraw from '../../components/admin/views/dashboard/DepositWithdraw'
import SalesByCountries from '../../components/admin/views/dashboard/SalesByCountries'
import {
  createSignalRContext, // SignalR
  createWebSocketContext, // WebSocket
  createSocketIoContext, // Socket.io
} from "react-signalr";
import {HubConnectionBuilder,HubConnection,HttpTransportType} from '@microsoft/signalr'
const SignalRContext = createSignalRContext();

const Dashboard = () => {
  const [ctx,setCtx] = useState<HubConnection>();
  useEffect(()=>{
    const hubClient = new HubConnectionBuilder().withUrl('https://localhost:7137/hub/test',{
      transport: HttpTransportType.ServerSentEvents
    }).build();
    setCtx(hubClient);
  },[]);
  useEffect(()=>{
    console.log(ctx);
    if(ctx) {
      ctx.start().then(()=> {
        console.log("HUB CONNECTED");
        ctx.send("SendMessage", "LE THANH PHONG ");
        
      });
    }
    ctx?.on("RECEIVE_MSG",(msg)=> {console.log("TEST HUB OKE " + msg)})
  },[ctx]);
  useEffect(() => {
    if (ctx) {
      ctx
        .start()
        .then(() => {
          ctx.on("ReceiveMessage", (message) => {
            window.alert(message);
          });
        })
        .catch((error) => console.log(error));
    }
  }, [ctx]);
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <StatisticsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <WeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Poll />}
                color='success'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$78'
                title='Refunds'
                trend='negative'
                color='secondary'
                trendNumber='-15%'
                subtitle='Past Month'
                icon={<CurrencyUsd />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<BriefcaseVariantOutline />}
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='15'
                color='warning'
                trend='negative'
                trendNumber='-18%'
                subtitle='Last Week'
                title='Sales Queries'
                icon={<HelpCircleOutline />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <DepositWithdraw />
        </Grid>
        <Grid item xs={12}>
          <Table />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
