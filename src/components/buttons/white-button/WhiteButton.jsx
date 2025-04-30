const WhiteButton = ({ className = "", id, href = "#", children }) => {
  return (
    <button type="button" className={`${className} _hover03`} id={id}>
      <a href={href}>{children}</a>
      {/* <a href="#popExit">{children}</a> */}
    </button>
  );
};

export default WhiteButton;
