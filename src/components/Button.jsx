export default function Button() {
  return (
    <div className="flex justify-center">
      <a
        className="inline-block rounded bg-gradient-to-r from-[#5271FF] to-[#8C52FF] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="../public/illshaad.pdf"
        download
      >
        <span className="block rounded-sm font-bold bg-white px-4 py-3 w-[155px] text-center text-sm font-medium hover:bg-transparent">
          Telecharger le cv
        </span>
      </a>
    </div>
  );
}
