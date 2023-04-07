import React, { Fragment, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/bootstrap.css';
import '../../assets/css/templatemo-style.css';
import '../Rewards/Rewards.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import axios from 'axios';

const EmailSetting = (props) => {
  const [loading, setLoading] = useState(false);
  const [alertToggle, setAlertToggle] = useState();
  const [success, setSuccess] = useState();
  const tokenRef = useRef();
  let navigate = useNavigate();
  const [initialToken, setInitialToken] = useState();
  const getEmailData = async (token) => {
    await axios
      .get('https://xmrminerpro.com/api/authed', {
        headers: { 'x-access-token': token },
      })
      .then(({ data }) => {
        setAlertToggle(data?.msg?.email_enabled === 1 ? true : false);
        setInitialToken(data?.msg?.email_enabled === 1 ? true : false);
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
      getEmailData(foundUser?.token);
    }
  }, []);
  const toDashboard = () => {
    navigate('/dashboard', { state: { login: true } });
  };
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    await axios
      .post(
        'https://xmrminerpro.com/api/authed/toggleEmail',
        {},

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
  const changeAlertToggle = () => {
    setAlertToggle(!alertToggle);
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
                  <h2 className="text-center mt-5">Email Setting</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8 offset-2 col-md-6 offset-md-5 mt-5">
                  <input
                    type="checkbox"
                    id="topping"
                    name="topping"
                    checked={alertToggle}
                    onClick={changeAlertToggle}
                    style={{
                      marginRight: '12px',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                  Receive miner hashrate alerts
                </div>
              </div>
              <div className="offset-sm-3 col-md-6 headings mt-5">
                <button
                  className="btn btn_orange btn-sm "
                  disabled={loading || initialToken === alertToggle}
                  style={{
                    width: '30%',
                    height: '45px',
                    padding: '0px',
                  }}
                  onClick={handleSubmit}
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
            </div>
          </section>
        </div>
        {/* Sidebar */}
        <SideBar />
      </div>
    </Fragment>
  );
};

export default EmailSetting;
