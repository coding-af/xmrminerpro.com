import React, { useState, useEffect } from 'react';
import { logo } from '../assets';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';

function HistoryPoint(props) {
  const [isLogin, setLogin] = useState();
  const [paymentAddress, setPaymentAddress] = useState();
  const [history, setHistory] = useState({});

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
      setPaymentAddress(foundUser?.username);
      
      
    }
    getHistoryPoint()
  }, []);



  if (isLogin === true) {
    return (
     <Fragment>
        <table className="table table-hover table-sm">
            <thead>
                <tr>
                <th scope="col">NO</th>
                <th scope="col">point</th>
                <th scope="col">Redeem Date</th>
                </tr>
            </thead>
            <tbody>
                {history?.map((data) => (
                    <tr>
                    <th scope="row">{data?.id}</th>
                    <td>{data?.amount_outcome}</td>
                    <td>{data?.amount_outcome_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
     </Fragment>
    );
  }
  return (
    <Fragment>{null}</Fragment>
  );
}

export default HistoryPoint;
