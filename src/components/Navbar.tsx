export const Navbar = () => {
  const sectionsMenu = () => {
    const sections: string[] = ["skills", "projects", "education", "contact"];

    const scrollToSection = (section: string, e: React.MouseEvent<HTMLAnchorElement>) => {
      let sectionId = document.getElementById(section);
      e.preventDefault();
      sectionId && sectionId.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return sections.map((section: string) => {
      return (
        <span
          className="cursor-pointer px-2 font-bold no-underline hover:text-third"
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            scrollToSection(section, event);
          }}
        >
          <h3>{section}</h3>
        </span>
      );
    });
  };

  const sectionHeaders = sectionsMenu();

  return (
    <header className="h-1/6 py-14">
      <div className="flex flex-col items-center justify-between text-lg md:flex-row md:p-10">
        <h1 className="text-3xl"> VC.</h1>
        <section className="flex flex-row">{sectionHeaders}</section>
        {/* <Contact trigger={trigger} /> */}
        {/* <button
            className={`theme-toggle ${props.theme}`}
            onClick={props.toggleStyle}
          >
            <FontAwesomeIcon icon={props.theme === "" ? faSun : faMoon} />
          </button> */}
      </div>
    </header>
  );
};
