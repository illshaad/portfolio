import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactUs({ prevStep }) {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          result && prevStep(0);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="animate__animated animate__fadeInLeft bg-slate-50 h-screen w-full flex flex-col items-center justify-center h-s sm:pb-6">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5271FF] to-[#8C52FF]">
            Oui ?
          </h1>
          <p className="mt-4 text-gray-500">
            Je me demande qui viendra me parler aujourd'hui et quels sujets
            intéressants nous aborderons ensemble.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="prenom" className="sr-only">
              prénom
            </label>

            <div className="relative">
              <input
                type="text"
                name="prenom"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Prénom"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>

            <div className="relative">
              <textarea
                name="message"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Votre message"
              ></textarea>
            </div>
          </div>

          <input
            value="Envoyer"
            type="submit"
            className="px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
