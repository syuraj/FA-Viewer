import React from 'react'
import PropTypes from 'prop-types'
import {
  DatePicker,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormSelect,
  Button,
} from 'shards-react'

const ReportFilter = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="3" className="form-group">
                <label htmlFor="feProduct">Products</label>
                <FormSelect id="feProduct">
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="3" className="form-group">
                <label htmlFor="feStrategy">Strategy</label>
                <FormSelect id="feProduct">
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feDate">Date</label>
                <div />
                <DatePicker
                  size="m"
                  placeholderText="Start Date"
                  dropdownMode="select"
                  className="text-center"
                />
              </Col>
            </Row>
            <Button theme="accent">Update Account</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
)

ReportFilter.propTypes = {
  title: PropTypes.string,
}

ReportFilter.defaultProps = {
  title: 'Select Criteria',
}

export default ReportFilter
