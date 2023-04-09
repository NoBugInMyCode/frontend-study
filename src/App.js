// import banana from './banana.jpeg';
// import kiwi from './kiwi.jpg';
// import apple from './apple.jpg'
import './App.css';
import { Layout, Button,Divider, Input, Rate } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useEffect, useState } from 'react';


const { Sider, Content } = Layout;
const { textArea } = Input

const siderStyle: React.CSSProperties = {
  textAlign: 'left',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: 'white',
};



const contentStyle: React.CSSProperties = {
  textAlign: 'left',
  color: 'black',
  height: 64,
  paddingInline: '5000',
  lineHeight: '64px',
  backgroundColor: 'white',
};

function apear(id) {
  document.getElementById(id).style.display = 'flex'
}

// 先定义从服务器获取数据，这是一个本地 Mock 的数据
function getDateSource() {
  return [
    {
      image: '/banana.jpeg',
      name: '香蕉',
      description: '一把香蕉',
      price: '$5',
      rate: 1,
      comment: '这个香蕉非常甜',
    },
    {
      image: '/apple.jpg',
      name: '苹果',
      description: '一筐苹果',
      price: '$8',
    },
    {
      image: '/kiwi.jpg',
      name: '猕猴桃',
      description: '两个猕猴桃',
      price: '$2',
    }
  ];
}

function App() {
  // 定义 App 这个组件内部维护的数据，使用 useState 本地维护一份数据，初始数据为一个空数组
  const [dataSource, setDataSource] = useState([]);

  // App 组件初始化后，调用 getDataSouce 获取远程数据
  useEffect(() => {
    // 获取远程数据
    const data = getDateSource();
    // 将数据更新到组件内部维护的数据中
    setDataSource(data);
  }, []);

  // 定义一个函数，来开启或者关闭评论部分
  const showComment = (index) => {
    const data = dataSource[index];
    if (!data) {
      return;
    }
    data.show = !data.show;
    // 更新数据，由于dataSource 是一个数组，是复杂数据结构，所以需要重新生成
    setDataSource(dataSource.map(data => ({ ...data })));
  }

  // 定义一个函数，来修改用户编辑的评分，等同于 function onChangeRate(index, rate) {}
  const onChangeRate = (index, rate) => {
    // 将 dataSource 拷贝到局部变量 data
    const data = dataSource.map(d => ({ ...d }));
    data[index].rate = rate;
    setDataSource(data);
  }

  const onChangeComment = (comment, index) => {
    const data = dataSource.map(d => ({...d}));
    data[index].comment = comment;
    setDataSource(data)
  }

  console.log('>>>>>>: ', dataSource);

  return (
    <div className="App">
      <header className='webHeader'>我的订单</header>
      {
        dataSource.map((data, index) => {
          return (
            <div key={index}>
              <Layout>
                <Sider style={siderStyle} className="img">< img src={data.image}className="img"></img></Sider>
                <Layout>
                  <Content style={contentStyle}>
                    <b>{data.name}</b>
                  </Content>
                  <Content style={contentStyle}>
                    {data.description}
                  </Content>
                  <Content style={contentStyle}>
                    {data.price}
                    <Button id='bananaButton' style={{float:"right", margin:10}} onClick={() => showComment(index)}>
                      { data.rate ? '已评价' : '评价' }
                    </Button>
                  </Content>
                  {
                    data.show ? (
                      <div>
                        <TextArea 
                          autoSize="true" 
                          className='inputBoxBananaxxx' 
                          id='bananaInputxx' 
                          value={data.comment}
                          onChange={ (e) => {onChangeComment(e.target.value, index)} }
                          
                        />
                        <Rate
                          className='rateBoxBananasss'
                          id = 'rateBanana' 
                          value={data.rate}
                          onChange={(val) => { onChangeRate(index, val) }}
                        />
                      </div>
                    ) : null
                  }
                </Layout>
              </Layout>
              { index !== data.length ?  <Divider /> : null }
            </div>
          );
        })
      }
    </div>
  );
}

export default App;