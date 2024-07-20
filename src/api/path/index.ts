const PRODUCT = {
  DETAIL: (productId: string) => `/v1/products/${productId}/detail`,
} as const;

const API = {
  PRODUCT,
} as const;

export default API;
