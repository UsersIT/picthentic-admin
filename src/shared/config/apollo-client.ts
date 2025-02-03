import { useSessionStorage } from '@/shared/hooks'
import { ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { SubscriptionClient } from 'subscriptions-transport-ws'

import { URL_SCHEMA } from '../../../codegen'

const WS_ENDPOINT = 'ws://inctagram.work/api/v1/graphql'

const httpLink = createHttpLink({
  uri: URL_SCHEMA,
})

const wsLink = new WebSocketLink(
  new SubscriptionClient(WS_ENDPOINT, {
    reconnect: true,
  })
)

const authLink = setContext((_, { headers }) => {
  const [getItem] = useSessionStorage('authToken')
  const token = getItem()

  return {
    headers: {
      ...headers,
      authorization: token ? `Basic ${token}` : '',
    },
  }
})

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  authLink.concat(httpLink)
)

export const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  link: splitLink,
})
