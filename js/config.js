/* ============================================================
   AFJ AUTO PARTS — FRONTEND CONFIG (TEMPLATE)
   Do not edit js/config.js — it is generated from this file by
   `npm run build` and overwritten on every build.

   The placeholders below are filled from environment variables:
     API_BASE_URL        → your deployed backend origin
     LOCAL_API_BASE_URL  → the API you run locally (optional)
   ============================================================ */
(function () {
  var API_BASE_URL = "";
  var LOCAL_API_BASE_URL = "http://localhost:3000";

  var host = window.location.hostname;
  var isLocal =
    host === "localhost" || host === "127.0.0.1" || host === "" /* file:// */;

  window.AFJ_CONFIG = {
    apiBase: (isLocal ? LOCAL_API_BASE_URL : API_BASE_URL).replace(/\/$/, ""),
  };
})();
