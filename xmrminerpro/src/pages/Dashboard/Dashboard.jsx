import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import '../../assets/css/bootstrap.css';
import '../../assets/css/templatemo-style.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
// import { Table } from '../Table/Table';

function Dashboard() {
  const [isShow, setIsShow] = useState(false);
  const [paymentAddress, setPaymentAddress] = useState();
  const [data, setData] = useState({});
  const [totalPoints, setTotalPoints] = useState(0);
  const [stats, setStats] = useState({});
  const [isLogin, setLogin] = useState();

  const getHashData = async (paymentAddress) => {
    await axios
      .get(`https://xmrminerpro.com/api/miner/${paymentAddress}/stats`)
      .then(({ data }) => {
        setStats(data);
      });
  };

  const handleStats = async () => {
    try {
      await axios
        .get(`https://xmrminerpro.com/api/miner/${paymentAddress}/stats`)
        .then((response) => {
          setIsShow(true);
          setInterval(function () {
            setData(response.data);
          }, 1000);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getRewardInfo = async () => {
    try {
      await axios
        .get(`https://xmrminerpro.com/api/vouchers/${paymentAddress}/point`)
        .then(({ data }) => {
          setTotalPoints(data?.data?.point);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const paymentAddress = JSON?.parse(localStorage.getItem('user'));
    setPaymentAddress(paymentAddress?.username);
  }, []);

  useEffect(() => {
    if (paymentAddress) {
      handleStats();
      getRewardInfo();

      const loginUser = localStorage.getItem('user');
      if (loginUser) {
        const foundUser = JSON.parse(loginUser);
        setLogin(foundUser?.success);
        getHashData(foundUser?.username);
      }
    }
  }, [paymentAddress]);

  return (
    <Fragment>
      <div id="wrapper">
        <div id="main">
          {/* Header */}
          <Header success={localStorage.getItem('user')} />
          {/* Banner */}
          <section className="main-banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12"></div>
              </div>
            </div>
          </section>
          <div className="inner">
            <section className="container-fluid">
              <div className="row">
                <div className="col-12 headings">
                  <h1>Track your earnings</h1>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Payment Address"
                      value={paymentAddress}
                      //   onChange={(e) => setPaymentAddress(e.target.value)}
                    />
                    {/* <div className="input-group-append">
                      <button
                        className="btn btn-outline-warning"
                        type="button"
                        onClick={handleStats}
                      >
                        Track Live Stats
                      </button>
                    </div> */}
                  </div>

                  {isShow && (
                    <>
                      <div className="card">
                        <div className="card-header bg-warning">LIVE STATS</div>
                        <div class="card-body">
                          <div className="container-fluid">
                            <div className="d-flex flex-column flex-lg-row justify-content-lg-between">
                              <div>
                                <p className="text-dark">Hash Rate</p>
                                <h5>{stats?.hash}</h5>
                              </div>
                              <div>
                                <p>Total Hashes</p>
                                <h5>{data.totalHashes}</h5>
                              </div>
                              <div>
                                <p>Total Due</p>
                                <h5>{data.amtDue} XMR</h5>
                              </div>
                              <div>
                                <p>Total Paid</p>
                                <h5>{data.amtPaid} XMR</h5>
                              </div>
                              <div>
                                <p>Total Point</p>
                                <h5>{totalPoints}</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <Table /> */}
                    </>
                  )}
                </div>
              </div>
            </section>
            <section className="services">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div className="service-item first-item">
                      <div className>
                        <img
                          src="assets/images/hardware.png"
                          alt="img"
                        />
                      </div>
                      <h4>Mining hardware is ready</h4>
                      <p>
                        Worldwide Servers. Low latency, calculating more jobs
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-item second-item">
                      <div className>
                        <img
                          src="assets/images/cryp_currency.png"
                          alt="img"
                        />
                      </div>
                      <h4>ALTERNATIVE CRYPTOCURRENCIES</h4>
                      <p>
                        exchange in your favourite currency after withdrawal
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-item third-item">
                      <div className>
                        <img
                          src="assets/images/wallet.png"
                          alt="img"
                        />
                      </div>
                      <h4>GET INSTANT WITHDRAWAL</h4>
                      <p>
                        Don't wait for hours, get your coins after maximum one
                        hour
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Mining Pool */}
            <section className="container-fluid">
              <div className="row">
                <div className="col-12 headings">
                  <sup>xmrminerpro</sup>
                  <h2>Mining Pool</h2>
                </div>
              </div>
            </section>
            <section className="mining_pool">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div className="service-item first-item">
                      <h4>Pool fee</h4>
                      <p>
                        <strong>0.5%</strong>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-item second-item">
                      <h4>Minimum payout </h4>
                      <p>
                        <strong>0.01 XMR</strong>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="service-item third-item">
                      <h4>Payout scheme</h4>
                      <p>
                        <strong>PPLNS</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* About Mining */}
          <div className="container-fluid about_mining">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <sup>Decentralized</sup>
                <h2>Mining Our core focus</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium.Lorem ipsum dolor sit amet,
                  has at lorem utin mucius, elitro dicam sit malorum. Fugit
                  convenire adhuc putant eam. scripta iudicabit, dicit le
                  persius ponderum id nec.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, has at lorem utin mucius, elitro
                  dicam sit malorum. Fugit convenire adhuc putant eam. scripta
                  iudicabit, dicit le persius ponderum id nec.
                </p>
              </div>
              <div className="col-md-6 col-sm-12">
                <img
                  src="assets/images/cryp_currency_collage.jpg"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="inner">
            {/* Crypto News */}
            <section className="container-fluid">
              <div className="row">
                <div className="col-12 headings">
                  <sup>xmrminerpro</sup>
                  <h2>Crypto News</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </div>
              </div>
            </section>
            <section className="news">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-4">
                    <div className="news-item first-item">
                      <div className="date_wrapper">
                        <div className="day">02</div>{' '}
                        <div className="mm">May 2022</div>
                      </div>
                      <h4>Chainges Conference</h4>
                      <p>
                        Join the first world-class quality blockchain and
                        cryptocurrencyconference
                      </p>
                      <a
                        href="#"
                        className="btn_readmore"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="news-item first-item">
                      <div className="date_wrapper">
                        <div className="day">03</div>{' '}
                        <div className="mm">May 2022</div>
                      </div>
                      <h4>Chainges Conference</h4>
                      <p>
                        Join the first world-class quality blockchain and
                        cryptocurrencyconference
                      </p>
                      <a
                        href="#"
                        className="btn_readmore"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="news-item first-item">
                      <div className="date_wrapper">
                        <div className="day">22</div>{' '}
                        <div className="mm">May 2022</div>
                      </div>
                      <h4>Chainges Conference</h4>
                      <p>
                        Join the first world-class quality blockchain and
                        cryptocurrencyconference
                      </p>
                      <a
                        href="#"
                        className="btn_readmore"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Sidebar */}
        <SideBar />
      </div>
    </Fragment>
  );
}

export default Dashboard;
