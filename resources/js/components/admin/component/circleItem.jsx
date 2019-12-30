import React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';
import axios from 'axios'

var data = []
class CircleItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalItem: this.props.totalItem,
            data2: [],
            categoryCount: '',
            listCategory: []
        }
    }
    componentDidMount() {

        axios({
            method: 'GET',
            url: 'http://localhost:3000/categories',
        })
        .then(response => {
            this.setState({
                categoryCount: response.data.length,
                listCategory: response.data
            })
            const data1 = this.state.listCategory.map(itemID => {
              let type = itemID.name
              let idType = itemID.id
              axios({
                method: 'GET',
                url: `http://localhost:3000/rooms?categoryId=${idType}`,
              })
              .then(response => {
                const a = {item: type, count: response.data.length, percent: Math.round(response.data.length/600)}
                  data.push(a)
              })
                
          })
          this.setState({
            data2: data
          })
        })

      
    }
  render() {    
    const cols = {
      percent: {
        formatter: val => (val = `${val * 100}%`),
      },
    };
    const list = [{ item: 'Villa', count: 16, percent: 0.16 },
    { item: 'Apartment', count: 16, percent: 0.16 },
    { item: 'Commercial', count: 16, percent: 0.16 },
    { item: 'House', count: 22, percent: 0.22 },
    { item: 'TownHouse', count: 30, percent: 0.3 },]
    console.log(list)
    return (
      <div>
          <div>Thống kê số lượng nhà theo loại</div>
          <Chart
          width={600}
          height={400}
          data={list}
          scale={cols}
          padding="auto"
          forceFit
          onGetG2Instance={(chart) => {
            setTimeout(() => {
              const geom = chart.get('geoms')[0]; 
              console.log(geom);
              const items = geom.get('data'); 
              console.log(JSON.stringify(items));
              geom.setSelected(items[1]);
            }, 2000);
          }} 
          onPlotClick={(ev) => {
            console.log(ev);
          }}
        >
          <Coord type="theta" radius={0.65} />
          <Axis name="percent" />
          <Legend position="right" offsetY={-400 / 2 + 120} offsetX={-100} />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              'item*percent',
              (item, percent) => {
                percent = `${percent * 100}%`;
                return {
                  name: item,
                  value: percent,
                };
              },
            ]}
            style={{
              lineWidth: 1,
              stroke: '#fff',
            }}
          />
        </Chart>
      </div>
    );
  }
}
export default CircleItem;