import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from '../mat-x pro/charts/echarts/Doughnut'
import ModifiedAreaChart from './shared/ModifiedAreaChart'
import StatCards from './shared/StatCards'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import UpgradeCard from './shared/UpgradeCard'
import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'

const Analytics = () => {
    const theme = useTheme()

    return (
        <Fragment>
            <div className="pb-24 pt-7 px-8 bg-primary">
                <div className="card-title capitalize text-white mb-4 text-white-secondary">
                    Crecimiento de usuarios en los ultimos 12 meses
                </div>
                <ModifiedAreaChart
                    height="280px"
                    option={{
                        series: [
                            {
                                data: [
                                    10,
                                    12,
                                    16,
                                    19,
                                    23,
                                    24,
                                    28,
                                    30,
                                    33,
                                    39,
                                    50,
                                    60,
                                ],
                                type: 'line',
                            },
                        ],
                        xAxis: {
                            data: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                            ],
                        },
                    }}
                />
            </div>

            <div className="analytics m-sm-30 mt--18">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards />

                        {/* Top Selling Products */}
                        <TopSellingTable />

                        <StatCards2 />

                        <h4 className="card-title text-muted mb-4">
                            Entradas de blog
                        </h4>
                        <RowCards />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Principales padecimientos</div>
                            <div className="card-subtitle">Ultimos 30 dias</div>
                            <DoughnutChart
                                height="300px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.main,
                                    theme.palette.primary.light,
                                ]}
                            />
                        </Card>

                        <UpgradeCard />

                        <Campaigns />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics