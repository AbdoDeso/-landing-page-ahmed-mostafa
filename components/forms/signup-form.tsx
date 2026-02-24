"use client";
import Link from "next/link";

import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClipboardUser,
  faArrowRightFromBracket,
  faBook,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'




const styles = {
  container: "w-full max-w-md mx-auto mt-10 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md",
  header: "space-y-1 text-center",
  title: "text-4xl font-bold text-black dark:text-white ",
  input: "w-full  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-gray-400",
  content: "space-y-4 ",
  fieldGroup: "space-y-2 ",
  footer: "flex flex-col ",
  button: "w-[150px] m-auto text-white dark:text-black dark:hover:bg-blue-700 bg-black dark:bg-white mt-4 hover:bg-red-700 hover:text-white font-bold rounded-xl transition-colors duration-300",
  prompt: "mt-4 text-center text-black dark:text-white text-sm",
  link: "ml-2 text-red-600 hover:text-black dark:text-blue-600 dark:hover:text-blue-100   transition-colors duration-300",
};


export function SignupForm() {
 
  ///////////////////////////
    const [pageLoaded, setPageLoaded] = useState(false)
    const { theme, toggleTheme, ready } = useTheme()
  
    useEffect(() => {
      setTimeout(() => setPageLoaded(true), 80)
    }, [])
  
    if (!ready) {
      return <div className="min-h-screen bg-white dark:bg-gray-950" />
    }
    
  type Theme = 'light' | 'dark'
  
  function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark')   // ← changed
  
    useEffect(() => {
      const saved = localStorage.getItem('theme') as Theme | null
      if (saved) {
        setTheme(saved)
        return
      }
  
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }, [])
  
    useEffect(() => {
      if (!theme) return
  
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
  
      localStorage.setItem('theme', theme)
    }, [theme])
  
    const toggleTheme = () => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }
  
    return { theme, toggleTheme, ready: theme !== null }
  }
  ///////////////////////////
  return (
    <div className={styles.container}>
         <button
            onClick={toggleTheme}
            className="text-2xl text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform mb-4 self-end"
            aria-label="تبديل الوضع الليلي"
          >

            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
                        تبديل الوضع الليلي

          </button>
      <form method="POST">

         
        <div>
          <div className={styles.header}>
            <h2 className={styles.title}>إنشاء حساب جديد</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              أدخل بياناتك لإنشاء حساب جديد
            </p>
          </div>
          <div className={styles.content}>
            <div className={styles.fieldGroup}>
              <h2 id="username" className="text-sm font-medium text-gray-700 dark:text-gray-300">اسم المستخدم</h2>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="ادخل اسم المستخدم"
               className={styles.input}
              />
            </div>
            <div className={styles.fieldGroup}>
              <h2 id="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">البريد الإلكتروني</h2>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className={styles.input}
              />
            </div>
            <div className={styles.fieldGroup}>
              <h2 id="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">كلمة المرور</h2>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="ادخل كلمة المرور"
                className={styles.input}
              />
            </div>
          </div>
            <div className={styles.footer}>
  <button className={styles.button} type="submit">تسجيل الحساب</button>
</div>
        </div>
        <div className={styles.prompt}>
            لديك حساب بالفعل؟ &nbsp; &nbsp;
          <Link className={styles.link} href="signin">
            تسجيل الدخول
          </Link>
            <br />
          <Link className={styles.link} href="/">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </form>
    </div>
  );
}