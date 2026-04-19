// Tolerant unwrapping for the various response shapes the backend uses:
//   { success, data: { items: [...], total, page, ... } }  ← paginated
//   { success, data: [...] }                               ← list
//   { success, data: { ... } }                             ← single
//   [ ... ]                                                ← legacy bare array
// plus the axios wrapper ({ data: <payload> }).
export const extractList = (axiosRes) => {
  if (!axiosRes) return [];
  // Caller may pass either the axios response or the payload directly.
  const payload =
    axiosRes && typeof axiosRes === "object" && "data" in axiosRes
      ? axiosRes.data
      : axiosRes;

  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];

  if (Array.isArray(payload.items)) return payload.items;
  if (Array.isArray(payload.data)) return payload.data;
  if (payload.data && Array.isArray(payload.data.items)) return payload.data.items;
  if (payload.data && Array.isArray(payload.data.data)) return payload.data.data;

  return [];
};

export const extractOne = (axiosRes) => {
  if (!axiosRes) return null;
  const payload =
    axiosRes && typeof axiosRes === "object" && "data" in axiosRes
      ? axiosRes.data
      : axiosRes;
  if (!payload) return null;
  if (payload.data !== undefined) return payload.data;
  return payload;
};

export const apiErrorMessage = (err, fallback = "Something went wrong") => {
  if (!err) return fallback;
  const body = err.response?.data;
  return (
    body?.message ||
    body?.msg ||
    body?.error ||
    err.message ||
    fallback
  );
};

// Wrap an axios call so the caller always gets { items, error }.
// Never throws — always resolves.
export const safeFetchList = async (fn, ...args) => {
  try {
    const res = await fn(...args);
    return { items: extractList(res), error: null };
  } catch (err) {
    return { items: [], error: apiErrorMessage(err, "Could not load data") };
  }
};
