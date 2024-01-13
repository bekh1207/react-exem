import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtecttedRoute() {
    const token = true;
  return token ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtecttedRoute