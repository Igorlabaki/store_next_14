import { QueryClient } from '@tanstack/react-query';

// See here: https://github.com/prisma/prisma-client-js/issues/228#issuecomment-618433162
let queryClient: QueryClient;

if (process.env.NODE_ENV === 'production') {
  queryClient = new QueryClient();
}
// `stg` or `dev`
else {
  // @ts-ignore
  if (!global.queryClient) {
    // @ts-ignore
    global.queryClient = new QueryClient();
  }
  // @ts-ignore
  queryClient = global.queryClient;
}

export { queryClient };
