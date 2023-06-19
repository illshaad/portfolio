export default function Alerts() {
  return (
    <div
      role="alert"
      className={`animate__animated animate__fadeInDown rounded-xl border border-gray-100 bg-white p-4 mt-4 shadow-xl`}
    >
      <div className="flex items-start gap-4">
        <span className="text-green-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>

        <div className="flex-1">
          <strong className="block font-medium text-gray-900">
            Message envoyé{" "}
          </strong>

          <p className="mt-2 text-sm text-gray-700">
            Je vous remercie pour votre message, je vous répondrai dans les plus
            brefs délais.
            <div className="my-2" /> Vous allez être redirigé vers la page
            d'accueil.
          </p>
        </div>
      </div>
    </div>
  );
}
