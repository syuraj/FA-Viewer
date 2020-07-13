import React from 'react'
import { Card, CardHeader, Container, Row, Col } from 'shards-react'

import PageTitle from 'src/components/common/PageTitle'

import Tables from './components/Tables'
import ReportFilter from './components/ReportFilter'

const StockOverview = () => {
  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="4"
          title="Forte Aegis"
          subtitle="2020-06-12"
          className="text-sm-left"
        />
      </Row>

      <Row>
        <Col lg="12" md="12" sm="12" className="mb-4">
          <Card small className="mb-4">
            <CardHeader className="border-bottom">
              <h6 className="m-0">Some Report</h6>
            </CardHeader>
            <ReportFilter />
            <Tables />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default StockOverview
