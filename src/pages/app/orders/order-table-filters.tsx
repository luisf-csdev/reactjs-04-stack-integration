import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const orderFiltersSchema = z.object({
  orderId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

type OrderFilterSchema = z.infer<typeof orderFiltersSchema>

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { control, register, handleSubmit, reset } = useForm<OrderFilterSchema>(
    {
      resolver: zodResolver(orderFiltersSchema),
      defaultValues: {
        orderId: orderId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    },
  )

  function setOrderFilterSearchParams(
    state: URLSearchParams,
    filter: string,
    value: string | undefined,
  ) {
    if (value) {
      state.set(filter, value)
      return
    }

    state.delete(filter)
  }

  function handleFilter({ orderId, customerName, status }: OrderFilterSchema) {
    setSearchParams((state) => {
      setOrderFilterSearchParams(state, 'orderId', orderId)
      setOrderFilterSearchParams(state, 'customerName', customerName)
      setOrderFilterSearchParams(state, 'status', status)

      state.set('page', '1')

      return state
    })

    reset({
      orderId: '',
      customerName: '',
      status: 'all',
    })
  }

  function handleClearFilters() {
    setSearchParams((state) => {
      state.delete('orderId')
      state.delete('customerId')
      state.delete('status')

      state.set('page', '1')

      return state
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilter)}
      className="flex items-center gap-2"
    >
      <span className="text-sm font-semibold">Filters:</span>
      <Input
        placeholder="Order ID"
        className="h-8 w-auto"
        {...register('orderId')}
      />
      <Input
        placeholder="Customer name"
        className="h-8 w-[320px]"
        {...register('customerName')}
      />
      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => (
          <Select
            defaultValue="all"
            name={name}
            onValueChange={onChange}
            value={value}
            disabled={disabled}
          >
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="canceled">Canceled</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="delivering">Delivering</SelectItem>
              <SelectItem value="delivered">delivered</SelectItem>
            </SelectContent>
          </Select>
        )}
      ></Controller>

      <Button className="gap-2" type="submit" variant="secondary" size="xs">
        <Search className="size-4" />
        Filter results
      </Button>

      <Button
        onClick={handleClearFilters}
        className="gap-2"
        type="button"
        variant="outline"
        size="xs"
      >
        <X className="size-4" />
        Remove filters
      </Button>
    </form>
  )
}
