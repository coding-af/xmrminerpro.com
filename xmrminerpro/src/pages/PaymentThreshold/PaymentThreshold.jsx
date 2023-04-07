import React, { useEffect, useState, useRef } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import '../../assets/css/bootstrap.css';
import '../../assets/css/templatemo-style.css';
import '../Rewards/Rewards.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentThreshold = (props) => {
  const [thresholdLimit, setThresholdLimit] = useState();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();

  let navigate = useNavigate();
  const tokenRef = useRef();
  const getThresholdData = async (token) => {
    await axios
      .get('https://xmrminerpro.com/api/authed', {
        headers: { 'x-access-token': token },
      })
      .then(({ data }) => {
        setThresholdLimit(data?.msg?.payout_threshold);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const loginUser = localStorage.getItem('user');
    if (loginUser) {
      const foundUser = JSON.parse(loginUser);
      tokenRef.current = foundUser?.token;
      getThresholdData(tokenRef.current);
    }
  }, []);
  const limitChanger = (limit) => {
    setThresholdLimit(limit);
  };

  const toDashboard = () => {
    navigate('/dashboard', { state: { login: true } });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post(
        'https://xmrminerpro.com/api/authed/changePayoutThreshold',
        {
          threshold: thresholdLimit,
        },
        { headers: { 'x-access-token': tokenRef?.current } }
      )
      .then((res) => {
        setSuccess(res);
        setLoading(false);

        toDashboard();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Fragment>
      <div id="wrapper">
        {/* Main */}
        <div id="main">
          {/* Header */}
          <Header success={success} />
          {/* Banner */}
          <section className="main-banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12"></div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h2 className="text-center mt-5">Payment Threshold</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 mt-5 col-sm-10 offset-lg-2">
                  <h6 style={{ textAlign: 'center' }}>
                    The pool will pay out to your wallet once your total due
                    exceeds the payment threshold
                  </h6>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group row mt-5">
                      <label
                        htmlFor="staticEmail"
                        className="col-sm-3 col-form-label"
                      >
                        Payment threshold limit:
                      </label>
                      <div className="col-sm-6">
                        <input
                          type="number"
                          step=".01"
                          className="form-control"
                          name="thresholdLimit"
                          id="thresholdLimit"
                          value={thresholdLimit}
                          onChange={({ target }) => limitChanger(target?.value)}
                          placeholder="Payment threshold limit"
                        />
                      </div>
                      <div className="col-sm-8 offset-md-3 mt-1">
                        <p>This value cannot be lower than 0.01 XMR</p>
                      </div>
                    </div>

                    <div className="col-12 headings mt-1">
                      <button
                        type="submit"
                        className="btn btn_orange btn-sm "
                        disabled={loading || thresholdLimit < 0.1}
                        style={{
                          width: '30%',
                          height: '45px',
                          padding: '0px',
                        }}
                      >
                        {loading && (
                          <div
                            className="spinner-border text-primary"
                            role="status"
                          >
                            <span className="sr-only">Loading...</span>
                          </div>
                        )}
                        UPDATE
                      </button>
                    </div>
                  </form>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          </section>
        </div>
        {/* Sidebar */}
        <SideBar />
      </div>
    </Fragment>
  );
};

export default PaymentThreshold;
