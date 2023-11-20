import React from "react";
import "../style.css";

export const Trends = () => {
  return (
    <div className="trends">
      <div className="overlap-group">
        <div className="list">
          <div className="trends-line">
            <div className="group">
              <div className="title">#помогите_с_кодом</div>
              <div className="meta">
                <div className="text-wrapper">482 сообщения</div>
              </div>
            </div>
          </div>
          <div className="group-wrapper">
            <div className="group">
              <div className="title">#как_научиться_коду?</div>
              <div className="div-wrapper">
                <div className="text-wrapper">4 185 сообщений</div>
              </div>
            </div>
          </div>
          <div className="div">
            <div className="group">
              <div className="title">#ruby</div>
              <div className="div-wrapper">
                <div className="text-wrapper">958 186 сообщений</div>
              </div>
            </div>
          </div>
          <div className="trends-line-2">
            <div className="group">
              <div className="title">#python3</div>
              <div className="meta-2">
                <div className="text-wrapper">29 718 сообщений</div>
              </div>
            </div>
          </div>
          <div className="trends-line-3">
            <div className="group">
              <div className="title">#javascript</div>
              <div className="div-wrapper">
                <div className="text-wrapper">2 941 сообщение</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-2">Актуальные темы</div>
      </div>
    </div>
  );
};

export default Trends;
