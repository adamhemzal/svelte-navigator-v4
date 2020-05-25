/*
 * Adapted from https://github.com/EmilTholin/svelte-routing
 *
 * https://github.com/EmilTholin/svelte-routing/blob/master/LICENSE
 */

// Use strings instead of objects, so different versions of
// svelte-navigator can potentially still work together
export const LOCATION = "@@svnav-ctx-key__LOCATION";
export const ROUTER = "@@svnav-ctx-key__ROUTER";
export const ROUTE = "@@svnav-ctx-key__ROUTE";
export const ROUTE_PARAMS = "@@svnav-ctx-key__ROUTE_PARAMS";
export const FOCUS_ELEM = "@@svnav-ctx-key__FOCUS_ELEM";
