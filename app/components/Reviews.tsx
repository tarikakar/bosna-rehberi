const reviews = [
  {
    name: "Mehmet A.",
    text: "Bosna gezimiz boyunca Kerim Bey bizimle çok yakından ilgilendi. Bölgeyi çok iyi tanıması, tarihi anlatımları ve samimi yaklaşımı sayesinde Mostar ve Saraybosna gezimiz unutulmaz oldu. Kendisine teşekkür ederiz."
  },
  {
    name: "Ayşe K.",
    text: "Burak Bey ile gerçekleştirdiğimiz Bosna turundan çok memnun kaldık. Güler yüzü, ilgisi ve profesyonelliği sayesinde çok keyifli bir gezi geçirdik. Bosna'yı keşfetmek isteyen herkese tavsiye ederiz."
  }
];


export default function Reviews() {

  return (

    <section
      className="
      py-24
      px-6
      bg-slate-100
      dark:bg-slate-950
      "
    >

      <div className="max-w-6xl mx-auto">


        <div className="text-center mb-14">

          <h2 className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-slate-900
          dark:text-white
          ">

            Mutlu Misafirlerimiz

          </h2>


          <p className="
          mt-4
          text-lg
          text-slate-600
          dark:text-slate-300
          ">

            Misafirlerimizin Bosna deneyimleri.

          </p>


        </div>




        <div className="
        grid
        md:grid-cols-2
        gap-8
        ">


          {reviews.map((review,index)=>(

            <div
              key={index}
              className="
              bg-white
              dark:bg-slate-900
              rounded-3xl
              shadow-xl
              p-8
              text-center
              "
            >

              <div className="text-yellow-400 text-3xl mb-5">
                ⭐⭐⭐⭐⭐
              </div>


              <p className="
              text-lg
              leading-relaxed
              text-slate-700
              dark:text-slate-200
              ">
                "{review.text}"
              </p>


              <h3 className="
              mt-6
              font-bold
              text-xl
              text-slate-900
              dark:text-white
              ">
                — {review.name}
              </h3>


            </div>

          ))}


        </div>


      </div>


    </section>

  );

}