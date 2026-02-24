import Image from "next/image";
import { motion } from  "framer-motion";

export default function fourthSection() {
    return (
        <div>
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Start 50px lower and invisible
      whileInView={{ opacity: 1, y: 0 }} // Move to original position and fade in
      viewport={{ once: true, margin: "-100px" }} // Trigger once, 100px before it hits the top
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="h-screen flex items-center justify-center"
    >
        <section className="flex flex-col md:flex-col lg:flex-row dark:bg-[#101828]  lg:flex-row items-center justify-center mt-480 md:mt-35  gap-10 lg:gap-20 px-6 md:px-12 lg:px-28 py-16 lg:py-24">
          
          <div className="  bg-gray-100 dark:bg-gray-800 w-full h-[550px] rounded-3xl p-8 lg:p-12 text-center max-w-lg shadow-xl hover:scale-[1.02] transition-transform duration-500">
             <Image
                      src="/cards/1.png"
                      alt="Header"
                      width={520}
                      height={520}
                      className=" rounded-lg mb-10 md:ml-4 lg:ml-0 sm:w-80 md:w-[420px] lg:w-[500px]  object-cover hover:scale-105 transition-transform duration-500 shadow-2xl"
                    />
            <h6 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">
              انضم إلينا اليوم!
            </h6>
            <p className="text-xl leading-relaxed">
              لا تفوت الفرصة، انضم إلى عائلة المفيد اليوم وابدأ رحلتك التعليمية معنا!
              معًا، سنحقق النجاح والتفوق في كل خطوة من رحلتك التعليمية.
            </p>
          </div>
          <div className="  bg-gray-100 dark:bg-gray-800 w-full h-[550px] rounded-3xl p-8 lg:p-12 text-center max-w-lg shadow-xl hover:scale-[1.02] transition-transform duration-500">
           
            <Image
                      src="/cards/2.jpeg"
                      alt="Header"
                      width={520}
                      height={520}
                      className=" rounded-lg mb-10 md:ml-4 lg:ml-0 sm:w-80 md:w-[420px] lg:w-[500px]  object-cover hover:scale-105 transition-transform duration-500 shadow-2xl"
                    />
            <h6 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400">
مدرستك الذكية.. دروسك المفضلة تنتظرك
            </h6>
            <p className="text-xl leading-relaxed">
            "ودّع الدفاتر المبعثرة والملازم القديمة!
انضم إلى آلاف الطلاب الذين يدرسون بذكاء ويحققون درجات أعلى مع منصتنا التعليمية المدرسية الشاملة."
            </p>
          </div>
          <div className="  bg-gray-100 dark:bg-gray-800 w-full h-[550px] rounded-3xl p-8 lg:p-12 text-center max-w-lg shadow-xl hover:scale-[1.02] transition-transform duration-500">
               <Image
                      src="/cards/3.jpeg"
                      alt="Header"
                      width={520}
                      height={520}
                      className=" rounded-lg mb-10 md:ml-4 lg:ml-0 sm:w-80 md:w-[420px] lg:w-[500px]  object-cover hover:scale-105 transition-transform duration-500 shadow-2xl"
                    />
            <h6 className="text-3xl font-bold mb-6 text-red-600 dark:text-red-400"> 
                  تعلم اليوم.. تفوق غدًا   
            </h6>
            <p className="text-xl leading-relaxed">
               "للطالب: دروس مصورة ممتعة + تمارين تفاعلية + تصحيح فوري
                للمعلم: رفع الواجبات والاختبارات بسهولة + متابعة أداء الطلاب
                لولي الأمر: تقارير يومية واضحة عن مستوى ابنك
                الكل في مكان واحد.. جاهز للنجاح؟
            </p>
          </div>
        </section>
        </motion.section>
        </div>
    );
};
