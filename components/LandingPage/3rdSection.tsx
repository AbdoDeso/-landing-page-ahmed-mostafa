
import SimpleSlider from './slider';
import { motion } from  "framer-motion";

export default function ThirdSection() {
    return (
        <div id="about">
         <motion.section
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="h-screen flex items-center justify-center"
    >
        <section  className="flex flex-col dark:bg-[#101828] lg:flex-row items-center justify-center mt-150 md:mt-35  gap-10 lg:gap-20 px-6 md:px-12 lg:px-28 py-16 lg:py-24">
          <div className='w-full lg:w-1/2'>
          <SimpleSlider />
          </div>
          <div className=" bg-gray-100 dark:bg-gray-800 rounded-3xl p-8 lg:p-12 text-center max-w-lg shadow-xl hover:scale-[1.02] transition-transform duration-500">
            <h6 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">
              كورسات مميزة للتعلم

            </h6>
            <p className="text-lg leading-relaxed">
              اختر من بين مجموعة متنوعة من الكورسات في مختلف المجالات العلمية والأدبية، <br /><br /><a href='https://elmofed.online/register/' className='text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300'>وابدأ رحلتك التعليمية معنا اليوم</a>
            </p>
          </div>
        </section>
        </motion.section>
        </div>
    );
};
