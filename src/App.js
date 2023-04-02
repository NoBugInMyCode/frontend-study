import banana from './banana.jpeg';
import kiwi from './kiwi.jpg';
import apple from './apple.jpg'
import './App.css';
import { Layout, Button,Divider } from 'antd';


const { Sider, Content } = Layout;


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


function App() {
  return (
    <div className="App">
      <header className='webHeader'>我的订单</header>



      <Layout>
        <Sider style={siderStyle} className="img"><img src={banana} className="img"></img></Sider>
          <Layout>
            <Content style={contentStyle}>
              <b>香蕉</b>
           </Content>
            <Content style={contentStyle}>
             一把香蕉
           </Content>
           <Content style={contentStyle}>
              $5
              <Button style={{float:"right", margin:10}}>评价</Button>
            </Content>
         </Layout>
      </Layout>


      <Divider></Divider>

      <Layout>
        <Sider style={siderStyle} className="img"><img src={apple} className="img"></img></Sider>
          <Layout>
           <Content style={contentStyle}>
             <b>苹果</b>
            </Content>
            <Content style={contentStyle}>
              一筐苹果
            </Content>
            <Content style={contentStyle}>
              $8
              <Button style={{float:"right", margin:10}}>评价</Button>
           </Content>
          </Layout>
      </Layout>


      <Divider></Divider>


      <Layout>
        <Sider style={siderStyle} className="img"><img src={kiwi} className="img"></img></Sider>
          <Layout>
            <Content style={contentStyle}>
              <b>猕猴桃</b>
            </Content>
            <Content style={contentStyle}>
              两个猕猴桃
            </Content>
            <Content style={contentStyle}>
              $2
              <Button style={{float:"right", margin:10}}>评价</Button>
            </Content>
          </Layout>
      </Layout>






      {/* <header className="App-header-1">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. aaaaaaa
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to google
        </a>
      </header> */}
    </div>
  );
}

export default App;
