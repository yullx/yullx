//mock数据模拟
import Mock from 'mockjs'

//图表数据
let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float 产生随机数50到1000之间 保留小数 最小0位 最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          西青区: Mock.Random.natural(100, 500, 0, 0),
          南开区: Mock.Random.natural(100, 500, 0, 0),
          和平区: Mock.Random.natural(100, 500, 0, 0),
          河东区: Mock.Random.natural(100, 500, 0, 0),
          东丽区: Mock.Random.natural(100, 500, 0, 0),
          北辰区: Mock.Random.natural(100, 500, 0, 0),
          红桥区: Mock.Random.natural(100, 500, 0, 0),
          津南区: Mock.Random.natural(100, 500, 0, 0),
          武清区: Mock.Random.natural(100, 500, 0, 0),
        })
      )
}
return {
    //状态码
    code: 20000, 
    data: {
      // 柱状图（本周）
      weekData: [
        {
          name: '周一',
          value: 2000,
          yestweek:1500
        },
        {
          name: '周二',
          value: 1400,
          yestweek:1000
        },
        {
          name: '周三',
          value: 1200,
          yestweek:500
        },
        {
          name: '周四',
          value: 1900,
          yestweek:2300
        },
        {
          name: '周五',
          value: 1600,
          yestweek:3000
        },
        {
            name: '周六',
            value: 1300,
            yestweek:1700
          },
        {
          name: '周天',
          value: 1000,
          yestweek:800
        }
      ],
      // 柱状图（今日昨日）
      todayData: [
        {
          date: '0:00',
          new: 10,
          active: 5
          
        },
        {
          date: '2:00',
          new: 0,
          active: 3
          
        },
        {
          date: '4:00',
          new: 2,
          active: 3
          
        },
        {
          date: '6:00',
          new:10,
          active: 3
          
        },
        {
          date: '8:00',
          new: 30,
          active: 23
          
        },
        {
          date: '10:00',
          new: 40,
          active: 56
          
        },
        {
            date: '12:00',
            new: 53,
            active: 25
            
          },
          {
            date: '14:00',
            new: 30,
            active: 19
          },
          {
            date: '16:00',
            new: 20,
            active: 34
            
          },
          {
            date: '18:00',
            new: 60,
            active: 55
            
          },
          {
            date: '20:00',
            new: 40,
            active: 23
            
          },
        {
          date: '22:00',
          new: 20,
          active: 3
          
        }
      ],
      // 折线图
    //   orderData: {
    //     date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
    //     data: List
    //   },
      tableData: [
        {
          trafficlights:'101',
          electronicnum:'204',
            location:'西青区'
        },
        {
          trafficlights:'123',
          electronicnum:'230',
            location:'南开区'
        },
        {
          trafficlights:'200',
          electronicnum:'369',
            location:'和平区'
        },
        {
          trafficlights:'120',
          electronicnum:'250',
            location:'河东区'
        },
        {
          trafficlights:'130',
          electronicnum:'268',
            location:'东丽区'
        },
        {
          trafficlights:'109',
          electronicnum:'235',
            location:'北辰区'
        },
        {
          trafficlights:'130',
          electronicnum:'199',
            location:'红桥区'
        },
        {
          trafficlights:'122',
          electronicnum:'222',
            location:'津南区'
        },
        {
          trafficlights:'108',
          electronicnum:'256',
            location:'武清区'
        }


      ]
    }
  }
}
}