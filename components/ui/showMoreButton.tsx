interface ShowMoreButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <div className="flex items-center justify-center mt-8 mb-16">
      <div className="relative flex items-center justify-center">
        <button
          onClick={onClick}
          disabled={disabled}
          className={`absolute z-10 flex flex-row text-sm items-center justify-center gap-1 px-5 py-2 font-bold rounded-full text-white transition-colors duration-300
          ${
            disabled
              ? "bg-secondary cursor-not-allowed"
              : "bg-primary hover:shadow-md"
          }
        `}
        >
          Explore More{" "}
          <span className="flex items-center justify-center">
            <img src="/caretdown.svg" alt="arrow" className="w-4 h-4" />
          </span>
        </button>
        <div className="w-[59%] h-[59%] -ml-[0.7px] -mb-[0.5px]">
          <img src="/buttonBg.svg" alt="buttonBg" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ShowMoreButton;
