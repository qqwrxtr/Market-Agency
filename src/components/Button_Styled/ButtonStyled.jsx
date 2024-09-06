const ButtonStyled = (props) => {
  return (
    <button className="text-white bg-black rounded-xl px-9 py-5 hover:bg-zinc-900 transition-all">
       {props.text}
    </button>
  );
};

export default ButtonStyled;
