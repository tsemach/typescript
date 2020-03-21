import { Validation } from "./validation";

export interface ValidationValid {
  from: Validation;
  valid: boolean;  
  reason?: string;
  payload?: any;
}