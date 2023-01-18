import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const Error = () => {

    const error  = useRouteError();

  return (
    <>
    <MainNavigation/>
    <main id='error-content'>
        <h1>An Error Occcured!</h1>
        <p>{error.message}</p>
    </main>
    </>
  )
}

export default Error