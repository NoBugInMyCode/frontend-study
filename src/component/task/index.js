/**
 * 定义一个任务卡片组件，组件输入的参数为：
 * task: { id: number; title: string; description: string; status: string }
 * 其中 status 是一个枚举，分别有 'todo'、'doing'、'done' 三种状态
 * onUpdate: (task) => {}，是一个回调函数，将状态修改后的 task 回传给外部组件
 * onShow: (task) => {}，是一个回调函数，通知使用该组件的外部组件，需要展示这个任务的详情
 */
import { Card } from 'antd'; // 使用 antd 的 Card 组件来实现
import './index.css';

export function Task({ task, onUpdate = (task) => {}, onShow = (task) => {} }) {
  const { title, description } = task;
  
  const getOperateContent = (task) => {
    if (task.status === 'todo') {
      return (
        <span className="start" onClick={() => {
          const newTask = {
            id: task.id,
            title: task.title,
            description: task.description,
            status: 'doing', // 修改状态为 doing，表示正在做
          };
          onUpdate(newTask);
        }}>点击开始</span>
      );
    }
    if (task.status === 'doing') {
      return (
        <span className='finish' onClick={() => {
          const newTask = {
            id: task.id,
            title: task.title,
            description: task.description,
            status: 'done',
          };
          onUpdate(newTask);
        }}>点击完成</span>
      );
    }
    return (
      <span className="view-detail" onClick={() => { onShow(task); }}>查看详情</span>
    );
  }

  return (
    <Card title={title} extra={getOperateContent(task)}>
      <p>{description}</p>
    </Card>
  );
}