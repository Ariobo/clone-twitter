"use client";

import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const me = {
    id: "zerohch0",
    nickname: "제로초",
    image: "/5Udwvqim.jpg",
  };

  const onLogout = () => {
    alert("asdasd");
  };

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
