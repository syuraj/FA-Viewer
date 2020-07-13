import React from 'react'

import { DefaultLayout } from '../../layouts'

import StockOverview from './Report'
import Tables from './components/Tables'

export default (props) => (
  <main>
    <section>
      <div>
        <DefaultLayout {...props} noNavbar={true} noFooter={true}>
          <StockOverview {...props} />
        </DefaultLayout>
      </div>
    </section>
  </main>
)
