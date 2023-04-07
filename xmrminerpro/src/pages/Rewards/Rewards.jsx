import React, { useState, useEffect, useRef } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import '../../assets/css/bootstrap.css';
import '../../assets/css/templatemo-style.css';
import '../Rewards/Rewards.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import HistoryPoint from '../../component/HistoryPoint';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Rewards = () => {
  const [loadingId, setLoadingId] = useState({});
  const [isLogin, setLogin] = useState();
  const [rewardInfo, setRewardInfo] = useState([]);
  const [paymentAddress, setPaymentAddress] = useState();
  const [history, setHistory] = useState();

  const tokenRef = useRef();
  let navigate = useNavigate();

  const getRewardInfo = async () => {
    await axios
      .get('https://xmrminerpro.com/api/vouchers/getPoints')
      .then(({ data }) => {
        setRewardInfo(data?.data);
      });
  };
  const getHistoryPoint = async () => {
    await axios
      .get(
        `https://xmrminerpro.com/api/vouchers/${paymentAddress}/history`
      )
      .then(({ data }) => {
        setHistory(data?.data)
      });
  };

  useEffect(() => {
    const loginUser = localStorage.getItem('user');
    if (loginUser) {
      const foundUser = JSON.parse(loginUser);
      setLogin(foundUser?.success);
      tokenRef.current = foundUser?.token;
      setPaymentAddress(foundUser?.username);
    } 
    getRewardInfo()
  }, []);
  useEffect(() => {
    if(paymentAddress){
      getHistoryPoint()
    }
  }, [paymentAddress]);

  const toDashboard = () => {
    navigate('/dashboard', { state: { login: true } });
  };
  const refresh = () => {
    navigate('/rewards', { state: { login: true } });
  };

  const claimReward = async (params) => {
    let id = params.voucherID

    setLoadingId((ids) => ({
      ...ids,
      [id]: true
    }));

    await axios
      .post(
        `https://xmrminerpro.com/api/authed/vouchers/${paymentAddress}/deducting-point`,
        {
          voucher_id: params.voucherID,
          description_short: params.descriptionShort,
          point: params.point
        },
        { headers: { 'x-access-token': tokenRef?.current } }
      )
      .then((res) => {
        setLoadingId((ids) => ({
          ...ids,
          [id]: false
        }));
        if(res?.data.statusCode === 200){
          alert(res?.data.data)
          toDashboard()
        }else{
          alert(res?.data.message)
        }
      })
      .catch((err) => {
        setLoadingId((ids) => ({
          ...ids,
          [id]: false
        }));
        alert(err?.data.message)
      });
  };
  let i = 1
  return (
    <Fragment>
      <div id="wrapper">
        {/* Main */}
        <div id="main">
          {/* Header */}
          <Header />
          <div className="inner">
            <section className="container-fluid">
              <div className="row">
                <div className="col-12 headings mg-5">
                  <h1>Rewards</h1>
                </div>
                <div className="divider"></div>
                <div className="row mt-5">
                  {rewardInfo?.map((data) => (
                    <div className="col-md-4" >
                      <div className="card ml-5">
                        <div class="card-header text-center bg-warning">
                          {data?.description_short}
                        </div>
                        <img
                          style={{ cursor: 'pointer' }}
                          className="card-img-top"
                          src={'assets\\images\\voucher\\' + data?.image}
                          alt="Card image cap"
                          height={'150px'}
                          onClick={() => {
                            window.open(data?.url, '_blank');
                          }}
                        />
                        <div className="card-body text-center">
                          <h5 className="card-title">{data?.points} points</h5>

                          <h6 className="card-title">{data?.price} $ </h6>
                          <hr />
                          {isLogin === true ? <button
                            id={data?.id}
                            type="submit"
                            className="btn btn_orange btn-sm "
                            style={{
                              width: '100%',
                              height: '45px',
                              padding: '0px',
                            }}
                            onClick={(e) => {
                              claimReward(
                                {
                                  voucherID:data?.id,
                                  descriptionShort:data?.description_short,
                                  point:data?.points
                                }
                              );
                            }}
                          >
                            
                            {loadingId[data?.id] && (
                              <div
                                className="spinner-border text-primary"
                                role="status"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            )}
                            Redeem Point
                          </button> : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {
                isLogin === true && history?.length > 0? 
                <div>
                  <hr className='line'/>
                  <div className='row'>
                    <div className='col-md-12'>
                        <table className="table table-hover table-sm">
                          <thead>
                              <tr>
                              <th scope="col">NO</th>
                              <th scope="col">voucher</th>
                              <th scope="col">point</th>
                              <th scope="col">Redeem Date</th>
                              </tr>
                          </thead>
                          <tbody>
                              {history?.map((data) => (
                                  <tr>
                                  <th scope="row">{i++}</th>
                                  <td>{data?.description_outcome}</td>
                                  <td>{data?.amount_outcome}</td>
                                  <td>{new Date(data?.amount_outcome_date).toISOString().split(".")[0].replace(/[T:]/g, '-')}</td>
                                  </tr>
                              ))}
                          </tbody>
                        </table>
                    </div>
                  </div>
                </div>
                : isLogin === true && history === null?
                <h3 className='text-center pt-5'>no redeemed vouchers yet</h3>
                :null
              }
              
            </section>
          </div>
        </div>
        {/* Sidebar */}
        <SideBar />
      </div>
    </Fragment>
  );
};

export default Rewards;
