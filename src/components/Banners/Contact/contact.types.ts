interface Input {
  placeholder: string;
  required: string;
}

interface Email extends Input {
  invalid: string;
}

export interface Alerts {
  success: string;
  bad: string;
}

export interface Inputs {
  email: Email,
  subject: Input;
  message: Input;
}
