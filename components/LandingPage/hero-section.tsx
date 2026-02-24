
import { motion } from  "framer-motion";
import Image from "next/image"
import Link from "next/link";
export default function Herosection() {
    return (
        <div>

             <motion.section
      initial={{ opacity: 0, y: 50 }} // Start 50px lower and invisible
      whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
      viewport={{ once: true, margin: "-100px" }} // Trigger once, 100px before it hits the top
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="h-screen flex items-center justify-center"
    >
        <section className="flex flex-col md:flex-row dark:bg-[#101828] items-center justify-center mt-60 md:mt-40 gap-10 lg:gap-16 px-6 md:px-12 lg:px-24 py-16 lg:py-24">
          <Image
            src="/header.jpg"
            alt="Header"
            width={520}
            height={520}
            className="rounded-full w-64 sm:w-80 md:w-[420px] lg:w-[500px] object-cover hover:scale-105 transition-transform duration-500 shadow-2xl"
          />

          <div className=" bg-gradient-to-br from-orange-50 via-white to-orange-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12 lg:p-16 text-center w-full max-w-2xl shadow-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              مرحبا بك في عائلة المفيد
            </h2>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
            قَاوِمْ حَتَّىٰ لَوْ وَصَلْتَ مُمَزَّقًا، لَذَّةُ الْوُصُولِ سَتُرَمِّمُكَ.<br /><br />
              <span className="text-red-600 dark:text-red-400  font-bold text-3xl md:text-4xl">
                أ/أحمد مصطفي
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="signup" className="px-8 py-4 bg-red-600 hover:bg-black text-white text-2xl font-bold rounded-xl transition-colors duration-300">
                سجل الآن
              </Link>
              <Link href="#about" className="px-8 py-4 bg-red-600 hover:bg-black text-white text-2xl font-bold rounded-xl transition-colors duration-300 text-lg">
                المزيد
              </Link>
            </div>
          </div>
        </section>
      </motion.section>
        </div>
    );
};
