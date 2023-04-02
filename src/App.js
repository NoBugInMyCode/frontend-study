import logo from './logo.svg';
import banana from './banana.jpeg'
import './App.css';
import { FontSizeOutlined, SearchOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';


const { Sider, Header, Content, Footer } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  color: 'black',
  height: 64,
  paddingInline: '5000',
  lineHeight: '64px',
  backgroundColor: 'white',
  minWidth: '5000px',
  
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
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
  minWidth: '5000px',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'left',
  color: 'black',
  backgroundColor: 'white',
  
};

function App() {
  return (
    <div className="App">
      <header className='webHeader'>我的订单</header>
      <Layout>

      <Sider style={siderStyle} className="img"><img src={banana} className="img"></img></Sider>
        <Layout>
          <Header style={headerStyle}>
            <p className='itemName'>香蕉</p>
          </Header>
          <Content style={contentStyle}>
            一把香蕉
          </Content>
          <Footer style={footerStyle}>
            $5
          </Footer>
        </Layout>
      </Layout>


      <Layout>

        <Sider style={siderStyle} className="img"><img src={banana} className="img"></img></Sider>
        <Layout>
          <Header style={headerStyle}>
            <p className='itemName'>香蕉</p>
          </Header>
          <Content style={contentStyle}>
            一把香蕉
          </Content>
          <Footer style={footerStyle}>
            $5
          </Footer>
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
