//THIS IS THE MAIN NAVIGATION ACTIONS AKA LOGIN/EXPLORE ACTIONS
export const PUSH_ROUTE = 'PUSH_ROUTE'
export const POP_ROUTE = 'POP_ROUTE'
export const RESTART_ROUTE = 'RESTART_ROUTE'

export function push(route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop() {
  return {
    type: POP_ROUTE
  }
}

export function restart(route) {
  return {
    type: RESTART_ROUTE,
    route
  }
}

//HOME ACTIONS
export const PUSH_ROUTE_HOME = 'PUSH_ROUTE_HOME'
export const POP_ROUTE_HOME = 'POP_ROUTE_HOME'
export const RESTART_ROUTE_HOME = 'RESTART_ROUTE_HOME'

export function push_home(route) {
  return {
    type: PUSH_ROUTE_HOME,
    route
  }
}

export function pop_home() {
  return {
    type: POP_ROUTE_HOME
  }
}

export function restart_HOME(route) {
  return {
    type: RESTART_ROUTE_HOME,
    route
  }
}
