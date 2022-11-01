import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Router from '../Router/Router'


export const Layout = () => {
    return <Fragment>
        <Header />
        <div>
            <Router />
        </div>
        <Footer />

    </Fragment>
}
