import { HeaderBtnMainNew } from "./HeaderBtnMainNew.styled";

const BlueButton = ({ className = "", id, href = "#", children }) => {
  return (
    <HeaderBtnMainNew className={`${className} _hover01`} id={id}>
      {/* <button className="header__btn-main-new _hover01" id="btnMainNew"> */}
      <a href={href}>{children}</a>
      {/* <a href="#popNewCard">Создать новую задачу</a> */}
    </HeaderBtnMainNew>
  );
};

export default BlueButton;
