import React, { Fragment, useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/bootstrap.css';
import '../../assets/css/templatemo-style.css';
import '../Rewards/Rewards.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import axios from 'axios';

const ChangePassword = () => {
  const [loading, setLoading] = useState(false);
  const tokenRef = useRef();
  const [password, setPassword] = useState({});
  const [success, setSuccess] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    const loginUser = localStorage.getItem('user');
    if (loginUser) {
      const foundUser = JSON.parse(loginUser);
      tokenRef.current = foundUser?.token;
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
        'https://xmrminerpro.com/api/authed/changePassword',
        {
          password: password?.newPassword,
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
  const changePassword = (target) => {
    setPassword({ ...password, [target?.name]: target?.value });
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
                  <h1 className="text-center mt-5">Change Password</h1>
                </div>
              </div>
              <div className="offset-md-4 col-sm-8 mt-5 col-md-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  name="newPassword"
                  id="password"
                  value={password?.newPassword}
                  onChange={({ target }) => changePassword(target)}
                />
              </div>
              <div className="offset-md-4 col-sm-8 mt-4 col-md-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Change Password"
                  name="confirmPassword"
                  value={password?.confirmPassword}
                  id="password"
                  onChange={({ target }) => changePassword(target)}
                />
                <div>
                  {password?.newPassword !== password?.confirmPassword ? (
                    <p style={{ color: 'red', fontSize: '12px' }}>
                      Password and confirm password does not match
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="offset-sm-3 col-md-6 headings mt-5">
                <button
                  className="btn btn_orange btn-sm "
                  disabled={
                    loading ||
                    password?.confirmPassword !== password?.newPassword ||
                    !password?.newPassword?.length
                  }
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

export default ChangePassword;
