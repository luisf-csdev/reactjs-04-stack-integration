import { BarChart } from 'lucide-react'
import { Pie, PieChart } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const data = [
  {
    product: 'Pepperoni',
    amount: 40,
    fill: colors.sky[500],
    stroke: 'var(--card)',
  },
  {
    product: 'Mussarela',
    amount: 30,
    fill: colors.amber[500],
    stroke: 'var(--card)',
  },
  {
    product: 'Margherita',
    amount: 50,
    fill: colors.violet[500],
    stroke: 'var(--card)',
  },
  {
    product: '4 Cheese',
    amount: 16,
    fill: colors.emerald[500],
    stroke: 'var(--card)',
  },
  {
    product: 'Chicken',
    amount: 16,
    fill: colors.rose[500],
    stroke: 'var(--card)',
  },
]

const chartConfig = {
  amount: {
    label: 'Amount',
    color: colors.violet[400],
  },
} satisfies ChartConfig

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Popular products
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          className="mx-auto aspect-square max-h-[250px]"
          config={chartConfig}
        >
          <PieChart accessibilityLayer style={{ fontSize: 12 }}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="amount"
              nameKey="product"
              innerRadius={60}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
