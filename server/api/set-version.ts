import { defineEventHandler, getCookie, setCookie } from "h3";

const versions = ["next", "astro"];

const getNewVersion = (currentVersion: string) => {
  const currentIndex = versions.indexOf(currentVersion);
  const nextIndex = (currentIndex + 1) % versions.length;
  return versions[nextIndex];
};

export default defineEventHandler((event) => {
  const version = getCookie(event, "version") || "";
  const newVersion = getNewVersion(version);

  setCookie(event, "version", newVersion);

  return {
    version,
  };
});
