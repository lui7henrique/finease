'use client'

import { ColumnDef } from '@tanstack/react-table'

import { DataTableColumnHeader } from './data-table-column-header'

import { MonthlyInvestmentInfo } from '@/utils/calculate-monthly-returns'
import { formatCurrency } from '@/utils/format-currency'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Separator } from '@/components/ui/separator'

export const columns: ColumnDef<MonthlyInvestmentInfo>[] = [
  {
    id: 'Mês',
    accessorKey: 'investmentDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mês" />
    ),
    cell: ({ row, table }) => {
      const progress = `${row.index + 1}/${
        table.getState().pagination.pageSize
      }`

      return (
        <div className="capitalize whitespace-nowrap">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            {progress}

            <Separator className="mx-2 h-4" orientation="vertical" />
            <span>
              {format(new Date(row.getValue('investmentDate')), 'MMMM, yyyy', {
                locale: ptBR,
              })}
            </span>
          </div>
        </div>
      )
    },
  },
  {
    id: 'Valor investido',
    accessorKey: 'investedAmount',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Valor investido"
        className="whitespace-nowrap"
      />
    ),
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        {formatCurrency(row.getValue('investedAmount'))}
      </div>
    ),
  },
  {
    id: 'Valor acumulado',
    accessorKey: 'accumulatedAmount',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Valor acumulado"
        className="whitespace-nowrap"
      />
    ),
    cell: ({ row }) => (
      <div className="">
        {formatCurrency(row.getValue('accumulatedAmount'))}
      </div>
    ),
  },
  {
    id: 'Rendimento',
    accessorKey: 'monthlyReturn',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rendimento" />
    ),
    cell: ({ row }) => (
      <div>{formatCurrency(row.getValue('monthlyReturn'))}</div>
    ),
  },
]
