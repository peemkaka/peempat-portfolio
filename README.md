# Peempat Portfolio Website

โปรเจคนี้คือเว็บไซต์ Portfolio ส่วนตัวของ Peempat Pinsang พัฒนาด้วย [Next.js](https://nextjs.org) และ Tailwind CSS เพื่อแสดงประวัติ ประสบการณ์ ผลงาน และช่องทางการติดต่อ

Demo Link : https://peempat-portfolio.netlify.app/

## คุณสมบัติ

- แสดงข้อมูลส่วนตัว ประวัติการศึกษา และประสบการณ์ทำงาน
- แสดงผลงานโปรเจคต่าง ๆ พร้อมลิงก์ไปยัง Live Project และ GitHub
- Responsive Design รองรับทั้ง Desktop และ Mobile
- ใช้ Framer Motion สำหรับ Animation
- ใช้ Tailwind CSS ในการจัดการสไตล์
- มีฟอร์มสำหรับติดต่อ

## โครงสร้างโปรเจค

โปรเจคนี้ถูกสร้างขึ้นโดยใช้ [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) ซึ่งเป็นเครื่องมือที่ช่วยในการเริ่มต้นโปรเจค Next.js ได้อย่างรวดเร็ว

โครงสร้างของโปรเจคมีดังนี้:

```
my-portfolio/
├── app/
│   ├── api/
│   │   └── hello/
│   │       └── route.js
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   └── Projects.js
│   ├── page.js
│   └── layout.js
├── public/
│   ├── images/
│   └── favicon.ico
├── styles/
│   ├── globals.css
│   └── Home.module.css
├── package.json
└── README.md
```

- `app/`: โฟลเดอร์หลักของแอปพลิเคชัน Next.js
- `components/`: เก็บ React components ที่ใช้ซ้ำในหลาย ๆ หน้า
- `page.js`: หน้าแรกของเว็บไซต์
- `layout.js`: กำหนดเลย์เอาต์พื้นฐานของเว็บไซต์
- `public/`: เก็บไฟล์สาธารณะ เช่น รูปภาพ และไอคอน
- `styles/`: เก็บไฟล์ CSS สำหรับจัดการสไตล์ของเว็บไซต์
- `package.json`: เก็บข้อมูลเกี่ยวกับแพ็กเกจและสคริปต์ที่ใช้ในโปรเจค

## การใช้งานฟีเจอร์เพิ่มเติม

โปรเจคนี้มีฟีเจอร์เพิ่มเติมที่น่าสนใจ เช่น

- การใช้งาน Framer Motion สำหรับ Animation
- การใช้งาน Tailwind CSS สำหรับการจัดการสไตล์
- การสร้างฟอร์มติดต่อด้วย React Hook Form

คุณสามารถศึกษาเพิ่มเติมเกี่ยวกับการใช้งานฟีเจอร์เหล่านี้ได้จากเอกสารประกอบของแต่ละไลบรารี

## แหล่งเรียนรู้เพิ่มเติม

หากคุณต้องการเรียนรู้เพิ่มเติมเกี่ยวกับ Next.js, Tailwind CSS, หรือการพัฒนาเว็บไซต์โดยทั่วไป คุณสามารถศึกษาได้จากแหล่งข้อมูลต่อไปนี้

- [Next.js Documentation](https://nextjs.org/docs) - เรียนรู้เกี่ยวกับฟีเจอร์และ API ของ Next.js
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - เรียนรู้เกี่ยวกับการใช้งาน Tailwind CSS
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) - เรียนรู้เกี่ยวกับการพัฒนาเว็บโดยทั่วไป
- [W3Schools](https://www.w3schools.com/) - แหล่งเรียนรู้การพัฒนาเว็บสำหรับผู้เริ่มต้น

## สรุป

โปรเจคนี้เป็นเว็บไซต์ Portfolio ส่วนตัวที่พัฒนาด้วย Next.js และ Tailwind CSS โดยมีฟีเจอร์หลัก ๆ ได้แก่ การแสดงข้อมูลส่วนตัว ประวัติการศึกษา ประสบการณ์ทำงาน และผลงานโปรเจคต่าง ๆ รวมถึงช่องทางการติดต่อ นอกจากนี้ยังมีการใช้งานฟีเจอร์เพิ่มเติม เช่น Animation และฟอร์มติดต่อ

