import { api } from '@/lib/axios'

export type GetOrderDetailsParams = {
  orderId: string
}

export type GetOrderDetailsResponse = {
  id: string
  createdAt: Date
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orderId/${orderId}`)

  return response.data
}
