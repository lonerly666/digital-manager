import { useState, useEffect } from 'react';
import Menu from '../component/menu';
import StoreSummary from '../component/storeSummary';
import '../../assets/css/home.css';
import axios from 'axios';

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  const url = 'http://localhost:3000/';
  useEffect(() => {
    axios
      .get(url + 'api/orders/')
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      return () => {
        console.log('Home component unmounted');
      }
  }, []);
  return (
    <div className="home-container">
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <StoreSummary />
      <div></div>
    </div>
  );
}
