"use client";

import { useEffect } from "react";

const GoogleTagManager = () => {
  useEffect(() => {
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s) as HTMLScriptElement, // ✅ Fix: Type casting
        dl = l !== "dataLayer" ? "&l=" + l : "";

      j.async = true; // ✅ TypeScript weet nu dat 'j' een <script> is
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode?.insertBefore(j, f); // ✅ Fix: Gebruik optional chaining

    })(window, document, "script", "dataLayer", "GTM-PDJ52SQB");
  }, []);

  return (
    <noscript>
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-PDJ52SQB"
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
};

export default GoogleTagManager;
