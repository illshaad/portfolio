export default function Button() {
  return (
    <div className="flex justify-center sm: pb-4">
      <a
        className="inline-block rounded bg-gradient-to-r  from-[#5271FF] to-[#8C52FF] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="https://drive.google.com/file/d/12yoDc3SPwmByZ-Jg63t2cC7gL1cCsyf9/view?usp=sharing"
        download
      >
        <span className="block rounded-sm font-bold bg-white py-3 w-[155px] text-center text-sm font-medium hover:bg-transparent  sm: text-xs w-[10px]">
          Telecharger le cv
        </span>
      </a>
    </div>
  );
}
