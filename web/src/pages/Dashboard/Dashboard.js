import React from 'react'

import { DefaultLayout } from '../../layouts'

import Report from './Report'

export default (props) => (
  <main>
    <section>
      <div>
        <DefaultLayout {...props} noNavbar={true} noFooter={true}>
          <Report {...props} />
        </DefaultLayout>
      </div>
    </section>
  </main>
)
