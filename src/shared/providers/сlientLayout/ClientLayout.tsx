'use client'

import { ReactNode } from 'react'

import { client } from '@/shared/config/apollo-client'
import { ApolloProvider } from '@apollo/client'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
