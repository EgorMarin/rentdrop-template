import React from 'react'
import { Divider, Input } from 'antd';

const { Search } = Input;

const UnitDetailsPage = () => {
  return (
    <div className="unit-details-page">
      <div className="header">
        <div className="header__title">Dashboard</div>
        <div className="header__search">
          <Search placeholder="Property/ Units/ Tenants" />
        </div>
      </div>
      <div className="sort-block">
        <div className="sort-block__item">
          <div className="item__title">Property</div>
          <div className="item__select"></div>
        </div>
        <div className="sort-block__item">
          <div className="item__title">Sort by</div>
          <div className="item__select"></div>
        </div>
        <div className="sort-block__item">
          <div className="item__title">Filter by</div>
          <div className="item__select"></div>
        </div>
      </div>
      <Divider />
      <div className="items-block">
        
      </div>
    </div>
  )
}

export default UnitDetailsPage
