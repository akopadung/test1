import React, { Component } from "react";
import "../App.css";
import Tabletop from "tabletop";
import Object from "./object";
import view_ic from "./images/view_file.png";

var year = "2020";
var id = '';
export default class Training extends Component {
  constructor(props) {
    super(props);
    this.state = {
      training_data: [],
      year,
      id: this.props.id
    };
  }

  handleSortTraining = (value) => event => {
    this.setState({ year: value});
  };

  render() {
    var type = "คำสั่งปฏิบัติงาน";
    var year = this.state.year;
    const { training_data } = this.props.a_training_data;
    var options = [];
    var prev = "";
    training_data.forEach(obj => {
      var dateD = obj.Day;
      var yFour = dateD.substring(dateD.length - 4, dateD.length);
      var dateTo = obj.fromDate;
      var yTo = dateTo.substring(dateTo.length - 4, dateTo.length);
      if (prev !== yFour && yFour !== "") {
        options.push(yFour);
        prev = yFour;
      } else {
        if (prev !== yTo) {
          options.push(yTo);
        }
      }
    });
    console.log(Array.from(options));
    console.log(this.state.year)
    return (
      <div>
        <section className="colorlib_training" data-section="blog">
         <div className="colorlib-narrow-content" style={{ display: "block" }}>
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">ผลงาน</span>
                <h2 className="colorlib-heading">และการฝึกอบรม</h2>
                  
              </div>
            </div>
            <div className="row row-pt-md">
              <div>
                <div
                  className="services color-1"
                  style={{ alignItems: "center" }}
                >
                    <span
                    
                    style={{ textAlign: "center", width: "500px" }}
                  >
                    <div>
                      <p
                        style={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: 20,
                          color:"grey"
                        }}
                      >
                        ข้อมูลปี {parseInt(this.state.year) + 543}
                      </p>
                      <div>
                    {options.map((name, index) => (
                      <button
                        key={index}
                        className="btn_option"
                        to="#"
                        onClick={this.handleSortTraining(name)}
                      >
                        {parseInt(name) + parseInt("543")}
                      </button>
                    ))}
                  </div>
                    </div>
                  </span>
                  <div className="desc">
          <h3>การอบรม</h3>
          <table className="table__object">
            <tbody>
              <tr style={{ fontWeight: 700 }}>
                <td>รายการ</td>
                <td>รูปแบบ</td>
                <td>ระหว่างวันที่</td>
                <td>จัดโดย</td>
                <td>สถานที่</td>
                <td>รูปภาพ/เอกสาร</td>
              </tr>
            </tbody>
            {training_data.map(obj => {
              var fDate = obj.fromDate;
              var tDate = obj.toDate;
              var lastFourF = fDate.substring(fDate.length - 4, fDate.length);
              var firstOneF = fDate.substring(0, fDate.length - 4);
              var lastFourT = tDate.substring(tDate.length - 4, tDate.length);
              var firstOneT = tDate.substring(0, tDate.length - 4);
              var fYear = parseInt(lastFourF) + 543;
              var tYear = parseInt(lastFourT) + 543;
              var link7 = obj.Picture7;
              var v7 = "inline-block";
              if (link7 === null || link7 === "") {
                v7 = "none";
              }
              var link8 = obj.Picture8;
              var v8 = "inline-block";
              if (link8 === null || link8 === "") {
                v8 = "none";
              }
              var link9 = obj.Picture9;
              var v9 = "inline-block";
              if (link9 === null || link9 === "") {
                v9 = "none";
              }
              var link10 = obj.Picture10;
              var v10 = "inline-block";
              if (link10 === null || link10 === "") {
                v10 = "none";
              }
              if (obj.Type !== type) {
                if (lastFourF === year) {
                  return (
                    <tbody key={obj.Timestamp}>
                      <tr>
                        <td>{obj.Title1}</td>
                        <td>{obj.Area}</td>
                        <td>
                          {firstOneF}
                          {fYear} - {firstOneT}
                          {tYear}
                        </td>
                        <td>{obj.Who}</td>
                        <td>{obj.location}</td>
                        <td>
                          <a target="_blank" href={obj.Picture7}>
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={obj.Picture8}
                            style={{ display: v8 }}
                          >
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={obj.Picture9}
                            style={{ display: v9 }}
                          >
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={obj.Picture10}
                            style={{ display: v10 }}
                          >
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  );
                } else {
                  var searchY = parseInt(year) + 543;
                  return (
                    <tbody key={searchY}>
                      <tr>
                        <td
                          colSpan="6"
                          style={{ textAlign: "center", fontStyle: "italic" }}
                        >
                          ไม่พบข้อมูลในปี {searchY}
                        </td>
                      </tr>
                    </tbody>
                  );
                }
              }
            })}
          </table>
          <br></br>
          <h3>คำสั่งปฏิบัติงาน</h3>
          <table className="table__object">
            <tbody>
              <tr style={{ fontWeight: 700 }}>
                <td>เลขที่คำสั่ง</td>
                <td>วันที่ลงคำสั่ง</td>
                <td>คำสั่ง</td>
                <td>รายการปฏิบัติ</td>
                <td>รูปภาพ/เอกสาร</td>
              </tr>
            </tbody>
            {training_data.map(obj => {
              var dDate = obj.Day;
              var lastFourD = dDate.substring(dDate.length - 4, dDate.length);
              var firstOneD = dDate.substring(0, dDate.length - 4);
              var dYear = parseInt(lastFourD) + 543;
              var link1 = obj.Picture1;
              var link2 = obj.Picture2;
              var v2 = "inline-block";
              if (link2 === null || link2 === "") {
                v2 = "none";
              }
              var link3 = obj.Picture3;
              var v3 = "inline-block";
              if (link3 === null || link3 === "") {
                v3 = "none";
              }
              var link4 = obj.Picture4;
              var v4 = "inline-block";
              if (link4 === null || link4 === "") {
                v4 = "none";
              }
              var link5 = obj.Picture5;
              var v5 = "inline-block";
              if (link5 === null || link5 === "") {
                v5 = "none";
              }
              var link6 = obj.Picture6;
              var v6 = "inline-block";
              if (link6 === null || link6 === "") {
                v6 = "none";
              }
              if (obj.Type === type) {
                if (lastFourD === year) {
                  return (
                    <tbody key={obj.Timestamp}>
                      <tr>
                        <td>{obj.Number}</td>
                        <td>
                          {firstOneD}
                          {dYear}
                        </td>
                        <td>{obj.Title}</td>
                        <td>{obj.Jobs}</td>
                        <td>
                          <a target="_blank" href={obj.Picture1}>
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>{" "}
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={obj.Picture2}
                            style={{ display: v2 }}
                          >
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={obj.Picture3}
                            style={{ display: v3 }}
                          >
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={obj.Picture4}
                            style={{ display: v4 }}
                          >
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={obj.Picture5}
                            style={{ display: v5 }}
                          >
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                        <td>
                          <a
                            target="_blank"
                            href={obj.Picture6}
                            style={{ display: v6 }}
                          >
                            <img
                              src={view_ic}
                              style={{ width: 20, height: 20 }}
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  );
                } else {
                  var searchY = parseInt(year) + 543;
                  return (
                    <tbody key={searchY}>
                      <tr>
                        <td
                          colSpan="5"
                          style={{ textAlign: "center", fontStyle: "italic" }}
                        >
                          ไม่พบข้อมูลในปี {searchY}
                        </td>
                      </tr>
                    </tbody>
                  );
                }
              }
            })}
          </table>
        </div>
                </div>
              </div>
            </div>
          </div>
                    </section> 
      </div>
    );
  }
}
