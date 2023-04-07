import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import '../../assets/css/bootstrap.css';
import '../../assets/css/templatemo-style.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';

class Support extends React.Component {
  render() {
    return (
      <Fragment>
        <div id="wrapper">
          {/* Main */}
          <div id="main">
            {/* Header */}
            <Header />
            {/* Banner */}
            <section class="main-banner">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <div
                      id="MiddleCarousel"
                      class="carousel slide UACarousel"
                      data-ride="carousel"
                    >
                      <ol class="carousel-indicators">
                        <li
                          data-target="#MiddleCarousel"
                          data-slide-to="0"
                          class=""
                        ></li>
                        <li
                          data-target="#MiddleCarousel"
                          data-slide-to="1"
                          class="active"
                        ></li>
                        <li
                          data-target="#MiddleCarousel"
                          data-slide-to="2"
                          class=""
                        ></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item">
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-12">
                                <div class="content_wrapper slider1">
                                  <h1>Why you should</h1>
                                  <h2>mine Monero?</h2>
                                  <ul>
                                    <li>
                                      No expensive graphic cards required, CPUs
                                      are enough.
                                    </li>
                                    <li>
                                      Established and big community since 2014
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item active">
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-12">
                                <div class="content_wrapper slider2">
                                  <ul>
                                    <li>Earning points for voucher codes</li>
                                    <li>Auto-Payment (Hourly)</li>
                                    <li>Low Payout-Limit with 0.01 XMR</li>
                                    <li>Low Pool Fee 0.5%</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="carousel-item">
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-12">
                                <div class="content_wrapper slider3">
                                  <div class="content_slide3">
                                    <img src="assets/images/icon1.png" />
                                    <span>Redeem your points</span>
                                    <p>in numerous online-shops</p>
                                  </div>
                                  <div class="content_slide3">
                                    <img src="assets/images/icon2.png" />
                                    <span>Boost your hashrate</span>
                                    <p>
                                      And Buy new hardware with your voucher
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        href="#MiddleCarousel"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#MiddleCarousel"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="inner">
              <section class="container-fluid">
                <div class="row">
                  <div class="col-12 headings">
                    <sup>xmrminerpro</sup>
                    <h2>Benefits</h2>
                    <p>The easiest, most affordable and best mining platform</p>
                  </div>
                </div>
              </section>
              <section class="services">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="service-item first-item">
                        <div class="">
                          <img
                            src="assets/images/hardware.png"
                            alt=""
                          />
                        </div>
                        <h4>Mining hardware is ready</h4>
                        <p>
                          Worldwide Servers. Low latency, calculating more jobs
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="service-item second-item">
                        <div class="">
                          <img
                            src="assets/images/cryp_currency.png"
                            alt=""
                          />
                        </div>
                        <h4>ALTERNATIVE CRYPTOCURRENCIES</h4>
                        <p>
                          exchange in your favourite currency after withdrawal
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="service-item third-item">
                        <div class="">
                          <img
                            src="assets/images/wallet.png"
                            alt=""
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

              <section class="container-fluid">
                <div class="row">
                  <div class="col-12 headings">
                    <sup>xmrminerpro</sup>
                    <h2>Mining Pool</h2>
                  </div>
                </div>
              </section>
              <section class="mining_pool">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="service-item first-item">
                        <h4>Pool fee</h4>
                        <p>
                          <strong>0.5%</strong>
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="service-item second-item">
                        <h4>Minimum payout</h4>
                        <p>
                          <strong>0.01 XMR</strong>
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="service-item third-item">
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

            <div class="container-fluid about_mining">
              <div class="row">
                <div class="col-md-6 col-sm-12">
                  <sup>Decentralized</sup>
                  <h2>Minning Our core focus</h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.Lorem ipsum
                    dolor sit amet, has at lorem utin mucius, elitro dicam sit
                    malorum. Fugit convenire adhuc putant eam. scripta
                    iudicabit, dicit le persius ponderum id nec.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, has at lorem utin mucius, elitro
                    dicam sit malorum. Fugit convenire adhuc putant eam. scripta
                    iudicabit, dicit le persius ponderum id nec.
                  </p>
                </div>
                <div class="col-md-6 col-sm-12">
                  <img
                    src="assets/images/cryp_currency_collage.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="inner">
              <section class="container-fluid">
                <div class="row">
                  <div class="col-12 headings">
                    <sup>xmrminerpro</sup>
                    <h2>Crypto News</h2>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </p>
                  </div>
                </div>
              </section>
              <section class="news">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="news-item first-item">
                        <div class="date_wrapper">
                          <div class="day">02</div>
                          <div class="mm">May 2022</div>
                        </div>
                        <h4>Chainges Conference</h4>
                        <p>
                          Join the first world-class quality blockchain and
                          cryptocurrencyconference
                        </p>
                        <a
                          href="#"
                          class="btn_readmore"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="news-item first-item">
                        <div class="date_wrapper">
                          <div class="day">03</div>
                          <div class="mm">May 2022</div>
                        </div>
                        <h4>Chainges Conference</h4>
                        <p>
                          Join the first world-class quality blockchain and
                          cryptocurrencyconference
                        </p>
                        <a
                          href="#"
                          class="btn_readmore"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="news-item first-item">
                        <div class="date_wrapper">
                          <div class="day">22</div>
                          <div class="mm">May 2022</div>
                        </div>
                        <h4>Chainges Conference</h4>
                        <p>
                          Join the first world-class quality blockchain and
                          cryptocurrencyconference
                        </p>
                        <a
                          href="#"
                          class="btn_readmore"
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
}

export default Support;
