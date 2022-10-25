import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(`/users/stats`, {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTA2MzY3NjcwZDRhNTliMWZkYzM5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjI2MjkwOSwiZXhwIjoxNjY2NDM1NzA5fQ.NO1LPU_S2lAf-0cFa0uM2hMngL6lrPHOGImoWBWPp0o',
          },
        });
        setNewUsers(res.data);
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((item) => (
          <li className="widgetSmListItem">
            <img
              src={
                item.profilePic ||
                'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{item.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
