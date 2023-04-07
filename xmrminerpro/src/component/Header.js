import React, { useState, useEffect } from 'react';
import { logo } from '../assets';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import axios from 'axios';

function Header(props) {
  const [isLogin, setLogin] = useState();
  const [xmrData, setXMRData] = useState(0.0);
  const [stats, setStats] = useState({});
  const [poolStats, setPoolStats] = useState({});
  const [networkStats, setNetwork] = useState({});

  const getXMRData = async () => {
    await axios
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=XMR&tsyms=USD'
      )
      .then(({ data }) => {
        setXMRData(data?.XMR?.USD);
      });
  };
  const getNetwork = async () => {
    await axios
      .get(`https://xmrminerpro.com/api/network/stats`)
      .then(({ data }) => {
        let network = data.difficulty/10000
        let fixNetwork = network.toFixed(2)
        
        setNetwork({difficulty:fixNetwork});
      });
  };
  const getPoolHashData = async () => {
    await axios
      .get(`https://xmrminerpro.com/api/pool/stats/pplns`)
      .then(({ data }) => {
        let hashRate = data.pool_statistics.hashRate
        let fixHashRate = hashRate.toFixed(2)
        setPoolStats({hashRate:fixHashRate});
      });
  };
  const getHashData = async (paymentAddress) => {
    await axios
      .get(`https://xmrminerpro.com/api/miner/${paymentAddress}/stats`)
      .then(({ data }) => {
        setStats(data);
      });
  };
  useEffect(() => {
    getXMRData();
    const loginUser = localStorage.getItem('user');
    if (loginUser) {
      const foundUser = JSON.parse(loginUser);
      setLogin(foundUser?.success);
      getHashData(foundUser?.username);
    }
    setInterval(function(){
      getPoolHashData()
      getNetwork()
    },3000)
  }, []);

  let navigate = useNavigate();

  const toHome = () => {
    navigate('/', { state: { data: true } });
  };

  const logOut = () => {
    localStorage.clear();
    toHome();
  };
  if (isLogin === true) {
    return (
      <div>
        <div className="container-fluid top_stats hide_hashrates">
          <div className="row">
            <div className="col-md-10 col-sm-12">
            <span>Network: {networkStats?.difficulty} KH/s</span>
              <span>Pool: {poolStats?.hashRate} H/s</span>
              {isLogin ? <span>You: {stats?.hash} H/s</span> : <></>}
              <span>XMR: {xmrData}$ </span>
            </div>
            <div className="col-md-2 col-sm-12">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="warning"
                >
                  Logout
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="/payment-threshold">
                    Payment Threshold
                  </Dropdown.Item>
                  <Dropdown.Item href="/email-setting">
                    Email Setings
                  </Dropdown.Item>
                  <Dropdown.Item href="/change-password">
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href="/"
                    onClick={logOut}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="container-fluid top_stats show_hashrates">
          <div className="row">
            <div className="col-sm-10">
              <div className="logo">
                <a href="/">
                  {' '}
                  <img
                    src={logo}
                    alt="img"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-2 col-sm-12">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="warning"
                >
                  Logout
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="/payment-threshold">
                    Payment Threshold
                  </Dropdown.Item>
                  <Dropdown.Item href="/email-setting">
                    Email Setings
                  </Dropdown.Item>
                  <Dropdown.Item href="/change-password">
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href="/"
                    onClick={logOut}
                  >
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="container-fluid top_stats hide_hashrates">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <span>Network: {networkStats?.difficulty} KH/s</span>
            <span>Pool: {poolStats?.hashRate} H/s</span>
            <span>XMR: {xmrData}$</span>
          </div>
          <div className="col-md-4 col-sm-12">
            <a
              href="/getting-started"
              className="btn_blue"
            >
              Getting Started
            </a>

            <a
              href="/login"
              className="btn_orange"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid top_stats show_hashrates">
        <div className="row">
          <div className="col-sm-6">
            <div className="logo">
              <a href="/">
                {' '}
                <img
                  src={logo}
                  alt="img"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-5">
            <a
              href="getting-started"
              className="btn_blue"
            >
              Getting Started
            </a>
            <a
              href="/login"
              className="btn_orange"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
