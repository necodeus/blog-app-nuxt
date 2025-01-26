import { defineEventHandler, setCookie } from "h3";

export default defineEventHandler((event) => {
  const newVersion = "astro";

  setCookie(event, "version", newVersion);

  return {
    version: newVersion,
  };
});
