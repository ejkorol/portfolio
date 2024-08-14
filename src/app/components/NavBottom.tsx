const d = new Date();
const year = d.getFullYear();

const NavBottom = async () => {
  return (
    <section className="flex gap-8 pl-8 pb-32 pt-8 md:pl-32 md:pb-32 md:pt-32 lg:pl-64 lg:pb-32 lg:pt-64">
      <p className="font-mono text-primary-500/20">
        © {year} Jason Korol
      </p>
      <p className="font-mono text-primary-500/20">
        All Wrongs Reversed
      </p>
    </section>
  );
}

export default NavBottom;
