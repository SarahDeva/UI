import React, { useState } from "react";
import UISide from "./UISide";
import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";
import "../App.css";
import grid from "./grid.png";
import { ImProfile } from "react-icons/im";
import { MdSettingsSuggest } from "react-icons/md";
// import { SiQuasar } from "react-icons/si";
// import { SiJsonwebtokens } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { TiPrinter } from "react-icons/ti";
import { CgNotes } from "react-icons/cg";
import { GoTag } from "react-icons/go";
import { MdOutlineStickyNote2 } from "react-icons/md";

const Settings = () => {
  // const numb = document.querySelector(".number");
  // let counter = 0;
  // setInterval =
  //   (() => {
  //     if (counter === 78) {
  //       clearInterval();
  //     } else {
  //       counter += 1;
  //       numb.textContent = counter + "%";
  //     }
  //   },
  //   80);
  const [display, setDisplay] = useState(0);
  const displayer1 = () => {
    setDisplay(1);
  };
  const displayer2 = () => {
    setDisplay(2);
  };
  const displayer3 = () => {
    setDisplay(3);
  };
  const displayer4 = () => {
    setDisplay(4);
  };
  const displayer5 = () => {
    setDisplay(5);
  };
  const displayer6 = () => {
    setDisplay(6);
  };
  const displayer7 = () => {
    setDisplay(7);
  };
  return (
    <div>
      <UISide />
      <div className="uisettings">
        <Navbar>
          <h5 className="buttons-head">
            <input
              type="button"
              className="buttons-active"
              value="Settings"
            ></input>
          </h5>
          <div>
            <h6 className="user-account">
              <i className="fas fa-user-circle"></i>
              <div className="dropdown-content">
                <Link to="/newui">Log Out</Link>
              </div>
            </h6>
            <h6 className="text">Mrs. Jane Doe </h6>
            <h6 className="text" style={{ color: "#a3a3a3" }}>
              User Designation
            </h6>
          </div>
        </Navbar>
        <div className="settingsform">
          <div className="profile-progress">
            <b>Profile Completion</b>
            <div className="div2">Please complete your profile </div>
            <div className="div3">
              <h6>78%</h6>
              <svg>
                <circle id="border-track" cx="78" cy="78" r="65"></circle>
                <circle id="track" cx="78" cy="78" r="65"></circle>
                <circle id="progress" cx="78" cy="78" r="65">
                  <i className="fa-solid fa-circle-dot"></i>
                </circle>
                {/* <circle id="progress-border" cx="78" cy="78" r="65">
                  <i className="fa-solid fa-circle-dot"></i>
                </circle> */}
              </svg>
            </div>
            <span className="progress-values">
              <div className="percent1">0%</div>
              <span className="progress-new">
                <span className="progress-value"></span>
              </span>
              <div className="percent2">100%</div>
            </span>
            <div className="div2">Minimum Required profile score 80%</div>
            {/* <div className="circular">
            <div className="inner"></div>
            <div className="number">78%</div>
            <div className="circle">
              <div className="bar left">
                <div className="progress"></div>
              </div>
              <div className="bar right">
                <div className="progress"></div>
              </div>
            </div>
            {setInterval}
          </div> */}
            {/* <div className="circle-wrap">
            <div className="circles">
              <div className="mask full">
                <div className="fill"></div>
              </div>
              <div className="mask half">
                <div className="fill"></div>
              </div>
              <div className="inside-circle"> 78% </div>
            </div>
          </div> */}
          </div>
          <div>
            {display === 1 ? (
              <div className="profile-progress1">
                <b>Kyc</b>
                <div className="div2">Please complete your profile </div>
                <div className="div3">
                  <h6>50%</h6>
                  <svg>
                    <circle id="border-track1" cx="78" cy="78" r="65"></circle>
                    <circle id="track1" cx="78" cy="78" r="65"></circle>
                    <circle id="progress1" cx="78" cy="78" r="65">
                      <i className="fa-solid fa-circle-dot"></i>
                    </circle>
                  </svg>
                </div>
                <span className="progress-values">
                  <div className="percent1">0%</div>
                  <span className="progress1-new">
                    <span className="progress1-value"></span>
                  </span>
                  <div className="percent2">100%</div>
                </span>
                <div className="div2">Minimum Required profile score 80%</div>
              </div>
            ) : display === 2 ? (
              <div className="profile-progress2">
                <b>Operation</b>
                <div className="div2">Please complete your profile </div>
                <div className="div3">
                  <h6>50%</h6>
                  <svg>
                    <circle id="border-track2" cx="78" cy="78" r="65"></circle>
                    <circle id="track2" cx="78" cy="78" r="65"></circle>
                    <circle id="progress2" cx="78" cy="78" r="65">
                      <i className="fa-solid fa-circle-dot"></i>
                    </circle>
                  </svg>
                </div>
                <span className="progress-values">
                  <div className="percent1">0%</div>
                  <span className="progress2-new">
                    <span className="progress2-value"></span>
                  </span>
                  <div className="percent2">100%</div>
                </span>
                <div className="div2">Minimum Required profile score 80%</div>
              </div>
            ) : display === 3 ? (
              <div className="profile-progress3">
                <b>Networking</b>
                <div className="div2">Please complete your profile </div>
                <div className="div3">
                  <h6>80%</h6>
                  <svg>
                    <circle id="border-track3" cx="78" cy="78" r="65"></circle>
                    <circle id="track3" cx="78" cy="78" r="65"></circle>
                    <circle id="progress3" cx="78" cy="78" r="65">
                      <i className="fa-solid fa-circle-dot"></i>
                    </circle>
                  </svg>
                </div>
                <span className="progress-values">
                  <div className="percent1">0%</div>
                  <span className="progress3-new">
                    <span className="progress3-value"></span>
                  </span>
                  <div className="percent2">100%</div>
                </span>
                <div className="div2">Minimum Required profile score 80%</div>
              </div>
            ) : display === 4 ? (
              <div className="profile-progress4">
                <b>Catalogue</b>
                <div className="div2">Please complete your profile </div>
                <div className="div3">
                  <h6>0%</h6>
                  <svg>
                    <circle id="border-track4" cx="78" cy="78" r="65"></circle>
                    <circle id="track4" cx="78" cy="78" r="65"></circle>
                    <circle id="progress4" cx="78" cy="78" r="65">
                      <i className="fa-solid fa-circle-dot"></i>
                    </circle>
                  </svg>
                </div>
                <span className="progress-values">
                  <div className="percent1">0%</div>
                  <span className="progress4-new">
                    <span className="progress4-value"></span>
                  </span>
                  <div className="percent2">100%</div>
                </span>
                <div className="div2">Minimum Required profile score 80%</div>
              </div>
            ) : display === 5 ? (
              <div className="profile-progress5">
                <b>Performance</b>
                <div className="div2">Please complete your profile </div>
                <div className="div3">
                  <h6>0%</h6>
                  <svg>
                    <circle id="border-track5" cx="78" cy="78" r="65"></circle>
                    <circle id="track5" cx="78" cy="78" r="65"></circle>
                    <circle id="progress5" cx="78" cy="78" r="65">
                      <i className="fa-solid fa-circle-dot"></i>
                    </circle>
                  </svg>
                </div>
                <span className="progress-values">
                  <div className="percent1">0%</div>
                  <span className="progress5-new">
                    <span className="progress5-value"></span>
                  </span>
                  <div className="percent2">100%</div>
                </span>
                <div className="div2">Minimum Required profile score 80%</div>
              </div>
            ) : display === 6 ? (
              <div className="profile-progress6">
                <b>Quality</b>
                <div className="div2">Please complete your profile </div>
                <div className="div3">
                  <h6>0%</h6>
                  <svg>
                    <circle id="border-track6" cx="78" cy="78" r="65"></circle>
                    <circle id="track6" cx="78" cy="78" r="65"></circle>
                    <circle id="progress6" cx="78" cy="78" r="65">
                      <i className="fa-solid fa-circle-dot"></i>
                    </circle>
                  </svg>
                </div>
                <span className="progress-values">
                  <div className="percent1">0%</div>
                  <span className="progress6-new">
                    <span className="progress6-value"></span>
                  </span>
                  <div className="percent2">100%</div>
                </span>
                <div className="div2">Minimum Required profile score 80%</div>
              </div>
            ) : display === 7 ? (
              <div className="profile-progress7">
                <b>Term</b>
                <div className="div2">Please complete your profile </div>
                <div className="div3">
                  <h6>0%</h6>
                  <svg>
                    <circle id="border-track7" cx="78" cy="78" r="65"></circle>
                    <circle id="track7" cx="78" cy="78" r="65"></circle>
                    <circle id="progress7" cx="78" cy="78" r="65">
                      <i className="fa-solid fa-circle-dot"></i>
                    </circle>
                  </svg>
                </div>
                <span className="progress-values">
                  <div className="percent1">0%</div>
                  <span className="progress7-new">
                    <span className="progress7-value"></span>
                  </span>
                  <div className="percent2">100%</div>
                </span>
                <div className="div2">Minimum Required profile score 80%</div>
              </div>
            ) : (
              <div className="status">
                Click the option in left side of the panel to view the status
              </div>
            )}
          </div>
        </div>
        <div className="sett">
          <img className="grid" src={grid} width="30px" height={"30px"} />
          Settings
        </div>
        <div className="box2" onClick={displayer2}>
          <div>
            {/* <SiQuasar size={30} /> */}
            <MdSettingsSuggest size={33} />
          </div>
          <div>Operation</div>
          <span>
            <span className="progress-new2">
              <span className="progress-value2"></span>
            </span>
          </span>
        </div>
        <div className="box1" onClick={displayer1}>
          <div>
            <ImProfile size={29} />
          </div>
          <div>Kyc</div>
          <span>
            <span className="progress-new1">
              <span className="progress-value1"></span>
            </span>
          </span>
        </div>
        <div className="box4" onClick={displayer4}>
          <div>
            {/* <SiQuasar size={30} /> */}
            <TiPrinter size={32} />
          </div>
          <div>Catalogue</div>
          <span>
            <span className="progress-new4">
              <span className="progress-value4"></span>
            </span>
          </span>
        </div>
        <div className="box3" onClick={displayer3}>
          <div>
            <FaGlobe size={30} />
          </div>
          <div>Networking</div>
          <span>
            <span className="progress-new3">
              <span className="progress-value3"></span>
            </span>
          </span>
        </div>
        <div className="box6" onClick={displayer6}>
          <div>
            {/* <SiQuasar size={30} /> */}
            <GoTag size={33} />
          </div>
          <div>Quality</div>
          <span>
            <span className="progress-new6">
              <span className="progress-value6"></span>
            </span>
          </span>
        </div>
        <div className="box5" onClick={displayer5}>
          <div>
            <CgNotes size={29} />
          </div>
          <div>Performance</div>
          <span>
            <span className="progress-new5">
              <span className="progress-value5"></span>
            </span>
          </span>
        </div>
        <div className="box7" onClick={displayer7}>
          <div>
            <MdOutlineStickyNote2 size={35} />
          </div>
          <div>Term</div>
          <span>
            <span className="progress-new7">
              <span className="progress-value7"></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Settings;
