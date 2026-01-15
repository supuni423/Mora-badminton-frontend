import axios from "axios";

function normalizeBaseUrl(value) {
  if (!value || value === "undefined") return "";
  return value.replace(/\/+$/, "");
}

// CRA env vars are baked at build time; when missing we fall back to local dev backend.
const FALLBACK_BASE_URL = "http://localhost:3001/api";
const baseURL = normalizeBaseUrl(process.env.REACT_APP_API_URL) || FALLBACK_BASE_URL;

export const api = axios.create({ baseURL });
export const API_BASE_URL = baseURL;

