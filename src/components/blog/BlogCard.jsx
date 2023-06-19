import PropTypes from "prop-types";

export default function BlogCard({ key, picture, titre, subtitle, link }) {
  return (
    <article
      key={key}
      className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm max-w-xs"
    >
      <img src={picture} className="h-38 w-full object-cover" />

      <div className="p-2 sm:p-4">
        <h3 className="text-base font-medium text-gray-900">{titre}</h3>
        <p className="mt-2 line-clamp-2 text-xs text-gray-500">{subtitle}</p>
        <a
          target="_blank"
          rel="noreferrer"
          href={link}
          className="group mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue-600"
        >
          Plus d'infos
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]"
          >
            &rarr;
          </span>
        </a>
      </div>
    </article>
  );
}

BlogCard.propTypes = {
  key: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  titre: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
