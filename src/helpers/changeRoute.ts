import router, { ROUTE_NAMES } from '@/router';

/**
 * Function to change the route with a given name and optional hash
 * @param e - The event that triggered the route change
 * @param name - The name of the route to change to
 * @param hash - The hash to append to the route
 */
export function changeRoute(e: Event, name: ROUTE_NAMES, hash?: string): void {
  e.preventDefault();
  const routeOptions = hash ? { name, hash } : { name };
  router.push(routeOptions);
}
