import React from 'react'
import { Container, Row, Col } from 'shards-react'

import Tables from './components/Tables'

const StockOverview = () => {
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-2"></Row>

      <Row>
        <Col lg="12" md="12" sm="12" className="mb-4">
          <Tables />
        </Col>
      </Row>
    </Container>
  )
}

export default StockOverview
