import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/bootstrap.css';
import '../../assets/css/templatemo-style.css';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import axios from 'axios';

function Login(props) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    const loginUser = localStorage.getItem('user');
    if (loginUser) {
      const foundUser = JSON.parse(loginUser);
      setSuccess(foundUser);
    }
  }, []);

  const toDashboard = () => {
    navigate('/dashboard', { state: { login: true } });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    await axios
      .post('https://xmrminerpro.com/api/authenticate', { username, password })
      .then((res) => {
        setSuccess(res);
        setLoading(false);
        const data = {
          success: res?.data?.success,
          token: res?.data?.msg,
          username,
        };
        localStorage.setItem('user', JSON.stringify(data));
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
          <div className="inner">
            <section
              className="container-fluid"
              style={{ paddingLeft: '45px' }}
            >
              <div className="card">
                <div
                  className="card-header btn_blue"
                  style={{ marginRight: '0px' }}
                >
                  <div className="row">
                    <div className="col-12 headings">
                      <h1
                        className="btn_orange"
                        style={{ marginTop: '6px' }}
                      >
                        Miner Login
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 mt-3">
                      <form onSubmit={handleSubmit}>
                        <div
                          className="form-group row"
                          style={{ width: '90%' }}
                        >
                          <label
                            htmlFor="staticEmail"
                            className="col-sm-4 col-form-label"
                          >
                            Payment Address :
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="text"
                              className="form-control"
                              name="username"
                              id="username"
                              onChange={(e) => setUsername(e.target.value)}
                              placeholder="Type Your Payment Address"
                            />
                          </div>
                        </div>
                        <div
                          className="form-group row"
                          style={{ width: '90%' }}
                        >
                          <label
                            htmlFor="inputPassword"
                            className="col-sm-4 col-form-label"
                          >
                            Password :
                          </label>
                          <div className="col-sm-8">
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              id="password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-12 headings mt-5">
                          <button
                            type="submit"
                            className="btn btn_orange btn-sm "
                            disabled={loading}
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
                            LOGIN
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3"></div>
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

export default Login;
