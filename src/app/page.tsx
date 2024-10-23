'use client'

import Health from '@/components/health'
import ThemeToggle from '@/components/theme-toggle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'

const queryClient = new QueryClient()
export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row px-20 py-5">
        {/* <div className="text-2xl grow">Developer Portal</div> */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-2 p-2 bg-blue-500 rounded-full focus:outline-none focus:ring">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>MS</AvatarFallback>
              </Avatar>
              <span>
                Morty Smith
              </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/change-password')}>
                Change Password
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/logout')}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>
      <main className="flex flex-col items-center justify-between p-24">
        <QueryClientProvider client={queryClient}>
          <Health />
        </QueryClientProvider>
      </main>
    </div>
  )
}
