"use client";

import { useEffect } from "react";


export default function AnalyticsEvents() {


  useEffect(() => {


    const whatsappLinks = document.querySelectorAll(
      'a[href*="wa.me"]'
    );


    whatsappLinks.forEach((link) => {


      link.addEventListener("click", () => {


        if (typeof window !== "undefined" && window.gtag) {


          window.gtag(
            "event",
            "whatsapp_click",
            {
              event_category: "contact",
              event_label: "WhatsApp Button",
            }
          );


        }


      });


    });


  }, []);



  return null;

}"use client";

import { useEffect } from "react";

export default function AnalyticsEvents() {

  useEffect(() => {

    const whatsappLinks = document.querySelectorAll(
      'a[href*="wa.me"]'
    );

    whatsappLinks.forEach((link) => {

      link.addEventListener("click", () => {

        if (typeof window !== "undefined" && window.gtag) {

          window.gtag(
            "event",
            "whatsapp_click",
            {
              event_category: "contact",
              event_label: "WhatsApp Button",
            }
          );

        }

      });

    });

  }, []);

  return null;
}