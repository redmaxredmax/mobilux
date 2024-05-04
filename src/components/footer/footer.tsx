import React from "react";
import { Logo } from "../../../public/icons/logo";
import googleStore from "/public/imgs/googleplay.png";
import appStore from "/public/imgs/appstore.png";

export const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container py-9 flex justify-between">
        <div>
          <a className="" href="/">
            <Logo />
          </a>
          <h3 className="mt-6 font-medium text-xl">Mobilux © 2022</h3>
          <p className="text-md mb-4">Barcha huquqlar kafolatlangan</p>
          <div className="flex gap-3">
            <a href="https://play.google.com/store/games?hl=en_US&gl=US">
              <img src={googleStore.src} alt="icon" />
            </a>
            <a href="https://www.apple.com/app-store/">
              <img src={appStore.src} alt="icon" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-2xl mb-4">Foydali havolalar</h3>
          <a className="font-medium text-md hover:text-primary" href="/">
            Bosh sahifa
          </a>
          <a className="font-medium text-md hover:text-primary" href="/">
            Yordam kerakmi?
          </a>
          <a className="font-medium text-md hover:text-primary" href="/">
            Foydalanish shartlari
          </a>
          <a className="font-medium text-md hover:text-primary" href="/">
            Maxfiylik siyosati
          </a>
        </div>
        <div>
          <h3 className="font-semibold text-2xl mb-4">Biz haqimizda</h3>
          <p className="font-medium text-md mb-1">Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd</p>
          <p className="font-medium text-md mb-1">Korxona nomi: Mobilux trade</p>
          <p className="font-medium text-md mb-1">Korxona rahbari: HASANBOY TURSUNOV</p>
          <p className="font-medium text-md mb-1">Registratsiya raqami: 433-62-00377</p>
          <p className="font-medium text-md mb-1">Telefon raqami: +998(33)373-9009</p>
          
        </div>
      </div>
    </div>
  );
};
