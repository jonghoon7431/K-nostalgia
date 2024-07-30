'use client';

const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <button className="whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10 flex justify-center items-center">
      <div
        className="flex items-center justify-center rounded-full bg-secondary-strong shadow w-8 h-8 p-2 cursor-pointer z-50"
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.382 2.88163C13.5461 2.71777 13.7685 2.62573 14.0003 2.62573C14.2322 2.62573 14.4546 2.71777 14.6187 2.88163L23.3687 11.6316C23.4546 11.7117 23.5236 11.8083 23.5714 11.9157C23.6192 12.023 23.645 12.1389 23.647 12.2564C23.6491 12.3738 23.6275 12.4905 23.5835 12.5995C23.5395 12.7084 23.474 12.8074 23.3909 12.8905C23.3078 12.9736 23.2088 13.0391 23.0999 13.0831C22.9909 13.1271 22.8742 13.1487 22.7567 13.1467C22.6392 13.1446 22.5234 13.1189 22.416 13.071C22.3087 13.0232 22.2121 12.9543 22.132 12.8683L14.8753 5.61163V24.5C14.8753 24.732 14.7832 24.9546 14.6191 25.1187C14.455 25.2828 14.2324 25.375 14.0003 25.375C13.7683 25.375 13.5457 25.2828 13.3816 25.1187C13.2175 24.9546 13.1253 24.732 13.1253 24.5V5.61163L5.86868 12.8683C5.78857 12.9543 5.69197 13.0232 5.58464 13.071C5.4773 13.1189 5.36144 13.1446 5.24395 13.1467C5.12647 13.1487 5.00976 13.1271 4.90081 13.0831C4.79186 13.0391 4.69289 12.9736 4.6098 12.8905C4.52671 12.8074 4.46121 12.7084 4.4172 12.5995C4.37319 12.4905 4.35158 12.3738 4.35365 12.2564C4.35572 12.1389 4.38144 12.023 4.42926 11.9157C4.47709 11.8083 4.54604 11.7117 4.63201 11.6316L13.382 2.88163Z"
            fill="#F7F5F3"
          />
        </svg>
      </div>
    </button>
  );
};

export default TopButton;
