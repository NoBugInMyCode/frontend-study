
import { Carousel, Col, Row, Button, Modal, Input, Form, Typography, Card } from 'antd';
import './App.css';
import { useEffect, useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Task } from './component/task';

const { Text } = Typography;


// 先定义从服务器获取数据，这是一个本地 Mock 的数据
function getDateSource() {
  return [
    {
      id: 1,
      title: '第一天的任务',
      description: '熟悉zent组件',
      status: 'done',
    },
    {
      id: 2,
      title: '第二天的任务',
      description: '开发一个 TODO LIST',
      status: 'doing',
    },
    {
      id: 3,
      title: '第三天的任务',
      description: '熟悉 Node 和 Dubbo 的调用',
      status: 'todo',
    },
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

  // 使用 Modal 对话框 和 form 表单来实现任务详情的展示和编辑
  const [visible, setVisible] = useState(false); // 控制是否展示 Model 对话框
  const [form] = Form.useForm();

  const onAddTask = () => {
    form.validateFields().then(values => {
      const newTask = {
        title: values.title,
        description: values.description,
        status: 'todo',
        id: dataSource.length + 1
      };
      setDataSource(dataSource.concat(newTask));  
    });
  }

  const onUpdateTask = (task) => {
    const newTasks = dataSource.map(t => t.id === task.id ? task : t);
    setDataSource(newTasks);
  }

  return (
    <div className="TODO_LIST">
      {/* 使用 走马灯 组件来实现轮播 */}
      <Carousel
        className='task-introduce-wrapper'
        autoplay
        dotPosition="left"
        dots={false}
      >
        {
          dataSource.map(task => (
            <div key={task.id} className='task-introduce'>
              <div className='task-detail'>
                <InfoCircleOutlined className='icon'/>
                <div className='detail'>
                  <Text className='title' strong>{task.title}</Text>
                  <div className='description'>{task.description}</div>
                </div>
                <Button
                  type="primary"
                  className='view-detail'
                  onClick={() => {
                    form.setFieldsValue(task);
                    setVisible(true);
                  }}
                >查看详情</Button> 
              </div>
            </div>
          ))
        }
      </Carousel>
      <Row gutter={[16, 0]} className='task-list'>
        <Col className="gutter-row" span={6}>
          <Card title="所有任务" extra={
            <Button
              type='primary'
              onClick={() => {
                form.resetFields();
                setVisible(true);
              }}
            >
              新建任务
            </Button>
          }>
            { dataSource.map(task => (
              <Task
                key={task.id}
                task={task}
                onUpdate={(t) => { onUpdateTask(t); }}
                onShow={(t) => { form.setFieldsValue(t); setVisible(true); }}
              />
            ))}
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card title="TODO">
            { dataSource.filter(task => task.status === 'todo').map(task => (
              <Task
                key={task.id}
                task={task}
                onUpdate={(task) => { onUpdateTask(task); }}
              />
            ))}
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card title="DOING">
            { dataSource.filter(task => task.status === 'doing').map(task => (
              <Task
                key={task.id}
                task={task}
                onUpdate={(task) => { onUpdateTask(task); }}
              />
            ))}
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card title="DONE">
          { dataSource.filter(task => task.status === 'done').map(task => (
              <Task
                key={task.id}
                task={task}
                onShow={(task) => { form.setFieldsValue(task); setVisible(true); }}
              />
            ))}
          </Card>
        </Col>
      </Row>
      <Modal
        title={form.getFieldValue('title') ? '任务详情' : '新建任务'}
        open={visible}
        onCancel={() => { setVisible(false); }}
        footer={form.getFieldValue('title') ? null : (
          <span>
            <Button onClick={() => { setVisible(false); }}>取消</Button>
            <Button
              type='primary'
              onClick={() => {
                onAddTask();
                setVisible(false);
              }}
            >
                确定
            </Button>
          </span>
        )}
      >
        <Form form={form}>
          <Form.Item
            name="title"
            label="任务名称"
            rules={[{ required: true }]}
          >
            <Input disabled={!!form.getFieldValue('title')} maxLength={20} placeholder='任务名称为 2-20 个字符'/>
          </Form.Item>
          <Form.Item
            name="description"
            label="任务描述"
            rules={[{ required: true }]}
          >
            <Input disabled={!!form.getFieldValue('title')} placeholder='说说自己要干什么' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
