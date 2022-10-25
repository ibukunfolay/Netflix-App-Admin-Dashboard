import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { monthsArray } from '../../dummyData';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const months = useMemo(() => monthsArray, []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get(`/users/stats`, {
          headers: {
            authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNTA2MzY3NjcwZDRhNTliMWZkYzM5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjI2MjkwOSwiZXhwIjoxNjY2NDM1NzA5fQ.NO1LPU_S2lAf-0cFa0uM2hMngL6lrPHOGImoWBWPp0o',
          },
        });
        const statList = await res.data.sort((a, b) => {
          return a._id - b._id;
        });
        statList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: monthsArray[item._id], 'New User': item.total },
          ]),
        );
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [months]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
