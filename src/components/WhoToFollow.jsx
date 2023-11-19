import React from "react";
import "../index.css";

export const WhoToFollow = () => {
  return (
    <div className="who-to-follow">
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper">Рекомендации для вас</div>
          </div>
        </div>
        <div className="who-to-follow-list">
          <div className="user">
            <div className="title">
              <div className="username">@habr_popsci</div>
              <div className="name">Хабр Научпоп</div>
            </div>
            <div className="mask-group" />
            <div className="group">
              <div className="label-wrapper">
                <div className="label">Читать</div>
              </div>
            </div>
          </div>
          <div className="div">
            <div className="title">
              <div className="username">@MatchTV</div>
              <div className="name">Матч ТВ</div>
            </div>
            <div className="mask-group-2" />
            <div className="group">
              <div className="label-wrapper">
                <div className="label">Читать</div>
              </div>
            </div>
          </div>
          <div className="user-2">
            <div className="overlap-2">
              <div className="title-2">
                <div className="username">@PopMechanica</div>
                <div className="name-2">Популярная меха...</div>
              </div>
              <div className="div-wrapper">
                <div className="label-wrapper">
                  <div className="label">Читать</div>
                </div>
              </div>
            </div>
            <div className="mask-group-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
