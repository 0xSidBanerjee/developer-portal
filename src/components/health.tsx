'use client'

import React, { ReactNode } from 'react'
import {
  GitBranch, RefreshCcwDot, Rocket, SatelliteDish,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from './ui/card'
import { Button } from './ui/button'

const queryClient = new QueryClient()

interface HealthItemProps {
  icon: ReactNode;
  title: string;
  value: string;
}

function HealthItem({ icon, title, value }: HealthItemProps) {
  return (
    <div className=" flex items-center space-x-4 rounded-md border p-4">
      {icon}
      <div className="flex-1 space-y-1">
        <div className="text-sm font-medium leading-none">
          {title}
        </div>
        <div className="text-sm text-muted-foreground">
          {value}
        </div>
      </div>
    </div>
  )
}

const fetchHealthStatus = async () => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:4000'
    const response = await fetch(`${backendUrl}/health`)
    if (!response.ok) {
      throw new Error(`${response.status}`)
    }
    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching health status: ${error.message}`)
    } else {
      throw new Error('Error fetching health status')
    }
  }
}

export function HealthCard({ status, version, databaseConnectivity }: {
  status: string, version: string, databaseConnectivity: string
}) {
  return (
    <div data-testid="success">
      <HealthItem icon={<GitBranch />} title="Backend API Version" value={version} />
      <HealthItem icon={<Rocket />} title="Backend Status" value={status} />
      <HealthItem icon={<SatelliteDish />} title="Database Connectivity" value={databaseConnectivity} />
    </div>
  )
}

function HealthFetch() {
  const { data, refetch } = useQuery({ // Using useQuery hook
    queryKey: ['healthfetch'],
    queryFn: fetchHealthStatus,
  })

  return (
    <Card className={cn('w-[380px]')}>
      <CardHeader>
        <CardTitle className="text-black dark:text-white">Health</CardTitle>
        <CardDescription>Summary of overall system health</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {data && (
        <HealthCard {...data} />
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => refetch()}>
          <RefreshCcwDot className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </CardFooter>
    </Card>
  )
}

function Health() {
  return (
    <QueryClientProvider client={queryClient}>
      <HealthFetch />
    </QueryClientProvider>
  )
}

export default Health
