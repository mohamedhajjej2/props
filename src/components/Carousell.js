import React from 'react'


function Carousell() {
    var NewComponent = React.createClass
  return (
    <div id="carouselExampleIndicators"  className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://madinbasket.com/modules/posslideshows/images/8982f75dc107205c44136f5666c407988fb0b2d3_chaussures.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://madinbasket.com/modules/posslideshows/images/5ac859a5085034f4ba201833af926caab54a0b31_espace_club.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://madinbasket.com/modules/posslideshows/images/039aa92dbd64ec38ed2e679e1d37be3b23539ba8_maillots2.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
};

export default Carousell