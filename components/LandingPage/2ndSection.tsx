

import { motion } from  "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboardUser,
  faPersonCircleCheck,
  faClock,
} from '@fortawesome/free-solid-svg-icons'
export default function SecondSection() {
    return (
        <div>
      <motion.section
      initial={{ opacity: 0, y: 50 }} // Start 50px lower and invisible
      whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
      viewport={{ once: true, margin: "-100px" }} // Trigger once, 100px before it hits the top
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="h-screen flex items-center justify-center"
    >
        <section className="flex flex-col lg:flex-row dark:bg-[#101828] items-center justify-center mt-100 md:mt-50 -10 lg:gap-20 px-6 md:px-12 lg:px-28 py-16 lg:py-24">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-8">
            <div className="bg-[#31314f] text-white text-center rounded-2xl p-6 lg:p-8 shadow-lg hover:scale-105 transition-transform duration-500">
              <h2 className="text-4xl lg:text-5xl font-bold flex items-center justify-center gap-3">
                إمتحانات وواجبات تفاعلية <FontAwesomeIcon icon={faClipboardUser} className="w-9 h-9" />
              </h2>
            </div>

            <div className="bg-[#31314f] text-white text-center rounded-2xl p-6 lg:p-8 shadow-lg hover:scale-105 transition-transform duration-500">
              <h2 className="text-3xl lg:text-4xl font-bold">
                متابعة  دورية مستمرة <FontAwesomeIcon icon={faPersonCircleCheck} className="w-9 h-9" />
              </h2>
            </div>

            <div className="bg-[#31314f] text-white text-center rounded-2xl p-6 lg:p-8 shadow-lg hover:scale-105 transition-transform duration-500">
              <h2 className="text-4xl lg:text-5xl font-bold flex items-center justify-center gap-3">
                توفير الوقت والمجهود <FontAwesomeIcon icon={faClock} className="w-9 h-9" />
              </h2>
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-3xl mt-10 p-8 lg:p-12 text-center max-w-lg shadow-xl hover:scale-[1.02] transition-transform duration-500">
            <h6 className="text-3xl font-bold mb-6">
              أستاذك <span className="text-red-600 dark:text-red-400">أحمد مصطفي</span>
            </h6>
            <p className="text-lg leading-relaxed">
              أنا مش بس بعلّمك ...<br />
              أنا بجهّزك تبقى جاهز لأي سؤال<br />
              في <span className="text-red-600 dark:text-red-400 font-bold">الامتحان والحياة</span>
            </p>
          </div>
        </section>
        </motion.section>
        </div>
    );
};
