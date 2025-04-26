export type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

type OrderStatusProps = {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pending',
  processing: 'Processing',
  delivering: 'Delivering',
  delivered: 'Delivered',
  canceled: 'Canceled',
}

const orderStatusColorMap: Record<OrderStatus, string> = {
  pending: 'bg-slate-400',
  processing: 'bg-amber-500',
  delivering: 'bg-amber-500',
  delivered: 'bg-emerald-500',
  canceled: 'bg-rose-500',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${orderStatusColorMap[status]}`} />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
