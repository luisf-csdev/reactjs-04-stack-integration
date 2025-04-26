import { api } from '@/lib/axios'

type GetDailyRevenueInPeriodParams = {
  from?: Date
  to?: Date
}

type GetDailyRevenueInPeriodResponse = {
  date: Date
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodParams) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
