import star1 from "./assets/star1.png";
import star2 from "./assets/star2.png";
import harry from "./assets/harry.png";
import vecgreen from "./assets/vec4.png";
import vecyellow from "./assets/vec6.png";
import vecred from "./assets/vec5.png";
import comm from "./assets/comm.png";
import ch from "./assets/ch.png";
import avatar from "./assets/avatar.png";
import hero from "./assets/hero.png";
import pc from "./assets/pc.png";
import rec1 from "./assets/rec1.png";
import rec2 from "./assets/rec2.png";
import {
  ArrowSmallRightIcon,
  BellAlertIcon,
  XMarkIcon,
  ArrowUpRightIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="p-5 d-flex flex-column align-items-center">
      <div className="w-75 d-flex flex-column align-items-center">
        <div className="w-100 d-flex px-5">
          <div className="flex-grow-1 pt-4">
            <p className="t-400">Hi, Mr. Harry</p>
            <div className="pt-4 t-200">
              <p className="t-200">Complete your account setup today</p>
              <div className="d-flex align-items-center mt-1">
                <p className="bg-green">Complete account setup</p>
                <ArrowSmallRightIcon className="w-5 bg-green" />
              </div>
            </div>
            <div className="d-flex pt-4">
              <BellAlertIcon className="w-5 bg-red bg-light-red mx-1" />
              <p className="t-5">
                No announcements have been posted yet. No announcementsNo
                announcements have been posted yet. No announcements
              </p>
              <XMarkIcon className="w-5 mx-1" />
            </div>
          </div>
          <div className="w-25 d-flex align-items-center">
            <img src={harry} alt="profile" className="w-100" />
          </div>
        </div>
        <div className="d-flex w-75 h-300">
          <div className="w-501 h-100">
            <img src={pc} alt="laptop" className="w-100 h-100 border-left" />
          </div>
          <div className="d-flex justify-content-center flex-column p-4">
            <p>Adam is currently blah blah</p>
            <p className="br-700">Professional product design</p>
            <p className="br-700">Certificate course</p>
            <div className="d-flex  align-items-center mx-3 pt-3">
              <div className="d-flex flex-grow-1 text-100 align-items-center">
                <img src={hero} alt="inprogress" className="w-30 h-30" />
                <p className="bg-green">in progress</p>
              </div>
              <p className="text-100">56%</p>
            </div>
          </div>
        </div>
        <div className="w-100 mt-5">
          <div className="d-flex my-4 font-bold">
            <p className="flex-grow-1">Assesments</p>
            <div className="d-flex font-semibold">
              <p>Go to assessment page</p>
              <ArrowUpRightIcon className="w-2" />
            </div>
          </div>
          <div className="px-3 d-flex w-100">
            <div className="w-40 h-40 text-100 m-1  bg-d">
              <div>
                <img src={rec2} alt="profilep" className="w-40 h-3001" />
              </div>
              <div className="px-4">
                <p className="font-semibold py-2">Geometry beginner role</p>
                <div className="d-flex  align-items-center">
                  <img
                    src={avatar}
                    alt="profile"
                    className="w-301 h-301 mr-3"
                  />
                  <p className="py-2 font-light">Mr Kingsley</p>
                </div>
                <div className="d-flex py-2">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <img src={vecyellow} alt="vec" className="w-301 h-301" />
                    <p className="text-yellow mx-1">pending</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={ch} alt="profile" className="w-301 h-301" />
                    <p className="text-align-center">score 50/70</p>
                  </div>
                </div>
                <div className="d-flex b-2 style-padding m-1 my-2">
                  <p className="flex-grow-1 t-200">View Assesments</p>
                  <ArrowSmallRightIcon className="w-5" />
                </div>
              </div>
            </div>
            <div className="w-40 h-40 text-100 m-1  bg-d">
              <div>
                <img src={pc} alt="profilep" className="w-40 h-3001" />
              </div>
              <div className="px-4">
                <p className="font-semibold py-2">Geometry beginner role</p>
                <div className="d-flex  align-items-center">
                  <img
                    src={avatar}
                    alt="profile"
                    className="w-301 h-301 mr-3"
                  />
                  <p className="py-2 font-light">Mr Kingsley</p>
                </div>
                <div className="d-flex py-2">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <img src={vecred} alt="vec" className="w-301 h-301" />
                    <p className="bg-red mx-1">Failed</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={ch} alt="profile" className="w-301 h-301" />
                    <p className="text-align-center">score 50/70</p>
                  </div>
                </div>
                <div className="d-flex b-2 style-padding m-1 my-2">
                  <p className="flex-grow-1 t-200">View Assesments</p>
                  <ArrowSmallRightIcon className="w-5" />
                </div>
              </div>
            </div>
            <div className="w-40 h-40 text-100 m-1  bg-d">
              <div>
                <img src={rec1} alt="profilep" className="w-40 h-3001" />
              </div>
              <div className="px-4">
                <p className="font-semibold py-2">Geometry beginner role</p>
                <div className="d-flex  align-items-center">
                  <img
                    src={avatar}
                    alt="profile"
                    className="w-301 h-301 mr-3"
                  />
                  <p className="py-2 font-light">Mr Kingsley</p>
                </div>
                <div className="d-flex py-2">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <img src={vecgreen} alt="vec" className="w-301 h-301" />
                    <p className="bg-green mx-1">Completed</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={ch} alt="profile" className="w-301 h-301" />
                    <p className="text-align-center">score 50/70</p>
                  </div>
                </div>
                <div className="d-flex b-2 style-padding m-1 my-2">
                  <p className="flex-grow-1 t-200">View Assesments</p>
                  <ArrowSmallRightIcon className="w-5" />
                </div>
              </div>
            </div>
            <div className="w-40 h-40 text-100 m-1  bg-d">
              <div>
                <img src={rec2} alt="profilep" className="w-40 h-3001" />
              </div>
              <div className="px-4">
                <p className="font-semibold py-2">Geometry beginner role</p>
                <div className="d-flex  align-items-center">
                  <img
                    src={avatar}
                    alt="profile"
                    className="w-301 h-301 mr-3"
                  />
                  <p className="py-2 font-light">Mr Kingsley</p>
                </div>
                <div className="d-flex py-2">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <img src={vecyellow} alt="vec" className="w-301 h-301" />
                    <p className="text-yellow mx-1">pending</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={ch} alt="profile" className="w-301 h-301" />
                    <p className="text-align-center">score 50/70</p>
                  </div>
                </div>
                <div className="d-flex b-2 style-padding m-1 my-2">
                  <p className="flex-grow-1 t-200">View Assesments</p>
                  <ArrowSmallRightIcon className="w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100">
          <div className="d-flex my-5">
            <p className="flex-grow-1 font-bold">
              Courses we recommend for david
            </p>
            <div className="d-flex align-items-center font-semibold">
              <p>See all</p>
              <ArrowUpRightIcon className="w-2" />
            </div>
          </div>
          <div className="p-3 d-flex">
            <div className="w-40 h-40 text-100 m-1">
              <div>
                <img src={rec1} alt="profilep" className="w-40 h-3001" />
              </div>
              <div className="px-2">
                <div className="special-margin">
                  <BookmarkIcon className="w-5 icon" />
                </div>
                <p className="new">New</p>
                <p className="title">
                  User Research Pro-Level Course for beginner
                </p>
                <div className="d-flex  align-items-center">
                  <img
                    src={avatar}
                    alt="profile"
                    className="w-301 h-301 mr-3"
                  />
                  <p className="py-2 font-light">Mr Kingsley</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <p>4.0</p>
                  </div>
                </div>
                <div className="d-flex m-1">
                  <p className="flex-grow-1">$15.90</p>
                </div>
              </div>
            </div>
            <div className="w-40 h-40 text-100 m-1">
              <div>
                <img src={pc} alt="profilep" className="w-40 h-3001" />
              </div>
              <div className="px-2">
                <div className="special-margin">
                  <BookmarkIcon className="w-5 icon" />
                </div>
                <p className="new">New</p>
                <p className="title">
                  User Research Pro-Level Course for beginner
                </p>
                <div className="d-flex  align-items-center">
                  <img
                    src={avatar}
                    alt="profile"
                    className="w-301 h-301 mr-3"
                  />
                  <p className="py-2 font-light">Mr Kingsley</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star2}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star2}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star2}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <p>4.0</p>
                  </div>
                </div>
                <div className="d-flex m-1">
                  <p className="flex-grow-1">$15.90</p>
                </div>
              </div>
            </div>
            <div className="w-40 h-40 text-100 m-1">
              <div>
                <img src={rec2} alt="profilep" className="w-40 h-3001" />
              </div>
              <div className="px-2">
                <div className="special-margin">
                  <BookmarkIcon className="w-5 icon" />
                </div>
                <p className="new">New</p>
                <p className="title">
                  User Research Pro-Level Course for beginner
                </p>
                <div className="d-flex  align-items-center">
                  <img
                    src={avatar}
                    alt="profile"
                    className="w-301 h-301 mr-3"
                  />
                  <p className="py-2 font-light">Mr Kingsley</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star2}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star2}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <p>4.0</p>
                  </div>
                </div>
                <div className="d-flex m-1">
                  <p className="flex-grow-1">$15.90</p>
                </div>
              </div>
            </div>
            <div className="w-40 h-40 text-100 m-1">
              <div>
                <img src={pc} alt="profilep" className="w-40 h-3001" />
              </div>
              <div className="px-2">
                <div className="special-margin">
                  <BookmarkIcon className="w-5 icon" />
                </div>
                <p className="new">New</p>
                <p className="title">
                  User Research Pro-Level Course for beginner
                </p>
                <div className="d-flex  align-items-center">
                  <img
                    src={avatar}
                    alt="profile"
                    className="w-301 h-301 mr-3"
                  />
                  <p className="py-2 font-light">Mr Kingsley</p>
                </div>
                <div className="d-flex">
                  <div className="d-flex flex-grow-1 align-items-center">
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />{" "}
                    <img
                      src={star1}
                      alt="profile"
                      className="w-star h-star mr-3"
                    />
                    <p>4.0</p>
                  </div>
                </div>
                <div className="d-flex m-1">
                  <p className="flex-grow-1">$15.90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex w-100 mt-special">
          <div className="flex-grow-1 d-flex flex-column justify-content-center">
            <p>
              <span className="t-1000">tLANCER</span> <span>Community</span>
            </p>
            <p className="t-300">
              Learn connect.{" "}
              <span className="t-3001">Join learning community</span>
            </p>
            <p>Connect with your course mate and share ideas</p>
            <p className="b-footer">Find communities near you</p>
          </div>
          <div>
            <img src={comm} alt="communityshir" className="w-401 h-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
