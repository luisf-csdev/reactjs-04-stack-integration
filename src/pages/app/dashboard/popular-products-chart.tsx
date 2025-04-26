import { useQuery } from '@tanstack/react-query'
import { BarChart, Loader2 } from 'lucide-react'
import { Cell, Pie, PieChart } from 'recharts'
import colors from 'tailwindcss/colors'

import { getPopularProducts } from '@/api/get-popular-products'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

const chartConfig = {
  amount: {
    label: 'Amount',
    color: colors.violet[400],
  },
} satisfies ChartConfig

export function PopularProductsChart() {
  const { data: popularProducts } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  })

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
        {popularProducts ? (
          <ChartContainer
            className="mx-auto aspect-square h-[240px] w-full"
            config={chartConfig}
          >
            <PieChart accessibilityLayer style={{ fontSize: 12 }}>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={popularProducts}
                dataKey="amount"
                nameKey="product"
                innerRadius={60}
                strokeWidth={5}
              >
                {popularProducts.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="!hover:opacity-80 !stroke-card"
                  />
                ))}
              </Pie>
            </PieChart>
          </ChartContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
