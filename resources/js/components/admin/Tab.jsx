import React from 'react';
import 'antd/dist/antd.css';
import { Tabs, Icon } from 'antd';
import Dashboard from './component/dashboard'
import ItemCount from './component/itemCount'
import CircleItem from './component/circleItem'
import EditableTable from './component/User/UserTable'
import EditableTableCategory from './component/Category/CategoryTable'
import EditableTableHouse from './component/House/HouseTable'
import EditableTableBlog from './component/Blog/BlogTable'
import axios from 'axios'


const { TabPane } = Tabs;


class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'left',
      countItem: ''
    }
}
  componentDidMount() {
    axios({
        method: 'GET',
        url: 'http://localhost:3000/rooms',
    })
    .then(response => {
      this.setState({
        countItem: response.data.length
      })
  })}
  render() {
    const {countItem} =this.state
    return (
      <div className='tabBar'>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab={
            <span>
            <Icon type="dashboard" theme="filled" />
            DASHBOARD
          </span>} 
          key="1">
              <div className='tab1'>
                 <ItemCount></ItemCount>
                 <div className='percent'>
                  <Dashboard></Dashboard>     
                  <CircleItem totalItem={countItem}></CircleItem>                 
                 </div>
              </div>
          </TabPane>
          <TabPane tab={
            <span>
            <Icon type="smile" theme="filled" />
            USER
            </span>} key="2">
            <EditableTable></EditableTable>
          </TabPane>
          <TabPane tab={
            <span>
              <Icon type="tag" theme="filled" />
                            CATEGORY
            </span>} key="3">
            <EditableTableCategory></EditableTableCategory>
          </TabPane>
          <TabPane tab={
            <span>
            <Icon type="home" theme="filled" />
            HOUSE
            </span>} key="4">
            <EditableTableHouse></EditableTableHouse>
          </TabPane>
        <TabPane tab={
            <span>
            <Icon type="notification" theme="filled" />
            BLOG
            </span>} key="5">
            <EditableTableBlog></EditableTableBlog>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Tab;