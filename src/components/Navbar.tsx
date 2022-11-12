function Navbar() {
  const sectionsMenu = () => {
    const sections: string[] = ["skills", "projects", "education", "contact"];
    return sections.map((section: string) => {
      return (
        <a
          className="px-2 no-underline cursor-pointer font-bold hover:text-third"
          onClick={(e) => {
            scrollToSection(section, e);
          }}
        >
          <h3>{section}</h3>
        </a>
      );
    });
  };

  const scrollToSection = (section: string, e: React.SyntheticEvent) => {
    let sectionId = document.getElementById(section);
    e.preventDefault();
    sectionId &&
      sectionId.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sectionHeaders = sectionsMenu();

  return (
    <header className="h-1/6 py-14">
      <div className="flex flex-col md:flex-row justify-between items-center md:p-10 text-lg">
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
}

export default Navbar;
