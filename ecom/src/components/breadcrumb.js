import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BreadCrumb extends Component {
  render() {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent border-bottom rounded-0 px-0 py-3 fw-600">
          {this.props.breads?.map((i, idx) => (
            <li className={'breadcrumb-item ' + (i.active ? 'active' : '')}>
              <Link
                to={{
                  pathname: i.link,
                  state: i?.state
                }}
              >
                {i.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    )
  }
}

export default BreadCrumb