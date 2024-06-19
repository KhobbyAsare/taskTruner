import "./PartnersSection.scss";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="container">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#666666"
              d="M11.53 2c0 2.4 1.97 4.35 4.35 4.35h1.78v1.7c0 2.4 1.94 4.34 4.34 4.35V2.84a.84.84 0 0 0-.84-.84zM6.77 6.8a4.36 4.36 0 0 0 4.34 4.34h1.8v1.72a4.36 4.36 0 0 0 4.34 4.34V7.63a.84.84 0 0 0-.83-.83zM2 11.6c0 2.4 1.95 4.34 4.35 4.34h1.78v1.72c.01 2.39 1.95 4.34 4.34 4.34v-9.57a.84.84 0 0 0-.84-.84z"
            />
          </svg>
          jira
        </div>

        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#666666"
              d="M7.93 11.24a.58.58 0 0 0-.8-.11c-.07.06-.13.13-.17.21l-4.9 9.81c-.15.29-.03.64.26.79c.08.06.18.06.27.06h6.82c.22 0 .43-.12.53-.32c1.47-3.05.56-7.68-2.01-10.44m3.6-8.93a12.99 12.99 0 0 0-.76 12.78l3.29 6.59c.11.2.31.32.53.32h6.82a.59.59 0 0 0 .59-.59c0-.09 0-.18-.06-.26c0 0-9.18-18.38-9.44-18.84a.52.52 0 0 0-.72-.25c-.11.05-.2.14-.25.25"
            />
          </svg>
          atlassian
        </div>

        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#666666"
              d="M19.5 2h-15A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2m-8.8 15.2a1.2 1.2 0 0 1-1.2 1.2H5.8c-.66 0-1.2-.54-1.2-1.2V5.8a1.2 1.2 0 0 1 1.2-1.2h3.7c.66 0 1.2.54 1.2 1.2zm8.7-5c0 .66-.54 1.2-1.2 1.2h-3.7c-.66 0-1.2-.54-1.2-1.2V5.8c0-.66.54-1.2 1.2-1.2h3.7c.66 0 1.2.54 1.2 1.2z"
            />
          </svg>
          trello
        </div>

        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#666666"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 11.5a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-5 9a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
            />
          </svg>
          asana
        </div>

        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#666666"
              d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2zm1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2zm2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2zm0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2zm8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2zm-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2zm-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2zm0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2z"
            />
          </svg>
          slack
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
