import { useSelector } from "react-redux";
import Header from "./component/Header";
import LoginFrom from "./component/utils/LoginFrom";
import { Outlet } from "react-router-dom";
import UserInfoModule from "./component/pages/UserInfoModule";

export default function App() {
  const { isLogin, isShowUserInfo } = useSelector((state) => state.users);
  // const [isShowUserInfo, setIsShowUserInfo] = useState(false);

  console.log("is", isShowUserInfo);
  return (
    <>
      {!isLogin && (
        <div className="login-wraper">
          <LoginFrom />
        </div>
      )}
      <Header />
      {isShowUserInfo && <UserInfoModule />}
      <Outlet />
      {/* <InputField /> */}
      {/* <section className="big-feature-dsection"></section>
      <section className="big-feature-dsection"></section>
      <footer></footer>
      <div className="subfooter"></div>  */}
    </>
  );
}
