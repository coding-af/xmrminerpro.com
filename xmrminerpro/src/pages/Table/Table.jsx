import './table.css';

export const Table = () => {
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-sm-2 col-md-1 left-align">Sno</div>
        <div className="col-sm-2 col-md-3">Worker</div>
        <div className="col-sm-2 col-md-3">#'s</div>
        <div className="col-sm-2 col-md-2">Total #'s</div>
        <div className="col-sm-2 col-md-3 right-align">Last Hash</div>
      </div>
      <div className="row">
        <div className="col-sm-4 col-md-1 left-align">1</div>
        <div className="col-sm-3 col-md-3 col-overflow">
          eb7d5d3f284fd3ed1d12455b17c392cd4c1d6169ea7ede4c2cb22d2bc19bd163
        </div>
        <div className="col-sm-3 col-md-3 col-overflow">1672012371901</div>
        <div className="col-sm-3 col-md-2 col-overflow">1253112</div>
        <div className="col-sm-3 col-md-3 col-overflow right-align">
          3326317681624
        </div>
      </div>
    </div>
  );
};
