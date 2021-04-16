import React from "react";

const TinderPrefs = () => (
    <div id="tinder-prefs">
        <div className="card-body align-items-center">
                <div className="form-group">
                    <label className="form-label">Color</label>
                    <select className="custom-select">
                        <option>Brown</option>
                        <option selected="">Blue</option>
                        <option>Black</option>
                        <option>Silver</option>
                        <option>Red</option>
                        <option>White</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Door Count</label>
                    <select className="custom-select">
                        <option selected="">5</option>
                        <option>4</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Seat Count</label>
                    <select className="custom-select">
                        <option selected="">5</option>
                        <option>4</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Fuel Type</label>
                    <select className="custom-select">
                        <option selected="">Gasoline</option>
                        <option>Diesel</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Transmission</label>
                    <select className="custom-select">
                        <option selected="">Automatic</option>
                        <option>Manual</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="mileage">Mileage</label>
                    <input type="range" className="form-control-range" id="mileage" min={0} max={350000}/>
                </div>
        </div>
    </div>
)

export default TinderPrefs;