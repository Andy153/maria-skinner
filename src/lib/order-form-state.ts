export type OrderFormState = {
  success: boolean;
  error: string | null;
};

export const initialOrderFormState: OrderFormState = {
  success: false,
  error: null,
};
