import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;

      //url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div class="login-button" onClick={gotoLogin}>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="search-item">
        <FontAwesomeIcon icon={faSearch} />
        {/*onKeyPress={ } 엔터를 누를때 실행한다.  */}
        <input type="text" onKeyPress={(event) => search(event)} />
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FepBIe2%2FbtqEuAiyf5C%2FoQ7K8gPZrAr0W5Wq7kMPvK%2Fimg.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
